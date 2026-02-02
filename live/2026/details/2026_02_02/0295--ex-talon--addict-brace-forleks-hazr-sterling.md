### Roster Details<br />
Team Name: ex-TALON<br />
Roster: ADDICT, BRACE, Forleks, hazr, sterling<br />
Global Rank: [295](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [38]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  486.5<br />
<br />
Final Rank Value (486.5) = Starting Rank Value (486.9) + Head To Head Adjustments (-0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.164[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.9
- 400 + ( ( 0.041 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 486.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3842 | 2025-09-09 | Mindfreak  | L   | 0.224      | -            | -                | -                | -         |    -0.56 | ADDICT, BRACE, Forleks, hazr, sterling |
|            4 |     4121 | 2025-08-28 | Rooster    | L   | 0.144      | -            | -                | -                | -         |    -1.03 | ADDICT, BRACE, Forleks, hazr, sterling |
|            3 |     4174 | 2025-08-26 | SemperFi   | L   | 0.131      | -            | -                | -                | -         |    -0.14 | ADDICT, BRACE, Forleks, hazr, sterling |
|            2 |     4586 | 2025-08-12 | Rooster    | W   | 0.039      | 0.278        | 0.007 (0.000)    | 0.111 (0.001)    | 0 (0.000) |     0.94 | ADDICT, BRACE, Forleks, hazr, sterling |
|            1 |     4641 | 2025-08-11 | DanCompany | W   | 0.032      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.38 | ADDICT, BRACE, Forleks, hazr, sterling |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
