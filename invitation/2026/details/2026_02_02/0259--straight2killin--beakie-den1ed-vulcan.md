### Roster Details<br />
Team Name: Straight2Killin<br />
Roster: BeaKie, den1ed, VulcaN<br />
Global Rank: [259](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [73]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  559.5<br />
<br />
Final Rank Value (559.5) = Starting Rank Value (515.2) + Head To Head Adjustments (44.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.2
- 400 + ( ( 0.054 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 515.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      748 | 2025-12-13 | Voca       | L   | 0.863      | -            | -                | -                | -         |    -1.37 | BeaKie, bright, den1ed, sleepz0rk, VulcaN   |
|            5 |      760 | 2025-12-12 | Take Flyte | W   | 0.856      | 0.333        | 0.000 (0.000)    | 0.217 (0.062)    | 0 (0.000) |    14.08 | adam, BeaKie, bright, den1ed, VulcaN        |
|            4 |      798 | 2025-12-09 | Ghost      | W   | 0.837      | 0.333        | 0.003 (0.001)    | 0.137 (0.038)    | 0 (0.000) |    17.12 | adam, BeaKie, den1ed, starfade, VulcaN      |
|            3 |      819 | 2025-12-08 | Lotus fe   | W   | 0.830      | 0.333        | 0.002 (0.001)    | 0.063 (0.017)    | 0 (0.000) |    16.86 | BeaKie, bright, den1ed, starfade, VulcaN    |
|            2 |      908 | 2025-12-04 | Rave       | L   | 0.803      | -            | -                | -                | -         |    -1.41 | BeaKie, bright, den1ed, sleepz0rk, VulcaN   |
|            1 |      967 | 2025-12-01 | Voca       | L   | 0.783      | -            | -                | -                | -         |    -1.00 | BeaKie, den1ed, sleepz0rk, starfade, VulcaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
