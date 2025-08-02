import mainApi from "@/api";
import { Page } from "@/ui/atoms";
import { TeamHeader } from "@/ui/molecules";

import { TeamContent } from "./components";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ team: string }>;
}) => {
  const { team } = await params;
  const teamData = await mainApi.getTeamBySlug(team);

  return {
    title: `${teamData.name} | UniVLR`,
  };
};

export const generateStaticParams = async () => {
  const teams = await mainApi.getTeams();

  return teams.map((team) => ({
    id: team.id,
    team: team.slug,
  }));
};

const TeamsPage: React.FC<{
  params: Promise<{ id: string; team: string }>;
}> = async ({ params }) => {
  const { team } = await params;
  const teamData = await mainApi.getTeamBySlug(team);

  const players = await mainApi.getPlayers(teamData.id);
  const matches = await mainApi.getMatchesByTeamId(teamData.id.toString());

  const matchesWithVictory = matches.map((match) => ({
    ...match,
    isVictory: match.teamMatchInfoA.team.id === teamData.id,
  }));

  return (
    <Page className="flex flex-col gap-2">
      <TeamHeader
        name={teamData.name}
        tag={teamData.tag}
        imageUrl={teamData.imageUrl}
        universityTag={teamData.universityTag}
        university={teamData.university}
        state={teamData.state}
      />

      <TeamContent players={players} matchesWithVictory={matchesWithVictory} />
    </Page>
  );
};

export default TeamsPage;
