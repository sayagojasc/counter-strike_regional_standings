### Roster Details<br />
Team Name: 3DMAX<br />
Roster: bodyy, Ex3rcice, Graviti, Lucky, Maka<br />
Global Rank: [14](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [12]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1611.5<br />
<br />
Final Rank Value (1611.5) = Starting Rank Value (1675.0) + Head To Head Adjustments (-63.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.753[<sup>1</sup>](#table2)
- Bounty Collected: 0.626[<sup>2</sup>](#table1)
- Opponent Network: 0.292[<sup>2</sup>](#table1)
- LAN Wins: 0.736[<sup>2</sup>](#table1)

The average of these factors is 0.602<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1675.0
- 400 + ( ( 0.602 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1675.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       40 | 2026-01-29 | BC.Game           | W   | 1.000      | 0.392        | -                | 0.594 (0.233)    | 1 (1.000) |    12.45 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           43 |       49 | 2026-01-28 | FUT               | W   | 1.000      | 0.392        | 0.281 (0.110)    | 0.758 (0.297)    | 1 (1.000) |    12.76 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           42 |      434 | 2026-01-15 | Inner Circle      | L   | 1.000      | -            | -                | -                | -         |   -26.07 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           41 |      862 | 2025-12-06 | FaZe              | L   | 0.814      | -            | -                | -                | -         |    -8.89 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           40 |      889 | 2025-12-05 | PARIVISION        | W   | 0.808      | 1.000        | 1.000 (0.808)    | 0.746 (0.602)    | 1 (0.808) |    21.08 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           39 |      921 | 2025-12-04 | Vitality          | L   | 0.800      | -            | -                | -                | -         |    -3.74 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           38 |      928 | 2025-12-04 | paiN              | L   | 0.800      | -            | -                | -                | -         |   -13.76 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           37 |      953 | 2025-12-02 | Ninjas in Pyjamas | W   | 0.788      | 0.809        | 0.205 (0.131)    | 0.495 (0.315)    | 1 (0.788) |     9.82 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           36 |      969 | 2025-12-01 | B8                | L   | 0.782      | -            | -                | -                | -         |   -10.39 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           35 |      999 | 2025-11-30 | Passion UA        | W   | 0.773      | 0.809        | -                | 0.417 (0.261)    | 1 (0.773) |     8.27 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           34 |     1030 | 2025-11-29 | FlyQuest          | W   | 0.767      | 0.809        | -                | 0.363 (0.225)    | 1 (0.767) |     7.68 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           33 |     1052 | 2025-11-29 | fnatic            | L   | 0.766      | -            | -                | -                | -         |   -16.09 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           32 |     1816 | 2025-11-03 | Lynn Vision       | L   | 0.597      | -            | -                | -                | -         |   -17.05 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           31 |     1838 | 2025-11-03 | G2                | L   | 0.591      | -            | -                | -                | -         |   -10.89 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           30 |     1962 | 2025-10-29 | Astralis          | L   | 0.558      | -            | -                | -                | -         |   -10.58 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           29 |     1986 | 2025-10-28 | FlyQuest          | L   | 0.553      | -            | -                | -                | -         |   -13.69 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           28 |     2015 | 2025-10-27 | B8                | L   | 0.547      | -            | -                | -                | -         |    -9.69 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           27 |     2079 | 2025-10-26 | BC.Game           | W   | 0.540      | 1.000        | 0.280 (0.151)    | 0.594 (0.321)    | 1 (0.540) |     6.92 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           26 |     2316 | 2025-10-19 | Legacy            | L   | 0.492      | -            | -                | -                | -         |    -6.91 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           25 |     2341 | 2025-10-18 | Liquid            | W   | 0.484      | 1.000        | 0.640 (0.310)    | 0.398 (0.193)    | 1 (0.484) |     8.39 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           24 |     2371 | 2025-10-17 | fnatic            | W   | 0.477      | 1.000        | -                | 0.580 (0.277)    | 1 (0.477) |     3.99 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           23 |     2396 | 2025-10-16 | Virtus.pro        | W   | 0.472      | -            | -                | -                | 1 (0.472) |     0.69 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           22 |     2436 | 2025-10-15 | Lynn Vision       | W   | 0.466      | -            | -                | -                | -         |     1.11 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           21 |     2462 | 2025-10-14 | Legacy            | L   | 0.459      | -            | -                | -                | -         |    -6.46 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           20 |     2476 | 2025-10-13 | The Huns          | W   | 0.456      | -            | -                | -                | -         |     0.51 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           19 |     2568 | 2025-10-10 | Falcons           | L   | 0.432      | -            | -                | -                | -         |    -2.55 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           18 |     2656 | 2025-10-08 | G2                | W   | 0.420      | 1.000        | 0.349 (0.147)    | -                | -         |     5.01 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           17 |     2706 | 2025-10-07 | MOUZ              | L   | 0.413      | -            | -                | -                | -         |    -6.41 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           16 |     2775 | 2025-10-06 | Natus Vincere     | W   | 0.406      | 1.000        | 0.715 (0.290)    | -                | -         |     8.59 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           15 |     2820 | 2025-10-05 | FaZe              | W   | 0.401      | 1.000        | 0.638 (0.256)    | 0.478 (0.191)    | -         |     8.49 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           14 |     2869 | 2025-10-04 | FURIA             | L   | 0.394      | -            | -                | -                | -         |    -2.26 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           13 |     2986 | 2025-10-01 | ENCE              | W   | 0.373      | -            | -                | -                | -         |     1.72 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           12 |     3015 | 2025-09-30 | HEROIC            | W   | 0.367      | 0.769        | 0.468 (0.132)    | -                | -         |     3.40 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           11 |     3077 | 2025-09-29 | Rooster           | W   | 0.358      | -            | -                | -                | -         |     0.06 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           10 |     3111 | 2025-09-28 | Inner Circle      | L   | 0.352      | -            | -                | -                | -         |    -9.34 | bodyy, Ex3rcice, Graviti, Lucky, Nivera |
|            9 |     3514 | 2025-09-16 | Virtus.pro        | L   | 0.272      | -            | -                | -                | -         |    -8.24 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            8 |     3534 | 2025-09-15 | GamerLegion       | L   | 0.266      | -            | -                | -                | -         |    -4.23 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            7 |     3589 | 2025-09-14 | FaZe              | L   | 0.258      | -            | -                | -                | -         |    -2.63 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            6 |     3677 | 2025-09-12 | The MongolZ       | W   | 0.246      | 1.000        | 0.814 (0.200)    | -                | -         |     4.24 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            5 |     4018 | 2025-08-31 | TYLOO             | W   | 0.165      | -            | -                | -                | -         |     0.17 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            4 |     4075 | 2025-08-29 | TYLOO             | W   | 0.152      | -            | -                | -                | -         |     0.16 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            3 |     4099 | 2025-08-28 | Lynn Vision       | W   | 0.150      | -            | -                | -                | -         |     0.33 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            2 |     4243 | 2025-08-21 | The MongolZ       | L   | 0.100      | -            | -                | -                | -         |    -1.45 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            1 |     4275 | 2025-08-20 | Natus Vincere     | W   | 0.093      | -            | -                | -                | -         |     1.94 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($160,639.21)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.47) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-18 |      1.000 | $7,500.00      | $7,500.00       |
| 2025-12-14 |      0.868 | $20,000.00     | $17,357.09      |
| 2025-11-09 |      0.632 | $4,000.00      | $2,527.41       |
| 2025-11-01 |      0.580 | $18,750.00     | $10,882.22      |
| 2025-10-19 |      0.492 | $170,000.00    | $83,617.24      |
| 2025-10-12 |      0.447 | $58,000.00     | $25,923.77      |
| 2025-09-21 |      0.308 | $15,000.00     | $4,616.27       |
| 2025-08-31 |      0.165 | $20,877.00     | $3,454.18       |
| 2025-08-24 |      0.119 | $40,000.00     | $4,761.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
