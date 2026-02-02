### Roster Details<br />
Team Name: Liquid<br />
Roster: EliGE, NAF, NertZ, siuhy, ultimate<br />
Global Rank: [11](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [9]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1644.6<br />
<br />
Final Rank Value (1644.6) = Starting Rank Value (1711.6) + Head To Head Adjustments (-67.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.838[<sup>1</sup>](#table2)
- Bounty Collected: 0.630[<sup>2</sup>](#table1)
- Opponent Network: 0.344[<sup>2</sup>](#table1)
- LAN Wins: 0.664[<sup>2</sup>](#table1)

The average of these factors is 0.619<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1711.6
- 400 + ( ( 0.619 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1711.6


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
|           43 |       17 | 2026-01-30 | FUT               | L   | 1.000      | -            | -                | -                | -         |   -20.36 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           42 |       34 | 2026-01-29 | G2                | L   | 1.000      | -            | -                | -                | -         |   -18.42 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           41 |       48 | 2026-01-28 | Ninjas in Pyjamas | W   | 1.000      | -            | -                | -                | 1 (1.000) |    10.08 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           40 |      192 | 2026-01-22 | Falcons           | L   | 1.000      | -            | -                | -                | -         |    -7.00 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           39 |      341 | 2026-01-17 | Gentle Mates      | W   | 1.000      | 0.895        | 0.221 (0.198)    | 0.649 (0.581)    | -         |     8.08 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           38 |      427 | 2026-01-15 | Ninjas in Pyjamas | W   | 1.000      | 0.895        | 0.205 (0.184)    | 0.495 (0.443)    | -         |    10.95 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           37 |      894 | 2025-12-05 | Passion UA        | L   | 0.807      | -            | -                | -                | -         |   -18.09 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           36 |      915 | 2025-12-04 | The MongolZ       | L   | 0.801      | -            | -                | -                | -         |   -13.17 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           35 |      929 | 2025-12-04 | Spirit            | L   | 0.799      | -            | -                | -                | -         |   -11.53 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           34 |      955 | 2025-12-02 | Astralis          | W   | 0.787      | 0.809        | 0.377 (0.240)    | 0.374 (0.238)    | 1 (0.787) |     9.05 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           33 |      970 | 2025-12-01 | TYLOO             | W   | 0.782      | -            | -                | -                | 1 (0.782) |     0.88 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           32 |      987 | 2025-11-30 | MIBR              | W   | 0.774      | 0.809        | -                | 0.737 (0.462)    | 1 (0.774) |     7.25 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           31 |     1020 | 2025-11-29 | PARIVISION        | L   | 0.768      | -            | -                | -                | -         |    -5.21 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           30 |     1040 | 2025-11-29 | B8                | L   | 0.766      | -            | -                | -                | -         |   -13.43 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           29 |     1915 | 2025-10-31 | BC.Game           | L   | 0.572      | -            | -                | -                | -         |   -11.00 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           28 |     1956 | 2025-10-29 | FlyQuest          | W   | 0.559      | 1.000        | -                | 0.363 (0.203)    | 1 (0.559) |     3.17 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           27 |     1994 | 2025-10-28 | BetBoom           | W   | 0.551      | 1.000        | -                | 0.945 (0.521)    | 1 (0.551) |     4.77 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           26 |     2021 | 2025-10-27 | Aurora            | L   | 0.547      | -            | -                | -                | -         |    -7.59 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           25 |     2091 | 2025-10-26 | Legacy            | W   | 0.538      | 1.000        | 0.942 (0.507)    | 0.417 (0.224)    | 1 (0.538) |     8.72 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           24 |     2318 | 2025-10-18 | HEROIC            | W   | 0.490      | 1.000        | 0.468 (0.229)    | -                | 1 (0.490) |     3.95 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           23 |     2341 | 2025-10-18 | 3DMAX             | L   | 0.484      | -            | -                | -                | -         |    -8.39 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           22 |     2404 | 2025-10-16 | Legacy            | W   | 0.471      | 1.000        | 0.942 (0.444)    | 0.417 (0.196)    | 1 (0.471) |     7.55 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           21 |     2463 | 2025-10-14 | MIBR              | W   | 0.459      | 1.000        | -                | 0.737 (0.339)    | 1 (0.459) |     4.97 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           20 |     2474 | 2025-10-13 | GamerLegion       | W   | 0.457      | 1.000        | 0.430 (0.196)    | 0.509 (0.233)    | -         |     6.42 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           19 |     3096 | 2025-09-28 | Partizan          | W   | 0.353      | -            | -                | -                | -         |     0.13 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           18 |     3108 | 2025-09-28 | 9INE              | L   | 0.353      | -            | -                | -                | -         |    -9.11 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           17 |     3122 | 2025-09-28 | 500               | W   | 0.351      | -            | -                | -                | -         |     0.23 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           16 |     3160 | 2025-09-27 | ENCE              | W   | 0.346      | -            | -                | -                | -         |     1.22 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           15 |     3171 | 2025-09-27 | 9INE              | L   | 0.345      | -            | -                | -                | -         |    -9.11 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           14 |     3176 | 2025-09-27 | 500               | W   | 0.345      | -            | -                | -                | -         |     0.20 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           13 |     3381 | 2025-09-20 | The MongolZ       | L   | 0.299      | -            | -                | -                | -         |    -4.66 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|           12 |     3414 | 2025-09-19 | Aurora            | W   | 0.293      | 1.000        | 1.000 (0.293)    | -                | -         |     5.58 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|           11 |     3493 | 2025-09-17 | FaZe              | W   | 0.278      | 1.000        | 0.638 (0.178)    | -                | -         |     5.60 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|           10 |     3506 | 2025-09-16 | TYLOO             | W   | 0.273      | -            | -                | -                | -         |     0.26 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            9 |     3535 | 2025-09-15 | HEROIC            | W   | 0.266      | 1.000        | 0.468 (0.125)    | -                | -         |     2.08 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            8 |     3572 | 2025-09-14 | GamerLegion       | L   | 0.259      | -            | -                | -                | -         |    -4.48 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            7 |     3605 | 2025-09-13 | FURIA             | L   | 0.254      | -            | -                | -                | -         |    -1.72 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            6 |     4009 | 2025-08-31 | Spirit            | L   | 0.167      | -            | -                | -                | -         |    -2.48 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            5 |     4044 | 2025-08-30 | Imperial          | W   | 0.159      | -            | -                | -                | -         |     1.39 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            4 |     4112 | 2025-08-28 | G2                | L   | 0.146      | -            | -                | -                | -         |    -3.31 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            3 |     4270 | 2025-08-20 | Vitality          | L   | 0.094      | -            | -                | -                | -         |    -0.59 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            2 |     4426 | 2025-08-15 | Vitality          | L   | 0.060      | -            | -                | -                | -         |    -0.38 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            1 |     4678 | 2025-08-09 | FURIA             | W   | 0.022      | -            | -                | -                | -         |     0.53 | NAF, NertZ, siuhy, Twistzz, ultimate  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($219,001.21)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.64) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      1.000 | $4,500.00      | $4,500.00       |
| 2026-01-25 |      1.000 | $51,250.00     | $51,250.00      |
| 2025-12-14 |      0.868 | $20,000.00     | $17,357.09      |
| 2025-11-01 |      0.580 | $62,500.00     | $36,274.06      |
| 2025-10-19 |      0.492 | $130,000.00    | $63,942.60      |
| 2025-09-28 |      0.354 | $1,700.00      | $601.81         |
| 2025-09-21 |      0.308 | $130,000.00    | $40,007.70      |
| 2025-09-01 |      0.175 | $7,500.00      | $1,310.80       |
| 2025-08-24 |      0.119 | $20,000.00     | $2,380.51       |
| 2025-08-17 |      0.073 | $18,750.00     | $1,376.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
