### Roster Details<br />
Team Name: Peekaboo<br />
Roster: Angelka, Hikomi, julih, LETi, NAYLLA<br />
Global Rank: [213](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [135]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  666.6<br />
<br />
Final Rank Value (666.6) = Starting Rank Value (654.0) + Head To Head Adjustments (12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.0
- 400 + ( ( 0.120 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 654.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2179 | 2025-10-24 | BIG EQUIPA         | L   | 0.528      | -            | -                | -                | -         |    -1.48 | Angelka, Hikomi, julih, LETi, NAYLLA |
|            5 |     2588 | 2025-10-09 | Nemesis Impact     | W   | 0.428      | 0.523        | 0.003 (0.001)    | 0.045 (0.010)    | 0 (0.000) |     7.45 | Angelka, Hikomi, julih, LETi, NAYLLA |
|            4 |     2976 | 2025-10-01 | Fingers Crossed fe | W   | 0.375      | 0.523        | 0.001 (0.000)    | 0.096 (0.019)    | 0 (0.000) |     6.15 | Angelka, Hikomi, julih, LETi, NAYLLA |
|            3 |     3242 | 2025-09-25 | Pigeons            | L   | 0.334      | -            | -                | -                | -         |    -3.24 | Angelka, Hikomi, julih, LETi, NAYLLA |
|            2 |     3471 | 2025-09-17 | amateurs           | W   | 0.281      | 0.523        | 0.002 (0.000)    | 0.005 (0.001)    | 0 (0.000) |     3.09 | Angelka, Hikomi, julih, LETi, NAYLLA |
|            1 |     4240 | 2025-08-21 | DONT WORRY         | W   | 0.100      | 0.444        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.61 | Angelka, Hikomi, julih, LETi, NAYLLA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($784.75)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-26 |      0.541 | $1,450.00      | $784.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
