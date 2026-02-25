# LAN Wins - Componente de Ranking

## Propósito

El componente **LAN Wins** busca medir la capacidad de un equipo para ganar partidos en eventos presenciales (LAN). La premisa es simple: los partidos en LAN tienen condiciones más estables (latencia cero, ambiente controlado, público) y por tanto ofrecen una señal más confiable sobre el verdadero nivel de un equipo.

## Cómo Funciona

El sistema toma la ventana de tiempo más reciente (los últimos 180 días aproximadamente, o 6 meses de datos disponibles) y dentro de esa ventana evalúa cada victoria del equipo.

### El Decay (Decaimiento)

Cada resultado en el sistema tiene un peso que decae con el tiempo. Una victoria de hace 150 días vale menos que una de hace 1 semana. Este decay es lineal dentro de la ventana de 180 días:

- Victoria hace 6 meses → peso: 0.0
- Victoria hace 3 meses → peso: 0.5
- Victoria reciente → peso: 1.0

### Cálculo del Componente LAN

El flujo es el siguiente:

1. **Identificar victorias LAN**: Del historial del equipo, filtrar solo las victorias que ocurrieron en eventos presenciales (LAN).

2. **Aplicar decay**: A cada victoria LAN, asignarle un peso basado en su antigüedad dentro de la ventana de 180 días.

3. **Seleccionar las mejores**: De todas las victorias LAN con decay aplicado, quedarse con las top 10. Dado que el único modificador de las LAN Wins es el decay, las "mejores" son simplemente las más recientes (aquellas con menos decay aplicado). Esto evita que un equipo con muchas victorias LAN menores (ej: muchos small LANs) domine sobre uno con pocas pero significativas.

4. **Promediar**: Calcular el promedio de estos 10 valores. Este promedio representa el `lanParticipation` del equipo.

5. **Normalizar**: Este valor se compara contra los demás equipos para obtener un número entre 0 y 1.

### Período de Gracia

El sistema aplica un período de gracia de aproximadamente 30 días (un mes). Los partidos jugados en los últimos 30 días no se ven afectados por el decay y mantienen su peso completo (1.0). Esto permite que resultados muy recientes tengan máxima influencia en el ranking.

## Ejemplos

### Ejemplo 1: Equipo con buenas LAN Wins
- Jugó 3 eventos LAN en los últimos 180 días
- Ganó partidos en todos ellos
- Sus victorias tienen pesos altos porque son recientes
- Resultado: `lanParticipation` alto (cerca de 1.0)

### Ejemplo 2: Equipo sin LANs recientes
- Solo juega tournaments online
- Tiene muchas victorias pero ninguna en LAN
- Resultado: `lanParticipation = 0`

### Ejemplo 3: Equipo con LANs antiguas
- Ganó un major hace 150 días (peso casi 0)
- No ha jugar LANs en los últimos 150 días
- Resultado: `lanParticipation` muy bajo

### Ejemplo 4: Equipo con muchas LANs
- Jugó 20 partidos LAN en 180 días
- El sistema solo toma los 10 mejores
- Las 10 adicionales no cuentan
- Esto protege a equipos que juegan muchas LANs pequeñas de inflar artificialmente su score

## Por Qué Solo Decay

A diferencia de otros componentes como Bounty (que considera el prize pool del evento o la calidad del oponente), LAN Wins es intencionalmente simple. La razón:

- **Señal pura**: Una victoria LAN ya es una señal de calidad por sí misma. No necesita modificadores adicionales.

- **Evitar doble conteo**: Si un equipo gana en un Major, eso ya se refleja en su Bounty Collected (porque derrotó a equipos exitosos). No queremos contar el mismo logro dos veces.

- **Simplicidad**: El propósito de LAN Wins es simplemente responder: "¿El equipo tiene historial reciente de victorias presenciales?"

## Relación con Otros Componentes

- **Bounty Collected**: Derrotar a un equipo con alto LAN factor puede incrementar el bounty, pero eso es una consecuencia, no el propósito del LAN factor.

- **Time Window**: Los 180 días aplican a todo el sistema, no solo a LAN. Esto asegura consistencia.

## Nota Importante

El sistema no distingue entre diferentes tipos de LAN. Un pequeño LAN regional cuenta igual que un Major en términos de LAN Wins. La diferencia de prestigio se captura en otros componentes (Bounty, Network).
