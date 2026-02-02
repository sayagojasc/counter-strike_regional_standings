### Roster Details<br />
Team Name: KZG<br />
Roster: dearlucid, dpr, Drox, Mingovi, vinhy<br />
Global Rank: [288](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [35]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  507.0<br />
<br />
Final Rank Value (507.0) = Starting Rank Value (503.3) + Head To Head Adjustments (3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.191[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 503.3
- 400 + ( ( 0.049 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 503.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2787 | 2025-10-06 | Rooster         | L   | 0.405      | -            | -                | -                | -         |    -3.03 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|           11 |     2848 | 2025-10-05 | Mindfreak       | L   | 0.398      | -            | -                | -                | -         |    -1.25 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|           10 |     3457 | 2025-09-18 | Ground Zero     | L   | 0.284      | -            | -                | -                | -         |    -1.94 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            9 |     3784 | 2025-09-10 | FURY            | W   | 0.232      | 0.278        | 0.000 (0.000)    | 0.105 (0.007)    | 0 (0.000) |     3.70 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            8 |     3787 | 2025-09-10 | Rooster         | L   | 0.231      | -            | -                | -                | -         |    -1.78 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            7 |     3838 | 2025-09-09 | DanCompany      | W   | 0.225      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.48 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            6 |     3881 | 2025-09-08 | Ground Zero     | L   | 0.218      | -            | -                | -                | -         |    -1.49 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            5 |     3885 | 2025-09-08 | Animus Victoria | W   | 0.218      | 0.314        | 0.000 (0.000)    | 0.089 (0.006)    | 0 (0.000) |     3.55 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            4 |     3935 | 2025-09-06 | Ground Zero     | L   | 0.206      | -            | -                | -                | -         |    -1.39 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            3 |     3960 | 2025-09-05 | Mindfreak       | W   | 0.198      | 0.314        | 0.010 (0.001)    | 0.380 (0.024)    | 0 (0.000) |     5.74 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            2 |     3984 | 2025-09-03 | Animus Victoria | L   | 0.185      | -            | -                | -                | -         |    -2.81 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            1 |     4000 | 2025-09-01 | Exsto           | W   | 0.172      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.95 | dearlucid, dpr, Drox, Mingovi, vinhy       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
