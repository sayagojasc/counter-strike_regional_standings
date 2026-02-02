### Roster Details<br />
Team Name: LAG<br />
Roster: brett, mason, Sandman, Wolffe<br />
Global Rank: [242](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [63]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  605.2<br />
<br />
Final Rank Value (605.2) = Starting Rank Value (601.4) + Head To Head Adjustments (3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.226[<sup>1</sup>](#table2)
- Bounty Collected: 0.153[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.095<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 601.4
- 400 + ( ( 0.095 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 601.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4392 | 2025-08-15 | Take Flyte    | W   | 0.063      | 0.363        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.66 | Aureo, brett, mason, Sandman, Wolffe  |
|            5 |     4400 | 2025-08-15 | InControl     | W   | 0.062      | 0.278        | 0.001 (0.000)    | 0.157 (0.003)    | 0 (0.000) |     1.20 | brett, consti, mason, Sandman, Wolffe |
|            4 |     4441 | 2025-08-14 | NRG           | L   | 0.056      | -            | -                | -                | -         |    -0.01 | Andrew, brett, mason, Sandman, Wolffe |
|            3 |     4487 | 2025-08-13 | OverKnight    | W   | 0.050      | 0.333        | 0.000 (0.000)    | 0.190 (0.003)    | 0 (0.000) |     0.97 | brett, consti, mason, Sandman, Wolffe |
|            2 |     4541 | 2025-08-12 | Arrival Seven | W   | 0.043      | 0.363        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.33 | Andrew, brett, mason, Sandman, Wolffe |
|            1 |     4597 | 2025-08-11 | Akimbo        | W   | 0.036      | 0.363        | 0.001 (0.000)    | 0.024 (0.000)    | 0 (0.000) |     0.63 | brett, consti, mason, Sandman, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($131.26)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-17 |      0.075 | $1,750.00      | $131.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
