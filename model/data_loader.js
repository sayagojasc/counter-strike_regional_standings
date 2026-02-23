"use strict";

/**
 * DataLoader - Carga y procesa datos de partidos y eventos
 * 
 * Este módulo es responsable de:
 * 1. Leer datos crudos desde JSON
 * 2. Filtrar partidos inválidos o no deseados
 * 3. Crear objetos Event y Team
 * 4. Calcular información contextual (timestamp modifiers)
 * 5. Inicializar equipos con su historial
 * 
 * Los filtros aplicados incluyen:
 * - Partidos incompletos (menos de 5 jugadores por equipo)
 * - Showmatches
 * - Eventos en progreso
 * - Rango temporal configurable
 */

const fs = require('fs');
const Region = require('./util/region');
const Team = require('./team');
const remapValueClamped = require('./util/remap_value_clamped');

/**
 * Lista de eventos de alto valor que siempre se incluyen
 * Incluye RMR events y Majors de Valve
 */
const __highValueEvents = [6372,6711,6712,6713,6714,6586,6588];

/**
 * Convierte el prize pool de string a número
 * 
 * Maneja diferentes formatos de entrada:
 * - "$100,000" -> 100000
 * - "100000" -> 100000
 * - Valores inválidos -> 0
 * 
 * @param {string} prizePool - Prize pool como string
 * @returns {number} Prize pool como número, capped a $1M
 */
function parsePrizePool( prizePool ) {
    if ( prizePool === undefined )
        return 0;

    prizePool = prizePool.replaceAll(',','').replace('$','');
    if ( /^[0-9]+$/.test(prizePool) )
        return Math.min( Number(prizePool), 1000000 ); //cap event prize pool at $1m

    return 0; 
}

/**
 * Ordena los partidos por tiempo de inicio
 * 
 * @param {Array} matches - Lista de partidos a ordenar
 * @param {string} order - 'asc' o 'desc'
 */
function sortMatches( matches, order = 'desc' ) {
    if ( order === 'asc' )
        matches.sort( (a, b) => a.matchStartTime - b.matchStartTime );
    else 
        matches.sort( (a, b) => b.matchStartTime - a.matchStartTime );
}

/**
 * Filtra partidos incompletos
 * 
 * Un partido válido debe tener exactamente 5 jugadores por equipo.
 * Partidos con roster incompleto se excluyen del ranking.
 * 
 * @param {Array} matches - Lista de partidos
 * @returns {Array} Partidos con ambos equipos completos
 */
function filterIncompleteMatches( matches ) {
    return matches.filter( match => ( match.team1Players.length === 5 && match.team2Players.length === 5 ) );
}

/**
 * Filtra partidos de eventos que aún no han terminado
 * 
 * Solo queremos incluir partidos de eventos finalizados para
 * tener resultados completos y justos.
 * 
 * @param {Array} matches - Lista de partidos
 * @param {Object} events - Mapa de eventos por ID
 * @returns {Array} Partidos de eventos finalizados
 */
function filterInProgressEvents( matches, events ){
    matches = matches.filter( match => {
        return events[ match.eventId ].finished;
    })

    return matches;
}

/**
 * Filtra partidos por rango de tiempo
 * 
 * @param {Array} matches - Lista de partidos
 * @param {number} startTime - Timestamp mínimo (exclusivo), -1 = sin límite
 * @param {number} endTime - Timestamp máximo (inclusivo), -1 = usar máximo
 * @returns {Array} Partidos dentro del rango
 */
function filterMatchesByTime( matches, startTime, endTime )
{
    return matches.filter( match =>
        ( endTime < 0 || match.matchStartTime <= endTime )
        && (startTime < 0 || match.matchStartTime >= startTime ) );
}

/**
 * Filtra showmatches del dataset
 * 
 * Los showmatches son partidos de exhibición que no cuentan
 * para el ranking oficial.
 * 
 * @param {Array} matches - Lista de partidos
 * @param {Object} events - Mapa de eventos por ID
 * @returns {Array} Partidos que no son showmatches
 */
function filterShowmatches( matches, events ){
    return matches.filter( match => {
        let eventName = events[ match.eventId ].name;

        if ( eventName.toLowerCase().includes('showmatch') )
            return false;

        return true;
    });
}

/**
 * Filtra partidos no rankeados por Valve
 * 
 * A partir de cierta fecha (1735689600 = Jan 1, 2025),
 * solo incluimos partidos marcados como rankeados por Valve.
 * 
 * @param {Array} matches - Lista de partidos
 * @returns {Array} Partidos rankeados o anteriores a la fecha límite
 */
function filterUnrankedMatches( matches ) {

    return matches.filter( match => {
        // Antes de la fecha límite, incluir todo
        if ( match.matchStartTime < 1735689600 )
            return true;

        // Después de la fecha límite, solo rankeados
        if ( match.valveRanked === undefined )
            return false;

        return match.valveRanked;        
    });
}

/**
 * EventTeam - Representa la participación de un equipo en un evento
 * 
 * Almacena información de posicionamiento y ganancias.
 */
class EventTeam {
    /**
     * @param {Object} prizeJson - Datos de prize del JSON
     */
    constructor( prizeJson ) {
        this.placement = prizeJson.placement;
        this.prize = prizeJson.prize + prizeJson.clubShare;
        this.shared = prizeJson.shared;
    }
}

/**
 * Event - Representa un evento/torneo
 * 
 * Almacena información del evento y su distribución de premios.
 */
class Event {
    /**
     * @param {Object} eventJson - Datos del evento desde JSON
     */
    constructor( eventJson ) {
        this.eventId = eventJson.eventId;
        this.name = eventJson.eventName;
        this.prizePool = parsePrizePool( eventJson.prizePool );
        this.prizeDistributionByTeamId = {};
        this.lan = eventJson.lan;
        this.lastMatchTime = -1;
        this.finished = eventJson.finished;

        // Procesar distribución de premios
        let qualifiedEvents = [];

        eventJson.prizeDistribution.forEach( teamJson => {
            this.prizeDistributionByTeamId[teamJson.teamId] = new EventTeam( teamJson );

            // Registrar eventos calificadores (ej: RMR -> Major)
            if ( teamJson.qualifiedEvents.length > 0 )
                qualifiedEvents.push( teamJson.qualifiedEvents );
        } );

        // Último evento calificador disponible
        this.qualifiedEvents = qualifiedEvents.length > 0 ? qualifiedEvents[qualifiedEvents.length - 1 ] : -1;
    }

    /**
     * Actualiza el tiempo del último partido del evento
     * 
     * @param {Object} match - Partido a registrar
     */
    accumulateMatch( match )
    {
        this.lastMatchTime = Math.max( this.lastMatchTime, match.matchStartTime );
    }
}

/**
 * Inicializa los equipos desde los datos de partidos
 * 
 * 1. Crea equipos únicos basados en roster (jugadores compartidos)
 * 2. Asocia eventos y ganancias
 * 3. Calcula roster activo y región
 * 4. Inicializa modificadores de seeding
 * 
 * @param {Array} matches - Lista de partidos
 * @param {Object} events - Mapa de eventos
 * @param {Object} rankingContext - Contexto de ranking
 * @returns {Array} Lista de equipos inicializados
 */
function initTeams( matches, events, rankingContext ) {
    let teams = [];

    /**
     * Inserta o recupera un equipo basado en su roster
     * 
     * Si ya existe un equipo con roster similar (3+ jugadores compartidos),
     * retorna ese equipo. Sinon, crea uno nuevo.
     * 
     * @param {string} name - Nombre del equipo
     * @param {Array} players - Lista de jugadores
     * @param {boolean} isForfeitMatch - Si el partido fue por forfeit
     * @returns {Team} Equipo encontrado o creado
     */
    function insertTeam( name, players, isForfeitMatch ) {

        // Buscar equipo existente con roster similar
        let team = teams.find( team => team.sharesRoster(players) );
        if( team !== undefined ){
            // Actualizar nombre si hay actualización pendiente
            if ( team.isPendingUpdate === true ){
                team.name = name;
                team.players = players;
                team.isPendingUpdate = isForfeitMatch;
            }
            
            return team;            
        }

        // Crear nuevo equipo
        let rosterId = teams.length;
        team = new Team( rosterId, name, players, isForfeitMatch );
        teams.push( team );
        return team;
    }

    // Procesar cada partido para crear equipos
    matches.forEach( (match, idx) => {
        match.umid = idx;

        // Asignar equipos a cada lado del partido
        match.team1 = insertTeam( match.team1Name, match.team1Players, match.forfeited );
        match.team2 = insertTeam( match.team2Name, match.team2Players, match.forfeited );

        // Registrar el partido en cada equipo
        match.team1.accumulateMatch( match );
        match.team2.accumulateMatch( match );

        // Si hay datos de evento, registrar participación
        if( match.eventId !== undefined )
        {
            match.team1.recordEventParticipation( events[match.eventId], match.team1Id );
            match.team2.recordEventParticipation( events[match.eventId], match.team2Id );
        }
    } );

    // Calcular roster activo y región para cada equipo
    teams.forEach( team => { 
            team.setActiveRoster();
            team.setPluralityRegion();
        } );

    // Calcular seeding data para cada equipo
    Team.initializeSeedingModifiers( teams, rankingContext );

    return teams;
}

/**
 * Calcula el contenido de información de un partido
 * 
 * El contenido de información ajusta cuánto afecta un partido
 * al rating. Partidos más recientes tienen más información
 * sobre la habilidad actual de los equipos.
 * 
 * @param {Object} match - Partido a evaluar
 * @param {Object} rankingContext - Contexto de ranking
 * @param {Object} events - Mapa de eventos
 * @returns {number} Factor de contenido de información [0, 1]
 */
function calculateMatchInformationContent( match, rankingContext, events ){
    let informationContent = 1.0;
    informationContent *= rankingContext.getTimestampModifier( match.matchStartTime );

    return informationContent;
}

/**
 * Encuentra el rango de tiempo para los datos
 * 
 * @param {Array} matches - Lista de partidos
 * @param {number} filterEnd - Timestamp final para filtrar
 * @param {number} dataWindow - Ventana de tiempo en segundos
 * @returns {[number, number]} [startTime, endTime]
 */
function findTimeWindow( matches, filterEnd, dataWindow )
{
    let endTime = filterEnd;
    if ( endTime < 0 )
        endTime = Math.max( ...matches.map( match => match.matchStartTime ) );

    let startTime = endTime - dataWindow;

    return [startTime, endTime];
}

/**
 * DataLoader - Clase principal para carga de datos
 * 
 * Maneja el ciclo completo de carga y procesamiento de datos:
 * 1. Leer JSON
 * 2. Filtrar partidos
 * 3. Procesar eventos
 * 4. Inicializar equipos
 */
class DataLoader
{
    /**
     * @param {Object} rankingContext - Contexto de ranking
     */
    constructor( rankingContext ) {
        this.matches = [];
        this.events = {};
        this.teams = {};
        this.filterEndTime = -1;
        this.filterWindow = 6*30*24*3600; // 6 meses en segundos
        this.rankingContext = rankingContext;
    }

    /**
     * Configura el filtro de tiempo
     * 
     * @param {number} endTime - Timestamp final, -1 = usar más reciente
     * @param {number} dataWindow - Ventana de datos en segundos
     * @returns {DataLoader} this para encadenamiento
     */
    setTimeFilter( endTime = -1, dataWindow = 6*30*24*3600 ) {
        this.filterEndTime = endTime;
        this.filterWindow = dataWindow;
        return this;
    }

    /**
     * Limpia el filtro de tiempo
     * 
     * @returns {DataLoader} this para encadenamiento
     */
    clearTimeFilter() {
        this.filterEndTime = -1;
        this.filterWindow = -1;
        return this;
    }

    getContext() {
        return this.context;
    }

    /**
     * Configura el modificador para eventos de alto valor (RMR/Majors)
     * 
     * @param {number} value - Multiplicador para eventos HV
     */
    setHveMod( value ) { this.rankingContext.setHveMod( value ); }

    /**
     * Configura cuántos outliers ignorar en cálculos de ranking
     * 
     * @param {number} nth - Número de outliers a ignorar
     */
    setNthHighest( nth ) { this.rankingContext.setOutlierCount( nth ); }

    /**
     * Carga datos desde archivo JSON
     * 
     * Proceso:
     * 1. Leer y parsear JSON
     * 2. Filtrar partidos inválidos
     * 3. Aplicar filtro de tiempo
     * 4. Procesar eventos y prize pools
     * 5. Filtrar showmatches y eventos en progreso
     * 6. Calcular contenido de información
     * 7. Inicializar equipos
     * 
     * @param {number} versionTimestamp - Timestamp para filtrar datos (-1 = todos)
     * @param {string} filename - Ruta al archivo JSON
     */
    loadData( versionTimestamp = -1, filename = '../data/matchdata.json' )
    {
        // Leer archivo JSON
        const data = fs.readFileSync( filename );
        const dataJson = JSON.parse( data );

        // Obtener lista de partidos
        let matches = dataJson.matches;

        // Aplicar filtro de tiempo
        this.setTimeFilter( versionTimestamp );

        // Filtrar partidos incompletos (menos de 5 jugadores por equipo)
        matches = filterIncompleteMatches( matches );

        // Filtrar partidos no rankeados (después de fecha límite)
        matches = filterUnrankedMatches( matches );
        
        // Determinar ventana de tiempo para datos
        const [startTime,endTime] = findTimeWindow( matches, this.filterEndTime, this.filterWindow );
        
        // Grace period de 1 mes para permitir que datos recientes se estabilicen
        let graceperiod = 30 * 24 * 3600; 
        this.rankingContext.setTimeWindow( startTime, endTime - graceperiod );
        matches = filterMatchesByTime( matches, startTime, endTime );
        
        // Crear objetos Event desde JSON
        let events = {};
        dataJson.events.forEach( eventJson => events[eventJson.eventId] = new Event( eventJson ) );

        // Calcular prize pools vinculados
        // Si un equipo se clasifica de evento A a evento B, sumamos los prize pools
        // Esto premia el camino de clasificación (RMR -> Major)
        let getLinkedPrizePool = function( id, counter = 0, prizePool = 0 ) {
            let qualifiedEvent = events[id].qualifiedEvents;
            let isQualifiedEventDataAvailable = events[qualifiedEvent] === undefined ? false : true;    

            if ( qualifiedEvent !== -1 && isQualifiedEventDataAvailable ){
                let isQualifiedEventComplete = events[qualifiedEvent].finished;
                if ( isQualifiedEventComplete ){
                    // Aplicar decaimiento de 50% por cada nivel de calificación
                    return getLinkedPrizePool( qualifiedEvent, counter + 1, Math.min( events[qualifiedEvent].prizePool, 1000000 ) );
                }
            }
            return [ counter, prizePool ];
        }

        // Aplicar prize pools vinculados a eventos
        for ( const id in events ){
            let [counter, linkedPrizePool] = getLinkedPrizePool( id );
            if ( counter > 0 ){
                events[id].prizePool += linkedPrizePool * Math.pow(0.5,counter);
                events[id].prizePool = Math.min( events[id].prizePool, 1000000 );
            }
        }

        // Registrar último tiempo de partido por evento
        matches.forEach( match => {
            let event = events[match.eventId];
            if( event !== undefined )
                event.accumulateMatch( match );
        } );

        // Filtrar showmatches
        matches = filterShowmatches( matches, events );  
        
        // Filtrar eventos en progreso
        matches = filterInProgressEvents( matches, events );

        // Calcular contenido de información para cada partido
        matches.forEach( match => {
            match.informationContent = calculateMatchInformationContent( match, this.rankingContext, events );
        } );

        // Inicializar equipos desde los partidos
        // Orden inverso para detectar roster más reciente como base
        sortMatches( matches, 'desc' );
        let teams = initTeams( matches, events, this.rankingContext );

        // Ordenar cronológicamente para procesamiento de rating
        sortMatches( matches, 'asc' );

        this.matches = matches;
        this.teams = teams;
        this.events = events;
    }
}

module.exports = DataLoader;
