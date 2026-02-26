# Bounty Collected - Componente de Ranking

## Propósito

El componente **Bounty Collected** busca medir la calidad de los rivales que un equipo ha derrotado. La premisa es que derrotar a equipos exitosos (que han ganado mucho dinero) es una señal de alto nivel. No es lo mismo derrotar a un equipo que nunca ha ganado nada que derrotar a uno que ha ganado $500,000 en su historial.

## Cómo Funciona

El sistema toma la ventana de tiempo más reciente (los últimos 180 días) y dentro de esa ventana evalúa cada victoria del equipo.

### Cálculo del Componente Bounty Collected

El flujo es el siguiente:

1. **Por cada victoria**: Identificar al equipo derrotado y obtener su Bounty Offered (sus ganancias históricas).

2. **Aplicar el decay temporal**: Cuanto más reciente fue la victoria, mayor peso tiene.

3. **Aplicar el stakes modifier**: El resultado se multiplica por un factor basado en el prize pool del evento. Este modificador tiene un techo de $1,000,000.

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
- No ha derrotado a nadie relevante en los últimos 170 días
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

## Nota Importante

Bounty Collected y Opponent Network usan el **stakes modifier** del evento. Este valor se ve afectado por el **Prize Pool Linking**, un mecanismo que permite que las clasificatorias hereden parte del prize pool del evento principal.
