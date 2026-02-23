"use strict";

/**
 * main.js - Punto de entrada del generador de rankings
 * 
 * Este script ejecuta el pipeline completo:
 * 1. Parsea argumentos de línea de comandos
 * 2. Genera rankings usando el sistema Glicko
 * 3. Genera salida en formato markdown
 * 
 * Uso:
 *   node main.js [regiones] [archivo_datos] [fecha]
 * 
 * Ejemplos:
 *   node main.js                    # Todas las regiones, datos por defecto
 *   node main.js '[0]'             # Solo Europa
 *   node main.js '[0,1]'           # Europa y Americas
 *   node main.js '[0]' '../data/custom.json'  # Archivo personalizado
 *   node main.js '[0]' '../data/matchdata.json' '2024-01-15'  # Fecha específica
 */

const Ranking = require('./ranking');
const Report = require('./report');

/**
 * Lista de nombres de regiones para display
 */
const RegionList = ['Europe', 'Americas', 'Asia'];

/**
 * Función principal
 * 
 * 1. Parsea argumentos CLI:
 *    - argv[2]: regiones (JSON array), default [0,1,2]
 *    - argv[3]: archivo de datos, default ../data/matchdata.json
 *    - argv[4]: fecha override, default fecha del último partido
 * 
 * 2. Genera rankings
 * 
 * 3. Genera reporte markdown
 */
function run()
{
    // Parsear regiones - por defecto todas
    let regions = [0,1,2];
    if ( process.argv[2] !== undefined )
        regions = JSON.parse(process.argv[2]);

    // Parsear archivo de datos - por defecto matchdata.json
    let filename = '../data/matchdata.json';
    if ( process.argv[3] !== undefined )
        filename = process.argv[3];

    // Generar rankings
    // versionTimestamp=-1 usa todos los datos disponibles
    let [matches,teams] = Ranking.generateRanking( -1, filename );

    // Obtener fecha del partido más reciente
    let mostRecentMatch = Math.max( ...matches.map( m => m.matchStartTime ) );

    // Formatear fecha como YYYY-MM-DD
    let d = new Date( 0 );
    d.setUTCSeconds( mostRecentMatch );
    let strDate = d.toLocaleString( 'fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'America/Los_Angeles' } );

    // Título del reporte
    let standings = 'Standings';
    if( regions.length === 1 )
    {
        standings = `Regional Standings for ${RegionList[regions[0]]}`;
    }

    // Override de fecha si se provee
    if ( process.argv[4] !== undefined )
        strDate = process.argv[4];

    // Generar output markdown
    Report.generateOutput( teams, regions, strDate );
}

run();
