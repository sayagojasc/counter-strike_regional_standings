### Roster Details<br />
Team Name: G2<br />
Roster: HeavyGod, huNter-, malbsMd, MATYS, SunPayus<br />
Global Rank: [13](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [11]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1622.5<br />
<br />
Final Rank Value (1622.5) = Starting Rank Value (1542.7) + Head To Head Adjustments (79.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.686[<sup>1</sup>](#table2)
- Bounty Collected: 0.612[<sup>2</sup>](#table1)
- Opponent Network: 0.202[<sup>2</sup>](#table1)
- LAN Wins: 0.656[<sup>2</sup>](#table1)

The average of these factors is 0.539<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1542.7
- 400 + ( ( 0.539 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1542.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       34 | 2026-01-29 | Liquid       | W   | 1.000      | 0.392        | 0.640 (0.251)    | 0.398 (0.156)    | 1 (1.000) |    18.42 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           34 |       47 | 2026-01-28 | Passion UA   | W   | 1.000      | 0.392        | -                | 0.417 (0.163)    | 1 (1.000) |    11.93 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           33 |      839 | 2025-12-07 | Falcons      | L   | 0.821      | -            | -                | -                | -         |    -3.76 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           32 |      861 | 2025-12-06 | The MongolZ  | L   | 0.815      | -            | -                | -                | -         |    -9.45 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           31 |      888 | 2025-12-05 | FURIA        | L   | 0.808      | -            | -                | -                | -         |    -2.82 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           30 |      922 | 2025-12-04 | paiN         | W   | 0.800      | 1.000        | 0.455 (0.364)    | 0.295 (0.236)    | 1 (0.800) |    11.95 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           29 |      930 | 2025-12-04 | Passion UA   | W   | 0.799      | 1.000        | 0.160 (0.128)    | 0.417 (0.333)    | 1 (0.799) |     9.87 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           28 |     1785 | 2025-11-05 | Vitality     | L   | 0.605      | -            | -                | -                | -         |    -2.23 | HeavyGod, malbsMd, MATYS, sAw, SunPayus     |
|           27 |     1789 | 2025-11-04 | Virtus.pro   | W   | 0.603      | -            | -                | -                | 1 (0.603) |     1.47 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           26 |     1817 | 2025-11-03 | FURIA        | L   | 0.596      | -            | -                | -                | -         |    -2.40 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           25 |     1838 | 2025-11-03 | 3DMAX        | W   | 0.591      | 1.000        | 0.469 (0.278)    | 0.465 (0.275)    | 1 (0.591) |    10.89 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           24 |     2656 | 2025-10-08 | 3DMAX        | L   | 0.420      | -            | -                | -                | -         |    -5.01 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           23 |     2698 | 2025-10-07 | Vitality     | L   | 0.414      | -            | -                | -                | -         |    -1.54 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           22 |     2759 | 2025-10-06 | Spirit       | L   | 0.407      | -            | -                | -                | -         |    -3.96 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           21 |     2822 | 2025-10-05 | FURIA        | W   | 0.400      | 1.000        | 1.000 (0.400)    | 0.570 (0.228)    | 1 (0.400) |    11.04 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           20 |     2883 | 2025-10-04 | FaZe         | W   | 0.392      | 1.000        | 0.638 (0.250)    | 0.478 (0.188)    | 1 (0.392) |     9.67 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           19 |     2960 | 2025-10-02 | ENCE         | W   | 0.379      | 0.769        | -                | 0.620 (0.181)    | 1 (0.379) |     2.65 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           18 |     2995 | 2025-10-01 | Fluxo        | W   | 0.373      | 0.769        | -                | 0.431 (0.124)    | 1 (0.373) |     1.94 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           17 |     3032 | 2025-09-30 | B8           | L   | 0.366      | -            | -                | -                | -         |    -4.60 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           16 |     3057 | 2025-09-29 | Gentle Mates | L   | 0.361      | -            | -                | -                | -         |    -7.21 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           15 |     3117 | 2025-09-28 | Rooster      | W   | 0.352      | -            | -                | -                | -         |     0.10 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           14 |     3421 | 2025-09-19 | The MongolZ  | L   | 0.292      | -            | -                | -                | -         |    -2.92 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           13 |     3516 | 2025-09-16 | GamerLegion  | W   | 0.272      | 1.000        | 0.430 (0.117)    | 0.509 (0.139)    | -         |     5.49 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           12 |     3530 | 2025-09-15 | Legacy       | W   | 0.267      | 1.000        | 0.942 (0.251)    | -                | -         |     6.00 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           11 |     3560 | 2025-09-14 | FURIA        | L   | 0.261      | -            | -                | -                | -         |    -0.91 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           10 |     3636 | 2025-09-13 | Lynn Vision  | W   | 0.252      | -            | -                | -                | -         |     0.97 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            9 |     3892 | 2025-09-07 | Vitality     | W   | 0.214      | 0.675        | 1.000 (0.144)    | -                | -         |     6.08 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            8 |     3926 | 2025-09-06 | FURIA        | W   | 0.207      | 0.675        | 1.000 (0.140)    | -                | -         |     5.86 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            7 |     3945 | 2025-09-05 | FaZe         | W   | 0.201      | -            | -                | -                | -         |     5.16 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            6 |     3993 | 2025-09-01 | Spirit       | W   | 0.175      | -            | -                | -                | -         |     4.06 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            5 |     4007 | 2025-08-31 | FlyQuest     | W   | 0.167      | -            | -                | -                | -         |     1.90 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            4 |     4033 | 2025-08-30 | MOUZ         | L   | 0.160      | -            | -                | -                | -         |    -1.68 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            3 |     4112 | 2025-08-28 | Liquid       | W   | 0.146      | -            | -                | -                | -         |     3.31 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            2 |     4249 | 2025-08-21 | Falcons      | L   | 0.099      | -            | -                | -                | -         |    -0.33 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            1 |     4680 | 2025-08-09 | Spirit       | L   | 0.021      | -            | -                | -                | -         |    -0.17 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($119,593.92)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      0.868 | $20,000.00     | $17,357.09      |
| 2025-11-09 |      0.632 | $47,000.00     | $29,697.12      |
| 2025-10-12 |      0.447 | $38,500.00     | $17,208.02      |
| 2025-09-21 |      0.308 | $67,500.00     | $20,773.23      |
| 2025-09-07 |      0.214 | $150,000.00    | $32,110.32      |
| 2025-08-24 |      0.119 | $20,000.00     | $2,380.51       |
| 2025-08-10 |      0.027 | $2,500.00      | $67.62          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
