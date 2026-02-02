### Roster Details<br />
Team Name: FURY<br />
Roster: cheeseball, cookie, rekonz, SkulL<br />
Global Rank: [277](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_02_02.md)<br />
Regional Rank: [34]( ../../standings_asia_2026_02_02.md)<br />
<br />
Final Rank Value:  524.2<br />
<br />
Final Rank Value (524.2) = Starting Rank Value (513.1) + Head To Head Adjustments (11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.1
- 400 + ( ( 0.053 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 513.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      856 | 2025-12-07 | Rooster         | L   | 0.818      | -            | -                | -                | -         |    -3.73 | cheeseball, cookie, rekonz, SkulL, versa      |
|           17 |      857 | 2025-12-06 | Ground Zero     | L   | 0.817      | -            | -                | -                | -         |    -4.09 | cheeseball, cookie, rahley, rekonz, SkulL     |
|           16 |      859 | 2025-12-06 | Animus Victoria | W   | 0.816      | 0.303        | 0.000 (0.000)    | 0.089 (0.022)    | 0 (0.000) |    12.43 | cheeseball, cookie, rahley, rekonz, SkulL     |
|           15 |     1136 | 2025-11-25 | LITE            | L   | 0.738      | -            | -                | -                | -         |    -7.78 | BRACE, cookie, rekonz, SkulL, versa           |
|           14 |     1200 | 2025-11-23 | Rooster         | W   | 0.725      | 0.314        | 0.005 (0.001)    | 0.303 (0.069)    | 0 (0.000) |    19.87 | BRACE, cookie, rekonz, SkulL, versa           |
|           13 |     1227 | 2025-11-22 | Mindfreak       | L   | 0.719      | -            | -                | -                | -         |    -2.37 | BRACE, cheeseball, cookie, rekonz, SkulL      |
|           12 |     2208 | 2025-10-24 | Rooster         | L   | 0.525      | -            | -                | -                | -         |    -2.00 | cheeseball, cookie, rekonz, SkulL, versa      |
|           11 |     2255 | 2025-10-23 | Ground Zero     | L   | 0.518      | -            | -                | -                | -         |    -3.32 | BRACE, cheeseball, cookie, rekonz, SkulL      |
|           10 |     2467 | 2025-10-14 | Rooster         | L   | 0.458      | -            | -                | -                | -         |    -3.40 | ADK, cheeseball, cookie, rekonz, SkulL        |
|            9 |     2720 | 2025-10-07 | Animus Victoria | W   | 0.412      | 0.278        | 0.000 (0.000)    | 0.089 (0.010)    | 0 (0.000) |     6.53 | ADK, cheeseball, cookie, rekonz, SkulL        |
|            8 |     2783 | 2025-10-06 | LE-LUX          | W   | 0.405      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.41 | ADK, cheeseball, cookie, rekonz, SkulL        |
|            7 |     2841 | 2025-10-05 | Ground Zero     | L   | 0.398      | -            | -                | -                | -         |    -2.43 | cheeseball, cookie, rahley, rekonz, SkulL     |
|            6 |     3781 | 2025-09-10 | Ground Zero     | L   | 0.232      | -            | -                | -                | -         |    -1.55 | ADK, cheeseball, cookie, rekonz, SkulL        |
|            5 |     3784 | 2025-09-10 | KZG             | L   | 0.232      | -            | -                | -                | -         |    -3.70 | cheeseball, cookie, rahley, rekonz, SkulL     |
|            4 |     3836 | 2025-09-09 | Rooster         | L   | 0.225      | -            | -                | -                | -         |    -1.79 | cheeseball, cookie, rahley, rekonz, SkulL     |
|            3 |     3940 | 2025-09-06 | Rooster         | L   | 0.204      | -            | -                | -                | -         |    -1.65 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            2 |     3981 | 2025-09-03 | The Art of War  | W   | 0.186      | 0.314        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     2.02 | ADK, cheeseball, cookie, rekonz, SkulL        |
|            1 |     3989 | 2025-09-02 | Underground     | W   | 0.179      | 0.314        | 0.001 (0.000)    | 0.028 (0.002)    | 0 (0.000) |     3.69 | ADK, cheeseball, cookie, rekonz, SkulL        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
