### Roster Details<br />
Team Name: BIG Academy<br />
Roster: doni, JBOEN, prosus, tripex17, w1dow<br />
Global Rank: [228](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [143]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  635.1<br />
<br />
Final Rank Value (635.1) = Starting Rank Value (567.1) + Head To Head Adjustments (68.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.079<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 567.1
- 400 + ( ( 0.079 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 567.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      193 | 2026-01-22 | Nemesis  | L   | 1.000      | -            | -                | -                | -         |    -1.27 | doni, JBOEN, prosus, tripex17, w1dow |
|            4 |      212 | 2026-01-21 | 9INE     | L   | 1.000      | -            | -                | -                | -         |    -0.44 | doni, JBOEN, prosus, tripex17, w1dow |
|            3 |      244 | 2026-01-21 | FUT      | W   | 1.000      | 0.143        | 0.281 (0.040)    | 0.758 (0.108)    | 0 (0.000) |    31.34 | doni, JBOEN, prosus, tripex17, w1dow |
|            2 |      325 | 2026-01-17 | GenOne   | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.590 (0.084)    | 0 (0.000) |    29.84 | doni, JBOEN, prosus, tripex17, w1dow |
|            1 |      337 | 2026-01-17 | LFO 6    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.57 | doni, JBOEN, prosus, tripex17, w1dow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
