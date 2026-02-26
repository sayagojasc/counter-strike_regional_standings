# Opponent Network - Componente de Ranking

## Propósito

El componente **Opponent Network** busca determinar las 10 mejores victorias de un equipo basándose en el Own Network de los rivales derrotados. La premisa es que si le ganaste a un equipo que históricamente ha derrotado a muchos oponentes, eso dice algo positivo sobre tu nivel como equipo.

### Own Network

El Own Network es un valor que cada equipo calcula una sola vez y se guarda. Para calcularlo:

1. **Última victoria por rival**: Toma cada victoria. Si le ganó 5 veces al Team A, solo considera la última victoria contra ese equipo.
2. **Aplica decay**: A cada victoria le aplica el decay temporal.
3. **Suma total**: Suma todos los valores de decay.
4. **Normaliza**: Compara contra los mejores equipos para obtener un valor entre 0 y 1.

El Own Network se usa exclusivamente para calcular el Opponent Network de los equipos que derrotaron a este equipo.

## Cómo Funciona

El sistema toma la ventana de tiempo más reciente (los últimos 180 días) y dentro de esa ventana evalúa cada victoria del equipo.

### Cálculo del Componente Opponent Network

El flujo es el siguiente:

1. **Por cada victoria**: Identificar al equipo derrotado y obtener su Own Network.

2. **Aplicar decay**: A cada victoria, asignarle un peso basado en su antigüedad dentro de la ventana de 180 días.

3. **Aplicar stakes modifier**: El resultado se multiplica por un factor basado en el prize pool del evento.

4. **Multiplicar por el Own Network del oponente**: El valor de la victoria se calcula como: Own Network del oponente × decay × stakes modifier.

5. **Seleccionar las mejores**: De todas las victorias con el valor calculado, quedarse con las top 10.

6. **Promediar**: Calcular el promedio de estos 10 valores. Este es el valor final del Opponent Network. No se normaliza contra otros equipos porque ya se multiplica por el Own Network del oponente que está normalizado.

## Ejemplos

### Ejemplo 1: Equipo que vence a rivales con alto Own Network
- Derrotó a un equipo que tiene alto Own Network
- Ese equipo ha vencido a muchos rivales diferentes en su historial
- Las victorias son recientes
- Resultado: `opponentNetwork` alto

### Ejemplo 2: Equipo que vence a rivales con bajo Own Network
- Los equipos que derrotó tienen bajo Own Network
- Esos rivales no han vencido a muchos equipos diferentes
- Resultado: `opponentNetwork` bajo

### Ejemplo 3: Equipo que le gana muchas veces a un buen rival
- Tiene 10 victorias sobre el mismo rival
- Ese rival tiene alto Own Network
- Las 10 victorias cuentan porque el rival tiene alto Own Network
- Resultado: `opponentNetwork` alto

### Ejemplo 4: Equipo en escena pequeña
- Los equipos de su escena tienen bajo Own Network
- Aunque gane mucho, sus rivales no han derrotado a muchos equipos
- Resultado: `opponentNetwork` bajo

## Por Qué Múltiples Factores

A diferencia de LAN Wins (donde solo el decay afecta), Opponent Network considera:

- **Own Network del oponente**: Derrotar a un equipo con alto Own Network vale más
- **Tiempo**: Victorias recientes valen más
- **Importancia del evento**: Ganar en eventos con más prize pool vale más

Esto hace que el componente sea más rico, pero también más complejo.

## Nota Importante

Para tener un Opponent Network alto, las 10 mejores victorias deben ser contra rivales con alto Own Network. Una sola victoria contra un buen rival no es suficiente: el promedio de 10 victorias contra rivales fuertes es lo que determina el resultado.
