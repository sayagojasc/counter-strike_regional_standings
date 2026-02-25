# Documentación del Sistema de Ranking

Breve descripción de cada componente del sistema de ranking de Counter-Strike.

## Archivos

- **[01_ranking_inicial.md](./01_ranking_inicial.md)** - Visión general del seeding: cómo se calcula el rating inicial de cada equipo usando 4 componentes (LAN Wins, Bounty Offered, Bounty Collected, Opponent Network). Explica el sistema de bags (máximo 10 victorias por componente), el decay temporal, y cómo el tipo de partido afecta el ranking.

- **[02_lan_wins.md](./02_lan_wins.md)** - Componente que mide las victorias en eventos LAN presenciales. Solo el decay afecta este componente.

- **[03_bounty_offered.md](./03_bounty_offered.md)** - Componente que mide el éxito financiero histórico del equipo basado en cuánto dinero ha ganado en eventos.

- **[04_bounty_collected.md](./04_bounty_collected.md)** - Componente que mide la calidad de los rivales derrotados basado en sus ganancias. Usa el Bounty Offered del oponente, el decay, y el stakes modifier del evento.

- **[05_opponent_network.md](./05_opponent_network.md)** - Componente que mide la calidad de los rivales derrotados basado en cuántos equipos diferentes han derrotado esos rivales.

- **[06_head_to_head.md](./06_head_to_head.md)** - Ajuste posterior al seeding: cómo los head-to-head entre equipos modifican el rating basándose en el resultado de cada partido.
