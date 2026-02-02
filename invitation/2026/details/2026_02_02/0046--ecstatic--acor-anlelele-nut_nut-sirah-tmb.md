### Roster Details<br />
Team Name: ECSTATIC<br />
Roster: acoR, Anlelele, nut nut, sirah, TMB<br />
Global Rank: [46](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [33]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1281.5<br />
<br />
Final Rank Value (1281.5) = Starting Rank Value (1281.2) + Head To Head Adjustments (0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.524[<sup>1</sup>](#table2)
- Bounty Collected: 0.411[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.502[<sup>2</sup>](#table1)

The average of these factors is 0.416<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1281.2
- 400 + ( ( 0.416 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1281.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |       72 | 2026-01-27 | illwill          | L   | 1.000      | -            | -                | -                | -         |   -20.07 | Anlelele, Buzz, nicoodoz, nut nut, TMB |
|           50 |      420 | 2026-01-15 | Falcons          | L   | 1.000      | -            | -                | -                | -         |    -1.10 | Anlelele, Buzz, nicoodoz, nut nut, TMB |
|           49 |      786 | 2025-12-11 | Oramond          | L   | 0.846      | -            | -                | -                | -         |   -17.68 | acoR, Anlelele, nut nut, sirah, TMB    |
|           48 |      809 | 2025-12-09 | FUT              | L   | 0.833      | -            | -                | -                | -         |    -5.22 | acoR, Anlelele, nut nut, sirah, TMB    |
|           47 |      823 | 2025-12-08 | BC.Game          | W   | 0.827      | 0.435        | 0.280 (0.101)    | 0.594 (0.214)    | -         |    21.53 | acoR, Anlelele, nut nut, sirah, TMB    |
|           46 |      846 | 2025-12-07 | CYBERSHOKE       | W   | 0.820      | 0.435        | 0.058 (0.021)    | 1.000 (0.357)    | -         |    11.85 | acoR, Anlelele, nut nut, sirah, TMB    |
|           45 |      867 | 2025-12-06 | 500              | W   | 0.814      | 0.435        | -                | 0.818 (0.289)    | -         |     5.57 | acoR, Anlelele, nut nut, sirah, TMB    |
|           44 |     1036 | 2025-11-29 | EYEBALLERS       | L   | 0.766      | -            | -                | -                | -         |    -7.83 | acoR, Anlelele, nut nut, sirah, TMB    |
|           43 |     1183 | 2025-11-23 | FUT              | L   | 0.728      | -            | -                | -                | -         |    -4.39 | acoR, Anlelele, nut nut, sirah, TMB    |
|           42 |     1209 | 2025-11-22 | Passion UA       | W   | 0.720      | 0.339        | 0.160 (0.039)    | -                | 1 (0.720) |    17.63 | acoR, Anlelele, nut nut, sirah, TMB    |
|           41 |     1229 | 2025-11-22 | Tricked          | W   | 0.719      | -            | -                | -                | 1 (0.719) |     9.45 | acoR, Anlelele, nut nut, sirah, TMB    |
|           40 |     1248 | 2025-11-21 | AM               | W   | 0.713      | -            | -                | -                | 1 (0.713) |     7.55 | acoR, Anlelele, nut nut, sirah, TMB    |
|           39 |     1269 | 2025-11-21 | UNiTY            | W   | 0.712      | -            | -                | -                | 1 (0.712) |     2.71 | acoR, Anlelele, nut nut, sirah, TMB    |
|           38 |     1683 | 2025-11-07 | 500              | L   | 0.619      | -            | -                | -                | -         |   -15.37 | acoR, Anlelele, nut nut, sirah, TMB    |
|           37 |     1742 | 2025-11-06 | SINNERS          | W   | 0.614      | 0.435        | 0.267 (0.071)    | 0.772 (0.206)    | -         |     9.38 | acoR, Anlelele, nut nut, sirah, TMB    |
|           36 |     1771 | 2025-11-05 | Sangal           | W   | 0.607      | 0.435        | -                | 0.844 (0.223)    | -         |     7.50 | acoR, Anlelele, nut nut, sirah, TMB    |
|           35 |     1800 | 2025-11-04 | EYEBALLERS       | W   | 0.600      | 0.435        | 0.207 (0.054)    | 0.927 (0.242)    | -         |    12.65 | acoR, Anlelele, nut nut, sirah, TMB    |
|           34 |     1857 | 2025-11-02 | KOLESIE          | L   | 0.585      | -            | -                | -                | -         |    -8.83 | acoR, Anlelele, nut nut, sirah, TMB    |
|           33 |     1882 | 2025-11-01 | BC.Game          | W   | 0.580      | -            | -                | -                | -         |     3.64 | acoR, Anlelele, nut nut, sirah, TMB    |
|           32 |     1912 | 2025-10-31 | kONO             | W   | 0.573      | 0.435        | -                | 0.487 (0.121)    | -         |     2.36 | acoR, Anlelele, nut nut, sirah, TMB    |
|           31 |     2119 | 2025-10-25 | 1win             | L   | 0.534      | -            | -                | -                | -         |   -13.11 | acoR, Anlelele, nut nut, sirah, TMB    |
|           30 |     2204 | 2025-10-24 | CYBERSHOKE       | W   | 0.526      | 0.435        | 0.058 (0.013)    | 1.000 (0.228)    | -         |     8.39 | acoR, Anlelele, nut nut, sirah, TMB    |
|           29 |     2225 | 2025-10-23 | HAVU             | L   | 0.521      | -            | -                | -                | -         |   -10.77 | acoR, Anlelele, nut nut, sirah, TMB    |
|           28 |     2250 | 2025-10-23 | SINNERS          | L   | 0.519      | -            | -                | -                | -         |    -8.95 | acoR, Anlelele, nut nut, sirah, TMB    |
|           27 |     2288 | 2025-10-21 | SPARTA           | W   | 0.506      | 0.435        | -                | 0.791 (0.174)    | -         |     1.83 | acoR, Anlelele, nut nut, sirah, TMB    |
|           26 |     2489 | 2025-10-13 | SINNERS          | L   | 0.453      | -            | -                | -                | -         |    -8.14 | acoR, Anlelele, nut nut, sirah, TMB    |
|           25 |     2501 | 2025-10-12 | Eternal Fire     | W   | 0.446      | -            | -                | -                | -         |     1.18 | acoR, Anlelele, nut nut, sirah, TMB    |
|           24 |     2553 | 2025-10-10 | Oramond          | W   | 0.434      | 0.487        | 0.083 (0.018)    | 1.000 (0.211)    | -         |     3.08 | acoR, Anlelele, nut nut, sirah, TMB    |
|           23 |     2601 | 2025-10-09 | EYEBALLERS       | L   | 0.427      | -            | -                | -                | -         |    -4.28 | acoR, Anlelele, nut nut, sirah, TMB    |
|           22 |     2805 | 2025-10-05 | OG               | L   | 0.402      | -            | -                | -                | -         |    -7.97 | acoR, Anlelele, nut nut, sirah, TMB    |
|           21 |     2813 | 2025-10-05 | 9INE             | L   | 0.401      | -            | -                | -                | -         |    -3.68 | acoR, Anlelele, nut nut, sirah, TMB    |
|           20 |     2853 | 2025-10-04 | Sharks           | W   | 0.396      | 0.333        | 0.166 (0.022)    | -                | 1 (0.396) |     9.96 | acoR, Anlelele, nut nut, sirah, TMB    |
|           19 |     2868 | 2025-10-04 | Bounty Hunters   | W   | 0.394      | -            | -                | -                | 1 (0.394) |     1.95 | acoR, Anlelele, nut nut, sirah, TMB    |
|           18 |     3166 | 2025-09-27 | ex-Zero Tenacity | L   | 0.346      | -            | -                | -                | -         |    -9.84 | acoR, Anlelele, nut nut, sirah, TMB    |
|           17 |     3194 | 2025-09-26 | OG               | L   | 0.341      | -            | -                | -                | -         |    -7.24 | acoR, Anlelele, nut nut, sirah, TMB    |
|           16 |     3227 | 2025-09-26 | Oramond          | W   | 0.338      | -            | -                | -                | 1 (0.338) |     2.30 | acoR, Anlelele, nut nut, sirah, TMB    |
|           15 |     3258 | 2025-09-25 | BIG Academy      | W   | 0.333      | -            | -                | -                | 1 (0.333) |     0.08 | acoR, Anlelele, nut nut, sirah, TMB    |
|           14 |     3552 | 2025-09-14 | fnatic           | W   | 0.261      | 0.333        | 0.166 (0.014)    | -                | 1 (0.261) |     6.25 | acoR, Anlelele, nut nut, sirah, TMB    |
|           13 |     3564 | 2025-09-14 | BIG              | W   | 0.260      | 0.333        | 0.175 (0.015)    | -                | 1 (0.260) |     6.89 | acoR, Anlelele, nut nut, sirah, TMB    |
|           12 |     3611 | 2025-09-13 | ex-Zero Tenacity | W   | 0.254      | -            | -                | -                | -         |     0.77 | acoR, Anlelele, nut nut, sirah, TMB    |
|           11 |     3835 | 2025-09-09 | PARIVISION       | L   | 0.225      | -            | -                | -                | -         |    -0.13 | acoR, Anlelele, nut nut, sirah, TMB    |
|           10 |     4083 | 2025-08-29 | fnatic           | L   | 0.152      | -            | -                | -                | -         |    -1.17 | Anlelele, Kristou, nut nut, sirah, TMB |
|            9 |     4136 | 2025-08-27 | FaZe             | L   | 0.140      | -            | -                | -                | -         |    -0.21 | Anlelele, Kristou, nut nut, sirah, TMB |
|            8 |     4252 | 2025-08-21 | BetBoom          | L   | 0.098      | -            | -                | -                | -         |    -0.52 | Anlelele, Kristou, nut nut, sirah, TMB |
|            7 |     4297 | 2025-08-19 | HOTU             | W   | 0.085      | -            | -                | -                | -         |     2.06 | Anlelele, Kristou, nut nut, sirah, TMB |
|            6 |     4331 | 2025-08-17 | PARIVISION       | L   | 0.074      | -            | -                | -                | -         |    -0.04 | Anlelele, Kristou, nut nut, sirah, TMB |
|            5 |     4388 | 2025-08-16 | JiJieHao         | W   | 0.065      | -            | -                | -                | -         |     0.40 | Anlelele, Kristou, nut nut, sirah, TMB |
|            4 |     4421 | 2025-08-15 | Inner Circle     | W   | 0.061      | -            | -                | -                | -         |     1.22 | Anlelele, Kristou, nut nut, sirah, TMB |
|            3 |     4477 | 2025-08-14 | JiJieHao         | L   | 0.053      | -            | -                | -                | -         |    -1.33 | Anlelele, Kristou, nut nut, sirah, TMB |
|            2 |     4626 | 2025-08-11 | fnatic           | L   | 0.033      | -            | -                | -                | -         |    -0.25 | Anlelele, Kristou, nut nut, sirah, TMB |
|            1 |     4658 | 2025-08-10 | Sangal           | W   | 0.027      | -            | -                | -                | -         |     0.23 | Anlelele, Kristou, nut nut, sirah, TMB |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,411.09)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-18 |      1.000 | $7,500.00      | $7,500.00       |
| 2025-12-09 |      0.833 | $11,000.00     | $9,161.10       |
| 2025-11-23 |      0.728 | $2,790.00      | $2,029.75       |
| 2025-11-06 |      0.614 | $25,000.00     | $15,337.66      |
| 2025-11-02 |      0.588 | $5,000.00      | $2,939.66       |
| 2025-10-13 |      0.454 | $5,870.00      | $2,666.51       |
| 2025-10-05 |      0.403 | $700.00        | $282.32         |
| 2025-09-14 |      0.261 | $5,000.00      | $1,306.49       |
| 2025-09-01 |      0.175 | $5,000.00      | $873.87         |
| 2025-08-22 |      0.108 | $2,916.00      | $313.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
