# AGENTS.md - Documentación

## Estilo General

- Lenguaje natural desde visión de arquitecto
- Pseudo-código, sin referencias directas al código
- Español, excepto términos técnicos del dominio (LAN, Bounty, etc.)
- Mismo espíritu para todos los componentes del ranking

## Fechas y Tiempos

- **180 días** (no "6 meses aproximada mente") - es exacto
- **30 días** (no "un mes") - es exacto
- No usar "aproximadamente" cuando el valor es exacto

## Normalización

Solo algunos componentes se normalizan contra los mejores equipos:

- **LAN Wins**: Se normaliza contra los mejores equipos del dataset
- **Bounty Offered**: Se normaliza contra los mejores equipos del dataset
- **Own Network**: Se normaliza contra los mejores equipos del dataset

Los siguientes NO se normalizan contra otros equipos:

- **Bounty Collected**: Se calcula directamente de las victorias
- **Opponent Network**: Se calcula directamente de las victorias (usa el Own Network del oponente que ya está normalizado)

Al hablar de normalización, aclarar: "se compara contra los mejores equipos del dataset" o "no se normaliza contra otros equipos"

## Componentes

### LAN Wins
- Solo el decay afecta a este componente
- Las "mejores" son las más recientes (sin otros modificadores)
- Mencionar período de gracia de 30 días
- Se normaliza contra los mejores equipos

### Bounty Offered
- Evalúa resultado económico del evento completo
- No evalúa placement, solo cuánto dinero se ganó
- Solo el decay afecta, no importa si es LAN/online
- NO mencionar Prize Pool Linking (eso es para Bounty Collected)
- Comparar valores absolutos ($10,000 vs $100,000)
- Se normaliza contra los mejores equipos

### Bounty Collected
- Evalúa cuánto habían ganado los rivales derrotados
- Se afecta por Prize Pool Linking (el evento hereda parte del prize pool del evento padre)
- NO se normaliza contra otros equipos (usa el Bounty Offered del oponente)
- Stakes modifier tiene techo de $1,000,000

### Opponent Network
- NO se normaliza contra otros equipos (usa el Own Network del opponent que ya está normalizado)
- Explicar qué es Own Network y para qué sirve
- Own Network se usa cuando otros equipos te derrotan, no afecta tu propio ranking
- Las 10 mejores victorias deben ser contra rivales con alto Own Network

### Own Network
- Explicar cálculo: última victoria por rival + decay + suma total + normaliza
- NO se usa para el ranking propio, solo se usa cuando otros equipos te derrotan

## Ejemplos

Usar ejemplos con fechas concretas dentro de los 180 días:
- 30 días = peso casi 1.0
- 170 días = peso casi 0
- 10 días = reciente

Títulos claros para ejemplos:
- "Equipo que vence a rivales con alto Own Network"
- "Equipo que vence a rivales con bajo Own Network"
- Evitar títulos confusos o redundantes

## Estructura Recomendada

1. Propósito (qué mide y por qué)
2. [Qué es X] (si el componente usa una métrica de otro equipo, explicar qué es)
3. [Para qué sirve X] (cómo se usa esa métrica)
4. Cómo Funciona (flujo general)
5. El Cálculo (pseudo-código, pasos numerados)
6. Ejemplos (4 casos representativos con títulos claros)
7. Por Qué [característica] (explicación de diseño, cuando aplica)
8. Relación con Otros Componentes
9. Nota Importante (si aplica)

## Errores Comunes a Evitar

- Decir "se normaliza" sin especificar qué se compara
- Confundir Bounty Offered con Bounty Collected
- Decir que Opponent Network evalúa "diversidad de rivales propios"
- Olvidar que Own Network no afecta el ranking del equipo propio
- Mencionar Prize Pool Linking en Bounty Offered

## Archivos de Documentación

- `lan_wins.md` - Componente LAN Wins
- `bounty_offered.md` - Componente Bounty Offered
- `bounty_collected.md` - Componente Bounty Collected
- `opponent_network.md` - Componente Opponent Network
- `seeding_inicial.md` - Visión general del seeding
- `head_to_head.md` - Ajuste por head-to-head
