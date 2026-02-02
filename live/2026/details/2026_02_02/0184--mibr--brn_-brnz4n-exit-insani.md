### Roster Details<br />
Team Name: MIBR<br />
Roster: brn$, brnz4n, exit, insani<br />
Global Rank: [184](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [41]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  743.7<br />
<br />
Final Rank Value (743.7) = Starting Rank Value (730.8) + Head To Head Adjustments (12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.393[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.8
- 400 + ( ( 0.156 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 730.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1969 | 2025-10-28 | fnatic     | L   | 0.554      | -            | -                | -                | -         |    -0.29 | brn$, brnz4n, exit, insani, Qikert |
|            4 |     2017 | 2025-10-27 | Astralis   | L   | 0.547      | -            | -                | -                | -         |    -0.16 | brn$, brnz4n, exit, insani, Qikert |
|            3 |     2081 | 2025-10-26 | BetBoom    | L   | 0.540      | -            | -                | -                | -         |    -0.19 | brn$, brnz4n, exit, insani, Qikert |
|            2 |     3467 | 2025-09-17 | RED Canids | W   | 0.282      | 0.363        | 0.026 (0.003)    | 0.685 (0.070)    | 0 (0.000) |     8.62 | brn$, brnz4n, exit, insani, nicks  |
|            1 |     3700 | 2025-09-11 | Keyd Stars | W   | 0.242      | 0.363        | 0.006 (0.001)    | 0.194 (0.017)    | 0 (0.000) |     4.94 | brn$, brnz4n, exit, insani, nicks  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,777.13)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-01 |      0.580 | $12,500.00     | $7,254.81       |
| 2025-09-22 |      0.315 | $8,000.00      | $2,522.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
