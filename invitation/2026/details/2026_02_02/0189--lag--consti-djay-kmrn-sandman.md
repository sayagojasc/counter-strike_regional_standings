### Roster Details<br />
Team Name: LAG<br />
Roster: consti, djay, kmrn, Sandman<br />
Global Rank: [189](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [44]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  731.6<br />
<br />
Final Rank Value (731.6) = Starting Rank Value (708.7) + Head To Head Adjustments (22.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.7
- 400 + ( ( 0.146 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 708.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      728 | 2025-12-16 | BOSS            | L   | 0.883      | -            | -                | -                | -         |    -8.55 | consti, djay, kmrn, Pluto, Sandman      |
|           34 |      737 | 2025-12-14 | 33              | W   | 0.869      | 0.278        | 0.002 (0.000)    | -                | 0 (0.000) |     7.33 | consti, djay, kmrn, Sandman, xaler      |
|           33 |      763 | 2025-12-12 | Kraken Seas     | W   | 0.856      | -            | -                | -                | 0 (0.000) |     3.62 | consti, djay, kmrn, Sandman, xaler      |
|           32 |      779 | 2025-12-11 | InControl       | W   | 0.850      | 0.333        | 0.001 (0.000)    | 0.157 (0.044)    | 0 (0.000) |    11.84 | consti, djay, kmrn, Pluto, Sandman      |
|           31 |      800 | 2025-12-09 | Akimbo          | W   | 0.836      | -            | -                | -                | 0 (0.000) |     7.46 | consti, djay, kmrn, Pluto, Sandman      |
|           30 |      837 | 2025-12-07 | Aether          | W   | 0.823      | 0.333        | 0.001 (0.000)    | 0.070 (0.019)    | 0 (0.000) |    10.72 | consti, djay, kmrn, Pluto, Sandman      |
|           29 |      884 | 2025-12-05 | Pulse           | L   | 0.810      | -            | -                | -                | -         |   -18.82 | consti, djay, kmrn, REKMEISTER, Sandman |
|           28 |      950 | 2025-12-02 | Outfit 49       | L   | 0.790      | -            | -                | -                | -         |   -16.82 | consti, djay, kmrn, REKMEISTER, Sandman |
|           27 |     1486 | 2025-11-11 | BOSS            | L   | 0.649      | -            | -                | -                | -         |    -6.86 | consti, djay, kmrn, mason, Sandman      |
|           26 |     1514 | 2025-11-10 | Rave            | L   | 0.642      | -            | -                | -                | -         |    -4.17 | consti, djay, kmrn, mason, Sandman      |
|           25 |     1941 | 2025-10-29 | BOSS            | L   | 0.563      | -            | -                | -                | -         |    -6.46 | consti, djay, kmrn, mason, Sandman      |
|           24 |     2036 | 2025-10-26 | Mythic          | W   | 0.543      | 0.363        | 0.002 (0.000)    | 0.161 (0.032)    | 0 (0.000) |     7.63 | consti, djay, kmrn, mason, Sandman      |
|           23 |     2095 | 2025-10-25 | OverKnight      | W   | 0.537      | 0.333        | 0.000 (0.000)    | 0.190 (0.034)    | 0 (0.000) |     7.76 | consti, djay, kmrn, mason, Sandman      |
|           22 |     2104 | 2025-10-25 | Marsborne       | L   | 0.535      | -            | -                | -                | -         |    -0.73 | consti, djay, kmrn, mason, Sandman      |
|           21 |     2154 | 2025-10-24 | Wanted Goons    | W   | 0.529      | 0.363        | -                | 0.104 (0.020)    | 0 (0.000) |     4.05 | consti, djay, kmrn, mason, Sandman      |
|           20 |     2279 | 2025-10-21 | Marsborne       | L   | 0.509      | -            | -                | -                | -         |    -0.69 | consti, djay, kmrn, mason, Sandman      |
|           19 |     2374 | 2025-10-16 | Phoenix         | W   | 0.476      | 0.333        | 0.005 (0.001)    | 0.210 (0.033)    | 0 (0.000) |     7.50 | consti, djay, kmrn, mason, Sandman      |
|           18 |     2482 | 2025-10-13 | Outfit 49       | W   | 0.455      | 0.333        | -                | 0.166 (0.025)    | 0 (0.000) |     4.79 | consti, djay, kmrn, mason, Sandman      |
|           17 |     2572 | 2025-10-09 | BOSS            | L   | 0.430      | -            | -                | -                | -         |    -4.73 | consti, djay, mason, Sandman, Wolffe    |
|           16 |     2618 | 2025-10-08 | Marsborne       | L   | 0.423      | -            | -                | -                | -         |    -0.48 | consti, djay, mason, Sandman, Wolffe    |
|           15 |     2733 | 2025-10-06 | FlyQuest RED    | W   | 0.409      | 0.363        | 0.018 (0.003)    | 0.205 (0.030)    | -         |     7.72 | consti, djay, mason, Sandman, Wolffe    |
|           14 |     3336 | 2025-09-21 | SportsBetExpert | W   | 0.310      | 0.278        | 0.003 (0.000)    | -                | -         |     4.36 | consti, djay, mason, Sandman, Wolffe    |
|           13 |     3367 | 2025-09-20 | NuTorious       | W   | 0.303      | -            | -                | -                | -         |     2.53 | consti, djay, mason, Sandman, Wolffe    |
|           12 |     3426 | 2025-09-18 | Rave            | L   | 0.289      | -            | -                | -                | -         |    -1.91 | consti, djay, mason, Sandman, Wolffe    |
|           11 |     3458 | 2025-09-17 | Wanted Goons    | W   | 0.283      | -            | -                | -                | -         |     2.43 | consti, djay, mason, Sandman, Wolffe    |
|           10 |     3598 | 2025-09-13 | BOSS            | L   | 0.255      | -            | -                | -                | -         |    -2.49 | consti, djay, mason, Sandman, Wolffe    |
|            9 |     3645 | 2025-09-12 | anything else   | W   | 0.249      | -            | -                | -                | -         |     1.92 | consti, djay, mason, Sandman, Wolffe    |
|            8 |     3688 | 2025-09-11 | Voca            | L   | 0.243      | -            | -                | -                | -         |    -0.87 | consti, djay, mason, Sandman, Wolffe    |
|            7 |     3792 | 2025-09-09 | OverKnight      | W   | 0.229      | 0.363        | 0.000 (0.000)    | 0.190 (0.016)    | -         |     3.37 | consti, djay, mason, Sandman, Wolffe    |
|            6 |     4126 | 2025-08-27 | Voca            | L   | 0.142      | -            | -                | -                | -         |    -0.49 | consti, djay, mason, Sandman, Wolffe    |
|            5 |     4154 | 2025-08-26 | BOSS            | L   | 0.136      | -            | -                | -                | -         |    -1.32 | consti, djay, mason, Sandman, Wolffe    |
|            4 |     4216 | 2025-08-22 | regain          | W   | 0.109      | 0.333        | 0.008 (0.000)    | 0.330 (0.012)    | -         |     1.80 | consti, djay, mason, Sandman, Wolffe    |
|            3 |     4231 | 2025-08-21 | TSG             | W   | 0.103      | -            | -                | -                | -         |     0.87 | consti, djay, mason, Sandman, Wolffe    |
|            2 |     4285 | 2025-08-19 | Voca            | L   | 0.090      | -            | -                | -                | -         |    -0.30 | consti, djay, mason, Sandman, Wolffe    |
|            1 |     4326 | 2025-08-17 | Money Crew      | W   | 0.075      | -            | -                | -                | -         |     0.89 | consti, djay, mason, Sandman, Wolffe    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,644.03)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      0.869 | $1,750.00      | $1,520.13       |
| 2025-11-15 |      0.676 | $1,000.00      | $676.48         |
| 2025-09-22 |      0.316 | $1,000.00      | $316.16         |
| 2025-08-17 |      0.075 | $1,750.00      | $131.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
