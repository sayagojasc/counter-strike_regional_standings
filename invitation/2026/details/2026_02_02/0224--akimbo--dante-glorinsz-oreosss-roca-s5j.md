### Roster Details<br />
Team Name: Akimbo<br />
Roster: Dante, gloRinsz, oreosss, roca, S5J<br />
Global Rank: [224](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_02_02.md)<br />
Regional Rank: [56]( ../../standings_americas_2026_02_02.md)<br />
<br />
Final Rank Value:  645.3<br />
<br />
Final Rank Value (645.3) = Starting Rank Value (646.2) + Head To Head Adjustments (-0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.008[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.2
- 400 + ( ( 0.116 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 646.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3646 | 2025-09-12 | Wanted Goons  | L   | 0.249      | -            | -                | -                | -         |    -5.17 | Dante, gloRinsz, oreosss, roca, S5J   |
|            6 |     3689 | 2025-09-11 | Wildcard      | L   | 0.243      | -            | -                | -                | -         |    -1.67 | gloRinsz, Mexican, oreosss, roca, S5J |
|            5 |     3794 | 2025-09-09 | BOSS          | W   | 0.229      | 0.363        | 0.019 (0.002)    | 0.437 (0.036)    | 0 (0.000) |     5.49 | Dante, gloRinsz, oreosss, roca, S5J   |
|            4 |     3848 | 2025-09-08 | Arrival Seven | W   | 0.222      | 0.363        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     1.41 | Dante, gloRinsz, oreosss, roca, S5J   |
|            3 |     4316 | 2025-08-17 | Zomblers      | W   | 0.076      | 0.300        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.076) |     0.77 | Dante, gloRinsz, oreosss, roca, S5J   |
|            2 |     4489 | 2025-08-13 | Take Flyte    | L   | 0.050      | -            | -                | -                | -         |    -1.12 | Dante, gloRinsz, oreosss, roca, S5J   |
|            1 |     4597 | 2025-08-11 | LAG           | L   | 0.036      | -            | -                | -                | -         |    -0.63 | Dante, gloRinsz, oreosss, roca, S5J   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($284.81)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-17 |      0.076 | $3,750.00      | $284.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
