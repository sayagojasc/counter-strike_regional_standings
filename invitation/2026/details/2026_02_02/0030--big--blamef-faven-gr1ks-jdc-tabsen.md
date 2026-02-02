### Roster Details<br />
Team Name: BIG<br />
Roster: blameF, faveN, gr1ks, JDC, tabseN<br />
Global Rank: [30](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [22]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1465.5<br />
<br />
Final Rank Value (1465.5) = Starting Rank Value (1581.1) + Head To Head Adjustments (-115.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.569[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.287[<sup>2</sup>](#table1)
- LAN Wins: 0.998[<sup>2</sup>](#table1)

The average of these factors is 0.557<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1581.1
- 400 + ( ( 0.557 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1581.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |       22 | 2026-01-30 | Nemiga           | L   | 1.000      | -            | -                | -                | -         |   -26.94 | blameF, gr1ks, JDC, prosus, tabseN  |
|           51 |       33 | 2026-01-29 | BET-M            | W   | 1.000      | 0.435        | -                | 0.686 (0.298)    | -         |     3.89 | blameF, gr1ks, JDC, prosus, tabseN  |
|           50 |       50 | 2026-01-28 | ARCRED           | W   | 1.000      | 0.435        | -                | 0.883 (0.384)    | -         |     2.85 | blameF, gr1ks, JDC, prosus, tabseN  |
|           49 |       88 | 2026-01-25 | HAVU             | W   | 1.000      | 0.333        | -                | 0.507 (0.169)    | 1 (1.000) |     2.87 | blameF, faveN, gr1ks, JDC, tabseN   |
|           48 |      105 | 2026-01-24 | Alliance         | W   | 1.000      | 0.333        | 0.052 (0.017)    | 0.785 (0.262)    | 1 (1.000) |     9.88 | blameF, faveN, gr1ks, JDC, tabseN   |
|           47 |      118 | 2026-01-24 | Johnny Speeds    | W   | 1.000      | 0.333        | 0.028 (0.009)    | 1.000 (0.333)    | 1 (1.000) |     6.18 | blameF, faveN, gr1ks, JDC, tabseN   |
|           46 |      165 | 2026-01-23 | Luleflames       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.08 | blameF, faveN, gr1ks, JDC, tabseN   |
|           45 |      168 | 2026-01-23 | Lilmix           | L   | 1.000      | -            | -                | -                | -         |   -30.56 | blameF, faveN, gr1ks, JDC, tabseN   |
|           44 |      286 | 2026-01-18 | Betclic          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.17 | blameF, faveN, gr1ks, JDC, tabseN   |
|           43 |      291 | 2026-01-18 | Rebels           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.43 | blameF, faveN, gr1ks, JDC, tabseN   |
|           42 |      327 | 2026-01-17 | MANA             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.41 | blameF, faveN, gr1ks, JDC, tabseN   |
|           41 |      363 | 2026-01-16 | HyperSpirit      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.39 | blameF, faveN, gr1ks, JDC, tabseN   |
|           40 |      379 | 2026-01-16 | EXSAD            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.10 | blameF, faveN, gr1ks, JDC, tabseN   |
|           39 |      730 | 2025-12-16 | SPARTA           | L   | 0.880      | -            | -                | -                | -         |   -25.74 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           38 |      741 | 2025-12-14 | magic            | W   | 0.868      | 0.435        | 0.080 (0.030)    | 0.880 (0.332)    | -         |     3.30 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           37 |      743 | 2025-12-14 | 9INE             | W   | 0.867      | 0.435        | 0.077 (0.029)    | 0.733 (0.276)    | -         |     8.79 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           36 |      750 | 2025-12-13 | Oramond          | W   | 0.861      | 0.435        | 0.083 (0.031)    | 1.000 (0.374)    | -         |     4.19 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           35 |      768 | 2025-12-12 | Sangal           | W   | 0.854      | 0.435        | 0.026 (0.010)    | 0.844 (0.313)    | -         |     3.68 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           34 |     1249 | 2025-11-21 | Leo              | L   | 0.713      | -            | -                | -                | -         |   -21.39 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           33 |     1561 | 2025-11-09 | Mousquetaires    | W   | 0.632      | -            | -                | -                | 1 (0.632) |     0.52 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           32 |     1626 | 2025-11-08 | Flshbck          | W   | 0.624      | -            | -                | -                | -         |     0.07 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           31 |     1708 | 2025-11-07 | Nemesis SEA      | W   | 0.619      | -            | -                | -                | -         |     0.07 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           30 |     1846 | 2025-11-02 | M80              | L   | 0.588      | -            | -                | -                | -         |    -8.63 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           29 |     1865 | 2025-11-01 | Imperial         | W   | 0.582      | 0.333        | 0.113 (0.022)    | 0.680 (0.132)    | -         |     8.80 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           28 |     1874 | 2025-11-01 | FlyQuest RED     | W   | 0.581      | -            | -                | -                | -         |     0.28 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           27 |     2237 | 2025-10-23 | Mousquetaires    | W   | 0.520      | -            | -                | -                | -         |     0.49 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           26 |     2274 | 2025-10-22 | BC.Game          | W   | 0.512      | -            | -                | -                | -         |     0.80 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           25 |     2285 | 2025-10-21 | AM               | W   | 0.506      | -            | -                | -                | -         |     1.41 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           24 |     2296 | 2025-10-21 | premdesant       | W   | 0.505      | -            | -                | -                | -         |     0.06 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           23 |     2331 | 2025-10-18 | 1win             | L   | 0.487      | -            | -                | -                | -         |   -14.43 | FreeZe, gr1ks, JDC, kyuubii, tabseN |
|           22 |     2856 | 2025-10-04 | fnatic           | L   | 0.395      | -            | -                | -                | -         |    -7.36 | hyped, JDC, Krimbo, prosus, tabseN  |
|           21 |     2875 | 2025-10-04 | KOLESIE          | W   | 0.393      | -            | -                | -                | -         |     1.99 | hyped, JDC, Krimbo, prosus, tabseN  |
|           20 |     3012 | 2025-09-30 | EYEBALLERS       | L   | 0.367      | -            | -                | -                | -         |    -7.29 | hyped, JDC, Krimbo, prosus, tabseN  |
|           19 |     3020 | 2025-09-30 | MOUZ NXT         | W   | 0.367      | -            | -                | -                | -         |     3.13 | hyped, JDC, Krimbo, prosus, tabseN  |
|           18 |     3027 | 2025-09-30 | OG               | W   | 0.366      | 0.323        | 0.075 (0.009)    | -                | -         |     1.43 | hyped, JDC, Krimbo, prosus, tabseN  |
|           17 |     3035 | 2025-09-30 | Passion UA       | L   | 0.366      | -            | -                | -                | -         |    -6.59 | hyped, JDC, Krimbo, prosus, tabseN  |
|           16 |     3047 | 2025-09-30 | AaB              | W   | 0.364      | -            | -                | -                | -         |     0.13 | hyped, JDC, Krimbo, prosus, tabseN  |
|           15 |     3142 | 2025-09-27 | Phantom          | L   | 0.348      | -            | -                | -                | -         |   -10.24 | hyped, JDC, Krimbo, prosus, tabseN  |
|           14 |     3161 | 2025-09-27 | Phantom          | W   | 0.346      | -            | -                | -                | -         |     0.14 | hyped, JDC, Krimbo, prosus, tabseN  |
|           13 |     3183 | 2025-09-27 | Monte            | L   | 0.344      | -            | -                | -                | -         |    -8.66 | hyped, JDC, Krimbo, prosus, tabseN  |
|           12 |     3217 | 2025-09-26 | 500              | W   | 0.339      | -            | -                | -                | -         |     0.43 | hyped, JDC, Krimbo, prosus, tabseN  |
|           11 |     3232 | 2025-09-26 | ATOMIK           | W   | 0.338      | -            | -                | -                | -         |     0.02 | hyped, JDC, Krimbo, prosus, tabseN  |
|           10 |     3323 | 2025-09-22 | Friendly Campers | L   | 0.313      | -            | -                | -                | -         |    -6.66 | hyped, JDC, Krimbo, prosus, tabseN  |
|            9 |     3352 | 2025-09-21 | Friendly Campers | L   | 0.306      | -            | -                | -                | -         |    -6.68 | hyped, JDC, Krimbo, prosus, tabseN  |
|            8 |     3370 | 2025-09-20 | KOLESIE          | W   | 0.301      | -            | -                | -                | -         |     1.34 | hyped, JDC, Krimbo, prosus, tabseN  |
|            7 |     3410 | 2025-09-19 | ex-RUBY          | W   | 0.293      | -            | -                | -                | -         |     0.39 | hyped, JDC, Krimbo, prosus, tabseN  |
|            6 |     3564 | 2025-09-14 | ECSTATIC         | L   | 0.260      | -            | -                | -                | -         |    -6.89 | hyped, JDC, Krimbo, prosus, tabseN  |
|            5 |     3601 | 2025-09-13 | Inner Circle     | W   | 0.255      | 0.333        | 0.162 (0.014)    | -                | -         |     1.96 | hyped, JDC, Krimbo, prosus, tabseN  |
|            4 |     3721 | 2025-09-11 | OG               | L   | 0.240      | -            | -                | -                | -         |    -6.93 | hyped, JDC, Krimbo, prosus, tabseN  |
|            3 |     3825 | 2025-09-09 | BC.Game          | W   | 0.226      | 0.729        | 0.280 (0.046)    | -                | -         |     3.99 | hyped, JDC, Krimbo, prosus, tabseN  |
|            2 |     3967 | 2025-09-04 | AaB              | W   | 0.194      | -            | -                | -                | -         |     0.06 | hyped, JDC, Krimbo, prosus, tabseN  |
|            1 |     3971 | 2025-09-04 | Friendly Campers | W   | 0.193      | -            | -                | -                | -         |     1.69 | hyped, JDC, Krimbo, prosus, tabseN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($59,935.87)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-01-25 |      1.000 | $7,000.00      | $7,000.00       |
| 2026-01-18 |      1.000 | $5,818.00      | $5,818.00       |
| 2025-12-14 |      0.868 | $22,000.00     | $19,092.61      |
| 2025-11-09 |      0.632 | $30,000.00     | $18,971.27      |
| 2025-11-02 |      0.588 | $3,000.00      | $1,762.70       |
| 2025-10-19 |      0.494 | $1,000.00      | $494.12         |
| 2025-09-21 |      0.307 | $5,000.00      | $1,535.87       |
| 2025-09-14 |      0.261 | $1,000.00      | $261.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
