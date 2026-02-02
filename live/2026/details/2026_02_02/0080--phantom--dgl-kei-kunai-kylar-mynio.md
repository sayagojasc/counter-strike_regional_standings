### Roster Details<br />
Team Name: Phantom<br />
Roster: DGL, KEi, Kunai, Kylar, mynio<br />
Global Rank: [80](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [55]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  1074.5<br />
<br />
Final Rank Value (1074.5) = Starting Rank Value (1067.2) + Head To Head Adjustments (7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.112[<sup>2</sup>](#table1)
- LAN Wins: 0.498[<sup>2</sup>](#table1)

The average of these factors is 0.315<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1067.2
- 400 + ( ( 0.315 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 1067.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      117 | 2026-01-24 | AM           | L   | 1.000      | -            | -                | -                | -         |   -14.09 | DGL, KEi, Kunai, Kylar, mynio     |
|           20 |      203 | 2026-01-22 | FORZE Reload | W   | 1.000      | 0.435        | 0.003 (0.001)    | 0.958 (0.417)    | 0 (0.000) |    11.66 | DGL, KEi, Kunai, Kylar, mynio     |
|           19 |      260 | 2026-01-20 | FAVBET       | L   | 1.000      | -            | -                | -                | -         |   -17.84 | DGL, KEi, Kunai, Kylar, mynio     |
|           18 |      289 | 2026-01-18 | Oramond      | L   | 1.000      | -            | -                | -                | -         |    -9.55 | DGL, KEi, Kunai, Kylar, mynio     |
|           17 |      617 | 2025-12-22 | GenOne       | L   | 0.920      | -            | -                | -                | -         |   -15.71 | DGL, KEi, Kunai, Kylar, mynio     |
|           16 |      621 | 2025-12-21 | los kogutos  | W   | 0.914      | 0.296        | 0.003 (0.001)    | 0.550 (0.149)    | 1 (0.914) |     8.04 | DGL, KEi, Kunai, Kylar, mynio     |
|           15 |      631 | 2025-12-21 | MINLATE      | W   | 0.912      | 0.296        | 0.004 (0.001)    | 0.490 (0.132)    | 1 (0.912) |    13.07 | DGL, KEi, Kunai, Kylar, mynio     |
|           14 |      645 | 2025-12-20 | VP.Prodigy   | W   | 0.908      | 0.333        | 0.007 (0.002)    | 0.113 (0.034)    | -         |     3.86 | DGL, KEi, Kunai, Kylar, mynio     |
|           13 |      656 | 2025-12-20 | TNC          | W   | 0.906      | -            | -                | -                | 1 (0.906) |     1.54 | DGL, KEi, Kunai, Kylar, mynio     |
|           12 |     1526 | 2025-11-10 | K27          | L   | 0.640      | -            | -                | -                | -         |    -3.73 | bnox, hades, KEi, Kylar, mynio    |
|           11 |     3093 | 2025-09-28 | 9INE         | L   | 0.354      | -            | -                | -                | -         |    -1.45 | hades, KEi, kRaSnaL, Kylar, mynio |
|           10 |     3113 | 2025-09-28 | Partizan     | W   | 0.352      | 0.354        | 0.006 (0.001)    | 0.169 (0.021)    | 1 (0.352) |     2.73 | hades, KEi, kRaSnaL, Kylar, mynio |
|            9 |     3120 | 2025-09-28 | fnatic       | W   | 0.351      | 0.354        | 0.166 (0.021)    | 0.580 (0.072)    | 1 (0.351) |     9.94 | hades, KEi, kRaSnaL, Kylar, mynio |
|            8 |     3142 | 2025-09-27 | BIG          | W   | 0.348      | 0.354        | 0.175 (0.022)    | 1.000 (0.123)    | 1 (0.348) |    10.24 | hades, KEi, kRaSnaL, Kylar, mynio |
|            7 |     3172 | 2025-09-27 | Partizan     | L   | 0.345      | -            | -                | -                | -         |    -8.23 | hades, KEi, kRaSnaL, Kylar, mynio |
|            6 |     3180 | 2025-09-27 | Gentle Mates | W   | 0.345      | 0.354        | 0.221 (0.027)    | 0.649 (0.079)    | 1 (0.345) |     9.86 | hades, KEi, kRaSnaL, Kylar, mynio |
|            5 |     3209 | 2025-09-26 | Nemesis      | W   | 0.340      | 0.354        | 0.013 (0.002)    | 0.280 (0.034)    | 1 (0.340) |     3.67 | hades, KEi, kRaSnaL, Kylar, mynio |
|            4 |     3226 | 2025-09-26 | Tricked      | W   | 0.338      | 0.354        | 0.016 (0.002)    | 0.456 (0.055)    | 1 (0.338) |     8.27 | hades, KEi, kRaSnaL, Kylar, mynio |
|            3 |     4080 | 2025-08-29 | 9INE         | L   | 0.152      | -            | -                | -                | -         |    -0.57 | hades, KEi, kRaSnaL, Kylar, mynio |
|            2 |     4096 | 2025-08-29 | HyperSpirit  | L   | 0.151      | -            | -                | -                | -         |    -4.24 | hades, KEi, kRaSnaL, Kylar, mynio |
|            1 |     4663 | 2025-08-10 | Sashi        | L   | 0.026      | -            | -                | -                | -         |    -0.15 | hades, KEi, kRaSnaL, Kylar, mynio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,043.77)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      0.914 | $2,090.00      | $1,910.94       |
| 2025-09-28 |      0.354 | $3,200.00      | $1,132.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
