### Roster Details<br />
Team Name: ASTRAL<br />
Roster: ASTR, meowpop, Neqy, r1ch, RaY5ive<br />
Global Rank: [93](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [66]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1029.4<br />
<br />
Final Rank Value (1029.4) = Starting Rank Value (1003.9) + Head To Head Adjustments (25.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.779[<sup>2</sup>](#table1)

The average of these factors is 0.285<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1003.9
- 400 + ( ( 0.285 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1003.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      520 | 2026-01-05 | OlyBet            | L   | 1.000      | -            | -                | -                | -         |   -19.60 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           13 |      523 | 2026-01-05 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -9.56 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           12 |      553 | 2026-01-04 | MINLATE           | W   | 1.000      | 0.314        | 0.004 (0.001)    | 0.490 (0.154)    | 1 (1.000) |    14.42 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           11 |      558 | 2026-01-04 | Friendly Campers  | W   | 1.000      | 0.314        | 0.112 (0.035)    | 0.772 (0.242)    | 1 (1.000) |    27.38 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           10 |      561 | 2026-01-04 | Fingers Crossed   | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.086 (0.027)    | 1 (1.000) |     1.78 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            9 |      565 | 2026-01-04 | SINQU             | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.086 (0.027)    | 1 (1.000) |     3.20 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            8 |      567 | 2026-01-04 | AaB               | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.617 (0.194)    | 1 (1.000) |    14.51 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            7 |      627 | 2025-12-21 | Sharks            | L   | 0.913      | -            | -                | -                | -         |    -1.86 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            6 |      640 | 2025-12-20 | USA               | W   | 0.909      | 0.309        | 0.000 (0.000)    | 0.041 (0.012)    | 1 (0.909) |     1.34 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            5 |      644 | 2025-12-20 | Ninjas in Pyjamas | L   | 0.908      | -            | -                | -                | -         |    -1.38 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            4 |      649 | 2025-12-20 | Underground       | W   | 0.907      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.907) |     0.96 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            3 |     1284 | 2025-11-20 | AM                | L   | 0.708      | -            | -                | -                | -         |    -7.55 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            2 |     1292 | 2025-11-20 | Lazer Cats        | W   | 0.707      | 0.339        | 0.001 (0.000)    | 0.188 (0.045)    | 1 (0.707) |     7.58 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            1 |     1315 | 2025-11-20 | Tricked           | L   | 0.705      | -            | -                | -                | -         |    -5.73 | ASTR, meowpop, Neqy, r1ch, RaY5ive |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
