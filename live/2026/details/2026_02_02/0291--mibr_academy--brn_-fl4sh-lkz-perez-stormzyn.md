### Roster Details<br />
Team Name: MIBR Academy<br />
Roster: brn$, fl4sh, lkz, perez, stormzyn<br />
Global Rank: [291](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [85]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  498.9<br />
<br />
Final Rank Value (498.9) = Starting Rank Value (507.7) + Head To Head Adjustments (-8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.7
- 400 + ( ( 0.051 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 507.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1650 | 2025-11-07 | Yawara      | L   | 0.620      | -            | -                | -                | -         |    -1.79 | brn$, fl4sh, lkz, perez, stormzyn    |
|           14 |     1667 | 2025-11-07 | Four Magic  | L   | 0.620      | -            | -                | -                | -         |    -8.26 | brn$, fl4sh, lkz, perez, stormzyn    |
|           13 |     1693 | 2025-11-07 | RED Canids  | L   | 0.619      | -            | -                | -                | -         |    -0.20 | brn$, fl4sh, lkz, perez, stormzyn    |
|           12 |     1747 | 2025-11-06 | Vasco       | L   | 0.613      | -            | -                | -                | -         |    -4.93 | brn$, fl4sh, lkz, perez, stormzyn    |
|           11 |     1792 | 2025-11-04 | LP          | L   | 0.602      | -            | -                | -                | -         |    -3.87 | brn$, fl4sh, lkz, perez, stormzyn    |
|           10 |     2106 | 2025-10-25 | Bad Luck    | L   | 0.535      | -            | -                | -                | -         |    -7.44 | fl4sh, lkz, perez, proSHOW, stormzyn |
|            9 |     2223 | 2025-10-23 | Yawara      | L   | 0.522      | -            | -                | -                | -         |    -1.52 | fl4sh, lkz, perez, proSHOW, stormzyn |
|            8 |     2378 | 2025-10-16 | Sharks      | L   | 0.475      | -            | -                | -                | -         |    -0.07 | brn$, fl4sh, lkz, perez, stormzyn    |
|            7 |     2484 | 2025-10-13 | GameHunters | W   | 0.455      | 0.371        | 0.000 (0.000)    | 0.132 (0.022)    | 0 (0.000) |     8.15 | brn$, fl4sh, lkz, perez, stormzyn    |
|            6 |     2495 | 2025-10-12 | Procyon     | W   | 0.448      | 0.371        | 0.004 (0.001)    | 0.277 (0.046)    | 0 (0.000) |    12.12 | brn$, fl4sh, lkz, perez, stormzyn    |
|            5 |     2537 | 2025-10-10 | LP          | L   | 0.434      | -            | -                | -                | -         |    -3.12 | brn$, fl4sh, lkz, perez, stormzyn    |
|            4 |     2586 | 2025-10-09 | Yawara      | L   | 0.428      | -            | -                | -                | -         |    -1.21 | brn$, fl4sh, lkz, perez, stormzyn    |
|            3 |     2685 | 2025-10-07 | LP          | L   | 0.415      | -            | -                | -                | -         |    -3.16 | brn$, fl4sh, lkz, perez, stormzyn    |
|            2 |     2715 | 2025-10-07 | Crashers    | W   | 0.413      | 0.371        | 0.000 (0.000)    | 0.272 (0.042)    | 0 (0.000) |     7.59 | brn$, fl4sh, lkz, perez, stormzyn    |
|            1 |     2802 | 2025-10-05 | Yawara      | L   | 0.402      | -            | -                | -                | -         |    -1.10 | brn$, card, lkz, perez, stormzyn     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
