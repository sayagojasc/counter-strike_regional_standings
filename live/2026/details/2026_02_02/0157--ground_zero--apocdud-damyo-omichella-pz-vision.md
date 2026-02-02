### Roster Details<br />
Team Name: Ground Zero<br />
Roster: apocdud, damyo, Omichella, pz, vision<br />
Global Rank: [157](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [15]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  806.1<br />
<br />
Final Rank Value (806.1) = Starting Rank Value (740.0) + Head To Head Adjustments (66.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.052[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 740.0
- 400 + ( ( 0.160 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 740.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      761 | 2025-12-12 | Rooster           | L   | 0.856      | -            | -                | -                | -         |   -12.62 | apocdud, damyo, Omichella, pz, vision  |
|           33 |      766 | 2025-12-12 | Mindfreak         | L   | 0.855      | -            | -                | -                | -         |   -11.37 | apocdud, damyo, Omichella, pz, vision  |
|           32 |      857 | 2025-12-06 | FURY              | W   | 0.817      | 0.303        | -                | 0.105 (0.026)    | 0 (0.000) |     4.09 | apocdud, damyo, Omichella, pz, vision  |
|           31 |      860 | 2025-12-06 | Rooster           | W   | 0.816      | 0.303        | 0.005 (0.001)    | 0.303 (0.075)    | 0 (0.000) |    13.89 | apocdud, damyo, Omichella, pz, vision  |
|           30 |     1094 | 2025-11-27 | THUNDER dOWNUNDER | W   | 0.752      | 0.314        | 0.011 (0.003)    | 0.212 (0.050)    | 0 (0.000) |    11.07 | apocdud, damyo, Omichella, pz, vision  |
|           29 |     1110 | 2025-11-26 | Mindfreak         | W   | 0.745      | 0.314        | 0.010 (0.002)    | 0.380 (0.089)    | 0 (0.000) |    14.60 | apocdud, damyo, Omichella, pz, vision  |
|           28 |     1113 | 2025-11-26 | LITE              | W   | 0.745      | 0.314        | 0.001 (0.000)    | 0.134 (0.031)    | 0 (0.000) |     7.57 | apocdud, damyo, Omichella, pz, vision  |
|           27 |     1131 | 2025-11-25 | Underground       | W   | 0.739      | 0.314        | 0.001 (0.000)    | 0.138 (0.032)    | 0 (0.000) |    10.52 | apocdud, damyo, Omichella, pz, vision  |
|           26 |     1174 | 2025-11-24 | Mindfreak         | L   | 0.732      | -            | -                | -                | -         |    -7.69 | apocdud, damyo, Omichella, pz, vision  |
|           25 |     1270 | 2025-11-21 | Rooster           | W   | 0.711      | 0.314        | 0.005 (0.001)    | 0.303 (0.068)    | 0 (0.000) |    14.36 | apocdud, damyo, Omichella, pz, vision  |
|           24 |     1478 | 2025-11-12 | Rooster           | L   | 0.652      | -            | -                | -                | -         |    -7.02 | apocdud, damyo, Omichella, pz, vision  |
|           23 |     1505 | 2025-11-11 | SemperFi          | L   | 0.645      | -            | -                | -                | -         |    -2.88 | apocdud, damyo, Omichella, pz, vision  |
|           22 |     2205 | 2025-10-24 | Mindfreak         | W   | 0.525      | 0.278        | 0.010 (0.001)    | 0.380 (0.055)    | 0 (0.000) |    11.22 | apocdud, damyo, Omichella, pz, vision  |
|           21 |     2255 | 2025-10-23 | FURY              | W   | 0.518      | -            | -                | -                | 0 (0.000) |     3.32 | apocdud, damyo, Omichella, pz, vision  |
|           20 |     2725 | 2025-10-07 | Rooster           | L   | 0.412      | -            | -                | -                | -         |    -7.23 | apocdud, damyo, pz, vision, yourwombat |
|           19 |     2785 | 2025-10-06 | SemperFi          | L   | 0.405      | -            | -                | -                | -         |    -1.85 | apocdud, damyo, pz, vision, yourwombat |
|           18 |     2841 | 2025-10-05 | FURY              | W   | 0.398      | -            | -                | -                | 0 (0.000) |     2.43 | apocdud, damyo, Omichella, pz, vision  |
|           17 |     2850 | 2025-10-04 | SemperFi          | L   | 0.397      | -            | -                | -                | -         |    -1.82 | apocdud, damyo, Omichella, pz, vision  |
|           16 |     2851 | 2025-10-04 | Mindfreak         | W   | 0.397      | 0.302        | 0.010 (0.001)    | 0.380 (0.046)    | -         |     8.75 | apocdud, damyo, Omichella, pz, vision  |
|           15 |     2891 | 2025-10-03 | SemperFi          | L   | 0.391      | -            | -                | -                | -         |    -1.75 | apocdud, damyo, Omichella, pz, vision  |
|           14 |     2894 | 2025-10-03 | Mindfreak         | W   | 0.390      | 0.302        | 0.010 (0.001)    | 0.380 (0.045)    | -         |     8.80 | apocdud, damyo, Omichella, pz, vision  |
|           13 |     3125 | 2025-09-27 | Vantage           | W   | 0.350      | -            | -                | -                | -         |     3.62 | apocdud, damyo, Omichella, pz, vision  |
|           12 |     3131 | 2025-09-27 | BBBMBCBS          | W   | 0.350      | -            | -                | -                | -         |     2.53 | apocdud, damyo, Omichella, pz, vision  |
|           11 |     3424 | 2025-09-19 | SemperFi          | L   | 0.292      | -            | -                | -                | -         |    -1.27 | apocdud, damyo, Omichella, pz, vision  |
|           10 |     3457 | 2025-09-18 | KZG               | W   | 0.284      | -            | -                | -                | -         |     1.94 | apocdud, damyo, Omichella, pz, vision  |
|            9 |     3736 | 2025-09-11 | Rooster           | L   | 0.238      | -            | -                | -                | -         |    -4.08 | apocdud, damyo, pz, vision, yourwombat |
|            8 |     3781 | 2025-09-10 | FURY              | W   | 0.232      | -            | -                | -                | -         |     1.55 | apocdud, damyo, Omichella, pz, vision  |
|            7 |     3782 | 2025-09-10 | Mindfreak         | W   | 0.232      | 0.278        | 0.010 (0.001)    | -                | -         |     5.39 | apocdud, damyo, Omichella, pz, vision  |
|            6 |     3837 | 2025-09-09 | SemperFi          | L   | 0.225      | -            | -                | -                | -         |    -0.90 | apocdud, damyo, Omichella, pz, vision  |
|            5 |     3841 | 2025-09-09 | SemperFi          | L   | 0.224      | -            | -                | -                | -         |    -0.91 | apocdud, damyo, Omichella, pz, vision  |
|            4 |     3881 | 2025-09-08 | KZG               | W   | 0.218      | -            | -                | -                | -         |     1.49 | apocdud, damyo, Omichella, pz, vision  |
|            3 |     3935 | 2025-09-06 | KZG               | W   | 0.206      | -            | -                | -                | -         |     1.39 | apocdud, damyo, Omichella, pz, vision  |
|            2 |     4538 | 2025-08-13 | Rooster           | L   | 0.045      | -            | -                | -                | -         |    -0.78 | apocdud, damyo, Drox, pz, vision       |
|            1 |     4640 | 2025-08-11 | Mindfreak         | L   | 0.032      | -            | -                | -                | -         |    -0.24 | apocdud, damyo, Drox, pz, vision       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,589.46)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-13 |      0.864 | $330.00        | $285.00         |
| 2025-11-27 |      0.752 | $3,592.00      | $2,701.37       |
| 2025-10-04 |      0.397 | $1,317.00      | $522.95         |
| 2025-09-12 |      0.245 | $327.00        | $80.14          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
