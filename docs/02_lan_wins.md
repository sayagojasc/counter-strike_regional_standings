# LAN Wins - Componente de Seeding

## Propósito

El componente **LAN Wins** busca medir la capacidad de un equipo para ganar partidos en eventos presenciales (LAN). La premisa es simple: los partidos en LAN tienen condiciones más estables (latencia cero, ambiente controlado, público) y por tanto ofrecen una señal más confiable sobre el verdadero nivel de un equipo.

## Cómo Funciona

El sistema toma la ventana de tiempo más reciente (los últimos 180 días) y dentro de esa ventana evalúa cada victoria del equipo.

### Cálculo del Componente LAN Wins

El flujo es el siguiente:

1. **Identificar victorias LAN**: Del historial del equipo, filtrar solo las victorias que ocurrieron en eventos presenciales (LAN).

2. **Aplicar decay**: A cada victoria LAN, asignarle un peso basado en su antigüedad dentro de la ventana de 180 días.

3. **Seleccionar las mejores**: De todas las victorias LAN con decay aplicado, quedarse con las top 10. Al ser el decay el único modificador que aplica en este componente, el top 10 simplemente serán las últimas 10 victorias LAN.

4. **Promediar**: Calcular el promedio de estos 10 valores. Este promedio representa el LAN Wins del equipo.

5. **Normalizar**: Este valor se compara contra los mejores equipos para obtener un número entre 0 y 1.

## Por Qué Solo Decay

A diferencia de otros componentes como Bounty Collected (que considera el prize pool del evento o la calidad del oponente), LAN Wins es intencionalmente simple. La razón:

- **Señal pura**: Una victoria LAN ya es una señal de calidad por sí misma. No necesita modificadores adicionales.

- **Evitar doble conteo**: Si un equipo gana en un Major, eso ya se refleja en su Bounty Collected (porque derrotó a equipos exitosos). No queremos contar el mismo logro dos veces.

- **Simplicidad**: El propósito de LAN Wins es simplemente responder: "¿El equipo tiene historial reciente de victorias presenciales?"

## Ejemplos

### Ejemplo 1: Equipo con buenas LAN Wins
- Jugó 3 eventos LAN en los últimos 60 días
- Ganó partidos en todos ellos
- Sus victorias tienen pesos altos porque son recientes
- Resultado: LAN Wins alto

### Ejemplo 2: Equipo sin LANs recientes
- Solo juega tournaments online
- Tiene muchas victorias pero ninguna en LAN
- Resultado: LAN Wins nulo

### Ejemplo 3: Equipo con LANs antiguas
- Ganó un Major hace 150 días (peso casi 0)
- No ha jugado LANs en los últimos 150 días
- Resultado: LAN Wins muy bajo

### Ejemplo 4: Equipo con muchas LANs
- Jugó 20 partidos LAN en 180 días
- El sistema solo toma los 10 mejores
- Las 10 adicionales no cuentan
- Esto protege a equipos que juegan muchas LANs pequeñas de inflar artificialmente su seeding

## Nota Importante

El sistema no distingue entre diferentes tipos de LAN. Una LAN regional pequeña cuenta igual que un Major en términos de LAN Wins. La diferencia de prestigio se captura en otros componentes (Bounty Collected, Opponent Network).
