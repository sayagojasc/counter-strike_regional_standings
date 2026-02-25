# Head-to-Head Adjustment

## Propósito

El sistema de head-to-head adjustment ajusta el rating de cada equipo basándose en los resultados de los partidos. Después de que cada equipo tiene su seeding inicial, los head-to-head son los que hacen que los ratings cambien.

## Conceptos Básicos

### Rating

El rating es un número que representa qué tan bueno es un equipo. Un número más alto significa un equipo mejor.

### Expected Value

Antes de procesar un head-to-head, el sistema calcula quién debería ganar basándose en la diferencia de ratings. Si el equipo A tiene rating 1500 y el equipo B tiene rating 1300, el sistema espera que A gane.

## Cómo Funciona

### El Flujo

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
- Equipo B: rating sube mucho
- Equipo A: rating baja mucho

El ajuste fue grande porque el resultado fue sorpresivo.

## Information Content

Los head-to-head recientes tienen más impacto que los antiguos:

- Head-to-head de hace 10 días: impacto alto
- Head-to-head de hace 170 días: impacto bajo

## Incertidumbre del Oponente

Si el oponente no ha jugado en mucho tiempo, el head-to-head tiene menos impacto. Esto evita que un equipo infle su rating jugando contra rivales inactivos.

## Relación con Seeding

1. Primero se calcula el seeding de cada equipo
2. Luego se procesan los head-to-head en orden cronológico
3. El rating final es: seeding + ajustes por head-to-head
