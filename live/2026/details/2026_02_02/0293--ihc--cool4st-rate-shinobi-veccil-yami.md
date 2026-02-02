### Roster Details<br />
Team Name: IHC<br />
Roster: cool4st, rate, shinobi, Veccil, yAmi<br />
Global Rank: [293](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [37]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  495.3<br />
<br />
Final Rank Value (495.3) = Starting Rank Value (492.6) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.6
- 400 + ( ( 0.044 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 492.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4428 | 2025-08-15 | The Huns | L   | 0.060      | -            | -                | -                | -         |    -0.07 | cool4st, rate, shinobi, Veccil, yAmi |
|            4 |     4470 | 2025-08-14 | Eruption | W   | 0.053      | 0.333        | 0.010 (0.000)    | 0.155 (0.003)    | 0 (0.000) |     1.38 | cool4st, rate, shinobi, Veccil, yAmi |
|            3 |     4529 | 2025-08-13 | L4S      | W   | 0.046      | 0.333        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.76 | cool4st, rate, shinobi, Veccil, yAmi |
|            2 |     4578 | 2025-08-12 | Flshbck  | W   | 0.039      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.65 | cool4st, rate, shinobi, Veccil, yAmi |
|            1 |     4627 | 2025-08-11 | The Huns | L   | 0.033      | -            | -                | -                | -         |    -0.04 | cool4st, rate, shinobi, Veccil, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
