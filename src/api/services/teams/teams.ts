import { BASE_URL } from "@/api";
import endpoints from "@/api/utils/endpoints";
import { RemoteTeam } from "@/types";

import { teamAdapter } from "./utils/adapters";

export const getTeams = async () => {
  const res = await fetch(`${BASE_URL}${endpoints.teams}`, {
    next: {
      revalidate: 60 * 60 * 2, // 2 hours
    },
  });
  const data = (await res.json()) as RemoteTeam[];

  return data.map(teamAdapter);
};

export const getTeamBySlug = async (slug: string) => {
  const res = await fetch(
    `${BASE_URL}${endpoints.teamBySlug.replace(":slug", slug)}`,
    {
      next: {
        revalidate: 60 * 60 * 2, // 2 hours
      },
    }
  );
  const data = (await res.json()) as RemoteTeam;

  return teamAdapter(data);
};

export const getTeamById = async (id: string) => {
  const res = await fetch(
    `${BASE_URL}${endpoints.teamById.replace(":teamId", id)}`,
    {
      next: {
        revalidate: 60 * 60 * 2, // 2 hours
      },
    }
  );
  const data = (await res.json()) as RemoteTeam;

  return teamAdapter(data);
};
