### Roster Details<br />
Team Name: Underground<br />
Roster: 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat<br />
Global Rank: [198](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [22]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  706.1<br />
<br />
Final Rank Value (706.1) = Starting Rank Value (773.2) + Head To Head Adjustments (-67.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.238[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 773.2
- 400 + ( ( 0.176 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 773.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      883 | 2025-12-05 | LITE              | L   | 0.810      | -            | -                | -                | -         |   -15.22 | 74LOR, KRAXYT, Mechanical, RoyaL, w0mbat   |
|           12 |      887 | 2025-12-05 | THUNDER dOWNUNDER | L   | 0.809      | -            | -                | -                | -         |   -10.92 | 74LOR, KRAXYT, Mechanical, w0mbat, ws      |
|           11 |     1012 | 2025-11-29 | Mindfreak         | L   | 0.771      | -            | -                | -                | -         |    -7.98 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|           10 |     1015 | 2025-11-29 | Rooster           | L   | 0.770      | -            | -                | -                | -         |    -8.40 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            9 |     1018 | 2025-11-29 | Mindfreak         | W   | 0.769      | 0.279        | 0.010 (0.002)    | 0.380 (0.082)    | 1 (0.769) |    16.35 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            8 |     1057 | 2025-11-29 | BBBMBCBS          | W   | 0.765      | 0.279        | 0.000 (0.000)    | 0.051 (0.011)    | 1 (0.765) |     5.98 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            7 |     1061 | 2025-11-29 | blingus           | W   | 0.764      | 0.279        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.764) |     3.23 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            6 |     1063 | 2025-11-28 | Rooster           | L   | 0.764      | -            | -                | -                | -         |    -8.25 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            5 |     1131 | 2025-11-25 | Ground Zero       | L   | 0.739      | -            | -                | -                | -         |   -10.52 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat |
|            4 |     1195 | 2025-11-23 | Vantage           | W   | 0.726      | 0.314        | 0.000 (0.000)    | 0.055 (0.013)    | 0 (0.000) |     7.64 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat |
|            3 |     1232 | 2025-11-22 | LITE              | L   | 0.718      | -            | -                | -                | -         |   -14.41 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat |
|            2 |     2209 | 2025-10-24 | Animus Victoria   | L   | 0.525      | -            | -                | -                | -         |   -13.19 | 74LOR, Mechanical, Myst, N1ghtraid, RoyaL  |
|            1 |     2252 | 2025-10-23 | Vantage           | L   | 0.519      | -            | -                | -                | -         |   -11.42 | 74LOR, Mechanical, Myst, N1ghtraid, RoyaL  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($251.51)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      0.771 | $326.00        | $251.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
