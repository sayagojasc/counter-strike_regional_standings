### Roster Details<br />
Team Name: HEROIC<br />
Roster: Chr1zN, nilo, susp, xfl0ud, yxngstxr<br />
Global Rank: [25](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [18]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1535.9<br />
<br />
Final Rank Value (1535.9) = Starting Rank Value (1507.9) + Head To Head Adjustments (28.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.752[<sup>1</sup>](#table2)
- Bounty Collected: 0.593[<sup>2</sup>](#table1)
- Opponent Network: 0.334[<sup>2</sup>](#table1)
- LAN Wins: 0.413[<sup>2</sup>](#table1)

The average of these factors is 0.523<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1507.9
- 400 + ( ( 0.523 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1507.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |       27 | 2026-01-30 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -13.69 | Chr1zN, nilo, susp, xfl0ud, yxngstxr |
|           26 |       58 | 2026-01-28 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |    -3.38 | Chr1zN, nilo, susp, xfl0ud, yxngstxr |
|           25 |      180 | 2026-01-22 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -2.84 | Chr1zN, nilo, susp, xfl0ud, yxngstxr |
|           24 |      345 | 2026-01-17 | paiN              | W   | 1.000      | 0.895        | 0.455 (0.407)    | 0.295 (0.264)    | 0 (0.000) |    16.58 | Chr1zN, nilo, susp, xfl0ud, yxngstxr |
|           23 |      459 | 2026-01-14 | Friendly Campers  | W   | 1.000      | 0.895        | 0.112 (0.100)    | 0.772 (0.691)    | 0 (0.000) |     6.68 | Chr1zN, nilo, susp, xfl0ud, yxngstxr |
|           22 |     1193 | 2025-11-23 | BetBoom           | L   | 0.726      | -            | -                | -                | -         |   -11.81 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           21 |     1206 | 2025-11-22 | Nuclear TigeRES   | W   | 0.721      | 0.435        | -                | 1.000 (0.313)    | -         |     2.06 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           20 |     1240 | 2025-11-21 | 500               | W   | 0.714      | 0.435        | -                | 0.818 (0.254)    | -         |     1.43 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           19 |     1788 | 2025-11-04 | Spirit            | L   | 0.604      | -            | -                | -                | -         |    -4.93 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           18 |     1813 | 2025-11-04 | Natus Vincere     | W   | 0.598      | 1.000        | 0.715 (0.428)    | 0.328 (0.196)    | 1 (0.598) |    15.03 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           17 |     1839 | 2025-11-03 | The MongolZ       | L   | 0.591      | -            | -                | -                | -         |    -5.17 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           16 |     1919 | 2025-10-31 | GamerLegion       | L   | 0.572      | -            | -                | -                | -         |    -6.68 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           15 |     1987 | 2025-10-28 | Aurora            | W   | 0.553      | 1.000        | 1.000 (0.553)    | 0.378 (0.209)    | 1 (0.553) |    13.57 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           14 |     2029 | 2025-10-27 | BetBoom           | W   | 0.546      | 1.000        | 0.195 (0.106)    | 0.945 (0.515)    | 1 (0.546) |     9.12 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           13 |     2088 | 2025-10-26 | Ninjas in Pyjamas | W   | 0.539      | 1.000        | 0.205 (0.111)    | 0.495 (0.267)    | 1 (0.539) |     9.07 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           12 |     2318 | 2025-10-18 | Liquid            | L   | 0.490      | -            | -                | -                | -         |    -3.95 | hades, LNZ, nilo, xfl0ud, yxngstxr   |
|           11 |     2338 | 2025-10-18 | Legacy            | L   | 0.485      | -            | -                | -                | -         |    -3.84 | hades, LNZ, nilo, xfl0ud, yxngstxr   |
|           10 |     2403 | 2025-10-16 | fnatic            | W   | 0.471      | 1.000        | 0.166 (0.078)    | 0.580 (0.273)    | 1 (0.471) |     7.01 | hades, LNZ, nilo, xfl0ud, yxngstxr   |
|            9 |     2443 | 2025-10-15 | FUT               | W   | 0.464      | 1.000        | 0.281 (0.130)    | 0.758 (0.352)    | 1 (0.464) |     8.51 | hades, LNZ, nilo, xfl0ud, yxngstxr   |
|            8 |     2469 | 2025-10-14 | B8                | W   | 0.458      | 1.000        | 0.242 (0.111)    | -                | 1 (0.458) |     9.89 | hades, LNZ, nilo, xfl0ud, yxngstxr   |
|            7 |     2987 | 2025-10-01 | Astralis          | L   | 0.373      | -            | -                | -                | -         |    -4.42 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|            6 |     3015 | 2025-09-30 | 3DMAX             | L   | 0.367      | -            | -                | -                | -         |    -3.40 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|            5 |     3064 | 2025-09-29 | M80               | W   | 0.360      | 0.769        | 0.114 (0.032)    | -                | 1 (0.360) |     6.51 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|            4 |     3094 | 2025-09-28 | Gentle Mates      | L   | 0.354      | -            | -                | -                | -         |    -6.04 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|            3 |     3535 | 2025-09-15 | Liquid            | L   | 0.266      | -            | -                | -                | -         |    -2.08 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|            2 |     3558 | 2025-09-14 | paiN              | L   | 0.261      | -            | -                | -                | -         |    -3.44 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|            1 |     3639 | 2025-09-13 | Legacy            | L   | 0.252      | -            | -                | -                | -         |    -1.76 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($160,248.87)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.47) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-01-25 |      1.000 | $53,750.00     | $53,750.00      |
| 2025-11-23 |      0.728 | $5,000.00      | $3,638.62       |
| 2025-11-09 |      0.632 | $25,000.00     | $15,796.34      |
| 2025-11-01 |      0.580 | $62,500.00     | $36,274.06      |
| 2025-10-19 |      0.492 | $90,000.00     | $44,267.95      |
| 2025-10-02 |      0.381 | $4,500.00      | $1,713.76       |
| 2025-09-21 |      0.308 | $7,500.00      | $2,308.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
