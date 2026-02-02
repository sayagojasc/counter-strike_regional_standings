### Roster Details<br />
Team Name: WHITEBIRD<br />
Roster: El1an, Forester, Lack1, NickelBack, sugaR<br />
Global Rank: [133](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [92]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  882.6<br />
<br />
Final Rank Value (882.6) = Starting Rank Value (835.0) + Head To Head Adjustments (47.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.094[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 835.0
- 400 + ( ( 0.205 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 835.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      626 | 2025-12-21 | K27       | L   | 0.913      | -            | -                | -                | -         |    -1.95 | El1an, Forester, Lack1, NickelBack, sugaR |
|            4 |      635 | 2025-12-21 | Oxuji     | W   | 0.912      | 0.406        | 0.013 (0.005)    | 0.114 (0.042)    | 1 (0.912) |    10.00 | El1an, Forester, Lack1, NickelBack, sugaR |
|            3 |      804 | 2025-12-09 | K27       | L   | 0.834      | -            | -                | -                | -         |    -1.72 | El1an, Forester, Lack1, NickelBack, sugaR |
|            2 |      810 | 2025-12-09 | ALLINNERS | W   | 0.832      | 0.377        | 0.014 (0.004)    | 0.449 (0.141)    | 0 (0.000) |    19.57 | El1an, Forester, Lack1, NickelBack, sugaR |
|            1 |      830 | 2025-12-08 | Nemiga    | W   | 0.826      | 0.377        | 0.108 (0.034)    | 0.760 (0.237)    | 0 (0.000) |    21.69 | El1an, Forester, Lack1, NickelBack, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,026.60)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      0.913 | $9,887.00      | $9,026.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
