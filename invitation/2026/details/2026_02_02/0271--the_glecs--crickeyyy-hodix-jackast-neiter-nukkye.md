### Roster Details<br />
Team Name: The Glecs<br />
Roster: crickeyyy, hodix, jackast, neiter, nukkye<br />
Global Rank: [271](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [162]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  529.8<br />
<br />
Final Rank Value (529.8) = Starting Rank Value (531.1) + Head To Head Adjustments (-1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.1
- 400 + ( ( 0.062 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 531.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3071 | 2025-09-29 | Leo           | L   | 0.359      | -            | -                | -                | -         |    -1.36 | crickeyyy, hodix, jackast, kalyambys, mad1nho   |
|           14 |     3594 | 2025-09-13 | THE           | L   | 0.257      | -            | -                | -                | -         |    -4.19 | crickeyyy, hodix, jackast, neiter, nukkye       |
|           13 |     3619 | 2025-09-13 | ComeBack      | L   | 0.253      | -            | -                | -                | -         |    -2.67 | crickeyyy, hodix, jackast, neiter, nukkye       |
|           12 |     3772 | 2025-09-10 | Nexus         | L   | 0.233      | -            | -                | -                | -         |    -0.29 | crickeyyy, hodix, jackast, neiter, nukkye       |
|           11 |     3818 | 2025-09-09 | Nemiga        | L   | 0.227      | -            | -                | -                | -         |    -0.25 | crickeyyy, hodix, jackast, neiter, nukkye       |
|           10 |     3956 | 2025-09-05 | Oramond       | L   | 0.199      | -            | -                | -                | -         |    -0.35 | crickeyyy, fakerealityy, hodix, jackast, nukkye |
|            9 |     3982 | 2025-09-03 | KHAN          | W   | 0.186      | 0.333        | 0.000 (0.000)    | 0.143 (0.009)    | 0 (0.000) |     3.56 | crickeyyy, fakerealityy, hodix, jackast, nukkye |
|            8 |     4092 | 2025-08-29 | NIP Impact    | W   | 0.151      | 0.333        | 0.060 (0.003)    | 0.220 (0.011)    | 0 (0.000) |     4.20 | crickeyyy, hodix, jackast, neiter, nukkye       |
|            7 |     4181 | 2025-08-25 | KHAN          | L   | 0.125      | -            | -                | -                | -         |    -1.53 | crickeyyy, hodix, jackast, neiter, nukkye       |
|            6 |     4349 | 2025-08-17 | ex-RUBY       | L   | 0.072      | -            | -                | -                | -         |    -0.15 | crickeyyy, fakerealityy, hodix, jackast, neiter |
|            5 |     4422 | 2025-08-15 | magic         | L   | 0.061      | -            | -                | -                | -         |    -0.10 | crickeyyy, fakerealityy, hodix, jackast, neiter |
|            4 |     4482 | 2025-08-14 | FACEITPLAYERS | W   | 0.052      | 0.384        | 0.000 (0.000)    | 0.028 (0.001)    | 0 (0.000) |     1.04 | crickeyyy, fakerealityy, hodix, jackast, neiter |
|            3 |     4513 | 2025-08-13 | BC.Game       | W   | 0.047      | 0.384        | 0.280 (0.005)    | 0.594 (0.011)    | 0 (0.000) |     1.49 | crickeyyy, hodix, jackast, neiter, tripex17     |
|            2 |     4537 | 2025-08-13 | ex-RUBY       | L   | 0.045      | -            | -                | -                | -         |    -0.10 | crickeyyy, fakerealityy, hodix, jackast, neiter |
|            1 |     4565 | 2025-08-12 | BIG           | L   | 0.041      | -            | -                | -                | -         |    -0.64 | crickeyyy, fakerealityy, hodix, jackast, neiter |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
