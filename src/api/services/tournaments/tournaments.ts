import { BASE_URL } from "@/api/utils/constants";
import endpoints from "@/api/utils/endpoints";
import { RemoteTournament } from "@/types";

import { tournamentAdapter } from "./utils/adapters";

export const getTournaments = async () => {
  const res = await fetch(`${BASE_URL}${endpoints.tournaments}`, {
    next: {
      revalidate: 1,
    },
  });
  const data = (await res.json()) as RemoteTournament[];

  return data.map(tournamentAdapter);
};
