# Bounty Collected - Componente de Ranking

## Propósito

El componente **Bounty Collected** busca medir la calidad de los rivales que un equipo ha derrotado. La premisa es que derrotar a equipos exitosos (que han ganado mucho dinero) es una señal de alto nivel. No es lo mismo derrotar a un equipo que nunca ha ganado nada que derrotar a uno que ha ganado $500,000 en su historial.

### Diferencia con Bounty Offered

Bounty Offered evalúa cuánto dinero ganaste tú. Bounty Collected evalúa cuánto dinero habían ganado tus rivales. Son complementarios: un equipo puede tener alto Bounty Offered (él mismo ha ganado mucho) pero bajo Bounty Collected (no ha derrotado a equipos exitosos).

### Diferencia con LAN Wins

Bounty Collected evalúa partido a partido (cuántos rivales exitosos derrotaste), mientras que Bounty Offered evalúa el resultado económico del evento completo.

## Cómo Funciona

El sistema toma la ventana de tiempo más reciente (los últimos 180 días) y dentro de esa ventana evalúa cada victoria del equipo.

### El Cálculo

El flujo es el siguiente:

1. **Por cada victoria**: Identificar al equipo derrotado y obtener su Bounty Offered (sus ganancias históricas).

2. **Aplicar el decay temporal**: Cuanto más reciente fue la victoria, mayor peso tiene.

3. **Aplicar el stakes modifier**: Además del tiempo, el resultado se multiplica por un factor basado en el prize pool del evento. Ganar en un evento de $100,000 cuenta más que ganar en uno de $10,000. Este modificador tiene un techo de $1,000,000 - cualquier evento con prize pool mayor a $1M se considera como $1M.

4. **Multiplicar por el bounty del oponente**: El valor de la victoria se calcula como: Bounty Offered del oponente × decay × stakes modifier.

5. **Seleccionar las mejores**: De todas las victorias con el valor calculado, quedarse con las top 10.

6. **Promediar**: Calcular el promedio de estos 10 valores.

7. **Normalizar**: Este valor se compara contra los mejores equipos del dataset para obtener un número entre 0 y 1.

## Ejemplos

### Ejemplo 1: Equipo con alto Bounty Collected
- Derrotó a un equipo que había ganado $250,000 hace 30 días
- Derrotó a un equipo que había ganado $100,000 hace 60 días
- Ambos en eventos con buen prize pool
- Resultado: `bountyCollected` alto

### Ejemplo 2: Equipo sin Bounty Collected
- Solo ha derrotado a equipos que nunca han ganado dinero
- Puede tener muchas victorias, pero contra rivales sin historial
- Resultado: `bountyCollected` bajo o cero

### Ejemplo 3: Equipo con victorias antiguas
- Derrotó a un equipo exitoso hace 170 días
- No ha derrotado a nadie relevante en 170 días
- Resultado: `bountyCollected` muy bajo

### Ejemplo 4: Equipo que juega en eventos pequeños
- Derrotó a equipos exitosos, pero en eventos con prize pool bajo
- El stakes modifier reduce el valor
- Resultado: menor que si hubiera sido en eventos grandes

## Por Qué Múltiples Factores

A diferencia de Bounty Offered (donde solo el decay afecta), Bounty Collected considera:

- **Calidad del oponente**: Derrotar a un equipo rico vale más
- **Tiempo**: Victorias recientes valen más
- **Importancia del evento**: Ganar en eventos con más prize pool vale más

Esto hace que Bounty Collected sea más rico que Bounty Offered, pero también más complejo.

## Relación con Otros Componentes

- **Bounty Offered**: Es el "otro lado". Un equipo puede tener uno alto y el otro bajo, o ambos altos/bajos.

- **Opponent Network**: Ambas miden calidad de rivales. Bounty Collected usa las ganancias del rival. Opponent Network usa cuántos equipos distintos ha derrotado el rival.

- **Prize Pool Linking**: Cuando un evento clasifica a otro (ej: un RMR se clasifica a un Major), el evento clasificatorio hereda parte del prize pool del evento principal. Si un RMR de $50,000 otorga clasificación a un Major de $1,000,000, el RMR pasa a considerarse como un evento de $550,000 ($50,000 + $1,000,000 × 0.5). Esto significa que todos los partidos del RMR se evalúan como si fueran de un evento de mayor stature. Este mecanismo aplica a Bounty Collected a través del stakes modifier.

## Nota Importante

Bounty Collected puede ser manipulable: un equipo que intencionalmente juega muchos eventos pequeños contra el mismo equipo exitoso podría inflar su score. Por esto existe el Opponent Network, que cuenta cuántos equipos distintos derrotaste, añadiendo otra dimensión de calidad.
