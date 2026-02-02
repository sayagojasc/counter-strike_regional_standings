### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: AquaRS, F0R3VER, kaito, sun, TriBorgg1<br />
Global Rank: [172](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [116]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  763.3<br />
<br />
Final Rank Value (763.3) = Starting Rank Value (748.8) + Head To Head Adjustments (14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.023[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 748.8
- 400 + ( ( 0.165 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 748.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      645 | 2025-12-20 | Phantom       | L   | 0.908      | -            | -                | -                | -         |    -3.86 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           21 |      815 | 2025-12-09 | Johnny Speeds | L   | 0.832      | -            | -                | -                | -         |    -1.52 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           20 |      834 | 2025-12-08 | magic         | L   | 0.825      | -            | -                | -                | -         |    -3.69 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           19 |      875 | 2025-12-06 | FORZE Reload  | W   | 0.813      | 0.371        | 0.003 (0.001)    | 0.958 (0.289)    | 0 (0.000) |    19.11 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           18 |      944 | 2025-12-03 | CPH Wolves    | W   | 0.792      | 0.371        | 0.002 (0.001)    | 0.658 (0.193)    | 0 (0.000) |    19.38 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           17 |     1755 | 2025-11-06 | FAVBET        | L   | 0.612      | -            | -                | -                | -         |    -3.17 | AquaRS, F0R3VER, lasfas, ProbLeM, TriBorgg1 |
|           16 |     2020 | 2025-10-27 | BET-M         | L   | 0.547      | -            | -                | -                | -         |    -2.06 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           15 |     2090 | 2025-10-26 | Nexus         | L   | 0.539      | -            | -                | -                | -         |    -2.60 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           14 |     2123 | 2025-10-25 | ECLOT         | L   | 0.534      | -            | -                | -                | -         |    -2.10 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           13 |     2182 | 2025-10-24 | AaB           | L   | 0.527      | -            | -                | -                | -         |    -8.37 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           12 |     2231 | 2025-10-23 | Fire Flux     | W   | 0.521      | 0.435        | 0.019 (0.004)    | 0.752 (0.170)    | 0 (0.000) |    11.15 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           11 |     2269 | 2025-10-22 | SPARTA        | L   | 0.513      | -            | -                | -                | -         |    -4.64 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           10 |     2696 | 2025-10-07 | Nemesis       | L   | 0.414      | -            | -                | -                | -         |    -0.66 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            9 |     2758 | 2025-10-06 | 500           | L   | 0.407      | -            | -                | -                | -         |    -2.29 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            8 |     2815 | 2025-10-05 | Betclic       | L   | 0.401      | -            | -                | -                | -         |    -6.37 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            7 |     2872 | 2025-10-04 | EYEBALLERS    | L   | 0.393      | -            | -                | -                | -         |    -0.30 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            6 |     2989 | 2025-10-01 | Nexus         | L   | 0.373      | -            | -                | -                | -         |    -1.52 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            5 |     4206 | 2025-08-23 | NOVAQ         | W   | 0.114      | 0.372        | 0.014 (0.001)    | 0.713 (0.030)    | 1 (0.114) |     3.04 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            4 |     4212 | 2025-08-23 | Flame Sharks  | W   | 0.112      | 0.372        | 0.002 (0.000)    | 0.055 (0.002)    | 1 (0.112) |     1.44 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            3 |     4345 | 2025-08-17 | UNiTY         | W   | 0.073      | 0.278        | 0.012 (0.000)    | 0.398 (0.008)    | 0 (0.000) |     1.63 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            2 |     4469 | 2025-08-14 | K27           | W   | 0.053      | 0.278        | 0.093 (0.001)    | 0.796 (0.012)    | 0 (0.000) |     1.63 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            1 |     4698 | 2025-08-08 | QWENTRY       | W   | 0.014      | 0.278        | 0.005 (0.000)    | 0.142 (0.001)    | 0 (0.000) |     0.21 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,547.95)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-10 |      0.839 | $1,000.00      | $839.00         |
| 2025-08-23 |      0.114 | $13,921.00     | $1,581.40       |
| 2025-08-17 |      0.073 | $1,750.00      | $127.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
