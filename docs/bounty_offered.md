# Bounty Offered - Componente de Ranking

## Propósito

El componente **Bounty Offered** busca medir el éxito financiero histórico de un equipo en el circuito profesional. La premisa es que las ganancias en torneos son un indicador del nivel del equipo: los equipos que consistentemente ganan dinero en eventos son, presumiblemente, equipos de mayor calidad.

### Diferencia con Otros Componentes

A diferencia de componentes como LAN Wins u Opponent Network (que evalúan partido a partido), Bounty Offered evalúa el **resultado económico del evento completo**. No importa cuántos partidos ganaste ni a quién derrotaste; lo único que importa es cuánto dinero ganaste en el evento.

LAN Wins cuenta cuántas victorias obtuviste en eventos presenciales. Bounty Offered solo evalúa cuánto dinero ganaste.

## Cómo Funciona

El sistema toma la ventana de tiempo más reciente (los últimos 180 días) y dentro de esa ventana evalúa las ganancias del equipo en eventos.

### Diferencia con LAN Wins

A diferencia de LAN Wins (que evalúa cuántos partidos ganaste en eventos presenciales), Bounty Offered evalúa el **resultado completo del evento**: cuál fue tu placement final y cuánto dinero ganaste.

### El Cálculo

El flujo es el siguiente:

1. **Recopilar ganancias**: Del historial del equipo, obtener todo el dinero ganado en los eventos en los que participó.

2. **Aplicar decay temporal**: Al igual que LAN Wins, los resultados más recientes tienen mayor peso. Una ganancia de hace 10 días vale más que una de hace 160 días. Este es el único factor que afecta a las ganancias.

3. **Seleccionar las mejores**: De todas las ganancias con decay aplicado, quedarse con las top 10. Esto evita que un equipo con muchos premios pequeños sume más que uno con pocas ganancias grandes.

4. **Sumar**: En lugar de promediar (como en LAN Wins), aquí se suman los 10 valores. Esto refleja que el éxito financiero es acumulativo.

5. **Normalizar**: Este valor se compara contra los mejores equipos del dataset para obtener un número entre 0 y 1.

## Ejemplos

### Ejemplo 1: Equipo con alto Bounty Offered
- Ganó $250,000 hace 30 días
- Ganó $50,000 hace 60 días
- Resultado: `bountyOffered` alto (cerca de 1.0)

### Ejemplo 2: Equipo sin ganancias
- Nunca ha ganado dinero en eventos
- Solo ha participado sin obtener premios
- Resultado: `bountyOffered = 0`

### Ejemplo 3: Equipo con ganancias antiguas
- Ganó $500,000 hace 170 días (peso casi 0)
- No ha ganado nada en los últimos 170 días
- Resultado: `bountyOffered` muy bajo

### Ejemplo 4: Equipo con muchas ganancias pequeñas
- Ganó $1,000 en 20 eventos diferentes en 180 días
- El sistema solo toma los 10 mejores
- La suma de los 10 mejores será menor que un equipo con una sola ganancia grande
- Esto protege contra inflate artificial por volumen

## Por Qué Considera la Magnitud

A diferencia de LAN Wins (donde solo importa si ganaste o no), Bounty Offered considera cuánto ganaste. La razón:

- **Premio del logro**: Ganar $250,000 demuestra un nivel superior a ganar $10,000. Ambos son "victorias" pero tienen valores diferentes.

- **Señal de consistencia**: Un equipo que consistentemente gana buenos premios demuestra ser un equipo de primer nivel de manera sostenida.

- **Éxito propio, no ajeno**: Un equipo puede ganar un evento sin enfrentar a los mejores. Las ganancias propias reflejan el propio éxito, no a quién derrotaste.

- **Un solo factor**: Solo el decay afecta a este componente. No importa si es LAN u online, si el evento tiene 5 equipos o 50. Solo importa cuánto ganaste y cuándo.

## Relación con Otros Componentes

- **Bounty Collected**: Es el "otro lado de la moneda". Mientras Bounty Offered son tus propias ganancias, Bounty Collected son las ganancias de los equipos que derrotaste. Un equipo puede tener alto Bounty Offered (ganó mucho) pero bajo Bounty Collected (no ha derrotado a equipos que hayan ganado dinero).

- **Curve Function**: Las ganancias pasan por una función de curva antes de usarse. Esto significa que el salto de $10,000 a $100,000 cuenta más que el salto de $100,000 a $200,000. Es una forma de evitar que los equipos con más dinero dominen completamente.

## Nota Importante

El Bounty Offered es un componente **netamente histórico**. No refleja el estado actual del equipo tan directamente como otros componentes. Un equipo que tuvo éxito hace 4 meses pero ahora está en declive aún puede tener un Bounty Offered alto. Por esta razón, el decay temporal es crucial: garantiza que las ganancias recientes pesen más.
