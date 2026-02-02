### Roster Details<br />
Team Name: F5<br />
Roster: bones, cmrn, Kermi, neight, Signal<br />
Global Rank: [260](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [74]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  559.4<br />
<br />
Final Rank Value (559.4) = Starting Rank Value (529.2) + Head To Head Adjustments (30.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.234[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 529.2
- 400 + ( ( 0.061 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 529.2


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
|            8 |      570 | 2026-01-03 | KOLESIE    | L   | 1.000      | -            | -                | -                | -         |    -0.98 | bones, cmrn, Kermi, neight, Signal |
|            7 |      572 | 2026-01-03 | Memeories  | W   | 1.000      | 0.323        | 0.000 (0.000)    | 0.029 (0.009)    | 1 (1.000) |    10.46 | bones, cmrn, Kermi, neight, Signal |
|            6 |      576 | 2026-01-03 | KOLESIE    | L   | 1.000      | -            | -                | -                | -         |    -0.89 | bones, cmrn, Kermi, neight, Signal |
|            5 |     1554 | 2025-11-09 | BC.Game    | L   | 0.633      | -            | -                | -                | -         |    -0.04 | bones, cmrn, Kermi, neight, Signal |
|            4 |     1570 | 2025-11-08 | Take Flyte | W   | 0.630      | 0.333        | 0.000 (0.000)    | 0.217 (0.046)    | 1 (0.630) |    10.86 | bones, cmrn, Kermi, neight, Signal |
|            3 |     1576 | 2025-11-08 | Marsborne  | L   | 0.628      | -            | -                | -                | -         |    -0.29 | bones, cmrn, Kermi, neight, Signal |
|            2 |     1582 | 2025-11-08 | Take Flyte | W   | 0.628      | 0.333        | 0.000 (0.000)    | 0.217 (0.045)    | 1 (0.628) |    11.29 | bones, cmrn, Kermi, neight, Signal |
|            1 |     3920 | 2025-09-06 | ODDIK      | L   | 0.208      | -            | -                | -                | -         |    -0.16 | bones, ditt, Kermi, neight, vin3   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
