### Roster Details<br />
Team Name: NuTorious<br />
Roster: Jr24racing, Msaia, nova, sayN, Toasty<br />
Global Rank: [281](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [79]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  519.4<br />
<br />
Final Rank Value (519.4) = Starting Rank Value (531.9) + Head To Head Adjustments (-12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.9
- 400 + ( ( 0.062 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 531.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1588 | 2025-11-08 | Mavrek          | L   | 0.628      | -            | -                | -                | -         |   -11.04 | Jester, looke, Msaia, sayN, Toasty    |
|            7 |     1591 | 2025-11-08 | FoxHound        | W   | 0.627      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.627) |     6.48 | Jester, looke, Msaia, sayN, Toasty    |
|            6 |     1599 | 2025-11-08 | Mavrek          | L   | 0.627      | -            | -                | -                | -         |   -11.46 | Jester, looke, Msaia, sayN, Toasty    |
|            5 |     2617 | 2025-10-08 | TSG             | L   | 0.423      | -            | -                | -                | -         |    -6.66 | Jr24racing, Msaia, nova, sayN, Toasty |
|            4 |     2675 | 2025-10-07 | Green Tea Party | W   | 0.416      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.08 | Jr24racing, Msaia, nova, sayN, Toasty |
|            3 |     2736 | 2025-10-06 | Marsborne       | L   | 0.409      | -            | -                | -                | -         |    -0.17 | Jr24racing, Msaia, nova, sayN, Toasty |
|            2 |     2796 | 2025-10-05 | Nocturnal       | W   | 0.403      | 0.363        | 0.002 (0.000)    | 0.090 (0.013)    | 0 (0.000) |     8.73 | Jr24racing, Msaia, nova, sayN, Toasty |
|            1 |     3367 | 2025-09-20 | LAG             | L   | 0.303      | -            | -                | -                | -         |    -2.53 | Jr24racing, Msaia, nova, sayN, Toasty |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
