### Roster Details<br />
Team Name: anything else<br />
Roster: corim, cypress, FAME, mcniff, Slash<br />
Global Rank: [297](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [88]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  480.3<br />
<br />
Final Rank Value (480.3) = Starting Rank Value (504.4) + Head To Head Adjustments (-24.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.4
- 400 + ( ( 0.049 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 504.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2100 | 2025-10-25 | regain       | L   | 0.535      | -            | -                | -                | -         |    -3.23 | corim, cypress, FAME, mcniff, Slash  |
|           13 |     2217 | 2025-10-23 | Wanted Goons | L   | 0.522      | -            | -                | -                | -         |    -7.34 | corim, cypress, FAME, mcniff, Slash  |
|           12 |     2259 | 2025-10-22 | Zomblers     | L   | 0.516      | -            | -                | -                | -         |    -4.32 | corim, cypress, FAME, mcniff, Prs    |
|           11 |     2319 | 2025-10-18 | Money Crew   | L   | 0.490      | -            | -                | -                | -         |    -5.42 | corim, cypress, K4mr0, mcniff, Slash |
|           10 |     2481 | 2025-10-13 | Voca         | L   | 0.456      | -            | -                | -                | -         |    -0.54 | corim, cypress, K4mr0, mcniff, Slash |
|            9 |     2680 | 2025-10-07 | Take Flyte   | L   | 0.416      | -            | -                | -                | -         |    -5.18 | corim, cypress, FAME, mcniff, Slash  |
|            8 |     2799 | 2025-10-05 | Mythic       | L   | 0.402      | -            | -                | -                | -         |    -3.45 | corim, cypress, FAME, mcniff, Slash  |
|            7 |     3645 | 2025-09-12 | LAG          | L   | 0.249      | -            | -                | -                | -         |    -1.92 | corim, cypress, FAME, mcniff, Slash  |
|            6 |     3692 | 2025-09-11 | NYX          | W   | 0.242      | 0.363        | 0.000 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     3.74 | corim, cypress, FAME, mcniff, Slash  |
|            5 |     3740 | 2025-09-10 | regain       | W   | 0.236      | 0.363        | 0.008 (0.001)    | 0.330 (0.028)    | 0 (0.000) |     5.77 | corim, cypress, FAME, mcniff, Slash  |
|            4 |     3844 | 2025-09-08 | Mythic       | L   | 0.223      | -            | -                | -                | -         |    -1.85 | cypress, FAME, K4mr0, mcniff, Slash  |
|            3 |     4493 | 2025-08-13 | Wanted Goons | L   | 0.049      | -            | -                | -                | -         |    -0.74 | cypress, FAME, K4mr0, mcniff, Slash  |
|            2 |     4550 | 2025-08-12 | NRG          | L   | 0.042      | -            | -                | -                | -         |    -0.00 | cypress, FAME, K4mr0, mcniff, Slash  |
|            1 |     4594 | 2025-08-11 | MIGHT        | W   | 0.036      | 0.363        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.41 | cypress, FAME, K4mr0, mcniff, Slash  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
