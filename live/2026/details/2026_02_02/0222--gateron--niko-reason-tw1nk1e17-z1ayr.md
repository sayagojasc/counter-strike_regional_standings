### Roster Details<br />
Team Name: GATERON<br />
Roster: Niko, reason, Tw1nk1e17, z1ayr<br />
Global Rank: [222](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [27]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  648.7<br />
<br />
Final Rank Value (648.7) = Starting Rank Value (656.3) + Head To Head Adjustments (-7.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 656.3
- 400 + ( ( 0.121 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 656.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1712 | 2025-11-07 | EGG               | L   | 0.619      | -            | -                | -                | -         |   -13.08 | DeathFine, ItsukaKotori, reason, Tw1nk1e17, z1ayr |
|           13 |     1759 | 2025-11-06 | Change The Game   | L   | 0.611      | -            | -                | -                | -         |    -6.41 | DeathFine, ItsukaKotori, reason, Tw1nk1e17, z1ayr |
|           12 |     2135 | 2025-10-25 | The QUBE          | L   | 0.533      | -            | -                | -                | -         |    -8.19 | Niko, reason, RW, Tw1nk1e17, z1ayr                |
|           11 |     2195 | 2025-10-24 | Eruption          | L   | 0.526      | -            | -                | -                | -         |    -6.03 | Niko, reason, RW, Tw1nk1e17, z1ayr                |
|           10 |     2241 | 2025-10-23 | Legion            | W   | 0.520      | 0.333        | 0.007 (0.001)    | 0.242 (0.042)    | 0 (0.000) |     8.26 | Melai, Niko, reason, Tw1nk1e17, z1ayr             |
|            9 |     2713 | 2025-10-07 | Chinggis Warriors | L   | 0.413      | -            | -                | -                | -         |    -3.52 | Niko, reason, Tw1nk1e17, z1ayr, zzi               |
|            8 |     2780 | 2025-10-06 | IHC               | W   | 0.406      | 0.333        | 0.000 (0.000)    | 0.034 (0.005)    | 0 (0.000) |     5.31 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            7 |     2834 | 2025-10-05 | Rare Atom         | L   | 0.399      | -            | -                | -                | -         |    -0.81 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            6 |     3485 | 2025-09-17 | The Huns          | L   | 0.279      | -            | -                | -                | -         |    -0.85 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            5 |     3671 | 2025-09-12 | Last Bullet       | W   | 0.246      | 0.333        | 0.004 (0.000)    | 0.122 (0.010)    | 0 (0.000) |     4.85 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            4 |     3726 | 2025-09-11 | Legion            | W   | 0.239      | 0.333        | 0.007 (0.001)    | 0.242 (0.019)    | 0 (0.000) |     3.98 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            3 |     3777 | 2025-09-10 | FengDa            | W   | 0.233      | 0.333        | 0.023 (0.002)    | 0.302 (0.023)    | 0 (0.000) |     6.14 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            2 |     3826 | 2025-09-09 | ScarX             | W   | 0.226      | 0.333        | 0.001 (0.000)    | 0.057 (0.004)    | 0 (0.000) |     3.39 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            1 |     3870 | 2025-09-08 | The Huns          | L   | 0.219      | -            | -                | -                | -         |    -0.61 | Niko, reason, Tw1nk1e17, Yolo267, z1ayr           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($299.70)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-20 |      0.300 | $1,000.00      | $299.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
