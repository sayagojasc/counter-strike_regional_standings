"use strict";

/**
 * Módulo de Ranking - Genera las clasificaciones regionales de equipos
 * 
 * Este módulo orquesta el proceso completo de generación de rankings:
 * 1. Carga datos de partidos desde JSON
 * 2. Calcula valores de seeding basados en desempeño histórico
 * 3. Aplica el sistema de rating Glicko para ajustar ratings
 * 4. Genera rankings globales y regionales
 */

module.exports = {
    generateRanking: generateRanking,
}

const RankingContext = require('./ranking_context');
const DataLoader = require('./data_loader');
const Glicko = require('./glicko');
const Report = require('./report');
const remapValueClamped = require('./util/remap_value_clamped');

/**
 * SEED_MODIFIER_FACTORS - Ponderación de los factores de seeding
 * 
 * Estos factores determinan cómo cada componente de seeding afecta el ranking inicial.
 * Un valor de 1 significa que el factor se usa completamente, 0 significa que se ignora.
 * 
 * - bountyCollected: Premia equipos que han derrotado a rivales con buenas ganancias
 * - bountyOffered: Premia equipos que tienen buenas ganancias propias  
 * - opponentNetwork: Bonifica equipos que han derrotado a muchos equipos diferentes
 * - ownNetwork: (peso 0) Deshabilitado por ahora
 * - lanFactor: Bonifica equipos con victorias en eventos LAN
 */
const SEED_MODIFIER_FACTORS = {
    bountyCollected: 1,
    bountyOffered: 1,
    opponentNetwork: 1,
    ownNetwork: 0,
    lanFactor: 1
};

/**
 * Rango de seeding inicial para equipos
 * 
 * MIN_SEEDED_RANK (400): Rating mínimo inicial para equipos nuevos
 * MAX_SEEDED_RANK (2000): Rating máximo inicial para los mejores equipos
 * 
 * Estos valores determinan el rango de rating antes de procesar partidos.
 * Un equipo sin historial starts en 400, los mejores seedings start en 2000.
 */
const MIN_SEEDED_RANK = 400;
const MAX_SEEDED_RANK = 2000;

/**
 * Genera las clasificaciones regionales de equipos
 * 
 * @param {number} versionTimestamp - Timestamp para filtrar datos históricos (-1 = usar todos)
 * @param {string} filename - Ruta al archivo JSON con datos de partidos
 * @returns {Array} [matches, teams] - Lista de partidos y equipos con rankings
 */
function generateRanking( versionTimestamp = -1, filename )
{
    // Crear contexto de ranking con configuración de parámetros
    // hveMod: modificador para eventos de alto valor (RMR/Majors)
    // outlierCount: cuántos valores atípicos ignorar en cálculos
    const rankingContext = new RankingContext;
    rankingContext.setHveMod(1).setOutlierCount(5);

    // Cargar datos de partidos y eventos desde JSON
    const dataLoader = new DataLoader( rankingContext );
    dataLoader.loadData( versionTimestamp, filename );

    let teams = dataLoader.teams;
    let matches = dataLoader.matches;

    // Inicializar sistema Glicko con RD fijo
    // Usamos RD=75 para comportarnos más como Elo, manteniendo incertidumbre constante
    const glicko = new Glicko();
    glicko.setFixedRD( 75 );

    // FASE 1: Aplicar seeding inicial basado en desempeño histórico
    // Esto da un boost inicial a equipos con historial exitoso
    seedTeams( glicko, teams );

    // FASE 2: Ajustar ratings basados en resultados de partidos
    // Procesamos todos los partidos en orden cronológico
    runMatches( glicko, matches );
    teams.forEach( team => { team.rankValue = team.glickoTeam.rank(); } );

    // FASE 3: Filtrar equipos sin victorias significativas
    // Eliminamos equipos que no han derrotado a nadie del ranking
    teams = teams.filter( t => t.distinctTeamsDefeated > 0 );

    // FASE 4: Calcular rankings globales y regionales
    // Asignamos posición global y por región a cada equipo
    applyRanking( teams );

    return [matches,teams];
}

/**
 * Calcula el valor de seeding inicial para cada equipo
 * 
 * El seeding inicial se basa en múltiples factores que reflejan el desempeño
 * histórico del equipo en el circuito profesional:
 * - Ganancias en torneos
 * - Cantidad de equipos distintos derrotados
 * - Participación en eventos LAN
 * - Calidad de los rivales derrotados
 * 
 * @param {Object} glicko - Instancia del sistema Glicko
 * @param {Array} teams - Lista de equipos a inicializar
 */
function seedTeams( glicko, teams ) {
    // Calcular valor de seeding combinado para cada equipo
    teams.forEach(team => {
        team.seedValue = calculateSeedModifierValue( team.modifiers );
    } );

    // Normalizar valores de seeding al rango [MIN_SEEDED_RANK, MAX_SEEDED_RANK]
    // Esto asegura que todos los equipos start dentro de un rango conocido
    let minSeedValue = Math.min( ...teams.map(t => t.seedValue ) );
    let maxSeedValue = Math.max( ...teams.map(t => t.seedValue ) );

    teams.forEach( team => {
        // Remapear del rango actual al rango de seeding
        team.rankValue = remapValueClamped( team.seedValue, minSeedValue, maxSeedValue, MIN_SEEDED_RANK, MAX_SEEDED_RANK );

        // Guardar el valor original de seeding para referencia
        team.rankValueSeed = team.rankValue;

        // Crear equipo Glicko con el rating de seeding inicial
        team.glickoTeam = glicko.newTeam( team.rankValue );
    } );
}

/**
 * Calcula el valor combinado de seeding a partir de los modificadores
 * 
 * Aplica una suma ponderada de todos los factores de seeding configurados.
 * Si la suma de coeficientes es 0, retorna 0 para evitar división por cero.
 * 
 * @param {Object} modifiers - Objeto con los valores de cada factor de seeding
 * @returns {number} Valor de seeding normalizado entre 0 y 1
 */
function calculateSeedModifierValue( modifiers )
{
    let sumCoeff = 0;
    let scaledMods = 0;
    for( let factor in SEED_MODIFIER_FACTORS )
    {
        sumCoeff   += SEED_MODIFIER_FACTORS[factor];
        scaledMods += SEED_MODIFIER_FACTORS[factor] * modifiers[factor];
    }
    sumCoeff = sumCoeff === 0 ? 1 : sumCoeff;
    return scaledMods / sumCoeff;
}

/**
 * Procesa todos los partidos y actualiza los ratings de los equipos
 * 
 * Para cada partido:
 * 1. Determina ganador y perdedor
 * 2. Guarda el rating inicial antes del partido
 * 3. Aplica el algoritmo Glicko para actualizar ratings
 * 4. Calcula el cambio en rating para referencia
 * 
 * @param {Object} glicko - Instancia del sistema Glicko
 * @param {Array} matches - Lista de partidos a procesar en orden cronológico
 */
function runMatches( glicko, matches ) {
    matches.forEach( match => {
        let team1 = match.team1;
        let team2 = match.team2;

        // Determinar ganador y perdedor según el equipo que ganó
        let [winTeam, loseTeam] = ( match.winningTeam === 1) ? [team1,team2] : [team2,team1];

        // Guardar rating inicial para calcular el delta después
        winTeam.startingRankValue = winTeam.glickoTeam.rank();
        loseTeam.startingRankValue = loseTeam.glickoTeam.rank();
        
        // Aplicar actualización de rating Glicko
        // El informationContent ajusta la "confianza" en el resultado del partido
        glicko.singleMatch( winTeam.glickoTeam, loseTeam.glickoTeam, match.informationContent );
        
        // Calcular cuánto cambió el rating para cada equipo
        match.winnerDeltaRankValue = winTeam.glickoTeam.rank() - winTeam.startingRankValue;
        match.loserDeltaRankValue = loseTeam.glickoTeam.rank() - loseTeam.startingRankValue;
    } );
}

/**
 * Aplica los rankings finales a todos los equipos
 * 
 * 1. Ordena equipos por rating de mayor a menor
 * 2. Determina cuáles equipos califican para el ranking (mínimo 5 partidos)
 * 3. Asigna ranking global a equipos calificados
 * 4. Asigna ranking regional para cada región
 * 
 * @param {Array} teams - Lista de equipos a ordenar y rankear
 */
function applyRanking( teams ){
    // Ordenar por rating descendente (mejor rating primero)
    teams.sort( (a,b ) => b.rankValue - a.rankValue );

    let globalRank = 0;
    let regions = [0,1,2];

    // Determinar qué equipos califican para aparecer en el ranking
    // Requisito: haber juega al menos 5 partidos
    teams.forEach( t => {
        t.satisfiesRankingCriteria = ( t.matchesPlayed >= 5 );
    });

    // Asignar ranking global solo a equipos que califican
    teams.forEach( t => {
        if ( t.satisfiesRankingCriteria === true ) {
            globalRank += 1;
            t.globalRank = globalRank;
        }
    });

    // Asignar ranking regional para cada región
    // Un equipo puede aparecer en múltiples regiones según la composición de su roster
    regions.forEach( r => {
        let regionalRank = 0;
        teams.forEach( t => {            
            if ( t.satisfiesRankingCriteria === true && t.region[r] === 1 ) {
                regionalRank += 1;
                t.regionalRank[r] = regionalRank;
            }    
        });       
    });
}
