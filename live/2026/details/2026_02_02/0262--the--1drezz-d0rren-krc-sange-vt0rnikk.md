### Roster Details<br />
Team Name: THE<br />
Roster: 1Drezz, d0RREN, krc, Sange, vt0rnikk<br />
Global Rank: [262](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [155]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  550.0<br />
<br />
Final Rank Value (550.0) = Starting Rank Value (522.0) + Head To Head Adjustments (28.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.0
- 400 + ( ( 0.058 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 522.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3053 | 2025-09-29 | 1win      | L   | 0.361      | -            | -                | -                | -         |    -0.94 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            6 |     3147 | 2025-09-27 | ALGO      | W   | 0.347      | 0.384        | 0.006 (0.001)    | 0.335 (0.045)    | 0 (0.000) |    10.23 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            5 |     3197 | 2025-09-26 | ARCRED    | W   | 0.341      | 0.384        | 0.009 (0.001)    | 0.883 (0.116)    | 0 (0.000) |     9.60 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            4 |     3455 | 2025-09-18 | Oramond   | L   | 0.285      | -            | -                | -                | -         |    -0.44 | 1Drezz, d0RREN, KarmaN, krc, Sange   |
|            3 |     3475 | 2025-09-17 | ComeBack  | W   | 0.281      | 0.384        | 0.001 (0.000)    | 0.125 (0.013)    | 0 (0.000) |     6.01 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            2 |     3594 | 2025-09-13 | The Glecs | W   | 0.257      | 0.384        | 0.000 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     4.19 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            1 |     3618 | 2025-09-13 | 1win      | L   | 0.253      | -            | -                | -                | -         |    -0.63 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
