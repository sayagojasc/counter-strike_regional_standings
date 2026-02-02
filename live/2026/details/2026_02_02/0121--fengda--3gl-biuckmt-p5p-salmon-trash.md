### Roster Details<br />
Team Name: FengDa<br />
Roster: 3gl, Biuckmt, p5p, salmon, Trash<br />
Global Rank: [121](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [9]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  917.3<br />
<br />
Final Rank Value (917.3) = Starting Rank Value (951.7) + Head To Head Adjustments (-34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.356[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 951.7
- 400 + ( ( 0.260 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 951.7


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
|           34 |      278 | 2026-01-18 | Eruption          | L   | 1.000      | -            | -                | -                | -         |   -21.77 | 3gl, Biuckmt, p5p, salmon, Trash       |
|           33 |      601 | 2025-12-30 | Rare Atom         | L   | 0.971      | -            | -                | -                | -         |    -7.24 | 3gl, p5p, salmon, Trash, x9            |
|           32 |      602 | 2025-12-29 | Just Swing        | W   | 0.966      | 0.368        | 0.005 (0.002)    | 0.170 (0.061)    | 1 (0.966) |     7.98 | 3gl, p5p, salmon, Trash, x9            |
|           31 |      607 | 2025-12-28 | Last Bullet       | W   | 0.958      | 0.368        | 0.004 (0.002)    | 0.122 (0.043)    | 1 (0.958) |     8.36 | 3gl, p5p, salmon, Trash, x9            |
|           30 |      608 | 2025-12-27 | Morningstar       | L   | 0.953      | -            | -                | -                | -         |    -9.14 | 3gl, p5p, salmon, Trash, x9            |
|           29 |     1467 | 2025-11-12 | Morningstar       | L   | 0.653      | -            | -                | -                | -         |    -6.08 | 3gl, Biuckmt, chengking, salmon, Trash |
|           28 |     1527 | 2025-11-10 | Change The Game   | W   | 0.640      | 0.333        | 0.005 (0.001)    | 0.154 (0.033)    | 0 (0.000) |     6.46 | 3gl, Biuckmt, chengking, salmon, Trash |
|           27 |     1566 | 2025-11-09 | BORING PLAYERS    | L   | 0.631      | -            | -                | -                | -         |   -14.71 | 3gl, Biuckmt, chengking, salmon, Trash |
|           26 |     1614 | 2025-11-08 | Change The Game   | L   | 0.625      | -            | -                | -                | -         |   -14.08 | 3gl, Biuckmt, chengking, salmon, Trash |
|           25 |     1756 | 2025-11-06 | EGG               | W   | 0.612      | -            | -                | -                | 1 (0.612) |     1.52 | 3gl, Biuckmt, chengking, salmon, Trash |
|           24 |     2023 | 2025-10-27 | The QUBE          | W   | 0.546      | 0.333        | 0.003 (0.000)    | -                | 0 (0.000) |     3.17 | 3gl, Biuckmt, chengking, salmon, Trash |
|           23 |     2083 | 2025-10-26 | Chinggis Warriors | L   | 0.540      | -            | -                | -                | -         |   -11.14 | 3gl, Biuckmt, chengking, salmon, Trash |
|           22 |     2193 | 2025-10-24 | ScarX             | W   | 0.526      | -            | -                | -                | 0 (0.000) |     2.25 | 3gl, Biuckmt, chengking, salmon, Trash |
|           21 |     2246 | 2025-10-23 | BORING PLAYERS    | W   | 0.519      | 0.333        | -                | 0.117 (0.020)    | -         |     3.94 | 3gl, Biuckmt, chengking, salmon, Trash |
|           20 |     2391 | 2025-10-16 | Rare Atom         | L   | 0.473      | -            | -                | -                | -         |    -3.98 | 3gl, Biuckmt, chengking, p5p, salmon   |
|           19 |     2460 | 2025-10-14 | Morningstar       | W   | 0.460      | 0.333        | 0.040 (0.006)    | 0.373 (0.057)    | -         |    10.08 | 3gl, Biuckmt, chengking, p5p, salmon   |
|           18 |     2609 | 2025-10-09 | DEPO              | W   | 0.426      | 0.333        | 0.005 (0.001)    | 0.180 (0.026)    | -         |     5.49 | 3gl, Biuckmt, chengking, p5p, salmon   |
|           17 |     2662 | 2025-10-08 | Last Bullet       | W   | 0.419      | 0.333        | 0.004 (0.001)    | 0.122 (0.017)    | -         |     3.36 | 3gl, Biuckmt, chengking, p5p, salmon   |
|           16 |     2717 | 2025-10-07 | Eruption          | W   | 0.413      | 0.333        | 0.010 (0.001)    | 0.155 (0.021)    | -         |     3.53 | 3gl, Biuckmt, chengking, p5p, salmon   |
|           15 |     2772 | 2025-10-06 | Rare Atom         | L   | 0.406      | -            | -                | -                | -         |    -3.16 | 3gl, Biuckmt, chengking, p5p, salmon   |
|           14 |     2838 | 2025-10-05 | IHC               | W   | 0.399      | -            | -                | -                | -         |     1.66 | 3gl, Biuckmt, chengking, p5p, x9       |
|           13 |     2885 | 2025-10-04 | Morningstar       | L   | 0.392      | -            | -                | -                | -         |    -3.68 | 3gl, Biuckmt, chengking, salmon, Trash |
|           12 |     2924 | 2025-10-03 | Rare Atom         | L   | 0.385      | -            | -                | -                | -         |    -3.02 | 3gl, Biuckmt, chengking, salmon, Trash |
|           11 |     2955 | 2025-10-02 | Morningstar       | W   | 0.379      | 0.303        | 0.040 (0.005)    | 0.373 (0.043)    | 1 (0.379) |     8.50 | 3gl, Biuckmt, chengking, salmon, Trash |
|           10 |     3576 | 2025-09-14 | Just Swing        | W   | 0.259      | -            | -                | -                | 1 (0.259) |     2.03 | 3gl, Biuckmt, p5p, salmon, x9          |
|            9 |     3777 | 2025-09-10 | GATERON           | L   | 0.233      | -            | -                | -                | -         |    -6.14 | 3gl, Biuckmt, chengking, p5p, x9       |
|            8 |     3829 | 2025-09-09 | Rare Atom         | L   | 0.226      | -            | -                | -                | -         |    -1.71 | 3gl, Biuckmt, chengking, p5p, x9       |
|            7 |     3876 | 2025-09-08 | Morningstar       | W   | 0.219      | 0.333        | 0.040 (0.003)    | 0.373 (0.027)    | -         |     5.00 | 3gl, Biuckmt, chengking, p5p, x9       |
|            6 |     4119 | 2025-08-28 | Morningstar       | L   | 0.145      | -            | -                | -                | -         |    -1.26 | 3gl, Biuckmt, chengking, p5p, x9       |
|            5 |     4172 | 2025-08-26 | BORING PLAYERS    | W   | 0.132      | -            | -                | -                | 1 (0.132) |     1.11 | 3gl, Biuckmt, chengking, p5p, x9       |
|            4 |     4177 | 2025-08-25 | Magic Cape        | W   | 0.130      | -            | -                | -                | 1 (0.130) |     0.18 | 3gl, Biuckmt, chengking, p5p, x9       |
|            3 |     4531 | 2025-08-13 | Eruption          | L   | 0.046      | -            | -                | -                | -         |    -1.06 | 3gl, Biuckmt, chengking, p5p, x9       |
|            2 |     4577 | 2025-08-12 | MAXXPOWER         | W   | 0.039      | -            | -                | -                | -         |     0.05 | 3gl, Biuckmt, chengking, p5p, x9       |
|            1 |     4630 | 2025-08-11 | NomadS            | L   | 0.033      | -            | -                | -                | -         |    -0.85 | 3gl, Biuckmt, chengking, p5p, x9       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,793.87)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-30 |      0.972 | $2,018.00      | $1,962.38       |
| 2025-11-13 |      0.660 | $1,500.00      | $989.99         |
| 2025-10-17 |      0.480 | $1,500.00      | $719.76         |
| 2025-10-04 |      0.393 | $600.00        | $235.69         |
| 2025-09-14 |      0.259 | $15,000.00     | $3,886.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
