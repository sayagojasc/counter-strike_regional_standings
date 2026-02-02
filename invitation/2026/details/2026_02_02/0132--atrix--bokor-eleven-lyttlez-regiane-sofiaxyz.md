### Roster Details<br />
Team Name: Atrix<br />
Roster: bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz<br />
Global Rank: [132](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [30]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  883.0<br />
<br />
Final Rank Value (883.0) = Starting Rank Value (881.8) + Head To Head Adjustments (1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.427[<sup>1</sup>](#table2)
- Bounty Collected: 0.315[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.147[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.8
- 400 + ( ( 0.227 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 881.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1051 | 2025-11-29 | MIBR fe       | L   | 0.766      | -            | -                | -                | -         |    -6.24 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           13 |     1076 | 2025-11-28 | NIP Impact    | L   | 0.760      | -            | -                | -                | -         |   -12.93 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           12 |     1080 | 2025-11-28 | MIBR fe       | W   | 0.759      | 0.605        | 0.129 (0.059)    | 0.231 (0.106)    | 1 (0.759) |    17.71 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           11 |     1400 | 2025-11-14 | MIBR fe       | L   | 0.668      | -            | -                | -                | -         |    -5.43 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           10 |     1412 | 2025-11-14 | FURIA fe      | L   | 0.667      | -            | -                | -                | -         |   -11.96 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            9 |     1430 | 2025-11-13 | Four Magic fe | W   | 0.661      | 0.384        | 0.008 (0.002)    | 0.079 (0.020)    | 1 (0.661) |     4.50 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            8 |     2165 | 2025-10-24 | Four Magic fe | W   | 0.528      | 0.520        | 0.008 (0.002)    | 0.079 (0.022)    | 0 (0.000) |     3.74 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            7 |     2380 | 2025-10-16 | thekillaz fe  | W   | 0.475      | 0.520        | 0.002 (0.000)    | 0.051 (0.013)    | 0 (0.000) |     3.11 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            6 |     2583 | 2025-10-09 | CAPIVARAS     | W   | 0.428      | 0.520        | 0.002 (0.000)    | 0.005 (0.001)    | 0 (0.000) |     1.59 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            5 |     2975 | 2025-10-01 | Curralzinho   | W   | 0.375      | 0.520        | 0.002 (0.000)    | 0.048 (0.009)    | 0 (0.000) |     2.37 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            4 |     3276 | 2025-09-24 | Dusty Roses   | W   | 0.328      | 0.520        | 0.003 (0.000)    | 0.022 (0.004)    | 0 (0.000) |     2.14 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            3 |     3464 | 2025-09-17 | FURIA fe      | W   | 0.282      | 0.520        | 0.014 (0.002)    | 0.201 (0.030)    | 0 (0.000) |     3.96 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            2 |     3749 | 2025-09-10 | MIBR fe       | L   | 0.235      | -            | -                | -                | -         |    -1.70 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            1 |     4256 | 2025-08-20 | CAPIVARAS     | W   | 0.095      | 0.444        | 0.002 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.38 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,496.08)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      0.774 | $17,000.00     | $13,149.62      |
| 2025-11-16 |      0.680 | $3,451.00      | $2,346.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
