### Roster Details<br />
Team Name: Procyon<br />
Roster: AGL, lenci, MaxOff, next, pavv<br />
Global Rank: [158](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [35]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  798.2<br />
<br />
Final Rank Value (798.2) = Starting Rank Value (837.7) + Head To Head Adjustments (-39.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.058[<sup>2</sup>](#table1)
- LAN Wins: 0.171[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 837.7
- 400 + ( ( 0.207 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 837.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |        6 | 2026-01-31 | Marsborne       | L   | 1.000      | -            | -                | -                | -         |    -2.64 | AGL, lenci, MaxOff, next, pavv |
|           30 |       20 | 2026-01-30 | Isurus          | W   | 1.000      | 0.371        | 0.006 (0.002)    | 0.227 (0.084)    | 1 (1.000) |    14.96 | AGL, lenci, MaxOff, next, pavv |
|           29 |       26 | 2026-01-30 | Marsborne       | L   | 1.000      | -            | -                | -                | -         |    -2.38 | AGL, lenci, MaxOff, next, pavv |
|           28 |      146 | 2026-01-23 | Vasco           | L   | 1.000      | -            | -                | -                | -         |   -19.53 | AGL, lenci, MaxOff, next, pavv |
|           27 |      312 | 2026-01-17 | Galorys         | L   | 1.000      | -            | -                | -                | -         |   -10.18 | AGL, lenci, MaxOff, next, pavv |
|           26 |     1422 | 2025-11-13 | BESTIA          | L   | 0.662      | -            | -                | -                | -         |    -1.06 | AGL, dott1, Hezz, lenci, pavv  |
|           25 |     1501 | 2025-11-11 | FURIA fe        | W   | 0.646      | 0.371        | 0.014 (0.003)    | 0.201 (0.048)    | 0 (0.000) |    10.83 | AGL, dott1, Hezz, lenci, pavv  |
|           24 |     1558 | 2025-11-09 | Vasco           | W   | 0.633      | 0.371        | 0.004 (0.001)    | 0.317 (0.074)    | 0 (0.000) |     7.08 | AGL, dott1, Hezz, lenci, pavv  |
|           23 |     1641 | 2025-11-07 | Prison Breakers | L   | 0.621      | -            | -                | -                | -         |   -16.11 | AGL, dott1, Hezz, lenci, pavv  |
|           22 |     1763 | 2025-11-05 | Bounty Hunters  | L   | 0.608      | -            | -                | -                | -         |    -5.28 | AGL, dott1, Hezz, lenci, pavv  |
|           21 |     1803 | 2025-11-04 | Fuego           | W   | 0.600      | 0.371        | 0.000 (0.000)    | 0.115 (0.026)    | 0 (0.000) |     3.86 | AGL, dott1, Hezz, lenci, pavv  |
|           20 |     2049 | 2025-10-26 | Galorys         | L   | 0.542      | -            | -                | -                | -         |    -7.03 | AGL, dott1, Hezz, lenci, pavv  |
|           19 |     2105 | 2025-10-25 | Crashers        | W   | 0.535      | 0.363        | 0.000 (0.000)    | 0.272 (0.053)    | 0 (0.000) |     3.26 | AGL, dott1, Hezz, lenci, pavv  |
|           18 |     2172 | 2025-10-24 | BESTIA          | L   | 0.528      | -            | -                | -                | -         |    -0.67 | AGL, dott1, Hezz, lenci, pavv  |
|           17 |     2220 | 2025-10-23 | Four Magic      | W   | 0.522      | 0.363        | -                | 0.230 (0.043)    | 0 (0.000) |     3.12 | AGL, dott1, Hezz, lenci, pavv  |
|           16 |     2452 | 2025-10-14 | ShindeN         | L   | 0.462      | -            | -                | -                | -         |    -4.04 | AGL, dott1, Hezz, lenci, pavv  |
|           15 |     2495 | 2025-10-12 | MIBR Academy    | L   | 0.448      | -            | -                | -                | -         |   -12.12 | AGL, dott1, Hezz, lenci, pavv  |
|           14 |     2564 | 2025-10-10 | ELITES          | W   | 0.433      | -            | -                | -                | 0 (0.000) |     1.02 | AGL, dott1, Hezz, lenci, pavv  |
|           13 |     2582 | 2025-10-09 | Sharks          | W   | 0.428      | 0.363        | 0.166 (0.026)    | 0.865 (0.134)    | 0 (0.000) |    13.20 | AGL, dott1, Hezz, lenci, pavv  |
|           12 |     2632 | 2025-10-08 | Fuego           | W   | 0.422      | -            | -                | -                | -         |     2.60 | AGL, dott1, Hezz, lenci, pavv  |
|           11 |     2654 | 2025-10-08 | Crashers        | L   | 0.420      | -            | -                | -                | -         |   -10.84 | AGL, dott1, Hezz, lenci, pavv  |
|           10 |     2681 | 2025-10-07 | Galorys         | W   | 0.415      | 0.363        | 0.004 (0.001)    | 0.359 (0.054)    | -         |     8.04 | AGL, dott1, Hezz, lenci, pavv  |
|            9 |     2754 | 2025-10-06 | Yawara          | L   | 0.407      | -            | -                | -                | -         |    -4.61 | AGL, dott1, Hezz, lenci, pavv  |
|            8 |     2800 | 2025-10-05 | GameHunters     | L   | 0.402      | -            | -                | -                | -         |   -10.34 | AGL, dott1, Hezz, lenci, pavv  |
|            7 |     3235 | 2025-09-25 | Dusty Roots     | L   | 0.336      | -            | -                | -                | -         |    -4.84 | AGL, dott1, Hezz, lenci, pavv  |
|            6 |     3275 | 2025-09-24 | Dusty Roots     | W   | 0.328      | 0.314        | 0.009 (0.001)    | 0.263 (0.027)    | 1 (0.328) |     5.60 | AGL, dott1, Hezz, lenci, pavv  |
|            5 |     3287 | 2025-09-24 | 9z              | W   | 0.327      | 0.314        | 0.069 (0.007)    | 0.360 (0.037)    | 1 (0.327) |     8.57 | AGL, dott1, Hezz, lenci, pavv  |
|            4 |     3747 | 2025-09-10 | Fuego           | L   | 0.235      | -            | -                | -                | -         |    -6.18 | AGL, dott1, Hezz, lenci, pavv  |
|            3 |     3866 | 2025-09-08 | MIBR fe         | W   | 0.220      | 0.371        | 0.129 (0.011)    | -                | -         |     5.71 | AGL, dott1, Hezz, lenci, pavv  |
|            2 |     3931 | 2025-09-06 | Players         | L   | 0.207      | -            | -                | -                | -         |    -5.61 | AGL, dott1, Hezz, lenci, pavv  |
|            1 |     3964 | 2025-09-04 | KRÜ             | L   | 0.195      | -            | -                | -                | -         |    -3.87 | AGL, dott1, Hezz, lenci, pavv  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,303.40)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-01 |      1.000 | $800.00        | $800.00         |
| 2025-09-25 |      0.336 | $1,500.00      | $503.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
