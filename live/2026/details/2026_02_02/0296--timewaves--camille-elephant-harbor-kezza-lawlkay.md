### Roster Details<br />
Team Name: Timewaves<br />
Roster: camille, ElephanT, Harbor, Kezza, lawlkay<br />
Global Rank: [296](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [39]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  482.3<br />
<br />
Final Rank Value (482.3) = Starting Rank Value (484.6) + Head To Head Adjustments (-2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.158[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 484.6
- 400 + ( ( 0.040 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 484.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1016 | 2025-11-29 | Mindfreak       | L   | 0.769      | -            | -                | -                | -         |    -2.63 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            6 |     1017 | 2025-11-29 | Rooster         | L   | 0.769      | -            | -                | -                | -         |    -2.75 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            5 |     1059 | 2025-11-29 | The Bardolphs   | W   | 0.765      | 0.279        | 0.000 (0.000)    | 0.035 (0.007)    | 1 (0.765) |    10.59 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            4 |     1066 | 2025-11-28 | Mindfreak       | L   | 0.763      | -            | -                | -                | -         |    -2.37 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            3 |     1068 | 2025-11-28 | The Bardolphs   | W   | 0.762      | 0.279        | 0.000 (0.000)    | 0.035 (0.007)    | 1 (0.762) |    10.83 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            2 |     1331 | 2025-11-19 | LITE            | L   | 0.698      | -            | -                | -                | -         |    -6.55 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            1 |     1370 | 2025-11-16 | Animus Victoria | L   | 0.678      | -            | -                | -                | -         |    -9.41 | camille, ElephanT, Harbor, Kezza, lawlkay |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
