### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, VanceKK, Zero<br />
Global Rank: [161](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [17]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  790.7<br />
<br />
Final Rank Value (790.7) = Starting Rank Value (771.3) + Head To Head Adjustments (19.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.128[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 771.3
- 400 + ( ( 0.175 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 771.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      353 | 2026-01-17 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -11.33 | 957, Hack1ng, LaiKeXu, lyrics3, VanceKK |
|           11 |     1449 | 2025-11-12 | Gentle Mates      | L   | 0.657      | -            | -                | -                | -         |    -0.43 | 957, Hack1ng, LaiKeXu, VanceKK, Zero    |
|           10 |     1527 | 2025-11-10 | FengDa            | L   | 0.640      | -            | -                | -                | -         |    -6.46 | 957, Hack1ng, LaiKeXu, VanceKK, Zero    |
|            9 |     1614 | 2025-11-08 | FengDa            | W   | 0.625      | 0.379        | 0.023 (0.005)    | 0.302 (0.072)    | 1 (0.625) |    14.08 | 957, Hack1ng, LaiKeXu, VanceKK, Zero    |
|            8 |     1759 | 2025-11-06 | GATERON           | W   | 0.611      | 0.379        | 0.001 (0.000)    | 0.074 (0.017)    | 1 (0.611) |     6.41 | 957, Hack1ng, LaiKeXu, VanceKK, Zero    |
|            7 |     2024 | 2025-10-27 | Eruption          | W   | 0.546      | 0.333        | 0.010 (0.002)    | 0.155 (0.028)    | 0 (0.000) |     8.55 | 957, Hack1ng, LaiKeXu, VanceKK, Zero    |
|            6 |     2084 | 2025-10-26 | Just Swing        | W   | 0.540      | 0.333        | 0.005 (0.001)    | 0.170 (0.031)    | 0 (0.000) |     8.25 | 957, Hack1ng, LaiKeXu, VanceKK, Zero    |
|            5 |     2134 | 2025-10-25 | IHC               | W   | 0.533      | 0.333        | 0.000 (0.000)    | 0.034 (0.006)    | 0 (0.000) |     4.97 | 957, Hack1ng, LaiKeXu, VanceKK, Zero    |
|            4 |     2197 | 2025-10-24 | Legion            | W   | 0.526      | 0.333        | 0.007 (0.001)    | 0.242 (0.042)    | 0 (0.000) |     6.23 | 957, Hack1ng, LaiKeXu, VanceKK, Zero    |
|            3 |     2247 | 2025-10-23 | Eruption          | L   | 0.519      | -            | -                | -                | -         |    -8.03 | 957, Hack1ng, LaiKeXu, VanceKK, Zero    |
|            2 |     2917 | 2025-10-03 | Morningstar       | L   | 0.386      | -            | -                | -                | -         |    -1.61 | 957, Hack1ng, LaiKeXu, VanceKK, Zero    |
|            1 |     2962 | 2025-10-02 | Rare Atom         | L   | 0.379      | -            | -                | -                | -         |    -1.26 | 957, Hack1ng, LaiKeXu, VanceKK, Zero    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,768.79)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-16 |      0.678 | $1,404.00      | $951.67         |
| 2025-11-13 |      0.660 | $1,000.00      | $659.99         |
| 2025-10-04 |      0.393 | $400.00        | $157.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
