### Roster Details<br />
Team Name: MANA<br />
Roster: ammar, BledarD, Caleyy, cerber, SENER1<br />
Global Rank: [192](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [126]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  718.6<br />
<br />
Final Rank Value (718.6) = Starting Rank Value (651.1) + Head To Head Adjustments (67.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.223[<sup>2</sup>](#table1)

The average of these factors is 0.119<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 651.1
- 400 + ( ( 0.119 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 651.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      327 | 2026-01-17 | BIG              | L   | 1.000      | -            | -                | -                | -         |    -0.41 | ammar, BledarD, Caleyy, cerber, SENER1    |
|           20 |      414 | 2026-01-16 | STATE            | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.502 (0.072)    | 0 (0.000) |    28.10 | ammar, BledarD, Caleyy, cerber, SENER1    |
|           19 |      430 | 2026-01-15 | Impulse GW       | W   | 1.000      | 0.341        | 0.002 (0.001)    | 0.148 (0.050)    | 1 (1.000) |    22.53 | ammar, BledarD, Caleyy, cerber, SENER1    |
|           18 |      438 | 2026-01-15 | GRINGOS          | W   | 1.000      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     5.72 | ammar, BledarD, Caleyy, cerber, SENER1    |
|           17 |      441 | 2026-01-15 | Impulse GW       | L   | 1.000      | -            | -                | -                | -         |    -8.16 | ammar, BledarD, Caleyy, cerber, SENER1    |
|           16 |      493 | 2026-01-12 | Bushido Wildcats | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.151 (0.022)    | 0 (0.000) |    23.12 | ammar, BledarD, Caleyy, cerber, SENER1    |
|           15 |      515 | 2026-01-08 | ALGO             | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.335 (0.048)    | 0 (0.000) |    27.22 | ammar, BledarD, Caleyy, cerber, SENER1    |
|           14 |     1111 | 2025-11-26 | kONO             | L   | 0.745      | -            | -                | -                | -         |    -4.08 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           13 |     1157 | 2025-11-24 | FORZE Reload     | L   | 0.733      | -            | -                | -                | -         |    -3.69 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           12 |     1264 | 2025-11-21 | ComeBack         | L   | 0.712      | -            | -                | -                | -         |    -9.86 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           11 |     1327 | 2025-11-19 | Eternal Fire     | L   | 0.699      | -            | -                | -                | -         |   -10.98 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           10 |     1339 | 2025-11-18 | HAVU             | L   | 0.693      | -            | -                | -                | -         |    -1.63 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            9 |     1344 | 2025-11-17 | Eternal Fire     | W   | 0.688      | 0.344        | 0.000 (0.000)    | 0.442 (0.105)    | 0 (0.000) |    10.64 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            8 |     1892 | 2025-11-01 | Bushido Wildcats | L   | 0.579      | -            | -                | -                | -         |    -5.25 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            7 |     2889 | 2025-10-04 | m1x              | L   | 0.392      | -            | -                | -                | -         |    -7.00 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            6 |     2915 | 2025-10-03 | Dziuseppe        | W   | 0.386      | 0.344        | 0.003 (0.000)    | 0.153 (0.020)    | 0 (0.000) |     8.40 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            5 |     2951 | 2025-10-02 | m1x              | L   | 0.380      | -            | -                | -                | -         |    -6.86 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            4 |     3250 | 2025-09-25 | GenOne           | L   | 0.334      | -            | -                | -                | -         |    -1.09 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            3 |     3267 | 2025-09-25 | Passion UA       | L   | 0.332      | -            | -                | -                | -         |    -0.09 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            2 |     4082 | 2025-08-29 | ENCE             | L   | 0.152      | -            | -                | -                | -         |    -0.11 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            1 |     4097 | 2025-08-29 | Insiders         | W   | 0.151      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.151) |     0.94 | ammar, BledarD, Caleyy, cerber, gejmzilla |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
