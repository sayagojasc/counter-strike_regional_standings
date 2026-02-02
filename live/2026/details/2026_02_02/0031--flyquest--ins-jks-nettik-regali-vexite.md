### Roster Details<br />
Team Name: FlyQuest<br />
Roster: INS, jks, nettik, regali, Vexite<br />
Global Rank: [31](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [2]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  1464.3<br />
<br />
Final Rank Value (1464.3) = Starting Rank Value (1438.5) + Head To Head Adjustments (25.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.542[<sup>1</sup>](#table2)
- Bounty Collected: 0.500[<sup>2</sup>](#table1)
- Opponent Network: 0.195[<sup>2</sup>](#table1)
- LAN Wins: 0.723[<sup>2</sup>](#table1)

The average of these factors is 0.490<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1438.5
- 400 + ( ( 0.490 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1438.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       91 | 2026-01-25 | JiJieHao          | W   | 1.000      | 0.423        | 0.036 (0.015)    | 0.656 (0.277)    | 1 (1.000) |     2.93 | INS, jks, nettik, story, Vexite  |
|           22 |      122 | 2026-01-24 | Morningstar       | W   | 1.000      | 0.423        | 0.040 (0.017)    | 0.373 (0.157)    | 1 (1.000) |     3.82 | INS, jks, nettik, story, Vexite  |
|           21 |      159 | 2026-01-23 | Chinggis Warriors | W   | 1.000      | 0.423        | 0.022 (0.009)    | 0.279 (0.118)    | 1 (1.000) |     1.36 | INS, jks, nettik, story, Vexite  |
|           20 |      292 | 2026-01-18 | Steel Helmet      | W   | 1.000      | -            | -                | -                | -         |     0.09 | INS, jks, nettik, story, Vexite  |
|           19 |      991 | 2025-11-30 | Astralis          | L   | 0.774      | -            | -                | -                | -         |    -8.24 | INS, jks, nettik, regali, Vexite |
|           18 |     1030 | 2025-11-29 | 3DMAX             | L   | 0.767      | -            | -                | -                | -         |    -7.68 | INS, jks, nettik, regali, Vexite |
|           17 |     1045 | 2025-11-29 | Natus Vincere     | L   | 0.766      | -            | -                | -                | -         |    -3.85 | INS, jks, nettik, regali, Vexite |
|           16 |     1122 | 2025-11-25 | Fluxo             | W   | 0.740      | 0.624        | 0.030 (0.014)    | 0.431 (0.199)    | 1 (0.740) |     7.24 | INS, jks, nettik, regali, Vexite |
|           15 |     1150 | 2025-11-24 | Imperial          | W   | 0.734      | 0.624        | 0.113 (0.052)    | 0.680 (0.312)    | 1 (0.734) |    11.96 | INS, jks, nettik, regali, Vexite |
|           14 |     1165 | 2025-11-24 | Legacy            | W   | 0.733      | 0.624        | 0.942 (0.431)    | 0.417 (0.190)    | 1 (0.733) |    18.87 | INS, jks, nettik, regali, Vexite |
|           13 |     1937 | 2025-10-30 | Legacy            | L   | 0.565      | -            | -                | -                | -         |    -3.18 | INS, jks, nettik, regali, Vexite |
|           12 |     1956 | 2025-10-29 | Liquid            | L   | 0.559      | -            | -                | -                | -         |    -3.17 | INS, jks, nettik, regali, Vexite |
|           11 |     1986 | 2025-10-28 | 3DMAX             | W   | 0.553      | 1.000        | 0.469 (0.259)    | 0.465 (0.257)    | 1 (0.553) |    13.69 | INS, jks, nettik, regali, Vexite |
|           10 |     2025 | 2025-10-27 | fnatic            | W   | 0.546      | 1.000        | 0.166 (0.091)    | 0.580 (0.317)    | 1 (0.546) |     9.92 | INS, jks, nettik, regali, Vexite |
|            9 |     2087 | 2025-10-26 | GamerLegion       | L   | 0.539      | -            | -                | -                | -         |    -3.92 | INS, jks, nettik, regali, Vexite |
|            8 |     3190 | 2025-09-26 | GenOne            | L   | 0.341      | -            | -                | -                | -         |    -9.64 | INS, jks, nettik, regali, Vexite |
|            7 |     3203 | 2025-09-26 | SINNERS           | W   | 0.340      | 0.339        | 0.267 (0.031)    | 0.772 (0.089)    | 1 (0.340) |     2.49 | INS, jks, nettik, regali, Vexite |
|            6 |     3247 | 2025-09-25 | Metizport         | W   | 0.334      | -            | -                | -                | 1 (0.334) |     1.45 | INS, jks, nettik, regali, Vexite |
|            5 |     3265 | 2025-09-25 | BASEMENT BOYS     | L   | 0.332      | -            | -                | -                | -         |    -9.90 | INS, jks, nettik, regali, Vexite |
|            4 |     4007 | 2025-08-31 | G2                | L   | 0.167      | -            | -                | -                | -         |    -1.90 | INS, jks, nettik, regali, Vexite |
|            3 |     4039 | 2025-08-30 | Legacy            | W   | 0.160      | 0.561        | 0.942 (0.084)    | 0.417 (0.037)    | -         |     4.25 | INS, jks, nettik, regali, Vexite |
|            2 |     4109 | 2025-08-28 | Spirit            | L   | 0.147      | -            | -                | -                | -         |    -0.76 | INS, jks, nettik, regali, Vexite |
|            1 |     4706 | 2025-08-08 | Aurora            | L   | 0.013      | -            | -                | -                | -         |    -0.05 | INS, jks, nettik, regali, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($48,823.57)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-25 |      1.000 | $21,498.00     | $21,498.00      |
| 2025-12-02 |      0.788 | $10,000.00     | $7,877.74       |
| 2025-11-01 |      0.580 | $31,250.00     | $18,137.03      |
| 2025-09-01 |      0.175 | $7,500.00      | $1,310.80       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
