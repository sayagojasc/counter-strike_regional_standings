### Roster Details<br />
Team Name: Lilmix<br />
Roster: bsover, doobs, quix, Sn0w, walleN<br />
Global Rank: [138](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [97]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  869.1<br />
<br />
Final Rank Value (869.1) = Starting Rank Value (893.3) + Head To Head Adjustments (-24.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.336[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 893.3
- 400 + ( ( 0.233 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 893.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      120 | 2026-01-24 | SemperFi         | L   | 1.000      | -            | -                | -                | -         |   -10.99 | bsover, doobs, quix, Sn0w, walleN         |
|           15 |      163 | 2026-01-23 | Luleflames       | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.00 | bsover, doobs, quix, Sn0w, walleN         |
|           14 |      168 | 2026-01-23 | BIG              | W   | 1.000      | 0.333        | 0.175 (0.058)    | 1.000 (0.333)    | 1 (1.000) |    30.56 | bsover, doobs, quix, Sn0w, walleN         |
|           13 |      273 | 2026-01-19 | Bebop            | L   | 1.000      | -            | -                | -                | -         |   -14.50 | bsover, doobs, quix, Sn0w, walleN         |
|           12 |      290 | 2026-01-18 | STATE            | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.502 (0.072)    | 0 (0.000) |    23.82 | bsover, doobs, quix, Sn0w, walleN         |
|           11 |      433 | 2026-01-15 | AaB              | L   | 1.000      | -            | -                | -                | -         |    -9.00 | bsover, doobs, quix, Sn0w, walleN         |
|           10 |      490 | 2026-01-12 | ALGO             | L   | 1.000      | -            | -                | -                | -         |   -11.36 | bsover, doobs, quix, Sn0w, walleN         |
|            9 |      514 | 2026-01-08 | Bushido Wildcats | L   | 1.000      | -            | -                | -                | -         |   -16.81 | bsover, doobs, quix, Sn0w, walleN         |
|            8 |     1445 | 2025-11-13 | megoshort        | L   | 0.658      | -            | -                | -                | -         |    -7.94 | b0denmaster, bsover, doobs, PlesseN, quix |
|            7 |     1482 | 2025-11-12 | Alliance         | L   | 0.651      | -            | -                | -                | -         |    -1.49 | b0denmaster, bsover, doobs, PlesseN, quix |
|            6 |     1639 | 2025-11-07 | AM               | L   | 0.621      | -            | -                | -                | -         |    -4.22 | b0denmaster, bsover, doobs, PlesseN, quix |
|            5 |     1662 | 2025-11-07 | 777              | W   | 0.620      | 0.335        | 0.000 (0.000)    | 0.102 (0.021)    | 1 (0.620) |     3.35 | b0denmaster, bsover, doobs, PlesseN, quix |
|            4 |     1677 | 2025-11-07 | Boys N Da HUD    | W   | 0.620      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.620) |     1.18 | b0denmaster, bsover, doobs, PlesseN, quix |
|            3 |     1688 | 2025-11-07 | Betclic          | L   | 0.619      | -            | -                | -                | -         |    -6.02 | b0denmaster, bsover, doobs, PlesseN, quix |
|            2 |     1701 | 2025-11-07 | BetBoom          | L   | 0.619      | -            | -                | -                | -         |    -0.55 | b0denmaster, bsover, doobs, PlesseN, quix |
|            1 |     1707 | 2025-11-07 | Sashi            | L   | 0.619      | -            | -                | -                | -         |    -2.24 | b0denmaster, bsover, doobs, PlesseN, quix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($268.30)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.674 | $398.00        | $268.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
