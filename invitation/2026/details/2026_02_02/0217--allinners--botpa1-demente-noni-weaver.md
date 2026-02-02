### Roster Details<br />
Team Name: ALLINNERS<br />
Roster: Botpa1, demente, noni, wEAVER<br />
Global Rank: [217](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [139]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  658.9<br />
<br />
Final Rank Value (658.9) = Starting Rank Value (655.2) + Head To Head Adjustments (3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.2
- 400 + ( ( 0.120 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 655.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3151 | 2025-09-27 | NOVAQ    | L   | 0.347      | -            | -                | -                | -         |    -1.04 | Botpa1, buster, demente, noni, wEAVER  |
|            4 |     4014 | 2025-08-31 | NOVAQ    | L   | 0.166      | -            | -                | -                | -         |    -0.50 | Botpa1, demente, noni, raiNyyy, wEAVER |
|            3 |     4020 | 2025-08-31 | DEPO     | W   | 0.165      | 0.333        | 0.005 (0.000)    | 0.180 (0.010)    | 1 (0.165) |     4.09 | Botpa1, demente, noni, raiNyyy, wEAVER |
|            2 |     4023 | 2025-08-31 | AK BARS  | W   | 0.165      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.165) |     1.67 | Botpa1, demente, noni, raiNyyy, wEAVER |
|            1 |     4051 | 2025-08-30 | NOVAQ    | L   | 0.158      | -            | -                | -                | -         |    -0.47 | Botpa1, demente, noni, raiNyyy, wEAVER |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($606.37)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-27 |      0.347 | $552.00        | $191.64         |
| 2025-08-31 |      0.166 | $2,500.00      | $414.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
