"use strict";

/**
 * Retorna el N-ésimo elemento más grande de un arreglo.
 * 
 * @param {Array} arr - El arreglo a buscar.
 * @param {number} nth - La posición a retornar (basado en 1). Por ejemplo, nth=1 retorna el más grande.
 * @param {Function} compare - Función comparadora opcional. Por defecto es orden descendente (b-a).
 * @returns {*} El N-ésimo elemento más grande según el comparador.
 * @throws {Error} Si nth es menor a 1.
 * @throws {Error} Si el arreglo está vacío.
 */
function nthHighest( arr, nth, compare = ((a,b) => b-a) )
{
    if( nth < 1 )
    {
        throw new Error( "nth < 1" );
    }

    if( arr.length === 0 )
    {
        throw new Error( "attempting to get Nth highest from empty list" );
    }

    nth = Math.min( nth, arr.length );
    return [...arr].sort(compare)[ nth - 1 ];
}

module.exports = nthHighest;
