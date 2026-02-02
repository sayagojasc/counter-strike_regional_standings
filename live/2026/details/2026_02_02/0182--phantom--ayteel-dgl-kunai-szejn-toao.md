### Roster Details<br />
Team Name: Phantom<br />
Roster: Ayteel, DGL, Kunai, szejn, TOAO<br />
Global Rank: [182](../../standings_global_2026_02_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_02_02.md)<br />
Regional Rank: [123]( ../../standings_europe_2026_02_02.md)<br />
<br />
Final Rank Value:  749.3<br />
<br />
Final Rank Value (749.3) = Starting Rank Value (759.4) + Head To Head Adjustments (-10.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.130[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 759.4
- 400 + ( ( 0.170 - 0.000 ) / ( 0.755 - 0.000 ) ) * 1600 = 759.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1308 | 2025-11-20 | Acend            | L   | 0.705      | -            | -                | -                | -         |    -4.46 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           17 |     1319 | 2025-11-20 | Haemus           | L   | 0.704      | -            | -                | -                | -         |   -17.32 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           16 |     1758 | 2025-11-06 | ALLINNERS        | L   | 0.612      | -            | -                | -                | -         |    -3.39 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           15 |     1782 | 2025-11-05 | NOVAQ            | L   | 0.605      | -            | -                | -                | -         |    -4.37 | Ayteel, DGL, Kunai, lunAtic, szejn |
|           14 |     1867 | 2025-11-01 | Nemesis          | L   | 0.582      | -            | -                | -                | -         |    -5.19 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           13 |     1881 | 2025-11-01 | 8Sins            | W   | 0.580      | 0.309        | 0.004 (0.001)    | 0.046 (0.008)    | 1 (0.580) |     6.57 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           12 |     1888 | 2025-11-01 | Prestige         | L   | 0.580      | -            | -                | -                | -         |    -6.80 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           11 |     1920 | 2025-10-31 | GenOne           | L   | 0.571      | -            | -                | -                | -         |    -3.25 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           10 |     2026 | 2025-10-27 | MOUZ NXT         | W   | 0.546      | 0.344        | 0.018 (0.003)    | 0.979 (0.184)    | 0 (0.000) |    16.51 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            9 |     2072 | 2025-10-26 | kONO             | L   | 0.540      | -            | -                | -                | -         |    -5.71 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            8 |     2124 | 2025-10-25 | 9BOOMPRO         | L   | 0.534      | -            | -                | -                | -         |    -7.54 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            7 |     2131 | 2025-10-25 | Dziuseppe        | W   | 0.533      | 0.344        | 0.003 (0.001)    | 0.153 (0.028)    | 0 (0.000) |     8.39 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            6 |     2175 | 2025-10-24 | Monte            | L   | 0.528      | -            | -                | -                | -         |    -0.90 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            5 |     3161 | 2025-09-27 | BIG              | L   | 0.346      | -            | -                | -                | -         |    -0.14 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            4 |     3182 | 2025-09-27 | fnatic           | L   | 0.344      | -            | -                | -                | -         |    -0.21 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            3 |     3213 | 2025-09-26 | Wildcard         | W   | 0.339      | 0.354        | 0.016 (0.002)    | 0.241 (0.029)    | 1 (0.339) |     7.40 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            2 |     3231 | 2025-09-26 | Friendly Campers | W   | 0.338      | 0.354        | 0.112 (0.013)    | 0.772 (0.092)    | 1 (0.338) |    10.39 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            1 |     3900 | 2025-09-07 | FUT              | L   | 0.213      | -            | -                | -                | -         |    -0.06 | Ayteel, DGL, Kunai, szejn, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($269.67)
- Divide that value by the 5th highest value among all rosters ($342,293.96)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-02 |      0.586 | $460.00        | $269.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
