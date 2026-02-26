"use strict";

/**
 * Remapea un valor de un rango de entrada a un rango de salida de forma lineal.
 * 
 * Si el valor está fuera del rango de entrada, se "clampa" (limita) al valor más cercano
 * del rango de salida en lugar de extrapolar.
 * 
 * Ejemplo: remapValueClamped(50, 0, 100, 0, 1000) retorna 500 (50% del rango)
 * Ejemplo: remapValueClamped(150, 0, 100, 0, 1000) retorna 1000 (clamp, excede el máximo)
 * 
 * @param {number} val - El valor a remapear
 * @param {number} inStart - Inicio del rango de entrada
 * @param {number} inEnd - Fin del rango de entrada
 * @param {number} outStart - Inicio del rango de salida
 * @param {number} outEnd - Fin del rango de salida
 * @returns {number} El valor remapeado en el rango de salida
 */
function remapValueClamped( val, inStart, inEnd, outStart, outEnd )
{
    // Normalizar el valor al rango [0, 1]
    const interp = ( inStart === inEnd ) ? 0.5 : ((val - inStart) / (inEnd - inStart));
    
    // Clampar al rango [0, 1] (si está fuera, usar el valor más cercano)
    const clamped = Math.max( Math.min( interp, 1 ), 0);
    
    // Escalar al rango de salida
    return ( clamped * outEnd + ( 1 - clamped ) * outStart );
}

module.exports = remapValueClamped;
