### Roster Details<br />
Team Name: Mythic<br />
Roster: Cooper, fl0m, hyza, PwnAlone, Trucklover86<br />
Global Rank: [194](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [46]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  716.8<br />
<br />
Final Rank Value (716.8) = Starting Rank Value (692.2) + Head To Head Adjustments (24.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.2
- 400 + ( ( 0.138 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 692.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1485 | 2025-11-11 | Marsborne     | L   | 0.650      | -            | -                | -                | -         |    -0.78 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           17 |     1510 | 2025-11-10 | Zomblers      | W   | 0.643      | 0.363        | 0.001 (0.000)    | 0.161 (0.038)    | 0 (0.000) |     9.49 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           16 |     1996 | 2025-10-27 | TSG           | W   | 0.550      | 0.363        | 0.000 (0.000)    | 0.131 (0.026)    | 0 (0.000) |     5.65 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           15 |     2036 | 2025-10-26 | LAG           | L   | 0.543      | -            | -                | -                | -         |    -7.63 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           14 |     2145 | 2025-10-24 | BOSS          | W   | 0.530      | 0.363        | 0.019 (0.004)    | 0.437 (0.084)    | 0 (0.000) |    11.65 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           13 |     2216 | 2025-10-23 | Take Flyte    | W   | 0.522      | 0.363        | 0.000 (0.000)    | 0.217 (0.041)    | 0 (0.000) |     6.20 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|           12 |     2574 | 2025-10-09 | regain        | L   | 0.429      | -            | -                | -                | -         |    -5.96 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|           11 |     2622 | 2025-10-08 | Sakura        | W   | 0.423      | 0.363        | 0.060 (0.009)    | 0.206 (0.032)    | 0 (0.000) |     9.98 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|           10 |     2679 | 2025-10-07 | Wanted Goons  | W   | 0.416      | 0.363        | 0.000 (0.000)    | 0.104 (0.016)    | 0 (0.000) |     3.85 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|            9 |     2735 | 2025-10-06 | Wildcard      | L   | 0.409      | -            | -                | -                | -         |    -3.04 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            8 |     2799 | 2025-10-05 | anything else | W   | 0.402      | 0.363        | 0.000 (0.000)    | 0.023 (0.003)    | 0 (0.000) |     3.45 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            7 |     3686 | 2025-09-11 | Aether        | L   | 0.243      | -            | -                | -                | -         |    -4.14 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            6 |     3791 | 2025-09-09 | Voca          | L   | 0.229      | -            | -                | -                | -         |    -0.73 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            5 |     3844 | 2025-09-08 | anything else | W   | 0.223      | 0.363        | 0.000 (0.000)    | 0.023 (0.002)    | 0 (0.000) |     1.85 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            4 |     3924 | 2025-09-06 | Take Flyte    | L   | 0.207      | -            | -                | -                | -         |    -4.29 | Austin, BiBiAhn, Cooper, PwnAlone, Trucklover86 |
|            3 |     4446 | 2025-08-14 | Phoenix       | L   | 0.056      | -            | -                | -                | -         |    -0.82 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            2 |     4490 | 2025-08-13 | Getting Info  | W   | 0.049      | 0.363        | 0.002 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.47 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            1 |     4593 | 2025-08-11 | Zomblers      | L   | 0.036      | -            | -                | -                | -         |    -0.59 | Austin, Cooper, fl0m, hyza, Trucklover86        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($676.48)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.676 | $1,000.00      | $676.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
