### Roster Details<br />
Team Name: HEROIC<br />
Roster: LNZ, nilo, tN1R, yxngstxr<br />
Global Rank: [175](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [118]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  761.6<br />
<br />
Final Rank Value (761.6) = Starting Rank Value (758.0) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.010[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 758.0
- 400 + ( ( 0.169 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 758.0


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
|            5 |     4223 | 2025-08-22 | Aurora     | L   | 0.107      | -            | -                | -                | -         |    -0.01 | Alkaren, LNZ, nilo, tN1R, yxngstxr |
|            4 |     4264 | 2025-08-20 | Spirit     | W   | 0.094      | 1.000        | 0.635 (0.060)    | 0.369 (0.035)    | 1 (0.094) |     2.96 | Alkaren, LNZ, nilo, tN1R, yxngstxr |
|            3 |     4621 | 2025-08-11 | Passion UA | W   | 0.033      | 0.769        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.22 | Alkaren, LNZ, nilo, tN1R, yxngstxr |
|            2 |     4661 | 2025-08-10 | Aurora     | L   | 0.026      | -            | -                | -                | -         |    -0.00 | LNZ, nilo, Scr0b, tN1R, yxngstxr   |
|            1 |     4700 | 2025-08-08 | Passion UA | W   | 0.014      | 0.624        | 0.160 (0.001)    | 0.417 (0.004)    | 0 (0.000) |     0.43 | LNZ, nilo, Scr0b, tN1R, yxngstxr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,828.64)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-24 |      0.119 | $40,000.00     | $4,761.02       |
| 2025-08-10 |      0.027 | $2,500.00      | $67.62          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
