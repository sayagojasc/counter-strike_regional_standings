# AGENTS.md - Documentación

## Estilo General

- Lenguaje natural desde visión de arquitecto
- Pseudo-código, sin referencias directas al código
- Español, excepto términos técnicos del dominio (LAN, Bounty, etc.)
- Mismo espíritu para todos los componentes del ranking

## Estructura para Componentes

Cada archivo de componente debe tener:

1. **Propósito**: Qué mide y por qué existe
2. **Cómo Funciona**: Explicación general del flujo
   - **Cálculo del Componente [Nombre]**: Pasos numerados del algoritmo
3. **Por Qué [característica]**: Explicación de decisiones de diseño
4. **Ejemplos**: 4 casos representativos con títulos **Nota Importante**: Información adicional relevante

## Fechas y T claros
5.iempos

- **180 días** (no "6 meses")
- **30 días** (no "un mes")
- Usar valores exactos, no aproximaciones

## Conceptos Generales (Aplican a Todos los Componentes)

Estos conceptos están explicados en detalle en `01_seeding_inicial.md`:

- **Ventana de tiempo**: 180 días
- **Decay**: Penalización temporal
- **Período de gracia**: 30 días con peso completo
- **Top 10**: Selección de mejores victorias
- **Normalización**: Componentes que se normalizan vs los que no

## Errores Comunes a Evitar

- Decir "se normaliza" sin especificar contra qué se compara
- Confundir Bounty Offered con Bounty Collected
- Decir que Opponent Network evalúa "diversidad de rivales propios"
- Olvidar que Own Network no afecta el ranking del equipo propio
- Mencionar Prize Pool Linking en Bounty Offered
- Usar "LANes" → usar "LAN" o "LANs"
- Errores ortográficos en español

## Archivos de Documentación

- `01_seeding_inicial.md` - Visión general y conceptos generales
- `02_lan_wins.md` - Componente LAN Wins
- `03_bounty_offered.md` - Componente Bounty Offered
- `04_bounty_collected.md` - Componente Bounty Collected
- `05_opponent_network.md` - Componente Opponent Network
- `06_head_to_head.md` - Ajuste por head-to-head
