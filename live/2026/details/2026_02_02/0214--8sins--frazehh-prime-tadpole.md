### Roster Details<br />
Team Name: 8Sins<br />
Roster: Frazehh, Prime, Tadpole<br />
Global Rank: [214](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [136]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  664.4<br />
<br />
Final Rank Value (664.4) = Starting Rank Value (672.7) + Head To Head Adjustments (-8.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 672.7
- 400 + ( ( 0.129 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 672.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      866 | 2025-12-06 | Washington | L   | 0.814      | -            | -                | -                | -         |   -10.89 | Bigun007, dobbo, Frazehh, Prime, Tadpole    |
|            4 |     1425 | 2025-11-13 | Coalesce   | W   | 0.662      | 0.264        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.69 | Bigun007, dobbo, Frazehh, Prime, Tadpole    |
|            3 |     1881 | 2025-11-01 | Phantom    | L   | 0.580      | -            | -                | -                | -         |    -6.57 | dobbo, Frazehh, JAUSTERE, Prime, Tadpole    |
|            2 |     3622 | 2025-09-13 | Washington | W   | 0.253      | 0.288        | 0.007 (0.001)    | 0.224 (0.016)    | 1 (0.253) |     4.89 | Bigun007, Frazehh, JAUSTERE, Prime, Tadpole |
|            1 |     4261 | 2025-08-20 | Glitchtech | W   | 0.095      | 0.265        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.53 | Bigun007, Frazehh, JAUSTERE, Prime, Tadpole |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,494.63)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-06 |      0.814 | $1,053.00      | $857.15         |
| 2025-11-02 |      0.586 | $99.00         | $58.04          |
| 2025-09-13 |      0.253 | $2,287.00      | $579.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
