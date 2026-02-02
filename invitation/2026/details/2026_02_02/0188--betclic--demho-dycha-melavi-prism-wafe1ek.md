### Roster Details<br />
Team Name: Betclic<br />
Roster: Demho, dycha, Melavi, Prism, wafe1ek<br />
Global Rank: [188](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [124]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  735.1<br />
<br />
Final Rank Value (735.1) = Starting Rank Value (738.5) + Head To Head Adjustments (-3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.5
- 400 + ( ( 0.160 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 738.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      652 | 2025-12-20 | SPARTA        | L   | 0.907      | -            | -                | -                | -         |    -4.25 | AdrieN, Demho, dycha, Melavi, Prism  |
|           34 |     1069 | 2025-11-28 | ARCRED        | L   | 0.761      | -            | -                | -                | -         |    -7.33 | AdrieN, Demho, dycha, Melavi, Prism  |
|           33 |     1087 | 2025-11-28 | Mousquetaires | L   | 0.758      | -            | -                | -                | -         |    -8.40 | AdrieN, Demho, dycha, Melavi, Prism  |
|           32 |     1301 | 2025-11-20 | JiJieHao      | L   | 0.706      | -            | -                | -                | -         |    -3.63 | Demho, dycha, Melavi, mixer, Prism   |
|           31 |     1385 | 2025-11-15 | 500           | L   | 0.674      | -            | -                | -                | -         |    -3.78 | Demho, dycha, Melavi, mixer, Prism   |
|           30 |     2540 | 2025-10-10 | Gentle Mates  | L   | 0.434      | -            | -                | -                | -         |    -0.23 | Demho, dycha, Melavi, Prism, wafe1ek |
|           29 |     2605 | 2025-10-09 | BET-M         | L   | 0.426      | -            | -                | -                | -         |    -1.92 | Demho, dycha, Melavi, Prism, wafe1ek |
|           28 |     2669 | 2025-10-08 | ARCRED        | W   | 0.419      | 0.487        | 0.009 (0.002)    | 0.883 (0.180)    | 0 (0.000) |     9.08 | Demho, dycha, Melavi, Prism, wafe1ek |
|           27 |     2815 | 2025-10-05 | VP.Prodigy    | W   | 0.401      | 0.487        | 0.007 (0.001)    | 0.113 (0.022)    | 0 (0.000) |     6.37 | Demho, dycha, Melavi, Prism, wafe1ek |
|           26 |     2864 | 2025-10-04 | Tricked       | L   | 0.394      | -            | -                | -                | -         |    -0.70 | Demho, dycha, Melavi, Prism, wafe1ek |
|           25 |     2999 | 2025-10-01 | Eternal Fire  | L   | 0.372      | -            | -                | -                | -         |    -4.83 | Demho, dycha, Melavi, Prism, wafe1ek |
|           24 |     3091 | 2025-09-28 | 1win          | L   | 0.354      | -            | -                | -                | -         |    -2.55 | AdrieN, Demho, dycha, Melavi, Prism  |
|           23 |     3158 | 2025-09-27 | 500           | L   | 0.346      | -            | -                | -                | -         |    -2.23 | AdrieN, Demho, dycha, Melavi, Prism  |
|           22 |     3178 | 2025-09-27 | 9INE          | L   | 0.345      | -            | -                | -                | -         |    -0.27 | AdrieN, Demho, dycha, Melavi, Prism  |
|           21 |     3193 | 2025-09-26 | Wildcard      | W   | 0.341      | 0.354        | 0.016 (0.002)    | 0.241 (0.029)    | 1 (0.341) |     7.56 | AdrieN, Demho, dycha, Melavi, Prism  |
|           20 |     3202 | 2025-09-26 | Tricked       | W   | 0.340      | 0.354        | 0.016 (0.002)    | 0.456 (0.055)    | 1 (0.340) |    10.20 | AdrieN, Demho, dycha, Melavi, Prism  |
|           19 |     3222 | 2025-09-26 | Nemesis       | L   | 0.338      | -            | -                | -                | -         |    -2.52 | AdrieN, Demho, dycha, Melavi, Prism  |
|           18 |     3353 | 2025-09-21 | Sashi         | L   | 0.306      | -            | -                | -                | -         |    -0.35 | AdrieN, Demho, dycha, Melavi, Prism  |
|           17 |     3417 | 2025-09-19 | Partizan      | L   | 0.292      | -            | -                | -                | -         |    -3.30 | Demho, dycha, Prism, wizzhehe, Xydoo |
|           16 |     3450 | 2025-09-18 | Eternal Fire  | W   | 0.286      | 0.371        | 0.004 (0.000)    | 0.299 (0.032)    | 0 (0.000) |     5.40 | Demho, dycha, Prism, wizzhehe, Xydoo |
|           15 |     4145 | 2025-08-27 | Oramond       | L   | 0.139      | -            | -                | -                | -         |    -0.69 | AdrieN, Demho, dycha, hypex, Prism   |
|           14 |     4167 | 2025-08-26 | Monte         | L   | 0.133      | -            | -                | -                | -         |    -0.18 | AdrieN, Demho, dycha, hypex, Prism   |
|           13 |     4199 | 2025-08-24 | VRSoholics    | W   | 0.118      | -            | -                | -                | 0 (0.000) |     0.92 | Demho, dycha, hypex, jcobbb, Prism   |
|           12 |     4227 | 2025-08-22 | SPARTA        | L   | 0.105      | -            | -                | -                | -         |    -0.93 | Demho, dycha, hypex, jcobbb, Prism   |
|           11 |     4267 | 2025-08-20 | BetBoom       | L   | 0.094      | -            | -                | -                | -         |    -0.03 | Demho, dycha, hypex, jcobbb, Prism   |
|           10 |     4294 | 2025-08-19 | magic         | W   | 0.087      | 0.435        | 0.080 (0.003)    | 0.880 (0.033)    | 0 (0.000) |     2.32 | Demho, dycha, hypex, jcobbb, Prism   |
|            9 |     4420 | 2025-08-15 | BIG           | L   | 0.061      | -            | -                | -                | -         |    -1.46 | Demho, dycha, hypex, jcobbb, Prism   |
|            8 |     4455 | 2025-08-14 | Tricked       | W   | 0.054      | -            | -                | -                | 0 (0.000) |     0.42 | Demho, dycha, hypex, jcobbb, Prism   |
|            7 |     4485 | 2025-08-14 | ENCE          | L   | 0.051      | -            | -                | -                | -         |    -0.06 | Demho, dycha, hypex, jcobbb, Prism   |
|            6 |     4515 | 2025-08-13 | Passion UA    | W   | 0.047      | -            | -                | -                | 0 (0.000) |     0.34 | Demho, dycha, hypex, jcobbb, Prism   |
|            5 |     4540 | 2025-08-13 | Oramond       | W   | 0.045      | 0.384        | 0.083 (0.001)    | 1.000 (0.017)    | 0 (0.000) |     1.19 | Demho, dycha, hypex, jcobbb, Prism   |
|            4 |     4561 | 2025-08-12 | 500           | W   | 0.041      | 0.486        | 0.025 (0.000)    | 0.818 (0.016)    | -         |     1.05 | Demho, dycha, hypex, jcobbb, Prism   |
|            3 |     4573 | 2025-08-12 | FAVBET        | W   | 0.040      | 0.384        | 0.047 (0.001)    | 0.567 (0.009)    | -         |     0.94 | Demho, dycha, hypex, jcobbb, Prism   |
|            2 |     4612 | 2025-08-11 | BC.Game       | L   | 0.034      | -            | -                | -                | -         |    -0.26 | Demho, dycha, hypex, jcobbb, Prism   |
|            1 |     4674 | 2025-08-10 | Nemesis       | W   | 0.025      | 0.486        | 0.029 (0.000)    | 0.959 (0.012)    | -         |     0.75 | Demho, dycha, hypex, jcobbb, Prism   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($668.81)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-12 |      0.446 | $1,500.00      | $668.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
