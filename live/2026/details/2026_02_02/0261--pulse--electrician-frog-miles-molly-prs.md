### Roster Details<br />
Team Name: Pulse<br />
Roster: Electrician, frog, miles, Molly, Prs<br />
Global Rank: [261](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [75]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  557.4<br />
<br />
Final Rank Value (557.4) = Starting Rank Value (521.6) + Head To Head Adjustments (35.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.6
- 400 + ( ( 0.057 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 521.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      736 | 2025-12-14 | Rave      | L   | 0.870      | -            | -                | -                | -         |    -1.85 | Electrician, frog, Molly, Prs, yawn   |
|            5 |      778 | 2025-12-11 | Outfit 49 | W   | 0.850      | 0.333        | 0.000 (0.000)    | 0.166 (0.047)    | 0 (0.000) |    15.37 | Electrician, frog, miles, Molly, Prs  |
|            4 |      801 | 2025-12-09 | regain    | L   | 0.836      | -            | -                | -                | -         |    -6.96 | Electrician, frog, miles, Molly, Prs  |
|            3 |      835 | 2025-12-07 | Akimbo    | W   | 0.823      | 0.333        | 0.000 (0.000)    | 0.036 (0.010)    | 0 (0.000) |    13.53 | Electrician, frog, miles, Molly, yawn |
|            2 |      884 | 2025-12-05 | LAG       | W   | 0.810      | 0.333        | 0.008 (0.002)    | 0.379 (0.102)    | 0 (0.000) |    18.82 | Electrician, frog, miles, Molly, Prs  |
|            1 |      968 | 2025-12-01 | BOSS      | L   | 0.783      | -            | -                | -                | -         |    -3.10 | Electrician, frog, miles, Molly, Prs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
