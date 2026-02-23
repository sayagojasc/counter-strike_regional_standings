"use strict";

/**
 * Módulo de Equipo - Gestión de equipos y cálculo de seeding
 * 
 * Este módulo contiene:
 * - Team: Clase principal que representa un roster de equipo
 * - TeamEvent: Información de participación en eventos
 * - TeamMatch: Información de partidos jugados
 * 
 * El módulo también calcula los modificadores de seeding que determinan
 * el rating inicial de los equipos basándose en su historial.
 */

const nthHighest = require('./util/nth_highest');
const Region = require('./util/region');

// Número mínimo de jugadores compartidos para considerar dos rosters como el mismo equipo
// Si 3 o más jugadores coinciden entre un roster antiguo y uno nuevo, se consideran el mismo equipo
// Esto permite rastrear el historial de un equipo a través de cambios de roster
const TEAM_OVERLAP_TO_SHARE_ROSTER = 3;

/**
 * TeamEvent - Representa la participación de un equipo en un evento
 * 
 * Almacena información sobre las ganancias (prize) del equipo en un evento específico.
 */
class TeamEvent {
    /**
     * Crea una nueva participación en evento
     * 
     * @param {Object} event - Datos del evento
     * @param {number} teamId - ID del equipo en el evento
     */
    constructor( event, teamId ) {
        this.event = event;
        this.teamId = teamId;

        // Obtener ganancias del equipo en este evento
        // Si el equipo no aparece en la distribución de premios, ganancias = 0
        let prizeEntry = event.prizeDistributionByTeamId[teamId];
        this.winnings = ( prizeEntry === undefined ) ? 0 : prizeEntry.prize;
    }

    /**
     * Obtiene las ganancias del equipo en este evento
     * @returns {number} Ganancias en dólares
     */
    getTeamWinnings() {
        return this.winnings;
    }
}

/**
 * TeamMatch - Representa un partido específico jugado por un equipo
 * 
 * Proporciona acceso convenient a información del partido desde
 * la perspectiva de un equipo específico.
 */
class TeamMatch {
    /**
     * Crea una nueva instancia de partido para un equipo
     * 
     * @param {Team} team - Equipo associated con el partido
     * @param {Object} match - Datos del partido
     * @throws {Error} Si el equipo no participó en el partido
     */
    constructor( team, match ) {
        // Verificar que el equipo participó en el partido
        if( match.team1 !== team && match.team2 !== team )
        {
            throw new Error( "adding a match to a team that didn't participate in it" );
        }

        this.match      = match;
        this.team       = team;
        
        // Determinar si el equipo es team1 o team2
        this.teamNumber = ( match.team1 === team ) ? 1 : 2;
        
        // Determinar si el equipo ganó el partido
        this.isWinner   = match.winningTeam === this.teamNumber;
        
        // Referencia al oponente
        this.opponent   = ( this.teamNumber === 1 ) ? match.team2 : match.team1;
    }
}

/**
 * Team - Clase principal que representa un roster de equipo
 * 
 * Maneja el historial de partidos, eventos, y calcula métricas
 * para el sistema de seeding y ranking.
 */
class Team {
    static TeamMatch = TeamMatch;
    static TeamEvent = TeamEvent;

    /**
     * Crea un nuevo equipo (roster)
     * 
     * @param {number} rosterId - Identificador único del roster
     * @param {string} name - Nombre del equipo
     * @param {Array} players - Lista de jugadores en el roster
     * @param {boolean} isPendingUpdate - Si el roster estápendiente de actualización
     */
    constructor( rosterId, name, players, isPendingUpdate ) {
        this.rosterId = rosterId;
        this.name = name;
        this.activeRoster = [];
        this.players = players;
        
        // Historial de partidos
        this.teamMatches = [];
        this.wonMatches = [];
        this.matchesPlayed = 0;
        
        // Mapa de eventos participados
        this.eventMap = new Map();
        
        this.lastPlayed = 0;
        this.modifiers = {};
        
        // Asignación regional [Europa, Americas, Asia]
        this.region = -1;
        this.regionalRank = [-1,-1,-1];
        
        this.isPendingUpdate = isPendingUpdate;
        this.satisfiesRankingCriteria = false;
    }

    /**
     * Determina si este equipo comparte suficiente roster con otro
     * 
     * Compara los jugadores de este equipo con los proporcionados.
     * Si comparten al menos TEAM_OVERLAP_TO_SHARE_ROSTER (3) jugadores,
     * se considera que es el mismo equipo.
     * 
     * Esto es importante porque los equipos de CS pueden cambiar roster
     * pero queremos mantener su historial de rating.
     * 
     * @param {Array} players - Lista de jugadores a comparar
     * @returns {boolean} true si comparten suficientes jugadores
     */
    sharesRoster( players )
    {
        let overlap = 0;
        players.forEach( pNew => {
            this.players.forEach( pExisting => {
                if( pNew.playerId === pExisting.playerId ) {
                    overlap += 1;
                }
            } );
        } );

        return ( overlap >= TEAM_OVERLAP_TO_SHARE_ROSTER );
    }

    /**
     * Registra la participación del equipo en un evento
     * 
     * Asigna las ganancias del equipo en ese evento específico.
     * Solo se registra una vez por evento.
     * 
     * @param {Object} event - Datos del evento
     * @param {number} teamId - ID del equipo en el evento
     */
    recordEventParticipation( event, teamId )
    {
        if( event === undefined )
            return;

        if( this.eventMap.has( event.eventId ) )
            return;

        this.eventMap.set( event.eventId, new TeamEvent( event, teamId ) );
    }

    /**
     * Acumula un partido al historial del equipo
     * 
     * @param {Object} match - Datos del partido
     */
    accumulateMatch( match )
    {
        const teamMatch = new TeamMatch( this, match )

        this.teamMatches.push( teamMatch );
        
        // Separar partidos ganados para cálculos posteriores
        if( teamMatch.isWinner ) {
            this.wonMatches.push( teamMatch );
        }
    }

    /**
     * Determina el roster activo del equipo
     * 
     * El roster activo consiste en los jugadores más recientes que han
     * jugado al menos 5 partidos con este roster. Esto identifica qué
     * jugadores representan actualmente al equipo.
     */
    setActiveRoster(){
        // Recopilar información de jugadores de los últimos partidos
        let recentPlayers = [];
        let matchCount = 0;
        
        this.teamMatches.forEach( ( tm, idx ) =>{
            if ( idx < 10 ){
                matchCount = idx;
                let players = tm.teamNumber === 1 ? tm.match.team1Players : tm.match.team2Players;
                players.forEach( player => {
                    if ( recentPlayers[player.nick] === undefined ){
                        recentPlayers[player.nick] = player;
                        recentPlayers[player.nick].totalMatches = 1;
                        recentPlayers[player.nick].mostRecentMatch = idx;
                    } else {
                        recentPlayers[player.nick].totalMatches += 1;
                    }
                })
            }
        } )

        // Seleccionar jugadores con al menos 5 partidos jugados
        let activeRoster = [];
        let rosterCount = 0;
        for ( let i = 0; i < matchCount; i ++){
            for (const id in recentPlayers ){
                if ( recentPlayers[id].mostRecentMatch === i && recentPlayers[id].totalMatches >= 5 && rosterCount < 5 ){
                    activeRoster[rosterCount] = recentPlayers[id];
                    rosterCount += 1;
                }                    
            };
        }

        this.activeRoster = activeRoster;
    }

    /**
     * Determina la región primaria del equipo basada en la nacionalidad de los jugadores
     * 
     * Utiliza plurality (mayoría) para determinar la región:
     * 1. Cuenta jugadores por región
     * 2. Si hay representación de todas las regiones, usa prioridad más baja
     * 3. Un equipo puede pertencer a múltiples regiones (ej: roster mixto)
     */
    setPluralityRegion() {
        let players = this.activeRoster;
        let teamCountries = players.map( el => el.countryIso );
        let regionAssignment = [0, 0, 0]; //EU, AMER, ROW
        let lowPriorityRepresentation = 0;

        // Contar jugadores por región
        teamCountries.forEach( el => {         
            if ( el !== 'world' ){
                if ( Region.getCountryRegion(el) > -1 )   
                    regionAssignment[Region.getCountryRegion(el)]+=1;
                else
                    lowPriorityRepresentation += 1;
            }
        });

        // Determinar la región con menor prioridad (menos representada globalmente)
        let lowestPriorityRepresented = 1; //Lowest priority region by default

        if ( lowPriorityRepresentation < players.length )
            lowestPriorityRepresented = Math.min( ...regionAssignment.map( (el, idx) => { return el > 0 ? Region.getRegionPriority(idx) : Infinity } ) );
        
        // Asignar región
        regionAssignment[ Region.getRegionIdxFromPriority( lowestPriorityRepresented ) ] += lowPriorityRepresentation;

        let maxRegionalRepresentation = Math.max( ...regionAssignment );
        let region = regionAssignment.map( (el, idx) => { return el === maxRegionalRepresentation ? Region.getRegionPriority( idx ) : 0; });
        region = region.map( el => { return el === Math.max( ...region) ? 1 : 0 } ) ;

        this.region = region;
    }


    /**
     * Inicializa los modificadores de seeding para todos los equipos
     * 
     * Este es el cálculo principal de seeding que determina el rating
     * inicial de los equipos. Se divide en 3 fases:
     * 
     * FASE 1: Cálculos individuales
     * - Partidos jugados
     * -Último partido jugado
     * - Equipos distintos derrotados (network propio)
     * - Ganancias en eventos
     * - Victorias en LAN
     * 
     * FASE 2: Cálculos relativos
     * - Comparar contra los mejores equipos (ignorar outliers)
     * - Calcular bounties y network relativos
     * 
     * FASE 3: Cálculos de oponentes
     * - Evaluar la calidad de los rivales derrotados
     * - Calcular bountyCollected y opponentNetwork
     * 
     * @param {Array} teams - Lista de todos los equipos
     * @param {Object} context - Contexto de ranking para parámetros
     */
    static initializeSeedingModifiers( teams, context )
    {
        /**
         * Función de curva para premiar resultados excepcionales
         * Aplica decaimiento a valores muy altos para evitar dominio
         */
        function curveFunction( x ) { return Math.pow( 1 / ( 1 + Math.abs(Math.log10(x)) ), 1 ); }
        
        /**
         * Función de poder simple para scaling lineal
         */
        function powerFunction( x ) { return Math.pow( x, 1 ); };
        
        /**
         * Obtiene el prize pool del evento, capped a $1M
         */
        function getCappedPrizePool( x ) { return Math.min( Math.max(1, x.team.eventMap.get( x.match.eventId ).event.prizePool ), 1000000 ); };
        
        /**
         * Determina si el evento es LAN (1) o online (0)
         */
        function getLAN( x ) { return x.team.eventMap.get( x.match.eventId ).event.lan ? 1 : 0 };

        // Tamaño de bucket: cuántos mejores resultados considerar
        let bucketSize = 10;

        // No hay trabajo que hacer si no hay equipos
        if( teams.length === 0 )
            return;

        // ========== FASE 1: Cálculos individuales ==========
        // Para cada equipo, calcular métricas base de su propio desempeño
        teams.forEach( team => {
            team.matchesPlayed = team.teamMatches.length;
            team.lastPlayed = Math.max( ...team.teamMatches.map( teamMatch => teamMatch.match.matchStartTime ) );
            team.distinctTeamsDefeated = 0;
            team.scaledWinnings = 0;

            let winnings = [];
            let opponentMap = new Map();
            let lanWins = [];

            // Procesar cada partido ganado
            team.wonMatches.forEach( wonMatch => {
                // --- Network: Registrar última victoria contra cada oponente ---
                let opp = wonMatch.opponent;
                let matchTime = wonMatch.match.matchStartTime;
                let prevBestMatchTime = opponentMap.get( opp );
                if( prevBestMatchTime === undefined || prevBestMatchTime < matchTime )
                {
                    opponentMap.set( opp, matchTime );
                }

                // --- LAN: Registrar victorias LAN ---
                let id = wonMatch.match.umid;
                let timestampModifier = context.getTimestampModifier( matchTime );
                let lan = getLAN( wonMatch );
                let matchContext = timestampModifier;
                let scaledLan = lan * matchContext;
                lanWins.push( { id: id, context: matchContext, base: lan, val: scaledLan } );  
            });

            // Calcular network propio: suma de oponentes distintos derrotados,
            // escalado por qué tan reciente fue cada victoria
            opponentMap.forEach( ( lastWinTime, opp ) => {
                team.distinctTeamsDefeated += context.getTimestampModifier( lastWinTime );
            } );

            // Calcular factor LAN: promedio de las mejores N victorias LAN,
            // escalado por qué tan recientes fueron
            lanWins.sort( (a,b) => b.val - a.val );
            team.lanWins = lanWins.slice(0,bucketSize);
            team.scaledLanWins = team.lanWins.map( el => el.val).reduce( (a,b) => a + b, 0 ) / bucketSize;

            // Calcular ganancias: suma de las mejores N ganancias,
            // escaladas por qué tan reciente fue el resultado
            team.eventMap.forEach( teamEvent => {
                let id = teamEvent.event.eventId;
                let timestampModifier = context.getTimestampModifier( teamEvent.event.lastMatchTime );
                let baseWinnings = teamEvent.getTeamWinnings();                
                let scaledWinnings =  baseWinnings * timestampModifier;
                
                if ( baseWinnings > 0 )
                    winnings.push( { id: id, eventTime: teamEvent.event.lastMatchTime, age: timestampModifier, base: baseWinnings, val: scaledWinnings } );
            } );
            winnings.sort( (a,b) => b.val - a.val );
            team.winnings = winnings.slice(0,bucketSize);
            team.scaledWinnings = team.winnings.map( el => el.val ).reduce( (a,b) => a + b, 0 );
        } );

        // ========== FASE 2: Cálculos relativos ==========
        // Comparar contra los mejores equipos para normalizar
        // Ignoramos los outliers (top N) para evitar que un equipo dominante
        // distorsione todos los demás valores
        let referenceWinnings     = nthHighest( teams.map( t => t.scaledWinnings ), context.getOutlierCount() );
        let referenceOpponentCount = nthHighest( teams.map( t => t.distinctTeamsDefeated ), context.getOutlierCount() );
        let referenceLanWins       = nthHighest( teams.map( t => t.scaledLanWins ), context.getOutlierCount() );

        // Normalizar cada métrica al rango [0, 1]
        // Un valor de 1 significa "tan bueno como el mejor equipo"
        teams.forEach( team => {
            team.bountyOffered = Math.min( team.scaledWinnings / referenceWinnings, 1 );
            team.ownNetwork = Math.min( team.distinctTeamsDefeated / referenceOpponentCount, 1 );
            team.lanParticipation = Math.min( team.scaledLanWins / referenceLanWins, 1 );
        } );

        // ========== FASE 3: Cálculos de oponentes ==========
        // Evaluar qué tan buenos eran los rivales que cada equipo derrotó
        teams.forEach( team => {
            // Bounties: qué tan rico era el equipo derrotado (sus ganancias)
            // Network: cuántos equipos distintos había derrotado el oponente
            let bounties = [];
            let network = [];

            team.wonMatches.forEach( teamMatch => {
                let id = teamMatch.match.umid;
                let timestampModifier = context.getTimestampModifier( teamMatch.match.matchStartTime );
                let cappedPrizePool = getCappedPrizePool( teamMatch );
                
                // El stake del partido afecta cuánto cuenta:
                // - Mayor prize pool = más importante
                // - Más reciente = más importante
                let stakesModifier = curveFunction( cappedPrizePool / 1000000 );
                let matchContext = timestampModifier * stakesModifier;

                // Calcular valor escalado del oponente derrotado
                let scaledBounty = teamMatch.opponent.bountyOffered * matchContext;
                let scaledNetwork = teamMatch.opponent.ownNetwork * matchContext;

                bounties.push( { id: id, context: stakesModifier, base: teamMatch.opponent.bountyOffered, val: scaledBounty } );
                network.push(  { id: id, context: stakesModifier, base: teamMatch.opponent.ownNetwork   , val: scaledNetwork } );
            });
    
            // Promediar los mejores N resultados
            bounties.sort( (a,b) => b.val - a.val );
            team.bounties = bounties.slice(0,bucketSize);
            team.opponentBounties = team.bounties.map( el => el.val ).reduce( (a,b) => a + b, 0 ) / bucketSize;

            network.sort( (a,b) => b.val - a.val );
            team.network = network.slice(0,bucketSize);
            team.opponentNetwork = team.network.map( el => el.val ).reduce( (a,b) => a + b, 0 ) / bucketSize;
        } );

        // ========== Final: Construir modificadores finales ==========
        // Aplicar funciones de transformación para obtener valores finales
        // curveFunction: aplana valores extremos
        // powerFunction: mantiene valores proporcionales
        teams.forEach( team => {
            team.modifiers.bountyCollected  = curveFunction( team.opponentBounties );
            team.modifiers.bountyOffered    = curveFunction( team.bountyOffered );
            team.modifiers.opponentNetwork  = powerFunction( team.opponentNetwork );
            team.modifiers.ownNetwork       = powerFunction( team.ownNetwork );
            team.modifiers.lanFactor        = powerFunction( team.lanParticipation );
        });        
    }
}

module.exports = Team;
