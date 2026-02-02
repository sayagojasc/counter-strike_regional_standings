### Roster Details<br />
Team Name: RED Canids<br />
Roster: chayJESUS, dav1deuS, drop, history, kauez<br />
Global Rank: [42](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [11]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  1313.4<br />
<br />
Final Rank Value (1313.4) = Starting Rank Value (1376.8) + Head To Head Adjustments (-63.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.403[<sup>2</sup>](#table1)
- Opponent Network: 0.147[<sup>2</sup>](#table1)
- LAN Wins: 0.906[<sup>2</sup>](#table1)

The average of these factors is 0.461<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1376.8
- 400 + ( ( 0.461 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1376.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |        0 | 2026-02-01 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -7.17 | chayJESUS, dav1deuS, drop, history, kauez  |
|           56 |        1 | 2026-02-01 | BESTIA            | W   | 1.000      | 0.371        | 0.079 (0.029)    | 0.671 (0.249)    | 1 (1.000) |    18.18 | chayJESUS, dav1deuS, drop, history, kauez  |
|           55 |        9 | 2026-01-31 | ShindeN           | W   | 1.000      | 0.371        | -                | 0.502 (0.186)    | 1 (1.000) |     7.96 | chayJESUS, dav1deuS, drop, history, kauez  |
|           54 |       11 | 2026-01-31 | Fluxo             | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.431 (0.160)    | 1 (1.000) |    11.58 | chayJESUS, dav1deuS, drop, history, kauez  |
|           53 |       30 | 2026-01-29 | OUTPLAYED         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.49 | chayJESUS, dav1deuS, drop, history, kauez  |
|           52 |       31 | 2026-01-29 | ShindeN           | L   | 1.000      | -            | -                | -                | -         |   -24.36 | chayJESUS, dav1deuS, drop, history, kauez  |
|           51 |       86 | 2026-01-25 | 9z                | L   | 1.000      | -            | -                | -                | -         |   -22.07 | chayJESUS, dav1deuS, drop, history, kauez  |
|           50 |       96 | 2026-01-24 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -7.97 | chayJESUS, dav1deuS, drop, history, kauez  |
|           49 |      106 | 2026-01-24 | GameHunters       | W   | 1.000      | 0.384        | -                | 0.328 (0.126)    | 1 (1.000) |     0.86 | chayJESUS, dav1deuS, drop, history, kauez  |
|           48 |      123 | 2026-01-23 | BESTIA            | W   | 1.000      | 0.143        | 0.079 (0.011)    | 0.671 (0.096)    | -         |    17.36 | chayJESUS, dav1deuS, drop, history, kauez  |
|           47 |      133 | 2026-01-23 | BESTIA Academy    | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.66 | chayJESUS, dav1deuS, drop, history, kauez  |
|           46 |      172 | 2026-01-22 | A FUNDAÇÃO        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.18 | chayJESUS, dav1deuS, drop, history, kauez  |
|           45 |      176 | 2026-01-22 | BESTIA            | W   | 1.000      | 0.143        | 0.079 (0.011)    | -                | -         |    18.71 | chayJESUS, dav1deuS, drop, history, kauez  |
|           44 |      185 | 2026-01-22 | BESTIA Academy    | L   | 1.000      | -            | -                | -                | -         |   -30.89 | chayJESUS, dav1deuS, drop, history, kauez  |
|           43 |      209 | 2026-01-21 | Imperial          | W   | 1.000      | 0.143        | 0.113 (0.016)    | 0.680 (0.097)    | -         |    22.37 | chayJESUS, dav1deuS, drop, history, kauez  |
|           42 |      224 | 2026-01-21 | Sharks            | W   | 1.000      | 0.143        | 0.166 (0.024)    | 0.865 (0.124)    | -         |    23.12 | chayJESUS, dav1deuS, drop, history, kauez  |
|           41 |      307 | 2026-01-17 | FOLHA AMARELA     | W   | 1.000      | -            | -                | -                | -         |     1.53 | chayJESUS, dav1deuS, drop, history, kauez  |
|           40 |      310 | 2026-01-17 | Four Magic        | W   | 1.000      | -            | -                | -                | -         |     0.60 | chayJESUS, dav1deuS, drop, history, kauez  |
|           39 |     1100 | 2025-11-26 | FaZe              | L   | 0.747      | -            | -                | -                | -         |    -2.01 | chayJESUS, drop, history, kauez, venomzera |
|           38 |     1129 | 2025-11-25 | Legacy            | L   | 0.739      | -            | -                | -                | -         |    -2.06 | chayJESUS, drop, history, kauez, venomzera |
|           37 |     1144 | 2025-11-24 | GamerLegion       | W   | 0.735      | 0.624        | 0.430 (0.197)    | 0.509 (0.234)    | 1 (0.735) |    19.90 | chayJESUS, drop, history, kauez, venomzera |
|           36 |     1153 | 2025-11-24 | fnatic            | L   | 0.734      | -            | -                | -                | -         |    -5.73 | chayJESUS, drop, history, kauez, venomzera |
|           35 |     1615 | 2025-11-08 | Eternal Fire      | L   | 0.625      | -            | -                | -                | -         |   -19.20 | chayJESUS, drop, history, kauez, venomzera |
|           34 |     1636 | 2025-11-07 | Yawara            | L   | 0.621      | -            | -                | -                | -         |   -17.57 | chayJESUS, drop, history, kauez, venomzera |
|           33 |     1646 | 2025-11-07 | Keyd Stars        | L   | 0.620      | -            | -                | -                | -         |   -17.56 | chayJESUS, drop, history, kauez, venomzera |
|           32 |     1693 | 2025-11-07 | MIBR Academy      | W   | 0.619      | -            | -                | -                | 1 (0.619) |     0.20 | chayJESUS, drop, history, kauez, venomzera |
|           31 |     1694 | 2025-11-07 | Leo               | L   | 0.619      | -            | -                | -                | -         |   -18.04 | chayJESUS, drop, history, kauez, venomzera |
|           30 |     2306 | 2025-10-19 | Gaimin Gladiators | L   | 0.496      | -            | -                | -                | -         |   -14.31 | chayJESUS, drop, history, kauez, venomzera |
|           29 |     2346 | 2025-10-17 | Dusty Roots       | W   | 0.482      | -            | -                | -                | -         |     1.01 | chayJESUS, drop, history, kauez, venomzera |
|           28 |     2392 | 2025-10-16 | Bounty Hunters    | L   | 0.473      | -            | -                | -                | -         |   -13.62 | chayJESUS, drop, history, kauez, venomzera |
|           27 |     2451 | 2025-10-14 | ODDIK             | W   | 0.462      | 0.363        | 0.046 (0.008)    | 0.588 (0.098)    | -         |     3.94 | chayJESUS, drop, history, kauez, venomzera |
|           26 |     2634 | 2025-10-08 | Fake do Biru      | W   | 0.422      | -            | -                | -                | -         |     1.69 | chayJESUS, drop, history, kauez, venomzera |
|           25 |     2741 | 2025-10-06 | Yawara            | W   | 0.408      | -            | -                | -                | -         |     1.05 | chayJESUS, drop, history, tge, venomzera   |
|           24 |     2801 | 2025-10-05 | MIBR              | L   | 0.402      | -            | -                | -                | -         |    -2.92 | chayJESUS, drop, history, kauez, venomzera |
|           23 |     2857 | 2025-10-04 | ShindeN           | W   | 0.395      | -            | -                | -                | 1 (0.395) |     1.52 | chayJESUS, drop, history, kauez, venomzera |
|           22 |     2870 | 2025-10-04 | Fake do Biru      | W   | 0.393      | -            | -                | -                | -         |     1.58 | chayJESUS, drop, history, kauez, venomzera |
|           21 |     2914 | 2025-10-03 | Fluxo             | W   | 0.386      | -            | -                | -                | -         |     4.62 | chayJESUS, drop, history, kauez, venomzera |
|           20 |     2918 | 2025-10-03 | Yawara            | W   | 0.386      | -            | -                | -                | -         |     1.00 | chayJESUS, drop, history, kauez, venomzera |
|           19 |     3052 | 2025-09-29 | ODDIK             | L   | 0.361      | -            | -                | -                | -         |    -8.24 | chayJESUS, drop, history, kauez, venomzera |
|           18 |     3135 | 2025-09-27 | MIBR              | W   | 0.349      | 0.390        | 0.153 (0.021)    | 0.737 (0.100)    | -         |     8.46 | chayJESUS, drop, history, kauez, venomzera |
|           17 |     3138 | 2025-09-27 | Fake do Biru      | W   | 0.348      | -            | -                | -                | -         |     1.57 | chayJESUS, drop, history, kauez, venomzera |
|           16 |     3395 | 2025-09-19 | BESTIA            | L   | 0.295      | -            | -                | -                | -         |    -4.04 | drop, history, kauez, tge, venomzera       |
|           15 |     3430 | 2025-09-18 | Galorys           | W   | 0.288      | -            | -                | -                | -         |     0.73 | drop, history, kauez, tge, venomzera       |
|           14 |     3467 | 2025-09-17 | MIBR              | L   | 0.282      | -            | -                | -                | -         |    -8.62 | drop, history, kauez, tge, venomzera       |
|           13 |     3498 | 2025-09-16 | BESTIA            | L   | 0.274      | -            | -                | -                | -         |    -3.95 | chayJESUS, drop, history, kauez, venomzera |
|           12 |     3520 | 2025-09-15 | ShindeN           | W   | 0.268      | -            | -                | -                | -         |     0.95 | chayJESUS, drop, history, kauez, venomzera |
|           11 |     3595 | 2025-09-13 | Keyd Stars        | W   | 0.256      | -            | -                | -                | -         |     0.38 | chayJESUS, drop, history, kauez, venomzera |
|           10 |     3698 | 2025-09-11 | ODDIK             | W   | 0.242      | 0.363        | 0.046 (0.004)    | -                | -         |     2.02 | chayJESUS, drop, history, kauez, venomzera |
|            9 |     3806 | 2025-09-09 | Galorys           | W   | 0.228      | -            | -                | -                | -         |     0.51 | chayJESUS, drop, history, kauez, venomzera |
|            8 |     4027 | 2025-08-30 | BESTIA            | L   | 0.162      | -            | -                | -                | -         |    -2.34 | drop, history, kauez, ponter, venomzera    |
|            7 |     4060 | 2025-08-29 | 9z                | L   | 0.155      | -            | -                | -                | -         |    -4.00 | drop, history, kauez, ponter, venomzera    |
|            6 |     4159 | 2025-08-26 | Dusty Roots       | W   | 0.134      | -            | -                | -                | -         |     0.23 | drop, history, kauez, ponter, venomzera    |
|            5 |     4334 | 2025-08-17 | Keyd Stars        | L   | 0.074      | -            | -                | -                | -         |    -2.23 | drop, history, kauez, ponter, venomzera    |
|            4 |     4412 | 2025-08-15 | Imperial          | W   | 0.061      | -            | -                | -                | -         |     1.38 | drop, history, kauez, ponter, venomzera    |
|            3 |     4452 | 2025-08-14 | Sharks            | L   | 0.054      | -            | -                | -                | -         |    -0.47 | drop, history, kauez, ponter, venomzera    |
|            2 |     4497 | 2025-08-13 | Imperial          | L   | 0.048      | -            | -                | -                | -         |    -0.43 | drop, history, kauez, ponter, venomzera    |
|            1 |     4553 | 2025-08-12 | LP                | W   | 0.042      | -            | -                | -                | -         |     0.03 | drop, history, kauez, ponter, venomzera    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,982.83)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-01 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-01-25 |      1.000 | $1,500.00      | $1,500.00       |
| 2025-10-19 |      0.496 | $4,000.00      | $1,982.12       |
| 2025-10-05 |      0.402 | $2,500.00      | $1,004.97       |
| 2025-09-30 |      0.370 | $1,782.00      | $659.29         |
| 2025-09-22 |      0.315 | $1,500.00      | $472.93         |
| 2025-09-16 |      0.275 | $1,500.00      | $412.88         |
| 2025-08-31 |      0.169 | $2,000.00      | $337.04         |
| 2025-08-15 |      0.062 | $1,827.00      | $113.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
