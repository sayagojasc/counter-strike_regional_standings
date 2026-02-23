"use strict";

/**
 * RankingContext - Contexto de parámetros para el sistema de ranking
 * 
 * Este clase almacena los parámetros configurables que afectan
 * cómo se calculan los rankings:
 * 
 * - Ventana de tiempo: qué tan lejos en el pasado considerar datos
 * - Factor de decaimiento: cómo pesar partidos recientes vs antiguos
 * - Modificador de eventos HV: peso extra para RMR/Majors
 * - Outlier count: cuántos valores extremos ignorar en normalización
 */

const remapValueClamped = require('./util/remap_value_clamped');

/**
 * RankingContext - Gestor de configuración del ranking
 * 
 * Proporciona métodos para configurar y acceder a los parámetros
 * que afectan el cálculo de rankings.
 */
class RankingContext {
    /**
     * Inicializa el contexto con valores por defecto
     * 
     * Valores por defecto:
     * - topOutlierCount: 10 (ignorar top 10 en normalización)
     * - timeDecayFactor: 1 (peso lineal)
     * - highValueEventModifier: 1 (sin peso extra)
     */
    constructor()
    {
        /**
         * Número de outliers a ignorar en cálculos
         * 
         * Cuando normalizamos valores (ej: ganancias), ignoramos
         * los N mejores equipos para evitar que dominen la escala.
         * Ej: Si outlierCount=5, el 6to mejor equipo define el máximo,
         * y el 1ro-5to se treatan igual que el 6to.
         */
        this.topOutlierCount = 10;
        
        this.timeWindowStart = null;
        this.timeWindowEnd = null;
        
        /**
         * Factor de decaimiento temporal
         * 
         * Controla cómo se pesan los partidos según su antigüedad:
         * - 1: peso lineal (partidos recientes = 1, más antiguos = 0)
         * - <1: más peso a partidos recientes
         * - >1: menos peso a partidos recientes, más a antiguos
         */
        this.timeDecayFactor = 1;
        
        /**
         * Modificador para eventos de alto valor (RMR/Majors)
         * 
         * Multiplicador adicional para eventos importantes.
         * Mayor valor = más importancia relativa a RMR/Majors.
         */
        this.highValueEventModifier = 1;
    }
    
    /**
     * Configura el rango de tiempo para los datos
     * 
     * Define el período desde el cual considerar partidos.
     * El modificador de timestamp mapea este rango a [0, 1].
     * 
     * @param {number} start - Timestamp de inicio
     * @param {number} end - Timestamp de fin
     * @returns {RankingContext} this para encadenamiento
     */
    setTimeWindow( start, end ) {
        this.timeWindowStart = start;
        this.timeWindowEnd = Math.max( start, end );
        return this;
    }

    /**
     * Calcula el modificador de timestamp para un momento dado
     * 
     * Mapea un timestamp al rango [0, 1] basado en la ventana de tiempo:
     * - Timestamp más antiguo = 0
     * - Timestamp más reciente = 1
     * 
     * Aplica timeDecayFactor para ajustar el peso:
     * - pow(clamp, decay) donde clamp está en [0, 1]
     * 
     * @param {number} timeStamp - Timestamp a evaluar
     * @returns {number} Modificador en rango [0, 1]
     */
    getTimestampModifier( timeStamp ) {
        // Si no hay ventana configurada, retornar 1 (sin modificación)
        if( this.timeWindowStart === null || this.timeWindowEnd === null )
        {
            return 1;
        }

        // Mapear timestamp al rango [0, 1]
        let clamp = remapValueClamped( timeStamp, this.timeWindowStart, this.timeWindowEnd, 0, 1 )
        
        // Aplicar decaimiento temporal
        return Math.pow( clamp, this.timeDecayFactor );
    }

    /**
     * Configura cuántos outliers ignorar en normalización
     * 
     * Aplicable tanto a prize pool como a conteo de oponentes.
     * 
     * @param {number} nth - Número de outliers a ignorar
     * @returns {RankingContext} this para encadenamiento
     */
    setOutlierCount( nth )
    {
        this.topOutlierCount = nth;
        return this;
    }

    /**
     * Obtiene el número de outliers configurado
     * @returns {number}
     */
    getOutlierCount()
    {
        return this.topOutlierCount;
    }

    /**
     * Configura el modificador para eventos de alto valor
     * 
     * RMR y Majors pueden tener peso adicional en los cálculos.
     * 
     * @param {number} modifier - Multiplicador (1 = sin cambio)
     * @returns {RankingContext} this para encadenamiento
     */
    setHveMod( modifier )
    {
        this.highValueEventModifier = modifier;
        return this;
    }

    /**
     * Obtiene el modificador de eventos HV
     * @returns {number}
     */
    getHveMod()
    {
        return this.highValueEventModifier;
    }
}

module.exports = RankingContext;
