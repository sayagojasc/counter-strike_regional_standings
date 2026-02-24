# Seeding Inicial - Visión General

## Propósito

El seeding es el valor inicial que recibe cada equipo antes de aplicar los ajustes por head-to-head. Este valor se calcula basándose en el desempeño histórico del equipo en los últimos 180 días y representa la "fuerza" estimada del equipo.

## Los 4 Componentes del Seeding

El sistema usa 4 componentes para calcular el seeding de cada equipo:

### LAN Wins
Mide la capacidad del equipo para ganar partidos en eventos presenciales. Solo el decay temporal afecta este componente. Un equipo con victorias LAN recientes tiene un valor alto.

### Bounty Offered
Mide el éxito financiero histórico del equipo. No evalúa placement ni cantidad de victorias; solo cuánto dinero ha ganado el equipo en eventos. Solo el decay afecta.

### Bounty Collected
Mide la calidad de los rivales derrotados basado en sus ganancias. Considera tres factores: el Bounty Offered del oponente, el decay temporal, y el stakes modifier del evento.

### Opponent Network
Mide la calidad de los rivales derrotados basado en cuántos equipos diferentes han derrotado esos rivales. Considera tres factores: el Own Network del oponente, el decay temporal, y el stakes modifier del evento.

## Cómo se Calcula el Seed Value

Una vez calculados los 4 componentes, el sistema los combina en un solo valor:

```
seedValue = (bountyCollected × 1) + (bountyOffered × 1) + (opponentNetwork × 1) + (ownNetwork × 0) + (lanFactor × 1)
```

El ownNetwork tiene peso 0, lo que significa que no afecta directamente el rating del equipo. Sin embargo, se calcula y guarda para ser usado cuando otros equipos lo derrotan.

## Remapeo a Rango de Rating

El seedValue resultante se remapea a un rango de rating:

- **Mínimo**: 400
- **Máximo**: 2000

Un equipo con el seedValue más bajo del dataset recibe 400. El equipo con el seedValue más alto recibe 2000. Los demás se distribuyen linealmente entre estos valores.

## Por Qué Existe el Seeding

El seeding cumple varias funciones:

1. **Punto de partida razonable**: Un equipo nuevo sin partidos en el sistema starts con un valor coherente en lugar de tener que ganarlo todo desde cero.

2. **Reflejar historial**: Equipos con historial exitoso start con ventaja sobre equipos nuevos o sin historial.

3. **Evitar manipulación**: Al combinar múltiples factores, es más difícil inflar el rating jugando el sistema.

4. **Ponderación balanceada**: Cada componente captura una dimensión diferente del éxito de un equipo.

## Ajustes por Head-to-Head

Después de calcular el seeding:

1. Cada equipo recibe su rating inicial basado en el seeding
2. Los head-to-head se procesan en orden cronológico
3. Por cada head-to-head, el sistema ajusta el rating del ganador hacia arriba y del perdedor hacia abajo

El seeding proporciona el punto de partida; los ajustes por head-to-head se encargan de actualizar los ratings basándose en los resultados.

## Ejemplo Completo

### Equipo A
- Tiene 3 victorias LAN recientes → LAN Wins alto
- Ha ganado $100,000 en su historial → Bounty Offered alto
- Derrotó a equipos ricos → Bounty Collected alto
- Derrotó a equipos con alto Own Network → Opponent Network alto
- **Resultado**: seedValue alto → rating inicial cerca de 2000

### Equipo B
- No tiene victorias LAN → LAN Wins = 0
- Nunca ha ganado dinero → Bounty Offered = 0
- Solo ha derrotado a equipos sin ganancias → Bounty Collected bajo
- Solo ha derrotado a equipos con bajo Own Network → Opponent Network bajo
- **Resultado**: seedValue bajo → rating inicial cerca de 400

## Nota Importante

El seeding es solo el punto de partida. Los ajustes por head-to-head modifican los ratings significativamente. Un equipo con seeding bajo puede escalar su rating si gana head-to-head. Un equipo con seeding alto puede caer si pierde head-to-head frecuentemente.
