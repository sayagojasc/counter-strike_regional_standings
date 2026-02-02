### Roster Details<br />
Team Name: ShindeN<br />
Roster: abizz, ivz, nacho, naz, tom1jed<br />
Global Rank: [76](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [19]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  1101.0<br />
<br />
Final Rank Value (1101.0) = Starting Rank Value (1001.1) + Head To Head Adjustments (99.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.106[<sup>2</sup>](#table1)
- LAN Wins: 0.372[<sup>2</sup>](#table1)

The average of these factors is 0.284<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1001.1
- 400 + ( ( 0.284 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1001.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |        9 | 2026-01-31 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -7.96 | abizz, ivz, nacho, naz, tom1jed |
|           54 |       29 | 2026-01-29 | Fluxo             | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.431 (0.160)    | 1 (1.000) |    20.43 | abizz, ivz, nacho, naz, tom1jed |
|           53 |       31 | 2026-01-29 | RED Canids        | W   | 1.000      | 0.371        | 0.026 (0.010)    | 0.685 (0.254)    | 1 (1.000) |    24.36 | abizz, ivz, nacho, naz, tom1jed |
|           52 |      131 | 2026-01-23 | Isurus            | L   | 1.000      | -            | -                | -                | -         |   -27.23 | abizz, ivz, nacho, naz, tom1jed |
|           51 |      171 | 2026-01-22 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |    -5.55 | abizz, ivz, nacho, naz, tom1jed |
|           50 |      173 | 2026-01-22 | Imperial          | W   | 1.000      | 0.143        | 0.113 (0.016)    | 0.680 (0.097)    | 0 (0.000) |    28.08 | abizz, ivz, nacho, naz, tom1jed |
|           49 |      183 | 2026-01-22 | 9z                | W   | 1.000      | 0.143        | 0.013 (0.002)    | -                | 0 (0.000) |    20.21 | abizz, ivz, nacho, naz, tom1jed |
|           48 |      208 | 2026-01-21 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |    -4.23 | abizz, ivz, nacho, naz, tom1jed |
|           47 |      225 | 2026-01-21 | Fluxo             | W   | 1.000      | 0.143        | 0.030 (0.004)    | 0.431 (0.062)    | 0 (0.000) |    24.93 | abizz, ivz, nacho, naz, tom1jed |
|           46 |      309 | 2026-01-17 | MIBR              | W   | 1.000      | 0.143        | 0.153 (0.022)    | 0.737 (0.105)    | 0 (0.000) |    29.84 | abizz, ivz, nacho, naz, tom1jed |
|           45 |      314 | 2026-01-17 | Fake do Biru      | W   | 1.000      | 0.143        | -                | 0.411 (0.059)    | -         |    15.63 | abizz, ivz, nacho, naz, tom1jed |
|           44 |     1439 | 2025-11-13 | Bounty Hunters    | L   | 0.659      | -            | -                | -                | -         |    -8.66 | abizz, BK1, ivz, nacho, naz     |
|           43 |     1487 | 2025-11-11 | Bounty Hunters    | L   | 0.649      | -            | -                | -                | -         |    -9.54 | abizz, BK1, ivz, nacho, naz     |
|           42 |     1513 | 2025-11-10 | Sharks            | L   | 0.642      | -            | -                | -                | -         |    -1.14 | abizz, BK1, ivz, nacho, naz     |
|           41 |     2047 | 2025-10-26 | BESTIA            | W   | 0.542      | 0.363        | 0.079 (0.015)    | 0.671 (0.132)    | -         |    15.21 | abizz, BK1, ivz, nacho, naz     |
|           40 |     2156 | 2025-10-24 | Galorys           | W   | 0.529      | 0.363        | -                | 0.359 (0.069)    | -         |     6.23 | abizz, BK1, ivz, nacho, naz     |
|           39 |     2382 | 2025-10-16 | Players           | L   | 0.475      | -            | -                | -                | -         |   -12.65 | abizz, BK1, ivz, nacho, naz     |
|           38 |     2415 | 2025-10-15 | ODDIK             | L   | 0.469      | -            | -                | -                | -         |    -3.74 | abizz, BK1, ivz, nacho, naz     |
|           37 |     2452 | 2025-10-14 | Procyon           | W   | 0.462      | -            | -                | -                | -         |     4.04 | abizz, BK1, ivz, nacho, naz     |
|           36 |     2532 | 2025-10-10 | R2                | L   | 0.436      | -            | -                | -                | -         |   -12.87 | abizz, BK1, ivz, nacho, naz     |
|           35 |     2535 | 2025-10-10 | BESTIA            | L   | 0.435      | -            | -                | -                | -         |    -1.48 | abizz, BK1, ivz, nacho, naz     |
|           34 |     2544 | 2025-10-10 | R2                | W   | 0.434      | -            | -                | -                | 1 (0.434) |     0.84 | abizz, BK1, ivz, nacho, naz     |
|           33 |     2584 | 2025-10-09 | KRÜ               | W   | 0.428      | -            | -                | -                | -         |     2.78 | abizz, BK1, ivz, nacho, naz     |
|           32 |     2635 | 2025-10-08 | Keyd Stars        | L   | 0.422      | -            | -                | -                | -         |    -9.22 | abizz, BK1, ivz, nacho, naz     |
|           31 |     2745 | 2025-10-06 | Vasco             | W   | 0.408      | 0.363        | -                | 0.317 (0.047)    | -         |     2.46 | abizz, BK1, ivz, nacho, naz     |
|           30 |     2823 | 2025-10-05 | Fluxo             | L   | 0.400      | -            | -                | -                | -         |    -2.31 | abizz, BK1, ivz, nacho, naz     |
|           29 |     2857 | 2025-10-04 | RED Canids        | L   | 0.395      | -            | -                | -                | -         |    -1.52 | abizz, BK1, ivz, nacho, naz     |
|           28 |     2871 | 2025-10-04 | Keyd Stars        | W   | 0.393      | -            | -                | -                | 1 (0.393) |     3.74 | abizz, BK1, ivz, nacho, naz     |
|           27 |     2934 | 2025-10-02 | Galorys           | W   | 0.382      | -            | -                | -                | 1 (0.382) |     4.57 | abizz, BK1, ivz, nacho, naz     |
|           26 |     2939 | 2025-10-02 | MIBR              | L   | 0.381      | -            | -                | -                | -         |    -0.47 | abizz, BK1, ivz, nacho, naz     |
|           25 |     2946 | 2025-10-02 | Galorys           | W   | 0.380      | -            | -                | -                | 1 (0.380) |     4.68 | abizz, BK1, ivz, nacho, naz     |
|           24 |     3520 | 2025-09-15 | RED Canids        | L   | 0.268      | -            | -                | -                | -         |    -0.95 | abizz, BK1, ivz, nacho, naz     |
|           23 |     3568 | 2025-09-14 | 9z                | W   | 0.260      | 0.371        | 0.069 (0.007)    | -                | -         |     5.46 | abizz, BK1, ivz, nacho, naz     |
|           22 |     3652 | 2025-09-12 | Galorys           | L   | 0.248      | -            | -                | -                | -         |    -4.84 | abizz, BK1, ivz, nacho, naz     |
|           21 |     3696 | 2025-09-11 | Fake do Biru      | L   | 0.242      | -            | -                | -                | -         |    -3.64 | abizz, BK1, ivz, nacho, naz     |
|           20 |     3704 | 2025-09-11 | Bounty Hunters    | W   | 0.241      | 0.371        | 0.020 (0.002)    | -                | -         |     3.69 | abizz, BK1, ivz, nacho, naz     |
|           19 |     3801 | 2025-09-09 | Sharks            | W   | 0.228      | 0.363        | 0.166 (0.014)    | 0.865 (0.072)    | -         |     6.88 | abizz, BK1, ivz, nacho, naz     |
|           18 |     3814 | 2025-09-09 | MAGICOS           | W   | 0.227      | -            | -                | -                | -         |     0.25 | abizz, BK1, ivz, nacho, naz     |
|           17 |     3854 | 2025-09-08 | MAGICOS           | W   | 0.222      | -            | -                | -                | -         |     0.25 | abizz, BK1, ivz, nacho, naz     |
|           16 |     3894 | 2025-09-07 | Galorys           | L   | 0.214      | -            | -                | -                | -         |    -4.22 | abizz, BK1, ivz, nacho, naz     |
|           15 |     3943 | 2025-09-05 | Four Magic        | W   | 0.202      | -            | -                | -                | -         |     0.49 | abizz, BK1, ivz, nacho, naz     |
|           14 |     4156 | 2025-08-26 | Fluxo             | L   | 0.135      | -            | -                | -                | -         |    -0.71 | abizz, BK1, ivz, nacho, naz     |
|           13 |     4258 | 2025-08-20 | Gaimin Gladiators | W   | 0.095      | -            | -                | -                | -         |     0.94 | abizz, BK1, ivz, nacho, naz     |
|           12 |     4303 | 2025-08-18 | Keyd Stars        | L   | 0.081      | -            | -                | -                | -         |    -1.84 | abizz, BK1, ivz, nacho, naz     |
|           11 |     4355 | 2025-08-16 | FURIA fe          | W   | 0.069      | -            | -                | -                | -         |     0.64 | abizz, BK1, ivz, nacho, naz     |
|           10 |     4377 | 2025-08-16 | GameHunters       | L   | 0.067      | -            | -                | -                | -         |    -1.95 | abizz, BK1, ivz, nacho, naz     |
|            9 |     4382 | 2025-08-16 | X7                | W   | 0.066      | -            | -                | -                | -         |     0.07 | abizz, BK1, ivz, nacho, naz     |
|            8 |     4407 | 2025-08-15 | LP                | W   | 0.062      | -            | -                | -                | -         |     0.33 | abizz, BK1, ivz, nacho, naz     |
|            7 |     4425 | 2025-08-15 | Yawara            | W   | 0.060      | -            | -                | -                | -         |     0.78 | abizz, BK1, ivz, nacho, naz     |
|            6 |     4501 | 2025-08-13 | Crashers          | W   | 0.048      | -            | -                | -                | -         |     0.12 | abizz, BK1, ivz, nacho, naz     |
|            5 |     4507 | 2025-08-13 | GameHunters       | W   | 0.048      | -            | -                | -                | -         |     0.11 | abizz, BK1, ivz, nacho, naz     |
|            4 |     4552 | 2025-08-12 | Imperial          | L   | 0.042      | -            | -                | -                | -         |    -0.06 | abizz, BK1, ivz, nacho, naz     |
|            3 |     4607 | 2025-08-11 | Gaimin Gladiators | L   | 0.035      | -            | -                | -                | -         |    -0.76 | abizz, BK1, ivz, nacho, naz     |
|            2 |     4655 | 2025-08-10 | Keyd Stars        | L   | 0.027      | -            | -                | -                | -         |    -0.62 | abizz, BK1, ivz, nacho, naz     |
|            1 |     4701 | 2025-08-08 | Crashers          | W   | 0.013      | -            | -                | -                | -         |     0.03 | abizz, BK1, ivz, nacho, naz     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,725.23)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-01 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-11-15 |      0.675 | $1,000.00      | $675.37         |
| 2025-10-19 |      0.496 | $1,000.00      | $495.53         |
| 2025-10-05 |      0.402 | $700.00        | $281.39         |
| 2025-09-16 |      0.275 | $750.00        | $206.44         |
| 2025-08-19 |      0.089 | $750.00        | $66.50          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
