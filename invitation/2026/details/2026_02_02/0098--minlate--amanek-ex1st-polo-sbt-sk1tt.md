### Roster Details<br />
Team Name: MINLATE<br />
Roster: amanek, ex1st, POLO, SBT, sk1tt<br />
Global Rank: [98](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [69]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  996.1<br />
<br />
Final Rank Value (996.1) = Starting Rank Value (1100.2) + Head To Head Adjustments (-104.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.085[<sup>2</sup>](#table1)
- LAN Wins: 0.701[<sup>2</sup>](#table1)

The average of these factors is 0.330<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1100.2
- 400 + ( ( 0.330 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1100.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      121 | 2026-01-24 | kONO             | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.487 (0.070)    | 0 (0.000) |    12.34 | amanek, ex1st, POLO, SBT, sk1tt |
|           26 |      136 | 2026-01-23 | Eternal Fire     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.442 (0.063)    | 0 (0.000) |     7.78 | amanek, ex1st, POLO, SBT, sk1tt |
|           25 |      195 | 2026-01-22 | MASONIC          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.334 (0.048)    | -         |     7.88 | amanek, ex1st, POLO, SBT, sk1tt |
|           24 |      221 | 2026-01-21 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |   -23.76 | amanek, ex1st, POLO, SBT, sk1tt |
|           23 |      338 | 2026-01-17 | Betclic          | L   | 1.000      | -            | -                | -                | -         |   -15.67 | amanek, ex1st, POLO, SBT, sk1tt |
|           22 |      377 | 2026-01-16 | ARCRED           | L   | 1.000      | -            | -                | -                | -         |   -16.81 | amanek, ex1st, POLO, SBT, sk1tt |
|           21 |      399 | 2026-01-16 | SAW              | W   | 1.000      | 0.341        | 0.000 (0.000)    | 0.086 (0.029)    | 1 (1.000) |     4.88 | amanek, ex1st, POLO, SBT, sk1tt |
|           20 |      413 | 2026-01-16 | DimoniX          | W   | 1.000      | 0.341        | 0.000 (0.000)    | -                | 1 (1.000) |     0.95 | amanek, ex1st, POLO, SBT, sk1tt |
|           19 |      445 | 2026-01-15 | STATE            | W   | 1.000      | 0.384        | 0.004 (0.002)    | 0.502 (0.193)    | -         |    20.93 | amanek, ex1st, POLO, SBT, sk1tt |
|           18 |      462 | 2026-01-14 | ARCRED           | L   | 1.000      | -            | -                | -                | -         |   -16.38 | amanek, ex1st, POLO, SBT, sk1tt |
|           17 |      553 | 2026-01-04 | ASTRAL           | L   | 1.000      | -            | -                | -                | -         |   -14.42 | amanek, ex1st, POLO, SBT, sk1tt |
|           16 |      556 | 2026-01-04 | Fingers Crossed  | W   | 1.000      | 0.314        | -                | 0.086 (0.027)    | 1 (1.000) |     1.66 | amanek, ex1st, POLO, SBT, sk1tt |
|           15 |      559 | 2026-01-04 | AaB              | L   | 1.000      | -            | -                | -                | -         |   -18.18 | amanek, ex1st, POLO, SBT, sk1tt |
|           14 |      566 | 2026-01-04 | Friendly Campers | L   | 1.000      | -            | -                | -                | -         |    -4.26 | amanek, ex1st, POLO, SBT, sk1tt |
|           13 |      568 | 2026-01-04 | SINQU            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.73 | amanek, ex1st, POLO, SBT, sk1tt |
|           12 |      625 | 2025-12-21 | los kogutos      | L   | 0.914      | -            | -                | -                | -         |   -18.94 | amanek, ex1st, POLO, SBT, sk1tt |
|           11 |      631 | 2025-12-21 | Phantom          | L   | 0.912      | -            | -                | -                | -         |   -13.07 | amanek, ex1st, POLO, SBT, sk1tt |
|           10 |      655 | 2025-12-20 | los kogutos      | W   | 0.906      | 0.296        | 0.003 (0.001)    | 0.550 (0.147)    | 1 (0.906) |     8.42 | amanek, ex1st, POLO, SBT, sk1tt |
|            9 |     1286 | 2025-11-20 | illwill          | L   | 0.707      | -            | -                | -                | -         |    -8.65 | amanek, ex1st, POLO, SBT, sk1tt |
|            8 |     1306 | 2025-11-20 | GenOne           | L   | 0.706      | -            | -                | -                | -         |   -12.34 | amanek, ex1st, POLO, SBT, sk1tt |
|            7 |     1311 | 2025-11-20 | illwill          | W   | 0.705      | 0.339        | 0.006 (0.001)    | 0.830 (0.198)    | 1 (0.705) |    13.56 | amanek, ex1st, POLO, SBT, sk1tt |
|            6 |     1853 | 2025-11-02 | Nemesis          | L   | 0.586      | -            | -                | -                | -         |   -12.30 | amanek, ex1st, POLO, SBT, sk1tt |
|            5 |     1877 | 2025-11-01 | Prestige         | W   | 0.581      | 0.309        | 0.002 (0.000)    | 0.163 (0.029)    | 1 (0.581) |     4.36 | amanek, ex1st, POLO, SBT, sk1tt |
|            4 |     1886 | 2025-11-01 | Nemesis          | W   | 0.580      | 0.309        | 0.013 (0.002)    | 0.280 (0.050)    | 1 (0.580) |     5.91 | amanek, ex1st, POLO, SBT, sk1tt |
|            3 |     3502 | 2025-09-16 | KHAN             | L   | 0.274      | -            | -                | -                | -         |    -8.07 | amanek, ex1st, POLO, SBT, sk1tt |
|            2 |     3570 | 2025-09-14 | CPH Wolves       | L   | 0.260      | -            | -                | -                | -         |    -6.54 | amanek, ex1st, POLO, SBT, sk1tt |
|            1 |     3620 | 2025-09-13 | FORZE Reload     | L   | 0.253      | -            | -                | -                | -         |    -6.14 | amanek, ex1st, POLO, SBT, sk1tt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,421.58)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      0.914 | $627.00        | $573.28         |
| 2025-11-02 |      0.586 | $1,447.00      | $848.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
