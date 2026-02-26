# AGENTS.md - Counter-Strike Regional Standings

## Project Overview

This is a pure JavaScript (Node.js) project that generates regional standings for Counter-Strike teams based on match results. It uses a Glicko rating system combined with custom seeding modifiers to rank teams.

The system evaluates teams over a **180-day window** with a **30-day grace period** for recent results:
- **180-day window**: Only matches within the last 180 days are considered
- **30-day grace period**: Matches in the last 30 days have full weight (1.0), while older matches have reduced weight due to time decay

## Build, Lint, and Test Commands

### Running the Model

```bash
# From the model/ directory
node main.js [regions] [dataFile] [date]

# Examples:
node main.js                    # Run all regions with default data
node main.js '[0]'              # Run only Europe (region 0)
node main.js '[0,1]'            # Run Europe and Americas
node main.js '[0]' '../data/custom.json'  # Custom data file
node main.js '[0]' '../data/matchdata.json' '2024-01-15'  # Custom date
```

**Region codes:** 0 = Europe, 1 = Americas, 2 = Asia

### Model Fitting

```bash
# Run model fitting (evaluates model accuracy)
node main_fit.js
```

### Testing

There are **no automated tests** in this project. To verify changes:

1. Run the model and compare output against known standings
2. Check the generated markdown tables for correctness
3. Manually validate ranking calculations

### Linting/Formatting

No linting or formatting tools are configured. Manual code review is required.

---

## Code Style Guidelines

### General Principles

- All files must start with `"use strict";`
- Use 4 spaces for indentation (not tabs)
- Keep lines under 120 characters when practical
- No trailing whitespace

### Imports and Exports

```javascript
// Imports go at the top of the file
const Ranking = require('./ranking');
const Report = require('./report');

// Exports go at the bottom or as module.exports object
module.exports = {
    generateRanking: generateRanking,
};
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Classes | PascalCase | `class Team`, `class GlickoTeam` |
| Functions | camelCase | `function generateRanking()` |
| Variables | camelCase | `let matches = []` |
| Constants | ALL_CAPS | `const MIN_SEEDED_RANK = 400` |
| Private fields | m prefix | `this.mRank`, `this.mRD` |

### Class Syntax

This codebase uses a mix of styles. Prefer ES6 classes for new code:

```javascript
class Team {
    constructor(rosterId, name, players) {
        this.rosterId = rosterId;
        this.name = name;
    }

    methodName() {
        // implementation
    }
}
```

For Glicko-style internal classes, maintain the existing pattern with `m` prefix for member variables.

### Functions

```javascript
// Named function declarations (preferred)
function generateRanking(versionTimestamp, filename) {
    // function body
}

// Method shorthand in objects
module.exports = {
    generateRanking: generateRanking,
};
```

### Error Handling

```javascript
// Throw errors with descriptive messages
if (nth < 1) {
    throw new Error("nth < 1");
}

if (arr.length === 0) {
    throw new Error("attempting to get Nth highest from empty list");
}
```

### Data Structures

```javascript
// Use Map for key-value lookups
this.eventMap = new Map();

// Use arrays with descriptive names
let teams = [];
let matches = [];

// Object literals for structured data
const SEED_MODIFIER_FACTORS = {
    bountyCollected: 1,
    bountyOffered: 1,
    opponentNetwork: 1,
};
```

### Calculations and Math

- Use descriptive variable names for calculation results
- Add comments for complex formulas (e.g., Glicko rating calculations)
- Document magic numbers with constants

```javascript
const Q = Math.log(10) / 400;  // Scale factor for Glicko probability calculations
const C = 34.6;                // RD decay constant (currently disabled - system uses fixed RD)
const ONE_OVER_PI_SQUARED = 1 / (Math.PI * Math.PI);  // Mathematical constant for Glicko
```

### Commenting Guidelines

All new functions should have JSDoc-style comments in **Spanish** explaining:

1. **What the function does** - Clear description of purpose
2. **Parameters** - What each parameter means and its type
3. **Return value** - What the function returns
4. **Edge cases** - What happens with invalid inputs (throw errors)

Example:

```javascript
/**
 * Remapea un valor de un rango de entrada a un rango de salida de forma lineal.
 * 
 * Si el valor está fuera del rango de entrada, se "clampa" (limita) al valor más cercano
 * del rango de salida en lugar de extrapolar.
 * 
 * Ejemplo: remapValueClamped(50, 0, 100, 0, 1000) retorna 500 (50% del rango)
 * Ejemplo: remapValueClamped(150, 0, 100, 0, 1000) retorna 1000 (clamp, excede el máximo)
 * 
 * @param {number} val - El valor a remapear
 * @param {number} inStart - Inicio del rango de entrada
 * @param {number} inEnd - Fin del rango de entrada
 * @param {number} outStart - Inicio del rango de salida
 * @param {number} outEnd - Fin del rango de salida
 * @returns {number} El valor remapeado en el rango de salida
 */
```

**Important concepts to document clearly:**

- **outlierCount**: Ignora los N valores más altos (los mejores equipos) al normalizar. Ej: Si outlierCount=5, el 6to mejor equipo define el máximo.
- **informationContent**: Factor (0-1) que determina cuánto peso tiene un partido en la actualización del rating Glicko. Partidos recientes = peso completo (1), partidos antiguos = peso reducido.
- **grace period**: Período de 30 días al final de la ventana de tiempo donde los partidos tienen peso completo. Permite que datos recientes se estabilicen antes de influir plenamente en el rating.
- **Seeding factors**: bountyOffered (ganancias propias), bountyCollected (calidad de rivales derrotados), opponentNetwork (diversidad de rivales), lanFactor (victorias LAN). ownNetwork está deshabilitado (peso 0).

### File Organization

```
model/
├── main.js           # Entry point
├── main_fit.js       # Model fitting/evaluation
├── ranking.js        # Main ranking logic
├── team.js           # Team class and seeding calculations
├── glicko.js         # Glicko rating system implementation
├── data_loader.js    # Data loading and parsing
├── report.js         # Output generation
├── ranking_context.js # Ranking parameters and time windows
├── fit.js            # Model fitting utilities
├── table.js          # Table generation
├── util/
│   ├── nth_highest.js
│   ├── region.js
│   └── remap_value_clamped.js
```

---

## Seeding Components

The ranking system uses 5 seeding factors (defined in `ranking.js`):

| Factor | Weight | Description |
|--------|--------|-------------|
| `bountyCollected` | 1 | Quality of opponents defeated (based on opponent's prize earnings) |
| `bountyOffered` | 1 | Team's own prize earnings |
| `opponentNetwork` | 1 | Diversity of opponents defeated (distinct teams faced) |
| `ownNetwork` | 0 | Disabled (set to 0, not used) |
| `lanFactor` | 1 | LAN event victories |

**Important**: All values are **normalized against the best teams** before being used in seeding. This means each metric is scaled relative to the top-performing teams, not absolute values.

See `docs/` folder for detailed documentation on each component.

---

## Existing Patterns to Follow

1. **Chained setters**: Return `this` for builder patterns
   ```javascript
   rankingContext.setHveMod(1).setOutlierCount(5);
   ```

2. **Filtering**: Use functional array methods
   ```javascript
   teams = teams.filter(t => t.distinctTeamsDefeated > 0);
   matches = matches.filter(match => /* condition */);
   ```

3. **Sorting**: Use explicit compare functions
   ```javascript
   teams.sort((a, b) => b.rankValue - a.rankValue);
   ```

4. **Type checking**: Check for undefined explicitly
   ```javascript
   if (prizeEntry === undefined) {
       return 0;
   }
   ```

---

## Working with This Codebase

### Documentation

Detailed documentation for each ranking component is available in the `docs/` folder:

- `docs/lan_wins.md` - LAN Wins component
- `docs/bounty_offered.md` - Bounty Offered component
- `docs/bounty_collected.md` - Bounty Collected component
- `docs/opponent_network.md` - Opponent Network component
- `docs/seeding_inicial.md` - Seeding overview
- `docs/head_to_head.md` - Head-to-Head adjustment

### Adding New Features

1. Identify the appropriate module (e.g., `team.js` for team-related features)
2. Follow the existing code style and patterns
3. Add JSDoc-style comments in Spanish for all new functions (see Commenting Guidelines)
4. Test manually by running the model
5. Update this file if adding new conventions

### Debugging

- Use `console.log` for debugging (no logging framework)
- Check `model/main.js` for command-line argument handling
- Input data is in JSON format under `../data/`

### Common Tasks

- **Modify ranking algorithm**: Edit `ranking.js` or `team.js`
- **Add new region**: Update `RegionList` in `main.js` and region mapping in `util/region.js`
- **Change seeding factors**: Modify `SEED_MODIFIER_FACTORS` in `ranking.js`
- **Adjust time windows**: Edit `data_loader.js` filter logic (180-day window and 30-day grace period)
- **Understand outlier normalization**: See `ranking_context.js` - outliers ignore top N teams, not values below N
- **Debug information content**: See `calculateMatchInformationContent` in `data_loader.js` - determines match weight in rating updates

### Important Notes

- **DO NOT push to upstream** - Only push to your fork (origin)
- **Ask before committing** - Don't commit changes without explicit permission
- **Sparse checkout** - The repo uses sparse checkout; new files may need manual handling

## Git Operations

**IMPORTANT**: Only execute git commands (commit, push, pull, merge, branch, etc.) when explicitly requested by the user. Do NOT perform any git operations on your own initiative.
