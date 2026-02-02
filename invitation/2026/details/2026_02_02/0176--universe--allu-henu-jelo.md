### Roster Details<br />
Team Name: Universe<br />
Roster: allu, HENU, Jelo<br />
Global Rank: [176](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [119]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  759.2<br />
<br />
Final Rank Value (759.2) = Starting Rank Value (768.6) + Head To Head Adjustments (-9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.151[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.6
- 400 + ( ( 0.174 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 768.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      489 | 2026-01-12 | CSDIILIT     | L   | 1.000      | -            | -                | -                | -         |   -12.35 | 1mackez, allu, HENU, Jelo, Julbord |
|            7 |      494 | 2026-01-12 | illwill      | L   | 1.000      | -            | -                | -                | -         |    -2.93 | 1mackez, allu, HENU, Jelo, Julbord |
|            6 |      513 | 2026-01-09 | STATE        | L   | 1.000      | -            | -                | -                | -         |    -3.38 | 1mackez, allu, HENU, Jelo, Julbord |
|            5 |      527 | 2026-01-05 | Bebop        | L   | 1.000      | -            | -                | -                | -         |   -14.64 | 1mackez, allu, HENU, Jelo, Julbord |
|            4 |     2326 | 2025-10-18 | ENCE Academy | W   | 0.488      | 0.309        | 0.005 (0.001)    | 0.342 (0.052)    | 1 (0.488) |     8.55 | allu, HENU, Jelo, juho, xseveN     |
|            3 |     2332 | 2025-10-18 | HAVU         | W   | 0.487      | 0.309        | 0.016 (0.002)    | 0.507 (0.076)    | 1 (0.487) |    13.71 | allu, HENU, Jelo, juho, xseveN     |
|            2 |     2355 | 2025-10-17 | ENCE Academy | L   | 0.480      | -            | -                | -                | -         |    -6.63 | allu, HENU, Jelo, juho, xseveN     |
|            1 |     2359 | 2025-10-17 | CSDIILIT     | W   | 0.479      | 0.309        | 0.003 (0.000)    | 0.325 (0.048)    | 1 (0.479) |     8.29 | allu, HENU, Jelo, juho, xseveN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,699.42)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-18 |      0.488 | $3,485.00      | $1,699.42       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
