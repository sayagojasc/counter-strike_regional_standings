### Roster Details<br />
Team Name: WW<br />
Roster: ct0m, deko, kelieN, m3wsu, StRoGo<br />
Global Rank: [135](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [94]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  876.5<br />
<br />
Final Rank Value (876.5) = Starting Rank Value (840.9) + Head To Head Adjustments (35.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.237[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 840.9
- 400 + ( ( 0.208 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 840.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      848 | 2025-12-07 | Nemesis  | L   | 0.820      | -            | -                | -                | -         |    -3.23 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            6 |      864 | 2025-12-06 | NOVAQ    | W   | 0.814      | 0.331        | 0.014 (0.004)    | 0.713 (0.192)    | 1 (0.814) |    17.70 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            5 |      877 | 2025-12-06 | Nemesis  | L   | 0.812      | -            | -                | -                | -         |    -2.89 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            4 |     1119 | 2025-11-25 | K27      | L   | 0.740      | -            | -                | -                | -         |    -1.84 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            3 |     1125 | 2025-11-25 | Nemesis  | W   | 0.740      | 0.371        | 0.013 (0.004)    | 0.280 (0.077)    | 1 (0.740) |    14.69 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            2 |     1152 | 2025-11-24 | Sangal   | L   | 0.734      | -            | -                | -                | -         |    -4.07 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            1 |     1161 | 2025-11-24 | Nemesis  | W   | 0.733      | 0.371        | 0.013 (0.004)    | 0.280 (0.076)    | 1 (0.733) |    15.27 | ct0m, deko, kelieN, m3wsu, StRoGo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,930.53)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-07 |      0.821 | $1,442.00      | $1,183.34       |
| 2025-11-26 |      0.747 | $1,000.00      | $747.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
