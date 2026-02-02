### Roster Details<br />
Team Name: SAW<br />
Roster: blaze, jERK0z, Moretz, tuxa<br />
Global Rank: [195](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [128]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  709.7<br />
<br />
Final Rank Value (709.7) = Starting Rank Value (676.8) + Head To Head Adjustments (32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.290[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.8
- 400 + ( ( 0.131 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 676.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      387 | 2026-01-16 | Rebels       | L   | 1.000      | -            | -                | -                | -         |    -7.04 | blaze, jERK0z, Moretz, SYDOX, tuxa  |
|            6 |      399 | 2026-01-16 | MINLATE      | L   | 1.000      | -            | -                | -                | -         |    -4.88 | blaze, jERK0z, Moretz, SYDOX, tuxa  |
|            5 |      412 | 2026-01-16 | Rebels       | W   | 1.000      | 0.341        | 0.008 (0.003)    | 0.198 (0.067)    | 1 (1.000) |    24.83 | blaze, jERK0z, Moretz, SYDOX, tuxa  |
|            4 |      633 | 2025-12-21 | Gentle Mates | L   | 0.912      | -            | -                | -                | -         |    -0.35 | blaze, jERK0z, Moretz, rafity, tuxa |
|            3 |      676 | 2025-12-19 | CALAOSCORNOS | W   | 0.900      | 0.309        | 0.001 (0.000)    | 0.053 (0.015)    | 1 (0.900) |    10.03 | blaze, jERK0z, Moretz, rafity, tuxa |
|            2 |      680 | 2025-12-19 | BC.Game      | L   | 0.899      | -            | -                | -                | -         |    -0.19 | blaze, jERK0z, Moretz, rafity, tuxa |
|            1 |      685 | 2025-12-19 | CALAOSCORNOS | W   | 0.898      | 0.309        | 0.001 (0.000)    | 0.053 (0.015)    | 1 (0.898) |    10.49 | blaze, jERK0z, Moretz, rafity, tuxa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
