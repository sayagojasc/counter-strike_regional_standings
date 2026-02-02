### Roster Details<br />
Team Name: BC.Game<br />
Roster: aragornN, electroNic, krazy, MUTiRiS, s1mple<br />
Global Rank: [22](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [16]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1539.6<br />
<br />
Final Rank Value (1539.6) = Starting Rank Value (1629.2) + Head To Head Adjustments (-89.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.644[<sup>1</sup>](#table2)
- Bounty Collected: 0.594[<sup>2</sup>](#table1)
- Opponent Network: 0.245[<sup>2</sup>](#table1)
- LAN Wins: 0.838[<sup>2</sup>](#table1)

The average of these factors is 0.580<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1629.2
- 400 + ( ( 0.580 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1629.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       23 | 2026-01-30 | Ninjas in Pyjamas | W   | 1.000      | 0.392        | 0.205 (0.080)    | 0.495 (0.194)    | 1 (1.000) |    16.33 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           39 |       40 | 2026-01-29 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -12.45 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           38 |       52 | 2026-01-28 | Legacy            | W   | 1.000      | 0.392        | 0.942 (0.369)    | -                | 1 (1.000) |    20.59 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           37 |      207 | 2026-01-21 | Nemesis           | L   | 1.000      | -            | -                | -                | -         |   -27.02 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           36 |      237 | 2026-01-21 | Ursa              | L   | 1.000      | -            | -                | -                | -         |   -30.78 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           35 |      620 | 2025-12-21 | Ninjas in Pyjamas | L   | 0.915      | -            | -                | -                | -         |   -15.61 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           34 |      624 | 2025-12-21 | Sharks            | W   | 0.914      | 0.309        | 0.166 (0.047)    | 0.865 (0.245)    | 1 (0.914) |    10.03 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           33 |      628 | 2025-12-21 | Impulse GW        | W   | 0.913      | -            | -                | -                | 1 (0.913) |     0.48 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           32 |      680 | 2025-12-19 | SAW               | W   | 0.899      | -            | -                | -                | 1 (0.899) |     0.19 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX        |
|           31 |      686 | 2025-12-19 | WOLF              | W   | 0.898      | -            | -                | -                | 1 (0.898) |     0.04 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX        |
|           30 |      823 | 2025-12-08 | ECSTATIC          | L   | 0.827      | -            | -                | -                | -         |   -21.53 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           29 |      842 | 2025-12-07 | Nemiga            | W   | 0.821      | 0.435        | 0.108 (0.039)    | 0.760 (0.271)    | -         |     1.86 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           28 |      890 | 2025-12-05 | NOVAQ             | W   | 0.808      | 0.435        | -                | 0.713 (0.250)    | -         |     0.99 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           27 |     1221 | 2025-11-22 | EYEBALLERS        | L   | 0.719      | -            | -                | -                | -         |   -17.48 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           26 |     1278 | 2025-11-20 | CPH Wolves        | W   | 0.708      | 0.435        | -                | 0.658 (0.202)    | -         |     0.42 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           25 |     1539 | 2025-11-09 | Marsborne         | L   | 0.635      | -            | -                | -                | -         |   -17.26 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           24 |     1541 | 2025-11-09 | NRG               | L   | 0.634      | -            | -                | -                | -         |   -12.86 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           23 |     1554 | 2025-11-09 | F5                | W   | 0.633      | -            | -                | -                | 1 (0.633) |     0.04 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           22 |     1594 | 2025-11-08 | FlyQuest RED      | W   | 0.627      | -            | -                | -                | 1 (0.627) |     0.15 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           21 |     1602 | 2025-11-08 | Zealous           | W   | 0.626      | -            | -                | -                | 1 (0.626) |     0.02 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           20 |     1896 | 2025-11-01 | GamerLegion       | W   | 0.579      | 1.000        | 0.430 (0.249)    | 0.509 (0.295)    | 1 (0.579) |     8.95 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           19 |     1905 | 2025-10-31 | Legacy            | L   | 0.574      | -            | -                | -                | -         |    -6.96 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           18 |     1915 | 2025-10-31 | Liquid            | W   | 0.572      | 1.000        | 0.640 (0.366)    | 0.398 (0.228)    | -         |    11.00 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           17 |     1960 | 2025-10-29 | Aurora            | W   | 0.558      | 1.000        | 1.000 (0.558)    | 0.378 (0.211)    | -         |    11.71 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           16 |     1992 | 2025-10-28 | GamerLegion       | W   | 0.552      | 1.000        | 0.430 (0.237)    | 0.509 (0.281)    | -         |     9.09 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           15 |     2030 | 2025-10-27 | Ninjas in Pyjamas | W   | 0.546      | 1.000        | 0.205 (0.112)    | 0.495 (0.270)    | -         |     6.82 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           14 |     2079 | 2025-10-26 | 3DMAX             | L   | 0.540      | -            | -                | -                | -         |    -6.92 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           13 |     2855 | 2025-10-04 | 9INE              | L   | 0.396      | -            | -                | -                | -         |    -9.06 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           12 |     2867 | 2025-10-04 | Marsborne         | W   | 0.394      | -            | -                | -                | -         |     1.93 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           11 |     3315 | 2025-09-23 | ENCE              | L   | 0.318      | -            | -                | -                | -         |    -8.52 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|           10 |     3333 | 2025-09-22 | JiJieHao          | W   | 0.311      | -            | -                | -                | -         |     0.35 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|            9 |     3553 | 2025-09-14 | Gentle Mates      | W   | 0.261      | 0.309        | 0.221 (0.018)    | -                | -         |     2.58 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|            8 |     3567 | 2025-09-14 | FACEITPLAYERS     | W   | 0.260      | -            | -                | -                | -         |     0.03 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|            7 |     3578 | 2025-09-14 | Famalicão         | W   | 0.259      | -            | -                | -                | -         |     0.12 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|            6 |     3825 | 2025-09-09 | BIG               | L   | 0.226      | -            | -                | -                | -         |    -3.99 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|            5 |     4513 | 2025-08-13 | The Glecs         | L   | 0.047      | -            | -                | -                | -         |    -1.49 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|            4 |     4568 | 2025-08-12 | Johnny Speeds     | L   | 0.041      | -            | -                | -                | -         |    -0.91 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|            3 |     4664 | 2025-08-10 | OG                | L   | 0.026      | -            | -                | -                | -         |    -0.78 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|            2 |     4693 | 2025-08-09 | Inner Circle      | W   | 0.018      | -            | -                | -                | -         |     0.11 | Ag1l, aragornN, krazy, MUTiRiS, story        |
|            1 |     4721 | 2025-08-07 | BetBoom           | W   | 0.007      | -            | -                | -                | -         |     0.09 | Ag1l, aragornN, krazy, MUTiRiS, story        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($95,762.35)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      0.915 | $1,762.00      | $1,612.07       |
| 2025-12-09 |      0.833 | $4,000.00      | $3,331.31       |
| 2025-11-23 |      0.728 | $2,000.00      | $1,455.45       |
| 2025-11-09 |      0.636 | $700.00        | $445.44         |
| 2025-11-01 |      0.580 | $150,000.00    | $87,057.74      |
| 2025-09-24 |      0.327 | $2,928.00      | $958.84         |
| 2025-09-14 |      0.261 | $2,934.00      | $766.02         |
| 2025-08-10 |      0.027 | $5,000.00      | $135.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
