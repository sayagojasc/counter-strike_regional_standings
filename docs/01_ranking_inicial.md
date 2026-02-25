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

## El Sistema de Bags (Analogía MMORPG)

Imagina que cada componente del ranking es como una **mochila (bag)** que solo puede contener **10 items**. Cada victoria que consigues es un item que entra en la mochila correspondiente.

### Cómo Funciona

Cada bag tiene exactamente **10 espacios**. Cuando ganas un partido:

1. **Si la mochila no está llena**: El sistema añade la victoria como un nuevo item
2. **Si la mochila está llena**: El sistema compara tu nueva victoria con tus 10 victorias actuales. Solo reemplaza una si tu nueva victoria es **mejor** que la peor de las que ya tienes guardada

### Las Victorias Son Items con Valor

Cada victoria guarda información sobre:
- **Qué tipo de evento era** (LAN, qualy, online)
- **Cuánto dinero había en el evento** (stakes modifier)
- **Quién era tu oponente** (su Bounty Offered, su Own Network)
- **Cuándo fue** (decay)

### Ejemplo Práctico

Imaginemos un equipo que tiene las siguientes 10 victorias guardadas en su bag de Bounty Collected:

```
Bag Bounty Collected (10/10 espacios):
┌────────────────────────────────────────────────────────────┐
│ 1. vs Team A - $500K bounty - Major LAN - hace 10 días    │
│ 2. vs Team B - $400K bounty - Major LAN - hace 20 días    │
│ 3. vs Team C - $300K bounty - Major LAN - hace 30 días    │
│ ...                                                        │
│ 10. vs Team J - $50K bounty - Online Cup - hace 90 días  │
└────────────────────────────────────────────────────────────┘
```

Ahora, este equipo juega un open cup online y gana contra un equipo que tiene $100K de bounty. ¿Esa victoria entra al bag? **No**, porque el sistema no compara solo el valor bruto del bounty del oponente. Compara el **valor ajustado**:

- El evento online tiene un **stakes modifier muy bajo** (~$500 en prize pool)
- Aunque el oponente tenga $100K de bounty, los ganó en eventos pequeños
- En cambio, las victorias #1-3 fueron en Major LAN con stakes de $500K

Por eso la victoria de $100K en el open cup no supera a la victoria #10 de $50K del Major.

Ahora bien, si ese mismo equipo con $100K de bounty juega y pierde contra ti en un **Major** (alto stakes), esa victoria **sí** entraría al bag y reemplazaría la #10, porque el contexto (stakes alto, evento LAN) es comparable.

### Por Qué Solo 10 Victorias

El límite de 10 victorias por componente cumple varios propósitos:

1. **Previene inflado**: Un equipo no puede spamear partidos fáciles para aumentar su rating
2. **Premia calidad sobre cantidad**: Es mejor tener 10 victorias contra equipos top que 100 victorias contra equipos débiles
3. **Mantiene relevancia**: Las victorias antiguas (por decay) eventualmente salen del top 10 y se reemplazan por mejores
4. **Reduce ruido**: Solo las mejores performances contribuyen al rating

## Factores del Partido

No todas las victorias son iguales. El tipo de partido afecta significativamente cuánto contribuye al ranking:

### Partido LAN (Evento Presencial)

Un partido de un evento LAN activa **todos los componentes**:

- **LAN Wins**: +1 victoria LAN
- **Bounty Offered**: Ganas dinero del prize pool
- **Bounty Collected**: El oponente tiene su propio Bounty Offered
- **Opponent Network**: El oponente tiene su propio Own Network

Además, los eventos LAN típicamente tienen **alto stakes modifier** (mucho dinero en prizes), lo que multiplica el valor de Bounty Collected y Opponent Network.

### Qualy (Clasificatoria)

Una qualy sin prize pool tiene **impacto mínimo**:

- **LAN Wins**: No cuenta (es online)
- **Bounty Offered**: $0 (no hay prize)
- **Bounty Collected**: Nulo o muy bajo (stakes modifier ~0)
- **Opponent Network**: Nulo o muy bajo

Sin embargo, si esa qualy es parte de un evento mayor (como una clasificatoria para un Major), puede **heredar el stakes modifier** del evento principal mediante el **Prize Pool Linking**. En ese caso, una victoria en qualy puede mejorar significativamente el Bounty Collected y Opponent Network.

### Partido Online (Torneo Abierto)

Un partido en un torneo online (como una league open division) solo activa **3 componentes**:

- **LAN Wins**: No cuenta (no es presencial)
- **Bounty Offered**: $0 (no hay prize o es muy pequeño)
- **Bounty Collected**: Bajo (stakes modifier bajo)
- **Opponent Network**: Bajo (normalmente)

### Por Qué los Eventos Online No Son Productivos para el Seed

Los eventos online (open cups, qualys abiertas, leagues abiertas) tienden a no mejorar significativamente tu seed por varias razones:

1. **Stakes bajo**: La mayoría de estos eventos tienen prize pools pequeños o nulos, lo que significa bajo stakes modifier

2. **Brechas de calidad enormes**: Son eventos con muchos equipos (64, 128, 256 equipos). Las primeras rondas enfrentan a equipos muy superiores contra muy inferiores. Es como un equipo top jugando contra un equipo amateur.

3. **Rara vez enfrentas rivales de calidad**: Tu victoria en ronda 1 es contra el equipo #200 del mundo, que tiene $0 de bounty y bajo Own Network. Ni tu Bounty Collected ni tu Opponent Network mejoran.

4. **Las victorias no superan las del bag**: Una victoria contra un equipo sin historial en un open cup online **nunca** será mejor que una victoria contra un equipo top en un Major LAN. Aunque el oponente tenga más bounty, el contexto (stakes modifier bajo) hace que el valor final sea menor.

#### Ejemplo Concreto

**Tu bag actual tiene:**
```
┌────────────────────────────────────────────────────────────┐
│ vs Team Top - $500K bounty - Major LAN - stakes 500K     │
│ vs Team Top - $400K bounty - Major LAN - stakes 500K     │
│ vs Team Mid - $200K bounty - ESL Pro League - stakes 100K│
└────────────────────────────────────────────────────────────┘
```

**Juegas un open cup online:**
- Ganas contra Team Nuevo ($0 bounty) en ronda 1 → No entra al bag
- Ganas contra Team Amateur ($0 bounty) en ronda 2 → No entra al bag
- Ganas contra Team Semi-Pro ($5K bounty) en ronda 3 → No entra al bag

**¿Por qué no entró ninguna?**
- Los oponentes tienen poco o ningún bounty
- El stakes modifier del open cup es muy bajo (~$500)
- Aunque ganes 10 partidos, ninguno supera a tu peor victoria del bag

**En cambio, si ese mismo equipo Semi-Pro con $5K de bounty juega y gana en un Major:**
- Su bounty sería mucho mayor (hereda stakes del Major)
- Derrotarlo te daría puntos en Bounty Collected y Opponent Network
- Esa victoria **sí** podría entrar a tu bag

### Ejemplo Concreto

**Equipo que juega en un Major:**
- Gana un partido contra otro equipo top
- +1 LAN Win (importante)
- Gana $100,000 del prize pool → Bounty Offered aumenta
- El oponente tiene $500,000 en historial → Bounty Collected muy alto
- El oponente ha derrotado a muchos equipos → Opponent Network alto
- **Resultado**: Cada componente crece significativamente

**Equipo que juega una qualy abierta:**
- Gana contra un equipo desconocido
- No cuenta como LAN Win
- $0 de prize → Bounty Offered no cambia
- El oponente tiene $0 en ganancias → Bounty Collected no mejora
- El oponente tiene bajo Own Network → Opponent Network no mejora
- **Resultado**: Casi no afecta el ranking

## El Decay (Pérdida de Valor Temporal)

El decay es una penalización temporal que afecta a **todos los componentes por igual**. Funciona así:

### Período de 180 Días

Solo se consideran partidos de los últimos **180 días**. Partidos más antiguos no cuentan.

### Período de Gracia de 30 Días

Los últimos **30 días** tienen peso completo (decay = 1.0). Pasados los 30 días, el peso decae linealmente hasta llegar a 0 al final de los 180 días.

### Cómo Afecta el Decay

Una victoria de hace 10 días prácticamente no ha perdido valor. Una victoria de hace 170 días tiene peso casi 0.

Esto significa que:
- **Victorias recientes**: Valen 100% de su potencial
- **Victorias de 30-90 días**: Valen entre 100% y 50%
- **Victorias de 90-180 días**: Valen menos del 50%
- **Victorias mayores a 180 días**: Se ignoran completamente

### Interacción con el Sistema de Bags

El decay no elimina victorias del bag automáticamente. En cambio:

1. Cada victoria en el bag tiene un "timestamp" de cuándo ocurrió
2. Al calcular el valor total del componente, el sistema aplica el decay a cada victoria
3. Si una victoria muy antigua ya no aporta casi nada, eventualmente será superada por una victoria más reciente (que sí tiene decay alto)
4. Cuando una nueva victoria entra al bag, la más antigua sale

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

3. **Evitar manipulación**: Al combinar múltiples factores y con el límite de 10 victorias, es más difícil inflar el rating jugando el sistema.

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
