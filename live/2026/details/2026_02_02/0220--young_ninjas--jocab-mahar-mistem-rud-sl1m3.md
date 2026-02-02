### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: jocab, MahaR, MisteM, rud, sL1m3<br />
Global Rank: [220](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [141]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  654.3<br />
<br />
Final Rank Value (654.3) = Starting Rank Value (627.3) + Head To Head Adjustments (27.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.128[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 627.3
- 400 + ( ( 0.107 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 627.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1651 | 2025-11-07 | Acend          | L   | 0.620      | -            | -                | -                | -         |    -2.29 | jocab, MahaR, MisteM, rud, sL1m3 |
|            7 |     1664 | 2025-11-07 | Johnny Speeds  | L   | 0.620      | -            | -                | -                | -         |    -0.59 | jocab, MahaR, MisteM, rud, sL1m3 |
|            6 |     1690 | 2025-11-07 | Inner Circle   | W   | 0.619      | 0.335        | 0.162 (0.034)    | 0.427 (0.089)    | 1 (0.619) |    19.20 | jocab, MahaR, MisteM, rud, sL1m3 |
|            5 |     1705 | 2025-11-07 | Minkens finest | W   | 0.619      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.619) |     4.09 | jocab, MahaR, MisteM, rud, sL1m3 |
|            4 |     1717 | 2025-11-07 | Metizport      | L   | 0.619      | -            | -                | -                | -         |    -1.44 | jocab, MahaR, MisteM, rud, sL1m3 |
|            3 |     1821 | 2025-11-03 | ECLOT          | L   | 0.594      | -            | -                | -                | -         |    -1.47 | jocab, MahaR, MisteM, rud, sL1m3 |
|            2 |     1848 | 2025-11-02 | Dziuseppe      | W   | 0.587      | 0.384        | 0.003 (0.001)    | 0.153 (0.035)    | 0 (0.000) |    12.85 | jocab, MahaR, MisteM, rud, sL1m3 |
|            1 |     1902 | 2025-10-31 | FORZE Reload   | L   | 0.574      | -            | -                | -                | -         |    -3.35 | jocab, MahaR, MisteM, rud, sL1m3 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
