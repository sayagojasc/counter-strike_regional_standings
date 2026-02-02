### Roster Details<br />
Team Name: Falcons<br />
Roster: kyousuke, kyxsan, m0NESY, NiKo, TeSeS<br />
Global Rank: [4](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [3]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1906.0<br />
<br />
Final Rank Value (1906.0) = Starting Rank Value (1925.3) + Head To Head Adjustments (-19.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.711[<sup>2</sup>](#table1)
- Opponent Network: 0.377[<sup>2</sup>](#table1)
- LAN Wins: 0.792[<sup>2</sup>](#table1)

The average of these factors is 0.720<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1925.3
- 400 + ( ( 0.720 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1925.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       85 | 2026-01-25 | PARIVISION    | L   | 1.000      | -            | -                | -                | -         |   -15.47 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           34 |      109 | 2026-01-24 | Vitality      | W   | 1.000      | 0.899        | 1.000 (0.899)    | 0.576 (0.518)    | 1 (1.000) |    17.35 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           33 |      192 | 2026-01-22 | Liquid        | W   | 1.000      | 0.899        | 0.640 (0.575)    | 0.398 (0.358)    | 1 (1.000) |     7.00 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           32 |      317 | 2026-01-17 | Monte         | W   | 1.000      | 0.895        | -                | 0.611 (0.547)    | -         |     1.40 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           31 |      420 | 2026-01-15 | ECSTATIC      | W   | 1.000      | 0.895        | -                | 0.537 (0.480)    | -         |     1.10 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           30 |      782 | 2025-12-11 | Spirit        | L   | 0.847      | -            | -                | -                | -         |   -18.17 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           29 |      839 | 2025-12-07 | G2            | W   | 0.821      | 1.000        | 0.349 (0.287)    | 0.329 (0.270)    | 1 (0.821) |     3.76 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           28 |      865 | 2025-12-06 | MOUZ          | L   | 0.814      | -            | -                | -                | -         |   -18.38 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           27 |      897 | 2025-12-05 | Imperial      | W   | 0.806      | 1.000        | -                | 0.680 (0.548)    | 1 (0.806) |     2.43 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           26 |      920 | 2025-12-04 | Passion UA    | W   | 0.801      | 1.000        | -                | 0.417 (0.334)    | 1 (0.801) |     2.21 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           25 |      925 | 2025-12-04 | B8            | L   | 0.800      | -            | -                | -                | -         |   -20.22 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           24 |     1367 | 2025-11-16 | FURIA         | L   | 0.679      | -            | -                | -                | -         |   -10.30 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           23 |     1393 | 2025-11-15 | Vitality      | W   | 0.672      | 0.687        | 1.000 (0.462)    | 0.576 (0.266)    | 1 (0.672) |    10.35 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           22 |     1448 | 2025-11-12 | Passion UA    | W   | 0.657      | -            | -                | -                | 1 (0.657) |     1.80 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           21 |     1483 | 2025-11-12 | Spirit        | W   | 0.651      | 0.687        | 0.635 (0.284)    | -                | 1 (0.651) |     4.75 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           20 |     1568 | 2025-11-08 | MOUZ          | W   | 0.631      | 1.000        | 0.440 (0.277)    | -                | 1 (0.631) |     4.91 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           19 |     1613 | 2025-11-08 | FURIA         | L   | 0.626      | -            | -                | -                | -         |   -10.16 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           18 |     1781 | 2025-11-05 | Astralis      | W   | 0.606      | 1.000        | 0.377 (0.228)    | 0.374 (0.226)    | 1 (0.606) |     2.57 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           17 |     1810 | 2025-11-04 | Spirit        | W   | 0.599      | 1.000        | 0.635 (0.380)    | 0.369 (0.221)    | -         |     4.60 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           16 |     1843 | 2025-11-02 | TYLOO         | W   | 0.590      | -            | -                | -                | -         |     0.16 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           15 |     2499 | 2025-10-12 | Vitality      | L   | 0.447      | -            | -                | -                | -         |    -6.68 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           14 |     2523 | 2025-10-11 | MOUZ          | W   | 0.440      | -            | -                | -                | -         |     2.79 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           13 |     2568 | 2025-10-10 | 3DMAX         | W   | 0.432      | -            | -                | -                | -         |     2.55 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           12 |     2750 | 2025-10-06 | MOUZ          | W   | 0.408      | -            | -                | -                | -         |     2.50 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           11 |     2846 | 2025-10-05 | Natus Vincere | W   | 0.398      | 1.000        | 0.715 (0.285)    | -                | -         |     4.12 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           10 |     2884 | 2025-10-04 | Astralis      | W   | 0.392      | -            | -                | -                | -         |     1.69 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            9 |     3374 | 2025-09-20 | FURIA         | L   | 0.300      | -            | -                | -                | -         |    -4.64 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            8 |     3396 | 2025-09-19 | paiN          | W   | 0.294      | -            | -                | -                | -         |     1.09 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            7 |     3528 | 2025-09-15 | FaZe          | W   | 0.267      | -            | -                | -                | -         |     2.90 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            6 |     3577 | 2025-09-14 | Legacy        | W   | 0.259      | 1.000        | 0.942 (0.244)    | -                | -         |     2.07 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            5 |     3673 | 2025-09-12 | Virtus.pro    | W   | 0.246      | -            | -                | -                | -         |     0.07 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            4 |     4200 | 2025-08-24 | Vitality      | W   | 0.118      | -            | -                | -                | -         |     2.03 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            3 |     4203 | 2025-08-23 | Aurora        | L   | 0.114      | -            | -                | -                | -         |    -2.50 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            2 |     4219 | 2025-08-22 | MOUZ          | W   | 0.108      | -            | -                | -                | -         |     0.65 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            1 |     4249 | 2025-08-21 | G2            | W   | 0.099      | -            | -                | -                | -         |     0.33 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($388,712.71)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-25 |      1.000 | $111,563.00    | $111,563.00     |
| 2025-12-14 |      0.868 | $45,000.00     | $39,053.46      |
| 2025-11-16 |      0.679 | $75,000.00     | $50,922.60      |
| 2025-11-09 |      0.632 | $120,000.00    | $75,822.44      |
| 2025-10-12 |      0.447 | $125,000.00    | $55,870.20      |
| 2025-09-21 |      0.308 | $130,000.00    | $40,007.70      |
| 2025-08-24 |      0.119 | $130,000.00    | $15,473.31      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
