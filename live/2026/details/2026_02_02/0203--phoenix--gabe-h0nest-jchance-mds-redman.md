### Roster Details<br />
Team Name: Phoenix<br />
Roster: Gabe, H0NeST, jchancE, mds, Redman<br />
Global Rank: [203](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [50]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  690.5<br />
<br />
Final Rank Value (690.5) = Starting Rank Value (717.0) + Head To Head Adjustments (-26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.0
- 400 + ( ( 0.150 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 717.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      504 | 2026-01-10 | Rave            | L   | 1.000      | -            | -                | -                | -         |    -4.62 | Gabe, H0NeST, jchancE, mds, Valter0k   |
|           39 |      511 | 2026-01-09 | NRG             | L   | 1.000      | -            | -                | -                | -         |    -0.23 | Gabe, H0NeST, jchancE, mds, Valter0k   |
|           38 |      733 | 2025-12-15 | regain          | L   | 0.876      | -            | -                | -                | -         |   -12.35 | Gabe, H0NeST, jchancE, mds, Redman     |
|           37 |      799 | 2025-12-09 | Take Flyte      | W   | 0.836      | 0.333        | -                | 0.217 (0.061)    | 0 (0.000) |     9.31 | Gabe, H0NeST, jchancE, mds, Redman     |
|           36 |      817 | 2025-12-08 | Wanted Goons    | W   | 0.830      | 0.333        | -                | 0.104 (0.029)    | 0 (0.000) |     7.51 | Gabe, H0NeST, jchancE, mds, Redman     |
|           35 |      886 | 2025-12-05 | InControl       | L   | 0.809      | -            | -                | -                | -         |   -13.26 | Gabe, H0NeST, jchancE, mds, Redman     |
|           34 |      937 | 2025-12-03 | Ghost           | W   | 0.796      | 0.333        | 0.003 (0.001)    | 0.137 (0.036)    | 0 (0.000) |    11.21 | Gabe, H0NeST, jchancE, mds, Redman     |
|           33 |     1376 | 2025-11-15 | Voca            | L   | 0.675      | -            | -                | -                | -         |    -2.27 | Gabe, H0NeST, jchancE, mds, Valter0k   |
|           32 |     1630 | 2025-11-07 | SportsBetExpert | L   | 0.622      | -            | -                | -                | -         |    -9.74 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           31 |     1995 | 2025-10-27 | OverKnight      | L   | 0.550      | -            | -                | -                | -         |    -8.35 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           30 |     2035 | 2025-10-26 | Marsborne       | L   | 0.543      | -            | -                | -                | -         |    -0.65 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           29 |     2146 | 2025-10-24 | FlyQuest RED    | W   | 0.529      | 0.363        | 0.018 (0.003)    | 0.205 (0.039)    | 0 (0.000) |    10.32 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           28 |     2211 | 2025-10-23 | InControl       | L   | 0.523      | -            | -                | -                | -         |    -9.24 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           27 |     2278 | 2025-10-21 | Money Crew      | L   | 0.509      | -            | -                | -                | -         |   -10.32 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           26 |     2374 | 2025-10-16 | LAG             | L   | 0.476      | -            | -                | -                | -         |    -7.50 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           25 |     2446 | 2025-10-14 | BOSS            | L   | 0.463      | -            | -                | -                | -         |    -5.09 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           24 |     2479 | 2025-10-13 | Zomblers        | W   | 0.456      | 0.333        | 0.001 (0.000)    | 0.161 (0.025)    | 0 (0.000) |     6.33 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           23 |     2573 | 2025-10-09 | Take Flyte      | W   | 0.429      | 0.363        | -                | 0.217 (0.034)    | 0 (0.000) |     4.34 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           22 |     2621 | 2025-10-08 | Wildcard        | L   | 0.423      | -            | -                | -                | -         |    -3.68 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           21 |     2626 | 2025-10-08 | Voca            | L   | 0.422      | -            | -                | -                | -         |    -1.67 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           20 |     2682 | 2025-10-07 | Zomblers        | W   | 0.415      | 0.333        | 0.001 (0.000)    | 0.161 (0.022)    | 0 (0.000) |     5.94 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           19 |     2731 | 2025-10-06 | Sakura          | W   | 0.410      | 0.363        | 0.060 (0.009)    | 0.206 (0.031)    | 0 (0.000) |     9.43 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           18 |     2737 | 2025-10-06 | InControl       | W   | 0.409      | 0.333        | 0.001 (0.000)    | 0.157 (0.021)    | 0 (0.000) |     6.11 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           17 |     3744 | 2025-09-10 | NYX             | L   | 0.236      | -            | -                | -                | -         |    -5.72 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           16 |     3796 | 2025-09-09 | Outfit 49       | L   | 0.229      | -            | -                | -                | -         |    -5.53 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           15 |     3919 | 2025-09-06 | Marsborne       | L   | 0.208      | -            | -                | -                | -         |    -0.22 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           14 |     4101 | 2025-08-28 | Marsborne       | L   | 0.149      | -            | -                | -                | -         |    -0.15 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           13 |     4187 | 2025-08-24 | TSG             | W   | 0.123      | -            | -                | -                | 0 (0.000) |     1.01 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           12 |     4202 | 2025-08-23 | Voca            | L   | 0.116      | -            | -                | -                | -         |    -0.42 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           11 |     4233 | 2025-08-21 | OverKnight      | W   | 0.102      | 0.333        | -                | 0.190 (0.006)    | -         |     1.48 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           10 |     4286 | 2025-08-19 | Marsborne       | L   | 0.090      | -            | -                | -                | -         |    -0.09 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            9 |     4322 | 2025-08-17 | Aether          | W   | 0.075      | -            | -                | -                | -         |     0.57 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            8 |     4393 | 2025-08-15 | BOSS            | L   | 0.063      | -            | -                | -                | -         |    -0.63 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            7 |     4446 | 2025-08-14 | Mythic          | W   | 0.056      | 0.363        | 0.002 (0.000)    | -                | -         |     0.82 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            6 |     4486 | 2025-08-13 | Sakura          | W   | 0.050      | 0.363        | 0.060 (0.001)    | -                | -         |     1.19 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            5 |     4547 | 2025-08-12 | Wildcard        | L   | 0.043      | -            | -                | -                | -         |    -0.41 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            4 |     4592 | 2025-08-11 | regain          | L   | 0.036      | -            | -                | -                | -         |    -0.57 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            3 |     4606 | 2025-08-11 | Zomblers        | W   | 0.035      | 0.333        | 0.001 (0.000)    | -                | -         |     0.49 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            2 |     4675 | 2025-08-09 | Rave            | L   | 0.023      | -            | -                | -                | -         |    -0.18 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            1 |     4694 | 2025-08-08 | Sakura          | W   | 0.016      | 0.333        | 0.060 (0.000)    | -                | -         |     0.38 | cbass, Gabe, jchancE, mds, REKMEISTER  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,860.06)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-11 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-10-08 |      0.422 | $2,000.00      | $844.46         |
| 2025-08-15 |      0.062 | $250.00        | $15.60          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
