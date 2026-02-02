### Roster Details<br />
Team Name: Wildcard<br />
Roster: F1KU, JBa, Peeping, phzy, stanislaw<br />
Global Rank: [119](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [26]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  923.3<br />
<br />
Final Rank Value (923.3) = Starting Rank Value (860.2) + Head To Head Adjustments (63.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.141[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 860.2
- 400 + ( ( 0.217 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 860.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |     2305 | 2025-10-19 | Rave              | L   | 0.496      | -            | -                | -                | -         |    -6.82 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           35 |     2321 | 2025-10-18 | Marsborne         | W   | 0.489      | 0.363        | 0.044 (0.008)    | 0.648 (0.115)    | 0 (0.000) |    13.76 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           34 |     2372 | 2025-10-16 | Voca              | W   | 0.476      | 0.363        | 0.048 (0.008)    | 0.535 (0.092)    | 0 (0.000) |    10.70 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           33 |     2410 | 2025-10-15 | regain            | W   | 0.469      | 0.363        | -                | 0.330 (0.056)    | 0 (0.000) |     4.44 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           32 |     2448 | 2025-10-14 | Marsborne         | L   | 0.463      | -            | -                | -                | -         |    -1.32 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           31 |     2621 | 2025-10-08 | Phoenix           | W   | 0.423      | -            | -                | -                | 0 (0.000) |     3.68 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           30 |     2735 | 2025-10-06 | Mythic            | W   | 0.409      | -            | -                | -                | 0 (0.000) |     3.04 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           29 |     2744 | 2025-10-06 | Zomblers          | L   | 0.408      | -            | -                | -                | -         |    -9.91 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           28 |     2859 | 2025-10-04 | OG                | L   | 0.395      | -            | -                | -                | -         |    -2.11 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           27 |     2874 | 2025-10-04 | CPH Wolves        | W   | 0.393      | 0.333        | -                | 0.658 (0.086)    | 1 (0.393) |     5.79 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           26 |     3193 | 2025-09-26 | Betclic           | L   | 0.341      | -            | -                | -                | -         |    -7.56 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           25 |     3213 | 2025-09-26 | Phantom           | L   | 0.339      | -            | -                | -                | -         |    -7.40 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           24 |     3223 | 2025-09-26 | MOUZ NXT          | W   | 0.338      | 0.354        | 0.018 (0.002)    | 0.979 (0.117)    | 1 (0.338) |     9.94 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           23 |     3317 | 2025-09-22 | Marsborne         | W   | 0.316      | 0.363        | 0.044 (0.005)    | 0.648 (0.074)    | -         |     9.11 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           22 |     3335 | 2025-09-21 | Voca              | W   | 0.310      | 0.363        | 0.048 (0.005)    | 0.535 (0.060)    | -         |     7.22 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           21 |     3393 | 2025-09-19 | Rave              | W   | 0.296      | 0.363        | 0.048 (0.005)    | 0.480 (0.052)    | -         |     5.52 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           20 |     3427 | 2025-09-18 | Aether            | W   | 0.289      | -            | -                | -                | -         |     2.12 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           19 |     3459 | 2025-09-17 | Voca              | L   | 0.283      | -            | -                | -                | -         |    -2.24 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           18 |     3548 | 2025-09-14 | Marsborne         | L   | 0.263      | -            | -                | -                | -         |    -0.67 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           17 |     3555 | 2025-09-14 | BOSS              | W   | 0.261      | 0.303        | -                | 0.437 (0.035)    | -         |     3.84 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           16 |     3600 | 2025-09-13 | barry pickers     | W   | 0.255      | -            | -                | -                | -         |     0.51 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           15 |     3689 | 2025-09-11 | Akimbo            | W   | 0.243      | -            | -                | -                | -         |     1.67 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           14 |     3793 | 2025-09-09 | Nocturnal         | W   | 0.229      | -            | -                | -                | -         |     1.65 | JBa, Peeping, phzy, Sonic, stanislaw  |
|           13 |     3888 | 2025-09-07 | ODDIK             | W   | 0.215      | 0.333        | 0.046 (0.003)    | 0.588 (0.042)    | 1 (0.215) |     5.79 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           12 |     3893 | 2025-09-07 | Ninjas in Pyjamas | L   | 0.214      | -            | -                | -                | -         |    -0.16 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           11 |     3908 | 2025-09-06 | Fluxo             | W   | 0.209      | 0.333        | 0.030 (0.002)    | -                | 1 (0.209) |     6.01 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           10 |     3923 | 2025-09-06 | powerFinesse      | W   | 0.207      | -            | -                | -                | 1 (0.207) |     0.45 | F1KU, JBa, Peeping, phzy, stanislaw   |
|            9 |     4025 | 2025-08-30 | Voca              | L   | 0.163      | -            | -                | -                | -         |    -1.16 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            8 |     4103 | 2025-08-28 | regain            | W   | 0.149      | -            | -                | -                | -         |     1.47 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            7 |     4230 | 2025-08-21 | Voca              | W   | 0.103      | 0.333        | 0.048 (0.002)    | -                | -         |     2.52 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            6 |     4287 | 2025-08-19 | BOSS              | W   | 0.089      | -            | -                | -                | -         |     1.38 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            5 |     4352 | 2025-08-16 | Voca              | L   | 0.069      | -            | -                | -                | -         |    -0.48 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            4 |     4397 | 2025-08-15 | NRG               | L   | 0.062      | -            | -                | -                | -         |    -0.04 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            3 |     4448 | 2025-08-14 | M80               | W   | 0.055      | 0.333        | 0.114 (0.002)    | -                | -         |     1.72 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            2 |     4494 | 2025-08-13 | TSG               | W   | 0.049      | -            | -                | -                | -         |     0.21 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            1 |     4547 | 2025-08-12 | Phoenix           | W   | 0.043      | -            | -                | -                | -         |     0.41 | fr3nd, JBa, Peeping, Sonic, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,471.89)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      0.496 | $4,000.00      | $1,985.43       |
| 2025-10-08 |      0.422 | $250.00        | $105.56         |
| 2025-09-22 |      0.316 | $8,000.00      | $2,529.31       |
| 2025-09-14 |      0.263 | $1,000.00      | $262.86         |
| 2025-09-07 |      0.216 | $1,300.00      | $280.91         |
| 2025-09-02 |      0.183 | $1,000.00      | $183.00         |
| 2025-08-15 |      0.062 | $2,000.00      | $124.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
