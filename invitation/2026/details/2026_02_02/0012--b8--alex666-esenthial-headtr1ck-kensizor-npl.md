### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, headtr1ck, kensizor, npl<br />
Global Rank: [12](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [10]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1641.0<br />
<br />
Final Rank Value (1641.0) = Starting Rank Value (1651.4) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.619[<sup>1</sup>](#table2)
- Bounty Collected: 0.716[<sup>2</sup>](#table1)
- Opponent Network: 0.276[<sup>2</sup>](#table1)
- LAN Wins: 0.752[<sup>2</sup>](#table1)

The average of these factors is 0.591<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1651.4
- 400 + ( ( 0.591 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1651.4


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
|           36 |       45 | 2026-01-29 | paiN              | L   | 1.000      | -            | -                | -                | -         |   -19.91 | alex666, esenthial, kensizor, npl, segukawa  |
|           35 |       54 | 2026-01-28 | NRG               | L   | 1.000      | -            | -                | -                | -         |   -19.95 | alex666, esenthial, kensizor, npl, segukawa  |
|           34 |      847 | 2025-12-07 | Natus Vincere     | L   | 0.820      | -            | -                | -                | -         |    -9.02 | alex666, esenthial, headtr1ck, kensizor, npl |
|           33 |      871 | 2025-12-06 | paiN              | W   | 0.813      | 1.000        | 0.455 (0.370)    | 0.295 (0.240)    | 1 (0.813) |     8.70 | alex666, esenthial, headtr1ck, kensizor, npl |
|           32 |      899 | 2025-12-05 | Vitality          | L   | 0.806      | -            | -                | -                | -         |    -5.38 | alex666, esenthial, headtr1ck, kensizor, npl |
|           31 |      916 | 2025-12-04 | MOUZ              | L   | 0.801      | -            | -                | -                | -         |   -10.49 | alex666, esenthial, headtr1ck, kensizor, npl |
|           30 |      925 | 2025-12-04 | Falcons           | W   | 0.800      | 1.000        | 1.000 (0.800)    | 0.491 (0.393)    | 1 (0.800) |    20.22 | alex666, esenthial, headtr1ck, kensizor, npl |
|           29 |      969 | 2025-12-01 | 3DMAX             | W   | 0.782      | 0.809        | 0.469 (0.297)    | 0.465 (0.294)    | 1 (0.782) |    10.39 | alex666, esenthial, headtr1ck, kensizor, npl |
|           28 |      986 | 2025-11-30 | Natus Vincere     | L   | 0.774      | -            | -                | -                | -         |    -8.59 | alex666, esenthial, headtr1ck, kensizor, npl |
|           27 |     1019 | 2025-11-29 | fnatic            | W   | 0.768      | 0.809        | -                | 0.580 (0.360)    | 1 (0.768) |     6.59 | alex666, esenthial, headtr1ck, kensizor, npl |
|           26 |     1040 | 2025-11-29 | Liquid            | W   | 0.766      | 0.809        | 0.640 (0.397)    | 0.398 (0.246)    | 1 (0.766) |    13.43 | alex666, esenthial, headtr1ck, kensizor, npl |
|           25 |     1104 | 2025-11-26 | Legacy            | W   | 0.746      | 0.624        | 0.942 (0.439)    | 0.417 (0.194)    | 1 (0.746) |    13.46 | alex666, esenthial, headtr1ck, kensizor, npl |
|           24 |     1128 | 2025-11-25 | PARIVISION        | W   | 0.739      | 0.624        | 1.000 (0.462)    | 0.746 (0.344)    | 1 (0.739) |    19.95 | alex666, esenthial, headtr1ck, kensizor, npl |
|           23 |     1149 | 2025-11-24 | The Huns          | W   | 0.734      | -            | -                | -                | 1 (0.734) |     1.05 | alex666, esenthial, headtr1ck, kensizor, npl |
|           22 |     1167 | 2025-11-24 | M80               | L   | 0.732      | -            | -                | -                | -         |   -13.93 | alex666, esenthial, headtr1ck, kensizor, npl |
|           21 |     1918 | 2025-10-31 | Aurora            | L   | 0.572      | -            | -                | -                | -         |    -6.43 | alex666, esenthial, headtr1ck, kensizor, npl |
|           20 |     1951 | 2025-10-29 | Legacy            | W   | 0.560      | 1.000        | 0.942 (0.527)    | 0.417 (0.233)    | 1 (0.560) |    10.92 | alex666, esenthial, headtr1ck, kensizor, npl |
|           19 |     1983 | 2025-10-28 | paiN              | L   | 0.553      | -            | -                | -                | -         |   -10.18 | alex666, esenthial, headtr1ck, kensizor, npl |
|           18 |     2015 | 2025-10-27 | 3DMAX             | W   | 0.547      | 1.000        | 0.469 (0.257)    | 0.465 (0.255)    | 1 (0.547) |     9.69 | alex666, esenthial, headtr1ck, kensizor, npl |
|           17 |     2073 | 2025-10-26 | Astralis          | W   | 0.540      | 1.000        | 0.377 (0.203)    | 0.374 (0.202)    | -         |     7.64 | alex666, esenthial, headtr1ck, kensizor, npl |
|           16 |     2444 | 2025-10-15 | FaZe              | L   | 0.464      | -            | -                | -                | -         |    -4.41 | alex666, esenthial, headtr1ck, kRaSnaL, npl  |
|           15 |     2469 | 2025-10-14 | HEROIC            | L   | 0.458      | -            | -                | -                | -         |    -9.89 | alex666, esenthial, headtr1ck, kRaSnaL, npl  |
|           14 |     2941 | 2025-10-02 | FURIA             | L   | 0.381      | -            | -                | -                | -         |    -2.00 | alex666, esenthial, headtr1ck, kensizor, npl |
|           13 |     2996 | 2025-10-01 | GamerLegion       | L   | 0.372      | -            | -                | -                | -         |    -5.49 | alex666, esenthial, headtr1ck, kensizor, npl |
|           12 |     3032 | 2025-09-30 | G2                | W   | 0.366      | -            | -                | -                | -         |     4.60 | alex666, esenthial, headtr1ck, kensizor, npl |
|           11 |     3076 | 2025-09-29 | HOTU              | L   | 0.358      | -            | -                | -                | -         |    -7.90 | alex666, esenthial, headtr1ck, kensizor, npl |
|           10 |     3103 | 2025-09-28 | Legacy            | W   | 0.353      | 0.769        | 0.942 (0.256)    | -                | -         |     6.73 | alex666, esenthial, headtr1ck, kensizor, npl |
|            9 |     3350 | 2025-09-21 | Ninjas in Pyjamas | L   | 0.306      | -            | -                | -                | -         |    -6.25 | alex666, esenthial, headtr1ck, kensizor, npl |
|            8 |     3372 | 2025-09-20 | Gentle Mates      | W   | 0.301      | -            | -                | -                | -         |     2.79 | alex666, esenthial, headtr1ck, kensizor, npl |
|            7 |     3382 | 2025-09-20 | Passion UA        | W   | 0.299      | -            | -                | -                | -         |     3.06 | alex666, esenthial, headtr1ck, kensizor, npl |
|            6 |     3419 | 2025-09-19 | OG                | W   | 0.292      | -            | -                | -                | -         |     0.57 | alex666, esenthial, headtr1ck, kensizor, npl |
|            5 |     3454 | 2025-09-18 | PARIVISION        | L   | 0.285      | -            | -                | -                | -         |    -1.13 | alex666, esenthial, headtr1ck, kensizor, npl |
|            4 |     4049 | 2025-08-30 | Lynn Vision       | L   | 0.159      | -            | -                | -                | -         |    -4.59 | alex666, esenthial, headtr1ck, kensizor, npl |
|            3 |     4056 | 2025-08-30 | Morningstar       | W   | 0.158      | -            | -                | -                | -         |     0.25 | alex666, esenthial, headtr1ck, kensizor, npl |
|            2 |     4094 | 2025-08-29 | TYLOO             | L   | 0.151      | -            | -                | -                | -         |    -4.59 | alex666, esenthial, headtr1ck, kensizor, npl |
|            1 |     4669 | 2025-08-10 | MOUZ              | L   | 0.026      | -            | -                | -                | -         |    -0.39 | alex666, esenthial, headtr1ck, kensizor, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($82,964.66)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-12-14 |      0.868 | $20,000.00     | $17,357.09      |
| 2025-11-01 |      0.580 | $62,500.00     | $36,274.06      |
| 2025-10-19 |      0.492 | $5,000.00      | $2,459.33       |
| 2025-10-02 |      0.381 | $6,500.00      | $2,475.43       |
| 2025-09-21 |      0.307 | $70,000.00     | $21,485.66      |
| 2025-08-31 |      0.165 | $2,088.00      | $345.47         |
| 2025-08-10 |      0.027 | $2,500.00      | $67.62          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
