### Roster Details<br />
Team Name: Reign Above<br />
Roster: cobalt, colin, SayYouWill, SeRCEra, swayu<br />
Global Rank: [264](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [76]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  546.8<br />
<br />
Final Rank Value (546.8) = Starting Rank Value (524.5) + Head To Head Adjustments (22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.234[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 524.5
- 400 + ( ( 0.059 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 524.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      579 | 2026-01-03 | Marsborne   | L   | 1.000      | -            | -                | -                | -         |    -0.56 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            7 |      584 | 2026-01-03 | Kraken Seas | W   | 1.000      | 0.323        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     9.44 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            6 |      592 | 2026-01-03 | Marsborne   | L   | 1.000      | -            | -                | -                | -         |    -0.52 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            5 |     1555 | 2025-11-09 | M80         | L   | 0.633      | -            | -                | -                | -         |    -0.07 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            4 |     1569 | 2025-11-08 | Memeories   | W   | 0.630      | 0.333        | 0.000 (0.000)    | 0.029 (0.006)    | 1 (0.630) |     7.40 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            3 |     1574 | 2025-11-08 | NRG         | L   | 0.629      | -            | -                | -                | -         |    -0.07 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            2 |     1581 | 2025-11-08 | Memeories   | W   | 0.628      | 0.333        | 0.000 (0.000)    | 0.029 (0.006)    | 1 (0.628) |     7.39 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            1 |     3925 | 2025-09-06 | Sakura      | L   | 0.207      | -            | -                | -                | -         |    -0.66 | colin, enN, SayYouWill, SeRCEra, swayu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
