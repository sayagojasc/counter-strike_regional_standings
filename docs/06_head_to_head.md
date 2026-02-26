# Head-to-Head Adjustment

## Propósito

El sistema de head-to-head adjustment ajusta el rating de cada equipo basándose en los resultados de los partidos. Después de que cada equipo tiene su seeding inicial, los head-to-head son los que hacen que los ratings cambien.

## Conceptos Básicos

### Rating

El rating es un número que representa qué tan bueno es un equipo. Un número más alto significa un equipo mejor.

### Expected Value

Antes de procesar un head-to-head, el sistema calcula quién debería ganar basándose en la diferencia de ratings. Si el equipo A tiene rating 1500 y el equipo B tiene rating 1300, el sistema espera que A gane.

## Cómo Funciona

### Cálculo del Ajuste Head-to-Head

1. **Identificar resultado**: El sistema sabe qué equipo ganó y cuál perdió.

2. **Calcular expected value**: Basándose en los ratings de ambos equipos, se calcula la probabilidad de victoria de cada uno.

3. **Ajustar ratings**: 
   - El ganador obtiene un incremento en su rating
   - El perdedor obtiene una disminución en su rating
   - Cuanto más "sorpresivo" el resultado, mayor el ajuste

4. **Aplicar information content**: Los head-to-head recientes tienen más peso que los antiguos.

### Ejemplo Simple

**Antes:**
- Equipo A: rating 1500
- Equipo B: rating 1400

**El sistema espera:** A debería ganar

**Resultado:** A gana

**Después:**
- Equipo A: rating 1515 (+15)
- Equipo B: rating 1385 (-15)

El ajuste fue pequeño porque el resultado era esperado.

### Ejemplo Sorpresivo

**Antes:**
- Equipo A: rating 1500
- Equipo B: rating 1200

**El sistema espera:** A debería ganar fácil

**Resultado:** B gana

**Después:**
- Equipo B: rating 1220 (+20)
- Equipo A: rating 1480 (-20)

El ajuste fue mayor que en el ejemplo simple porque el resultado fue sorpresivo.

### Ejemplo 3: Partidos antiguos

**Antes:**
- Equipo A: rating 1500
- Equipo B: rating 1400

**Partido fue hace 170 días** (peso casi 0)

**Resultado:** A gana

**Después:**
- Equipo A: rating 1501 (+1)
- Equipo B: rating 1399 (-1)

El ajuste fue mínimo porque el partido es muy antiguo.

### Ejemplo 4: Derrota sorpresiva

**Antes:**
- Equipo A: rating 1400
- Equipo B: rating 1300

**El sistema espera:** A tiene ligera ventaja

**Resultado:** B gana

**Después:**
- Equipo B: rating 1325 (+25)
- Equipo A: rating 1375 (-25)

El ajuste es moderado porque la diferencia de rating era pequeña pero el resultado fue sorpresivo.

## Information Content

Los head-to-head recientes tienen más impacto que los antiguos:

- **Últimos 30 días**: peso completo (1.0)
- **Entre 30 y 180 días**: peso decae linealmente hasta 0
- Ejemplo: hace 10 días = peso completo, hace 170 días = peso casi 0

## Relación con Seeding

1. Primero se calcula el seeding de cada equipo
2. Luego se procesan los head-to-head en orden cronológico
3. El rating final es: seeding + ajustes por head-to-head

## Por Qué Ajusta el Rating

El sistema usa head-to-head para actualizar ratings porque:

- **Refleja resultados reales**: El seeding es una estimación inicial basada en historial, pero los head-to-head muestran el estado actual
- **Resultados sorpresivos tienen mayor peso**: Si un equipo bajo le gana a uno alto, el sistema aprende más de ese resultado
- **El tiempo importa**: Partidos recientes son más relevantes que los antiguos

## Nota Importante

El rating nunca cambia por sí solo. Un equipo con rating alto que no juega partidos mantiene su rating. Los ajustes solo ocurren cuando hay nuevos head-to-head.
