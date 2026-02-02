### Roster Details<br />
Team Name: G2 Ares<br />
Roster: fNk, hitori, Junyme, tAk, yksjupe<br />
Global Rank: [247](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [149]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  585.8<br />
<br />
Final Rank Value (585.8) = Starting Rank Value (541.9) + Head To Head Adjustments (43.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.257[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 541.9
- 400 + ( ( 0.067 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 541.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      690 | 2025-12-18 | Acend    | L   | 0.894      | -            | -                | -                | -         |    -2.51 | fNk, hitori, Junyme, tAk, yksjupe |
|            7 |      698 | 2025-12-18 | fnatic   | L   | 0.892      | -            | -                | -                | -         |    -0.20 | fNk, hitori, Junyme, tAk, yksjupe |
|            6 |      707 | 2025-12-17 | aimclub  | W   | 0.888      | 0.339        | 0.000 (0.000)    | 0.166 (0.050)    | 1 (0.888) |    19.32 | fNk, hitori, Junyme, tAk, yksjupe |
|            5 |      717 | 2025-12-17 | Acend    | L   | 0.886      | -            | -                | -                | -         |    -2.25 | fNk, hitori, Junyme, tAk, yksjupe |
|            4 |      724 | 2025-12-17 | aimclub  | W   | 0.885      | 0.339        | 0.000 (0.000)    | 0.166 (0.050)    | 1 (0.885) |    20.34 | fNk, hitori, Junyme, tAk, yksjupe |
|            3 |     1288 | 2025-11-20 | Nexus    | L   | 0.707      | -            | -                | -                | -         |    -1.65 | Fessor, fNk, Junyme, tAk, yksjupe |
|            2 |     1294 | 2025-11-20 | INFINITE | W   | 0.707      | 0.339        | 0.000 (0.000)    | 0.045 (0.011)    | 1 (0.707) |    11.42 | Fessor, fNk, Junyme, tAk, yksjupe |
|            1 |     1307 | 2025-11-20 | STATE    | L   | 0.705      | -            | -                | -                | -         |    -0.59 | Fessor, fNk, Junyme, tAk, yksjupe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
