### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: b4rtiN, bsd, JOTA, NEKIZ, shz<br />
Global Rank: [116](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [24]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  932.6<br />
<br />
Final Rank Value (932.6) = Starting Rank Value (856.1) + Head To Head Adjustments (76.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.352[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.067[<sup>2</sup>](#table1)
- LAN Wins: 0.151[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 856.1
- 400 + ( ( 0.215 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 856.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |     1999 | 2025-10-27 | LP             | L   | 0.549      | -            | -                | -                | -         |   -12.91 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           39 |     2046 | 2025-10-26 | Sharks         | L   | 0.542      | -            | -                | -                | -         |    -0.71 | bsd, horvy, JOTA, NEKIZ, shz  |
|           38 |     2163 | 2025-10-24 | Bounty Hunters | W   | 0.529      | 0.363        | 0.020 (0.004)    | 0.517 (0.099)    | 0 (0.000) |     8.87 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           37 |     2306 | 2025-10-19 | RED Canids     | W   | 0.496      | 0.363        | 0.026 (0.005)    | 0.685 (0.123)    | 0 (0.000) |    14.31 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           36 |     2323 | 2025-10-18 | Dusty Roots    | W   | 0.488      | 0.363        | 0.009 (0.002)    | 0.263 (0.047)    | 0 (0.000) |     6.98 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           35 |     2377 | 2025-10-16 | ODDIK          | W   | 0.475      | 0.363        | 0.046 (0.008)    | 0.588 (0.101)    | 0 (0.000) |    12.42 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           34 |     2389 | 2025-10-16 | Yawara         | L   | 0.474      | -            | -                | -                | -         |    -7.04 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           33 |     2414 | 2025-10-15 | Keyd Stars     | W   | 0.469      | 0.363        | 0.006 (0.001)    | -                | 0 (0.000) |     6.55 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           32 |     2450 | 2025-10-14 | Fake do Biru   | W   | 0.462      | 0.363        | 0.012 (0.002)    | 0.411 (0.069)    | 0 (0.000) |     9.71 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           31 |     2580 | 2025-10-09 | Four Magic     | W   | 0.428      | -            | -                | -                | -         |     1.85 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           30 |     2629 | 2025-10-08 | ODDIK          | L   | 0.422      | -            | -                | -                | -         |    -2.13 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           29 |     2751 | 2025-10-06 | Galorys        | W   | 0.408      | 0.363        | -                | 0.359 (0.053)    | -         |     6.86 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           28 |     2806 | 2025-10-05 | ELITES         | W   | 0.401      | -            | -                | -                | -         |     0.75 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           27 |     2902 | 2025-10-03 | Fake do Biru   | L   | 0.388      | -            | -                | -                | -         |    -4.00 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           26 |     2927 | 2025-10-02 | Imperial       | L   | 0.384      | -            | -                | -                | -         |    -0.32 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           25 |     2929 | 2025-10-02 | Fake do Biru   | W   | 0.383      | 0.333        | 0.012 (0.002)    | 0.411 (0.052)    | 1 (0.383) |     8.28 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           24 |     3005 | 2025-09-30 | ODDIK          | L   | 0.369      | -            | -                | -                | -         |    -1.70 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           23 |     3049 | 2025-09-29 | Imperial       | L   | 0.364      | -            | -                | -                | -         |    -0.29 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           22 |     3050 | 2025-09-29 | Keyd Stars     | W   | 0.363      | 0.390        | 0.006 (0.001)    | -                | 1 (0.363) |     5.25 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           21 |     3081 | 2025-09-28 | 9z             | W   | 0.357      | 0.390        | 0.069 (0.010)    | 0.360 (0.050)    | 1 (0.357) |     8.87 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           20 |     3084 | 2025-09-28 | Yawara         | W   | 0.355      | 0.390        | -                | 0.303 (0.042)    | 1 (0.355) |     6.67 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           19 |     3136 | 2025-09-27 | Sharks         | L   | 0.349      | -            | -                | -                | -         |    -0.25 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           18 |     3466 | 2025-09-17 | Galorys        | L   | 0.282      | -            | -                | -                | -         |    -3.77 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           17 |     3617 | 2025-09-13 | Fake do Biru   | L   | 0.254      | -            | -                | -                | -         |    -2.37 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           16 |     3649 | 2025-09-12 | KRÜ            | W   | 0.249      | -            | -                | -                | -         |     2.63 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           15 |     3697 | 2025-09-11 | Yawara         | L   | 0.242      | -            | -                | -                | -         |    -3.08 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           14 |     3800 | 2025-09-09 | Fluxo          | W   | 0.228      | 0.363        | 0.030 (0.003)    | 0.431 (0.036)    | -         |     6.55 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           13 |     3804 | 2025-09-09 | Keyd Stars     | W   | 0.228      | -            | -                | -                | -         |     3.38 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           12 |     3853 | 2025-09-08 | Four Magic     | W   | 0.222      | -            | -                | -                | -         |     1.08 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           11 |     3887 | 2025-09-07 | KRÜ            | W   | 0.215      | -            | -                | -                | -         |     2.36 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           10 |     3952 | 2025-09-05 | Players        | W   | 0.200      | -            | -                | -                | -         |     0.77 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            9 |     4258 | 2025-08-20 | ShindeN        | L   | 0.095      | -            | -                | -                | -         |    -0.94 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            8 |     4379 | 2025-08-16 | BESTIA         | L   | 0.067      | -            | -                | -                | -         |    -0.09 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            7 |     4404 | 2025-08-15 | 9z             | L   | 0.062      | -            | -                | -                | -         |    -0.41 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            6 |     4464 | 2025-08-14 | KRÜ            | W   | 0.053      | -            | -                | -                | -         |     0.58 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            5 |     4548 | 2025-08-12 | ODDIK          | W   | 0.042      | -            | -                | -                | -         |     1.16 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            4 |     4602 | 2025-08-11 | Crashers       | W   | 0.035      | -            | -                | -                | -         |     0.18 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            3 |     4607 | 2025-08-11 | ShindeN        | W   | 0.035      | -            | -                | -                | -         |     0.76 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            2 |     4667 | 2025-08-10 | Bounty Hunters | L   | 0.026      | -            | -                | -                | -         |    -0.25 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            1 |     4720 | 2025-08-07 | ELITES         | W   | 0.007      | -            | -                | -                | -         |     0.02 | b4rtiN, bsd, JOTA, NEKIZ, shz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,978.70)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      0.496 | $8,000.00      | $3,964.24       |
| 2025-09-30 |      0.370 | $2,742.00      | $1,014.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
