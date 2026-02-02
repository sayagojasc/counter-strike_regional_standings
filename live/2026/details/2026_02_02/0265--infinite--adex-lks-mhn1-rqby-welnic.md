### Roster Details<br />
Team Name: INFINITE<br />
Roster: adeX, LkS, mhN1, RQBY, welnic<br />
Global Rank: [265](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [157]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  542.5<br />
<br />
Final Rank Value (542.5) = Starting Rank Value (560.3) + Head To Head Adjustments (-17.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 560.3
- 400 + ( ( 0.076 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 560.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      367 | 2026-01-16 | aimclub         | L   | 1.000      | -            | -                | -                | -         |    -8.44 | adeX, LkS, mhN1, RQBY, welnic |
|           11 |      373 | 2026-01-16 | Prestige        | W   | 1.000      | 0.338        | 0.002 (0.001)    | 0.163 (0.055)    | 1 (1.000) |    27.26 | adeX, LkS, mhN1, RQBY, welnic |
|           10 |      390 | 2026-01-16 | STATE           | L   | 1.000      | -            | -                | -                | -         |    -1.55 | adeX, LkS, mhN1, RQBY, welnic |
|            9 |      397 | 2026-01-16 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -0.55 | adeX, LkS, mhN1, RQBY, welnic |
|            8 |      409 | 2026-01-16 | AaB             | L   | 1.000      | -            | -                | -                | -         |    -1.95 | adeX, LkS, mhN1, RQBY, welnic |
|            7 |      709 | 2025-12-17 | Fingers Crossed | L   | 0.887      | -            | -                | -                | -         |   -15.02 | adeX, LkS, mhN1, RQBY, welnic |
|            6 |      721 | 2025-12-17 | illwill         | L   | 0.885      | -            | -                | -                | -         |    -0.81 | adeX, LkS, mhN1, RQBY, welnic |
|            5 |     1037 | 2025-11-29 | OG              | L   | 0.766      | -            | -                | -                | -         |    -0.65 | LkS, mhN1, ra1n, RQBY, welnic |
|            4 |     1133 | 2025-11-25 | Nemesis         | L   | 0.738      | -            | -                | -                | -         |    -2.11 | LkS, mhN1, ra1n, RQBY, welnic |
|            3 |     1175 | 2025-11-24 | Sangal          | L   | 0.732      | -            | -                | -                | -         |    -0.85 | LkS, mhN1, ra1n, RQBY, welnic |
|            2 |     1294 | 2025-11-20 | G2 Ares         | L   | 0.707      | -            | -                | -                | -         |   -11.42 | LkS, mhN1, ra1n, RQBY, welnic |
|            1 |     1317 | 2025-11-20 | Nexus           | L   | 0.705      | -            | -                | -                | -         |    -1.67 | LkS, mhN1, ra1n, RQBY, welnic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
