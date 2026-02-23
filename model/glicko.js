"use strict";

/**
 * Sistema de Rating Glicko - Implementación para Counter-Strike
 * 
 * El sistema Glicko fue desarrollado por Mark Glickman como una mejora al Elo.
 * Principales características:
 * - Rating (r): Media habilidad del jugador/equipo
 * - RD (Rating Deviation): Incertidumbre en el rating (menor = más seguro)
 * - Sistema de decaimiento: RD aumenta con el tiempo sin jugar
 * 
 * En nuestra implementación:
 * - Usamos RD fijo (75) para comportarnos como Elo
 * - El rating representa la fuerza relativa de los equipos
 * - Mayor rating = mejor equipo
 */

// Factor de conversión: convierte la escala Glicko-2 a Glicko
// log(10)/400 ≈ 0.00575646
// Esto relaciona el rating de 400 puntos de diferencia con ~90% probabilidad de victoria
const Q = Math.log(10) / 400;

/**
 * Constante de decaimiento RD
 * 
 * Controla cómo aumenta la incertidumbre (RD) con el tiempo sin partidos.
 * Valor actual (34.6): RD decae al máximo (350) después de ~100 unidades de tiempo.
 * Mayor valor = más rápido aumenta la incertidumbre.
 */
const C = 34.6;

// Constante matemática: 1/π² para cálculos de probabilidad en Glicko
const ONE_OVER_PI_SQUARED = 1 / (Math.PI * Math.PI);

/**
 * GlickoTeam - Representa un equipo con su rating y desviación
 * 
 * Mantiene el estado de rating de un equipo incluyendo:
 * - mRank: Rating actual del equipo
 * - mRD: Rating Deviation (incertidumbre)
 * - mAdjRank/mAdjRDSq: Acumuladores para actualizaciones pendientes
 */
class GlickoTeam
{
    /**
     * Crea un nuevo equipo con rating y RD especificados
     * 
     * @param {number} rank - Rating inicial del equipo
     * @param {number} rd - Rating Deviation inicial
     */
    constructor( rank, rd )
    {
        this.mRank = rank;
        this.mRD = rd;

        // Inicializar acumuladores para partidos pendientes
        this.resetPendingMatches();
    }

    /**
     * Obtiene el rating actual del equipo
     * @returns {number} Rating actual
     */
    rank()
    {
        return this.mRank;
    }

    /**
     * Obtiene la incertidumbre actual del rating
     * @returns {number} Rating Deviation actual
     */
    rd()
    {
        return this.mRD;
    }

    /**
     * Incrementa el RD basándose en el tiempo transcurrido
     * 
     * Cuando un equipo no juega, su incertidumbre aumenta porque
     * no tenemos información reciente sobre su nivel de juego.
     * 
     * @param {Object} glicko - Instancia de Glicko para clamp
     * @param {number} t - Unidades de tiempo transcurridas
     */
    decayRD( glicko, t = 1.0 )
    {
        const rd = this.mRD;
        // Fórmula de decaimiento: √(RD² + C²*t)
        this.mRD = glicko.clampRD( Math.sqrt( rd*rd + C*C*t ) );
    }

    /**
     * Limpia los datos de partidos pendientes
     * 
     * Se llama después de aplicar las actualizaciones de rating
     * para preparar el siguiente evento/torneo.
     */
    resetPendingMatches()
    {
        this.mAdjRank = 0;
        this.mAdjRDSq = 0;
    }

    /**
     * Añade un partido pendiente al equipo
     * 
     * Los partidos se acumulan en lugar de aplicarse inmediatamente
     * para permitir procesar múltiples partidos de un evento juntos.
     * 
     * La fórmula de Expected Value (E) usa la función logística:
     * E = 1 / (1 + 10^(-g(μ-μj)/400))
     * donde g = 1 / √(1 + 3q²σ²j/π²)
     * 
     * @param {GlickoTeam} otherTeam - Equipo oponente
     * @param {number} score - 1.0 para victoria, 0.0 para derrota
     * @param {number} info - Contenido de información del partido (0-1)
     */
    addPendingMatch( otherTeam, score, info = 1.0 )
    {
        const r   = this.mRank;
        const ro  = otherTeam.mRank;
        const rdo = otherTeam.mRD;

        // g(σ): Factor que reduce el impacto cuando el oponente tiene alta incertidumbre
        const g   = 1 / Math.sqrt( 1 + ( 3*Q*Q*rdo*rdo*ONE_OVER_PI_SQUARED ) );
        
        // E(μ, μj): Probabilidad esperada de victoria
        const ev  = 1 / ( 1 + Math.pow( 10, g*(r-ro)/(-400) ) );

        // Acumular ajustes para aplicar después
        // d²: suma de (g² * E * (1-E)) para todos los partidos
        this.mAdjRDSq += g*g * ev * (1 - ev) * info * info;
        
        // Σ: suma de (g * (s - E)) para todos los partidos
        this.mAdjRank += g * (score - ev) * info;
    }
    
    /**
     * Aplica los partidos pendientes al rating del equipo
     * 
     * Después de procesar todos los partidos de un evento,
     * se llama a esta función para actualizar el rating.
     * 
     * Nuevas fórmulas Glicko:
     * σ'² = 1 / (1/σ² + 1/d²)
     * μ' = μ + q/σ'² * Σ
     * 
     * @param {Object} glicko - Instancia de Glicko para clamp
     */
    applyPendingMatches( glicko )
    {
        const rd = this.mRD;
        
        // Calcular nueva desviación: 1/(1/RD² + Q²*AdjRDSq)
        const adjustedRDSq = 1 / (1/(rd*rd) + Q*Q*this.mAdjRDSq);

        // Actualizar rating: μ' = μ + q*σ'² * Σ
        this.mRank += Q*adjustedRDSq*this.mAdjRank;
        
        // Clampear RD al rango permitido
        this.mRD = glicko.clampRD( Math.sqrt( adjustedRDSq ) );

        // Limpiar acumuladores para próximo evento
        this.resetPendingMatches();
    }
}

/**
 * Glicko - Motor del sistema de rating
 * 
 * Gestiona la creación de equipos y el procesamiento de partidos.
 * Proporciona métodos para inicializar ratings y procesar resultados.
 */
class Glicko
{
    static Team = GlickoTeam;

    /**
     * Crea una nueva instancia del motor Glicko
     * 
     * Configura los valores por defecto para nuevos equipos:
     * - Rating inicial: 1500
     * - RD inicial: 350 (alta incertidumbre)
     * - RD máximo: 350
     * - RD mínimo: 35
     */
    constructor()
    {
        this.mStartingRank = 1500;
        this.mStartingRD   = 350;
        this.mMaxRD        = 350;
        this.mMinRD        = 35;
    }

    /**
     * Configura un RD fijo para comportamiento tipo Elo
     * 
     * Al establecer RD máximo y mínimo iguales, el sistema
     * se comporta de manera similar a Elo donde la incertidumbre
     * no fluctúa significativamente.
     * 
     * @param {number} val - Valor de RD fijo a usar
     * @returns {Glicko} this para encadenamiento
     */
    setFixedRD( val )
    {
        this.mStartingRD = val;
        this.mMaxRD      = val;
        this.mMinRD      = val;
        return this;
    }

    /**
     * Obtiene el rating inicial por defecto
     * @returns {number} Rating inicial
     */
    startingRank()
    {
        return this.mStartingRank;
    }

    /**
     * Obtiene el RD inicial por defecto
     * @returns {number} RD inicial
     */
    startingRD()
    {
        return this.mStartingRD;
    }

    /**
     * Obtiene el RD máximo permitido
     * @returns {number} RD máximo
     */
    maxRD()
    {
        return this.mMaxRD;
    }

    /**
     * Obtiene el RD mínimo permitido
     * @returns {number} RD mínimo
     */
    minRD()
    {
        return this.mMinRD;
    }

    /**
     * Clampea el RD al rango [minRD, maxRD]
     * 
     * @param {number} rd - Valor de RD a clampear
     * @returns {number} RD dentro del rango válido
     */
    clampRD( rd )
    {
        return Math.max( this.mMinRD, Math.min( this.mMaxRD, rd ) );
    }

    /**
     * Crea un nuevo equipo con ratings especificados o por defecto
     * 
     * @param {number} rank - Rating inicial (opcional)
     * @param {number} rd - RD inicial (opcional)
     * @returns {GlickoTeam} Nuevo equipo con ratings configurados
     */
    newTeam( rank = undefined, rd = undefined )
    {
        if( rank === undefined )
            rank = this.mStartingRank;
        if( rd === undefined )
            rd = this.mStartingRD;

        return new GlickoTeam( rank, rd );
    }

    /**
     * Procesa un partido en modo incremental
     * 
     * Los partidos se acumulan para procesarse en grupo después.
     * Útil cuando se procesan todos los partidos de un evento.
     * 
     * @param {GlickoTeam} winningTeam - Equipo que ganó
     * @param {GlickoTeam} losingTeam - Equipo que perdió
     * @param {number} informationContent - Contenido de información (0-1)
     */
    incrementalMatch( winningTeam, losingTeam, informationContent = 1.0 )
    {
        winningTeam.addPendingMatch( losingTeam, 1.0, informationContent );
        losingTeam.addPendingMatch( winningTeam, 0.0, informationContent );
    }

    /**
     * Aplica las actualizaciones de rating pendientes a los equipos
     * 
     * Debe llamarse después de addPendingMatch para todos los
     * partidos de un evento.
     * 
     * @param {Array} teams - Lista de equipos a actualizar
     */
    finalizeMatches( teams )
    {
        for( const team of teams )
        {
            team.applyPendingMatches( this );
        }
    }

    /**
     * Procesa un partido individual de forma inmediata
     * 
     * Método de conveniencia que combina:
     * 1. Añadir partido pendiente (ambos equipos)
     * 2. Aplicar actualizaciones inmediatamente
     * 
     * Útil para procesamiento en tiempo real o cuando no
     * hay necesidad de procesar eventos en lote.
     * 
     * @param {GlickoTeam} winningTeam - Equipo que ganó
     * @param {GlickoTeam} losingTeam - Equipo que perdió
     * @param {number} informationContent - Contenido de información (0-1)
     */
    singleMatch( winningTeam, losingTeam, informationContent = 1.0 )
    {
        this.incrementalMatch( winningTeam, losingTeam, informationContent );
        this.finalizeMatches( [winningTeam, losingTeam] );
    }
}

module.exports = Glicko;
