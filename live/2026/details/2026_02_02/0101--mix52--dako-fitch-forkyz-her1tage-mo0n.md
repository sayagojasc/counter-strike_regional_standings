### Roster Details<br />
Team Name: mix52<br />
Roster: dako, fitch, forkyz, her1tage, mo0N<br />
Global Rank: [101](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [71]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  992.5<br />
<br />
Final Rank Value (992.5) = Starting Rank Value (958.8) + Head To Head Adjustments (33.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.409[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 958.8
- 400 + ( ( 0.264 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 958.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |        3 | 2026-02-01 | DEPO      | W   | 1.000      | 0.264        | 0.005 (0.001)    | 0.180 (0.048)    | 1 (1.000) |    12.41 | dako, fitch, forkyz, her1tage, mo0N |
|            5 |       61 | 2026-01-28 | ALLINNERS | L   | 1.000      | -            | -                | -                | -         |   -18.01 | dako, fitch, forkyz, her1tage, mo0N |
|            4 |       64 | 2026-01-27 | NOVAQ     | W   | 1.000      | 0.310        | 0.014 (0.004)    | 0.713 (0.221)    | 1 (1.000) |    11.96 | dako, fitch, forkyz, her1tage, mo0N |
|            3 |       70 | 2026-01-27 | HOTU      | L   | 1.000      | -            | -                | -                | -         |    -1.45 | dako, fitch, forkyz, her1tage, mo0N |
|            2 |       76 | 2026-01-27 | NOVAQ     | W   | 1.000      | 0.310        | 0.014 (0.004)    | 0.713 (0.221)    | 1 (1.000) |    12.87 | dako, fitch, forkyz, her1tage, mo0N |
|            1 |      609 | 2025-12-27 | Omega     | W   | 0.953      | 0.287        | 0.013 (0.004)    | 0.165 (0.045)    | 1 (0.953) |    15.86 | dako, fitch, forkyz, her1tage, mo0N |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,400.84)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-01 |      1.000 | $1,055.00      | $1,055.00       |
| 2026-01-28 |      1.000 | $492.00        | $492.00         |
| 2025-12-27 |      0.953 | $1,945.00      | $1,853.84       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
