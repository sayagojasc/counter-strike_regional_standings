### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, Spinx, torzsi, xertioN<br />
Global Rank: [7](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [6]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1751.6<br />
<br />
Final Rank Value (1751.6) = Starting Rank Value (1668.5) + Head To Head Adjustments (83.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.737[<sup>1</sup>](#table2)
- Bounty Collected: 0.734[<sup>2</sup>](#table1)
- Opponent Network: 0.313[<sup>2</sup>](#table1)
- LAN Wins: 0.611[<sup>2</sup>](#table1)

The average of these factors is 0.599<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1668.5
- 400 + ( ( 0.599 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1668.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      769 | 2025-12-12 | FaZe          | L   | 0.854      | -            | -                | -                | -         |   -13.87 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           27 |      865 | 2025-12-06 | Falcons       | W   | 0.814      | 1.000        | 1.000 (0.814)    | 0.491 (0.400)    | 1 (0.814) |    18.38 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           26 |      892 | 2025-12-05 | Spirit        | L   | 0.807      | -            | -                | -                | -         |   -12.72 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           25 |      916 | 2025-12-04 | B8            | W   | 0.801      | 1.000        | 0.242 (0.194)    | 0.369 (0.295)    | 1 (0.801) |    10.49 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           24 |      934 | 2025-12-04 | PARIVISION    | W   | 0.799      | 1.000        | 1.000 (0.799)    | 0.746 (0.596)    | 1 (0.799) |    18.65 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           23 |     1568 | 2025-11-08 | Falcons       | L   | 0.631      | -            | -                | -                | -         |    -4.91 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           22 |     1624 | 2025-11-08 | Vitality      | L   | 0.625      | -            | -                | -                | -         |    -4.53 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           21 |     1783 | 2025-11-05 | FURIA         | W   | 0.605      | 1.000        | 1.000 (0.605)    | 0.570 (0.345)    | 1 (0.605) |    14.36 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           20 |     1814 | 2025-11-04 | Vitality      | W   | 0.598      | 1.000        | 1.000 (0.598)    | 0.576 (0.344)    | 1 (0.598) |    14.99 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           19 |     1841 | 2025-11-02 | FaZe          | W   | 0.590      | 1.000        | 0.638 (0.377)    | 0.478 (0.282)    | 1 (0.590) |    10.89 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           18 |     2505 | 2025-10-12 | FaZe          | W   | 0.446      | 1.000        | 0.638 (0.284)    | 0.478 (0.213)    | 1 (0.446) |     8.94 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           17 |     2523 | 2025-10-11 | Falcons       | L   | 0.440      | -            | -                | -                | -         |    -2.79 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           16 |     2562 | 2025-10-10 | Natus Vincere | W   | 0.433      | 1.000        | 0.715 (0.309)    | -                | 1 (0.433) |     8.83 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           15 |     2706 | 2025-10-07 | 3DMAX         | W   | 0.413      | 1.000        | 0.469 (0.194)    | 0.465 (0.192)    | 1 (0.413) |     6.41 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           14 |     2750 | 2025-10-06 | Falcons       | L   | 0.408      | -            | -                | -                | -         |    -2.50 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           13 |     2840 | 2025-10-05 | Gentle Mates  | W   | 0.399      | 1.000        | -                | 0.649 (0.259)    | 1 (0.399) |     3.31 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           12 |     2890 | 2025-10-04 | GamerLegion   | W   | 0.391      | 1.000        | 0.430 (0.168)    | 0.509 (0.199)    | -         |     6.12 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           11 |     3932 | 2025-09-06 | Vitality      | L   | 0.206      | -            | -                | -                | -         |    -1.10 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           10 |     3950 | 2025-09-05 | M80           | W   | 0.200      | -            | -                | -                | -         |     2.27 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            9 |     3995 | 2025-09-01 | FURIA         | L   | 0.174      | -            | -                | -                | -         |    -0.98 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            8 |     4033 | 2025-08-30 | G2            | W   | 0.160      | -            | -                | -                | -         |     1.68 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            7 |     4115 | 2025-08-28 | Imperial      | W   | 0.145      | -            | -                | -                | -         |     1.50 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            6 |     4219 | 2025-08-22 | Falcons       | L   | 0.108      | -            | -                | -                | -         |    -0.65 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            5 |     4247 | 2025-08-21 | Virtus.pro    | W   | 0.099      | -            | -                | -                | -         |     0.12 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            4 |     4384 | 2025-08-16 | Spirit        | L   | 0.066      | -            | -                | -                | -         |    -0.87 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            3 |     4471 | 2025-08-14 | Astralis      | W   | 0.053      | -            | -                | -                | -         |     0.67 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            2 |     4669 | 2025-08-10 | B8            | W   | 0.026      | -            | -                | -                | -         |     0.39 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            1 |     4724 | 2025-08-07 | OG            | W   | 0.006      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, Spinx, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($150,641.64)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.44) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      0.868 | $45,000.00     | $39,053.46      |
| 2025-11-09 |      0.632 | $90,000.00     | $56,866.83      |
| 2025-10-12 |      0.447 | $88,000.00     | $39,332.62      |
| 2025-09-07 |      0.214 | $40,000.00     | $8,562.75       |
| 2025-08-24 |      0.119 | $40,000.00     | $4,761.02       |
| 2025-08-17 |      0.073 | $28,125.00     | $2,064.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
