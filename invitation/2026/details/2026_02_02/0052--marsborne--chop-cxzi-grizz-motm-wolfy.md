### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Cxzi, Grizz, motm, WolfY<br />
Global Rank: [52](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [13]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  1218.2<br />
<br />
Final Rank Value (1218.2) = Starting Rank Value (1333.7) + Head To Head Adjustments (-115.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.424[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.114[<sup>2</sup>](#table1)
- LAN Wins: 0.883[<sup>2</sup>](#table1)

The average of these factors is 0.441<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1333.7
- 400 + ( ( 0.441 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1333.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |        4 | 2026-01-31 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |    -9.56 | chop, Cxzi, Grizz, motm, WolfY   |
|           67 |        6 | 2026-01-31 | Procyon           | W   | 1.000      | 0.371        | -                | 0.277 (0.103)    | 1 (1.000) |     2.64 | chop, Cxzi, Grizz, motm, WolfY   |
|           66 |       19 | 2026-01-30 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -10.21 | chop, Cxzi, Grizz, motm, WolfY   |
|           65 |       26 | 2026-01-30 | Procyon           | W   | 1.000      | 0.371        | -                | 0.277 (0.103)    | 1 (1.000) |     2.38 | chop, Cxzi, Grizz, motm, WolfY   |
|           64 |      496 | 2026-01-11 | NRG               | L   | 1.000      | -            | -                | -                | -         |    -4.02 | chop, Cxzi, Grizz, motm, WolfY   |
|           63 |      500 | 2026-01-10 | BOSS              | W   | 1.000      | 0.396        | 0.019 (0.007)    | 0.437 (0.173)    | 1 (1.000) |     4.45 | chop, Cxzi, Grizz, motm, WolfY   |
|           62 |      502 | 2026-01-10 | regain            | W   | 1.000      | 0.396        | -                | 0.330 (0.131)    | 1 (1.000) |     1.86 | chop, Cxzi, Grizz, motm, WolfY   |
|           61 |      508 | 2026-01-10 | BOSS              | L   | 1.000      | -            | -                | -                | -         |   -27.50 | chop, Cxzi, Grizz, motm, WolfY   |
|           60 |      538 | 2026-01-04 | M80               | L   | 1.000      | -            | -                | -                | -         |    -4.60 | chop, Cxzi, Grizz, motm, WolfY   |
|           59 |      579 | 2026-01-03 | Reign Above       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.56 | chop, Cxzi, Grizz, motm, WolfY   |
|           58 |      583 | 2026-01-03 | NRG               | L   | 1.000      | -            | -                | -                | -         |    -5.48 | chop, Cxzi, Grizz, motm, WolfY   |
|           57 |      592 | 2026-01-03 | Reign Above       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.52 | chop, Cxzi, Grizz, motm, WolfY   |
|           56 |     1357 | 2025-11-16 | Voca              | L   | 0.681      | -            | -                | -                | -         |   -16.11 | chop, Cxzi, Grizz, viz, WolfY    |
|           55 |     1373 | 2025-11-15 | Rave              | L   | 0.676      | -            | -                | -                | -         |   -17.67 | chop, Cxzi, Grizz, viz, WolfY    |
|           54 |     1375 | 2025-11-15 | Zomblers          | W   | 0.675      | -            | -                | -                | -         |     0.65 | chop, Cxzi, Grizz, viz, WolfY    |
|           53 |     1397 | 2025-11-14 | Voca              | W   | 0.670      | 0.363        | 0.048 (0.012)    | 0.535 (0.130)    | -         |     4.75 | chop, Cxzi, Grizz, viz, WolfY    |
|           52 |     1450 | 2025-11-12 | BOSS              | W   | 0.657      | 0.363        | 0.019 (0.004)    | 0.437 (0.104)    | -         |     1.72 | chop, Cxzi, Grizz, viz, WolfY    |
|           51 |     1485 | 2025-11-11 | Mythic            | W   | 0.650      | -            | -                | -                | -         |     0.78 | chop, Cxzi, Grizz, viz, WolfY    |
|           50 |     1511 | 2025-11-10 | Voca              | L   | 0.643      | -            | -                | -                | -         |   -15.75 | chop, Cxzi, Grizz, viz, WolfY    |
|           49 |     1539 | 2025-11-09 | BC.Game           | W   | 0.635      | 0.333        | 0.280 (0.059)    | 0.594 (0.126)    | 1 (0.635) |    17.26 | chop, Cxzi, Grizz, viz, WolfY    |
|           48 |     1545 | 2025-11-09 | M80               | L   | 0.634      | -            | -                | -                | -         |    -3.73 | chop, Cxzi, Grizz, viz, WolfY    |
|           47 |     1552 | 2025-11-09 | FlyQuest RED      | W   | 0.633      | 0.333        | 0.018 (0.004)    | -                | 1 (0.633) |     1.05 | chop, Cxzi, Grizz, viz, WolfY    |
|           46 |     1576 | 2025-11-08 | F5                | W   | 0.628      | -            | -                | -                | 1 (0.628) |     0.29 | chop, Cxzi, Grizz, viz, WolfY    |
|           45 |     1583 | 2025-11-08 | barry pickers     | W   | 0.628      | -            | -                | -                | 1 (0.628) |     0.13 | chop, Cxzi, Grizz, viz, WolfY    |
|           44 |     1760 | 2025-11-05 | Voca              | W   | 0.610      | 0.333        | 0.048 (0.010)    | 0.535 (0.109)    | -         |     4.43 | chop, Cxzi, Grizz, viz, WolfY    |
|           43 |     1866 | 2025-11-01 | M80               | L   | 0.582      | -            | -                | -                | -         |    -3.59 | chop, Cxzi, Grizz, viz, WolfY    |
|           42 |     1876 | 2025-11-01 | Ghost             | W   | 0.581      | -            | -                | -                | -         |     0.53 | chop, Cxzi, Grizz, viz, WolfY    |
|           41 |     1922 | 2025-10-30 | BOSS              | W   | 0.569      | 0.333        | -                | 0.437 (0.083)    | -         |     1.42 | chop, Cxzi, Grizz, viz, WolfY    |
|           40 |     1963 | 2025-10-28 | OverKnight        | W   | 0.556      | -            | -                | -                | -         |     0.73 | chop, Cxzi, Grizz, viz, WolfY    |
|           39 |     2035 | 2025-10-26 | Phoenix           | W   | 0.543      | -            | -                | -                | -         |     0.65 | chop, Cxzi, Grizz, viz, WolfY    |
|           38 |     2048 | 2025-10-26 | NRG               | L   | 0.542      | -            | -                | -                | -         |    -3.62 | chop, Cxzi, Grizz, viz, WolfY    |
|           37 |     2057 | 2025-10-26 | Rave              | W   | 0.541      | 0.303        | 0.048 (0.008)    | 0.480 (0.079)    | -         |     2.58 | chop, Cxzi, Grizz, viz, WolfY    |
|           36 |     2104 | 2025-10-25 | LAG               | W   | 0.535      | -            | -                | -                | -         |     0.73 | chop, Cxzi, Grizz, viz, WolfY    |
|           35 |     2150 | 2025-10-24 | Nocturnal         | W   | 0.529      | -            | -                | -                | -         |     0.44 | chop, Cxzi, Grizz, viz, WolfY    |
|           34 |     2279 | 2025-10-21 | LAG               | W   | 0.509      | -            | -                | -                | -         |     0.69 | chop, Cxzi, Grizz, viz, WolfY    |
|           33 |     2297 | 2025-10-20 | Take Flyte        | W   | 0.503      | -            | -                | -                | -         |     0.32 | chop, CLASIA, Cxzi, Grizz, WolfY |
|           32 |     2321 | 2025-10-18 | Wildcard          | L   | 0.489      | -            | -                | -                | -         |   -13.76 | chop, Grizz, motm, viz, WolfY    |
|           31 |     2344 | 2025-10-17 | Rave              | L   | 0.482      | -            | -                | -                | -         |   -13.31 | chop, Grizz, motm, viz, WolfY    |
|           30 |     2448 | 2025-10-14 | Wildcard          | W   | 0.463      | -            | -                | -                | -         |     1.32 | chop, Grizz, motm, viz, WolfY    |
|           29 |     2480 | 2025-10-13 | SportsBetExpert   | W   | 0.456      | -            | -                | -                | -         |     0.39 | chop, Cxzi, Grizz, viz, WolfY    |
|           28 |     2618 | 2025-10-08 | LAG               | W   | 0.423      | -            | -                | -                | -         |     0.48 | chop, Cxzi, Grizz, viz, WolfY    |
|           27 |     2736 | 2025-10-06 | NuTorious         | W   | 0.409      | -            | -                | -                | -         |     0.17 | chop, Cxzi, Grizz, viz, WolfY    |
|           26 |     2867 | 2025-10-04 | BC.Game           | L   | 0.394      | -            | -                | -                | -         |    -1.93 | chop, Cxzi, Grizz, viz, WolfY    |
|           25 |     3317 | 2025-09-22 | Wildcard          | L   | 0.316      | -            | -                | -                | -         |    -9.11 | chop, Cxzi, Grizz, viz, WolfY    |
|           24 |     3366 | 2025-09-20 | Voca              | W   | 0.303      | 0.363        | 0.048 (0.005)    | -                | -         |     1.96 | chop, Cxzi, Grizz, viz, WolfY    |
|           23 |     3461 | 2025-09-17 | Rave              | W   | 0.283      | 0.363        | 0.048 (0.005)    | -                | -         |     1.00 | chop, Cxzi, Grizz, viz, WolfY    |
|           22 |     3548 | 2025-09-14 | Wildcard          | W   | 0.263      | -            | -                | -                | -         |     0.67 | chop, Cxzi, Grizz, viz, WolfY    |
|           21 |     3550 | 2025-09-14 | Voca              | W   | 0.262      | 0.303        | 0.048 (0.004)    | -                | -         |     1.72 | chop, Cxzi, Grizz, viz, WolfY    |
|           20 |     3597 | 2025-09-13 | Fisher College    | W   | 0.255      | -            | -                | -                | -         |     0.05 | chop, Cxzi, Grizz, viz, WolfY    |
|           19 |     3687 | 2025-09-11 | Outfit 49         | W   | 0.243      | -            | -                | -                | -         |     0.08 | chop, Grizz, motm, viz, WolfY    |
|           18 |     3790 | 2025-09-09 | regain            | W   | 0.229      | -            | -                | -                | -         |     0.25 | chop, Grizz, motm, viz, WolfY    |
|           17 |     3912 | 2025-09-06 | Ninjas in Pyjamas | L   | 0.209      | -            | -                | -                | -         |    -1.51 | chop, Grizz, motm, viz, WolfY    |
|           16 |     3919 | 2025-09-06 | Phoenix           | W   | 0.208      | -            | -                | -                | -         |     0.22 | chop, Grizz, motm, viz, WolfY    |
|           15 |     3992 | 2025-09-01 | Rave              | L   | 0.176      | -            | -                | -                | -         |    -4.98 | chop, Grizz, motm, viz, WolfY    |
|           14 |     4101 | 2025-08-28 | Phoenix           | W   | 0.149      | -            | -                | -                | -         |     0.15 | chop, Grizz, motm, viz, WolfY    |
|           13 |     4124 | 2025-08-27 | Rave              | L   | 0.143      | -            | -                | -                | -         |    -4.08 | chop, Grizz, motm, viz, WolfY    |
|           12 |     4151 | 2025-08-26 | regain            | W   | 0.136      | -            | -                | -                | -         |     0.14 | chop, Grizz, motm, viz, WolfY    |
|           11 |     4215 | 2025-08-22 | BOSS              | W   | 0.109      | -            | -                | -                | -         |     0.23 | chop, Grizz, motm, viz, WolfY    |
|           10 |     4228 | 2025-08-21 | Rave              | L   | 0.103      | -            | -                | -                | -         |    -2.94 | chop, Grizz, motm, viz, WolfY    |
|            9 |     4286 | 2025-08-19 | Phoenix           | W   | 0.090      | -            | -                | -                | -         |     0.09 | chop, Grizz, motm, viz, WolfY    |
|            8 |     4350 | 2025-08-16 | Zomblers          | W   | 0.070      | -            | -                | -                | -         |     0.06 | chop, Grizz, motm, viz, WolfY    |
|            7 |     4354 | 2025-08-16 | Rave              | L   | 0.069      | -            | -                | -                | -         |    -1.97 | chop, Grizz, motm, viz, WolfY    |
|            6 |     4395 | 2025-08-15 | Arrival Seven     | W   | 0.063      | -            | -                | -                | -         |     0.01 | chop, Grizz, motm, viz, WolfY    |
|            5 |     4447 | 2025-08-14 | M80               | L   | 0.056      | -            | -                | -                | -         |    -0.37 | chop, Grizz, motm, viz, WolfY    |
|            4 |     4498 | 2025-08-13 | M80               | L   | 0.048      | -            | -                | -                | -         |    -0.32 | chop, Grizz, motm, viz, WolfY    |
|            3 |     4543 | 2025-08-12 | Take Flyte        | W   | 0.043      | -            | -                | -                | -         |     0.01 | chop, Grizz, motm, viz, WolfY    |
|            2 |     4677 | 2025-08-09 | BOSS              | W   | 0.022      | -            | -                | -                | -         |     0.04 | chop, Grizz, motm, viz, WolfY    |
|            1 |     4712 | 2025-08-07 | Arrival Seven     | W   | 0.009      | -            | -                | -                | -         |     0.00 | chop, Grizz, motm, viz, WolfY    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,020.30)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-01 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-01-11 |      1.000 | $3,000.00      | $3,000.00       |
| 2025-11-15 |      0.676 | $4,000.00      | $2,705.90       |
| 2025-11-09 |      0.636 | $1,300.00      | $827.25         |
| 2025-11-05 |      0.610 | $5,000.00      | $3,048.54       |
| 2025-11-02 |      0.588 | $1,000.00      | $587.57         |
| 2025-10-26 |      0.542 | $1,000.00      | $542.23         |
| 2025-10-19 |      0.496 | $2,000.00      | $992.71         |
| 2025-09-22 |      0.316 | $4,000.00      | $1,264.66       |
| 2025-09-14 |      0.263 | $4,000.00      | $1,051.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
