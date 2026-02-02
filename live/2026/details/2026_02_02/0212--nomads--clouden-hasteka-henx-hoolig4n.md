### Roster Details<br />
Team Name: NomadS<br />
Roster: clouden, hasteka, HenX, hoolig4n<br />
Global Rank: [212](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [25]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  667.7<br />
<br />
Final Rank Value (667.7) = Starting Rank Value (681.5) + Head To Head Adjustments (-13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.5
- 400 + ( ( 0.133 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 681.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     2196 | 2025-10-24 | BORING PLAYERS    | L   | 0.526      | -            | -                | -                | -         |    -6.23 | bladee, clouden, HenX, hoolig4n, me1o     |
|           21 |     2242 | 2025-10-23 | ScarX             | L   | 0.520      | -            | -                | -                | -         |    -9.22 | bladee, clouden, HenX, hoolig4n, me1o     |
|           20 |     2710 | 2025-10-07 | Last Bullet       | L   | 0.413      | -            | -                | -                | -         |    -5.23 | clouden, hasteka, HenX, hoolig4n, shigeru |
|           19 |     2771 | 2025-10-06 | Morningstar       | L   | 0.406      | -            | -                | -                | -         |    -1.06 | clouden, hasteka, HenX, hoolig4n, shigeru |
|           18 |     2831 | 2025-10-05 | ScarX             | W   | 0.400      | 0.333        | 0.001 (0.000)    | 0.057 (0.008)    | 0 (0.000) |     5.55 | clouden, hasteka, HenX, hoolig4n, shigeru |
|           17 |     2961 | 2025-10-02 | Chinggis Warriors | L   | 0.379      | -            | -                | -                | -         |    -3.30 | clouden, hasteka, HenX, hoolig4n, me1o    |
|           16 |     2968 | 2025-10-02 | The Huns          | L   | 0.378      | -            | -                | -                | -         |    -1.25 | clouden, hasteka, HenX, hoolig4n, IZR     |
|           15 |     3638 | 2025-09-13 | Chinggis Warriors | L   | 0.252      | -            | -                | -                | -         |    -2.17 | clouden, hasteka, HenX, hoolig4n, IZR     |
|           14 |     3724 | 2025-09-11 | The Huns          | L   | 0.239      | -            | -                | -                | -         |    -0.82 | clouden, hasteka, HenX, hoolig4n, IZR     |
|           13 |     3774 | 2025-09-10 | Just Swing        | W   | 0.233      | 0.333        | 0.005 (0.000)    | 0.170 (0.013)    | 0 (0.000) |     4.35 | clouden, hasteka, HenX, hoolig4n, IZR     |
|           12 |     3832 | 2025-09-09 | True Thunder      | W   | 0.226      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.19 | clouden, hasteka, HenX, hoolig4n, IZR     |
|           11 |     3871 | 2025-09-08 | Legion            | L   | 0.219      | -            | -                | -                | -         |    -3.51 | clouden, hasteka, HenX, hoolig4n, IZR     |
|           10 |     3942 | 2025-09-05 | The Huns          | L   | 0.204      | -            | -                | -                | -         |    -0.68 | clouden, hasteka, HenX, hoolig4n, IZR     |
|            9 |     3954 | 2025-09-05 | IHC               | W   | 0.199      | 0.333        | 0.000 (0.000)    | 0.034 (0.002)    | 1 (0.199) |     2.56 | clouden, hasteka, HenX, hoolig4n, IZR     |
|            8 |     3963 | 2025-09-04 | Chinggis Warriors | L   | 0.196      | -            | -                | -                | -         |    -1.76 | clouden, hasteka, HenX, hoolig4n, IZR     |
|            7 |     4111 | 2025-08-28 | Rare Atom         | L   | 0.146      | -            | -                | -                | -         |    -0.30 | clouden, hasteka, HenX, hoolig4n, IZR     |
|            6 |     4168 | 2025-08-26 | The Huns          | W   | 0.133      | 0.333        | 0.028 (0.001)    | 0.392 (0.017)    | 0 (0.000) |     3.76 | clouden, hasteka, HenX, hoolig4n, IZR     |
|            5 |     4432 | 2025-08-15 | Last Bullet       | W   | 0.060      | 0.333        | 0.004 (0.000)    | 0.122 (0.002)    | 0 (0.000) |     1.12 | clouden, hasteka, HenX, hoolig4n, IZR     |
|            4 |     4473 | 2025-08-14 | Morningstar       | W   | 0.053      | 0.333        | 0.040 (0.001)    | 0.373 (0.007)    | 0 (0.000) |     1.54 | clouden, hasteka, HenX, hoolig4n, IZR     |
|            3 |     4528 | 2025-08-13 | BORING PLAYERS    | W   | 0.046      | 0.333        | 0.003 (0.000)    | 0.117 (0.002)    | 0 (0.000) |     0.90 | clouden, hasteka, HenX, hoolig4n, IZR     |
|            2 |     4580 | 2025-08-12 | Lynn Vision       | L   | 0.039      | -            | -                | -                | -         |    -0.06 | clouden, hasteka, HenX, hoolig4n, IZR     |
|            1 |     4630 | 2025-08-11 | FengDa            | W   | 0.033      | 0.333        | 0.023 (0.000)    | 0.302 (0.003)    | 0 (0.000) |     0.85 | clouden, hasteka, HenX, hoolig4n, IZR     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,053.91)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-02 |      0.379 | $1,500.00      | $569.09         |
| 2025-09-06 |      0.205 | $1,250.00      | $255.75         |
| 2025-08-29 |      0.153 | $1,500.00      | $229.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
