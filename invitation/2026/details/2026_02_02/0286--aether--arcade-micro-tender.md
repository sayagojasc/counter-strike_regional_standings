### Roster Details<br />
Team Name: Aether<br />
Roster: arcade, micro, Tender<br />
Global Rank: [286](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [83]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  512.8<br />
<br />
Final Rank Value (512.8) = Starting Rank Value (514.1) + Head To Head Adjustments (-1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.1
- 400 + ( ( 0.054 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 514.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1997 | 2025-10-27 | BOSS         | L   | 0.550      | -            | -                | -                | -         |    -2.34 | arcade, ayaneuu, micro, Sathsea, Tender  |
|           10 |     2037 | 2025-10-26 | Voca         | L   | 0.543      | -            | -                | -                | -         |    -0.73 | arcade, ayaneuu, micro, Sathsea, Tender  |
|            9 |     4186 | 2025-08-24 | BOSS         | L   | 0.123      | -            | -                | -                | -         |    -0.50 | arcade, Jeebs, micro, obi, Tender        |
|            8 |     4218 | 2025-08-22 | Sakura       | W   | 0.109      | 0.333        | 0.060 (0.002)    | 0.206 (0.007)    | 0 (0.000) |     3.11 | arcade, micro, N2o, obi, Tender          |
|            7 |     4281 | 2025-08-20 | MIGHT        | W   | 0.092      | 0.333        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.00 | arcade, micro, N2o, obi, Tender          |
|            6 |     4289 | 2025-08-19 | Zomblers     | L   | 0.089      | -            | -                | -                | -         |    -0.80 | arcade, micro, N2o, obi, Tender          |
|            5 |     4322 | 2025-08-17 | Phoenix      | L   | 0.075      | -            | -                | -                | -         |    -0.57 | arcade, arias, clipzera, micro, Tender   |
|            4 |     4353 | 2025-08-16 | NRG          | L   | 0.069      | -            | -                | -                | -         |    -0.01 | arcade, arias, clipzera, Sathsea, Tender |
|            3 |     4491 | 2025-08-13 | MIGHT        | L   | 0.049      | -            | -                | -                | -         |    -1.02 | arcade, arias, clipzera, micro, Tender   |
|            2 |     4545 | 2025-08-12 | M80          | L   | 0.043      | -            | -                | -                | -         |    -0.00 | arcade, arias, clipzera, micro, Tender   |
|            1 |     4591 | 2025-08-11 | Wanted Goons | W   | 0.036      | 0.363        | 0.000 (0.000)    | 0.104 (0.001)    | 0 (0.000) |     0.58 | arcade, arias, clipzera, micro, Tender   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
