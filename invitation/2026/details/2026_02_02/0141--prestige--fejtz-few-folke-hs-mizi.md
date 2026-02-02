### Roster Details<br />
Team Name: Prestige<br />
Roster: fejtZ, Few, Folke, HS, Mizi<br />
Global Rank: [141](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [98]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  866.7<br />
<br />
Final Rank Value (866.7) = Starting Rank Value (873.4) + Head To Head Adjustments (-6.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.371[<sup>2</sup>](#table1)

The average of these factors is 0.223<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 873.4
- 400 + ( ( 0.223 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 873.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      348 | 2026-01-17 | megoshort     | L   | 1.000      | -            | -                | -                | -         |   -11.41 | fejtZ, Few, Folke, HS, Mizi       |
|            9 |      368 | 2026-01-16 | STATE         | W   | 1.000      | 0.338        | 0.004 (0.001)    | 0.502 (0.169)    | 1 (1.000) |    23.69 | fejtZ, Few, Folke, HS, Mizi       |
|            8 |      373 | 2026-01-16 | INFINITE      | L   | 1.000      | -            | -                | -                | -         |   -27.26 | fejtZ, Few, Folke, HS, Mizi       |
|            7 |      383 | 2026-01-16 | AaB           | W   | 1.000      | 0.338        | 0.000 (0.000)    | 0.617 (0.208)    | 1 (1.000) |    21.97 | fejtZ, Few, Folke, HS, Mizi       |
|            6 |      386 | 2026-01-16 | aimclub       | W   | 1.000      | 0.338        | 0.000 (0.000)    | 0.166 (0.056)    | 1 (1.000) |     9.38 | fejtZ, Few, Folke, HS, Mizi       |
|            5 |      403 | 2026-01-16 | Johnny Speeds | L   | 1.000      | -            | -                | -                | -         |    -3.17 | fejtZ, Few, Folke, HS, Mizi       |
|            4 |     1377 | 2025-11-15 | Preasy Mix    | L   | 0.675      | -            | -                | -                | -         |   -15.09 | Few, Folke, Frøslev, Mizi, TorNEX |
|            3 |     1860 | 2025-11-02 | Nemesis       | L   | 0.585      | -            | -                | -                | -         |    -7.17 | Few, Folke, Frøslev, Mizi, TorNEX |
|            2 |     1877 | 2025-11-01 | MINLATE       | L   | 0.581      | -            | -                | -                | -         |    -4.36 | Few, Folke, Frøslev, Mizi, TorNEX |
|            1 |     1888 | 2025-11-01 | Phantom       | W   | 0.580      | 0.309        | 0.001 (0.000)    | 0.106 (0.019)    | 1 (0.580) |     6.80 | Few, Folke, Frøslev, Mizi, TorNEX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($687.01)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.675 | $389.00        | $262.57         |
| 2025-11-02 |      0.586 | $724.00        | $424.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
