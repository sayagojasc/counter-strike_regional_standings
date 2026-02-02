### Roster Details<br />
Team Name: BORING PLAYERS<br />
Roster: Jun7, karl, Miszary, tutu, zdr<br />
Global Rank: [168](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [18]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  771.9<br />
<br />
Final Rank Value (771.9) = Starting Rank Value (767.6) + Head To Head Adjustments (4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.143[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 767.6
- 400 + ( ( 0.173 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 767.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1420 | 2025-11-13 | 9INE        | L   | 0.663      | -            | -                | -                | -         |    -0.52 | Jun7, karl, Miszary, tutu, zdr   |
|           18 |     1566 | 2025-11-09 | FengDa      | W   | 0.631      | 0.379        | 0.023 (0.005)    | 0.302 (0.072)    | 1 (0.631) |    14.71 | Jun7, karl, Miszary, tutu, zdr   |
|           17 |     1726 | 2025-11-07 | UR          | W   | 0.618      | 0.379        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.618) |     2.32 | Jun7, karl, Miszary, tutu, zdr   |
|           16 |     1780 | 2025-11-05 | Last Bullet | L   | 0.606      | -            | -                | -                | -         |    -9.60 | Jun7, karl, Miszary, tutu, zdr   |
|           15 |     2082 | 2025-10-26 | The QUBE    | L   | 0.540      | -            | -                | -                | -         |   -10.39 | Jun7, karl, Miszary, tutu, zdr   |
|           14 |     2133 | 2025-10-25 | Last Bullet | W   | 0.533      | 0.333        | 0.004 (0.001)    | 0.122 (0.022)    | 0 (0.000) |     8.24 | Jun7, karl, Miszary, tutu, zdr   |
|           13 |     2196 | 2025-10-24 | NomadS      | W   | 0.526      | 0.333        | 0.003 (0.001)    | 0.063 (0.011)    | 0 (0.000) |     6.23 | Jun7, karl, Miszary, tutu, zdr   |
|           12 |     2246 | 2025-10-23 | FengDa      | L   | 0.519      | -            | -                | -                | -         |    -3.94 | Jun7, karl, Miszary, tutu, zdr   |
|           11 |     2773 | 2025-10-06 | Last Bullet | L   | 0.406      | -            | -                | -                | -         |    -6.73 | Jun7, karl, Miszary, tutu, zdr   |
|           10 |     2832 | 2025-10-05 | The Huns    | L   | 0.399      | -            | -                | -                | -         |    -1.97 | Jun7, karl, Miszary, tutu, zdr   |
|            9 |     3773 | 2025-09-10 | The Huns    | L   | 0.233      | -            | -                | -                | -         |    -1.20 | Jun7, Karpyy, Miszary, tutu, zdr |
|            8 |     3827 | 2025-09-09 | Morningstar | W   | 0.226      | 0.333        | 0.040 (0.003)    | 0.373 (0.028)    | 0 (0.000) |     6.24 | Jun7, Karpyy, Miszary, tutu, zdr |
|            7 |     3869 | 2025-09-08 | Rare Atom   | L   | 0.220      | -            | -                | -                | -         |    -0.70 | Jun7, Karpyy, Miszary, tutu, zdr |
|            6 |     4123 | 2025-08-27 | Morningstar | L   | 0.143      | -            | -                | -                | -         |    -0.55 | Jun7, Karpyy, Miszary, tutu, zdr |
|            5 |     4172 | 2025-08-26 | FengDa      | L   | 0.132      | -            | -                | -                | -         |    -1.11 | Jun7, Karpyy, Miszary, tutu, zdr |
|            4 |     4176 | 2025-08-26 | Morningstar | W   | 0.131      | 0.367        | 0.040 (0.002)    | 0.373 (0.018)    | 1 (0.131) |     3.63 | Jun7, Karpyy, Miszary, tutu, zdr |
|            3 |     4528 | 2025-08-13 | NomadS      | L   | 0.046      | -            | -                | -                | -         |    -0.90 | Jun7, Karpyy, Miszary, tutu, zdr |
|            2 |     4575 | 2025-08-12 | Just Swing  | W   | 0.040      | 0.333        | 0.005 (0.000)    | 0.170 (0.002)    | 0 (0.000) |     0.61 | Jun7, Karpyy, Miszary, tutu, zdr |
|            1 |     4634 | 2025-08-11 | Rare Atom   | L   | 0.033      | -            | -                | -                | -         |    -0.10 | Jun7, Karpyy, Miszary, tutu, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($951.67)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-16 |      0.678 | $1,404.00      | $951.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
