import mainApi from "@/api";
import { Page, Text } from "@/ui/atoms";
import { MatchRow } from "@/ui/molecules";

const MatchesPage: React.FC = async () => {
  const matches = await mainApi.getMatches();

  return (
    <Page className="flex flex-col gap-4 py-4">
      <div className="flex flex-col gap-1">
        <Text size="titleLarge" weight="bold" align="center">
          Partidas
        </Text>

        <Text size="bodySmall" color="gray" align="center">
          Últimas 20 partidas registradas.
        </Text>
      </div>

      <div className="flex flex-col gap-1">
        {matches.map((match) => (
          <MatchRow
            key={match.id}
            id={match.id}
            map={match.map}
            round={match.round}
            date={match.date}
            teamMatchInfoA={match.teamMatchInfoA}
            teamMatchInfoB={match.teamMatchInfoB}
            tournament={match.tournament}
            isVictory
          />
        ))}
      </div>
    </Page>
  );
};

export default MatchesPage;
