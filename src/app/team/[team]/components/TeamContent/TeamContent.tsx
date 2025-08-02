"use client";

import { Match, Player } from "@/types";
import { Row, Tabs } from "@/ui/atoms";
import { MatchRow, PlayerCard } from "@/ui/molecules";

import { TEAM_TABS } from "../../utils/constants";

type Props = {
  players: Player[];
  matchesWithVictory: (Match & { isVictory: boolean })[];
};

const TeamContent: React.FC<Props> = ({ players, matchesWithVictory }) => (
  <Tabs defaultValue="players">
    <Tabs.List>
      {TEAM_TABS.map((tab) => (
        <Tabs.Trigger key={tab.value} value={tab.value}>
          {tab.label}
        </Tabs.Trigger>
      ))}
    </Tabs.List>

    <Tabs.Content value="players">
      <Row gap="1">
        {players.map((player) => (
          <PlayerCard key={player.id} name={player.nick} />
        ))}
      </Row>
    </Tabs.Content>

    <Tabs.Content value="matches">
      <ul className="flex flex-col gap-1">
        {matchesWithVictory.map((match) => (
          <MatchRow
            key={match.id}
            id={match.id}
            date={match.date}
            round={match.round}
            tournament={match.tournament}
            map={match.map}
            teamMatchInfoA={match.teamMatchInfoA}
            teamMatchInfoB={match.teamMatchInfoB}
            isVictory={match.isVictory}
          />
        ))}
      </ul>
    </Tabs.Content>
  </Tabs>
);

export default TeamContent;
