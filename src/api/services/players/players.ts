import { BASE_URL } from "@/api";
import endpoints from "@/api/utils/endpoints";
import { Player } from "@/types";

export const getPlayers = async (teamId: number) => {
  const res = await fetch(
    `${BASE_URL}${endpoints.players.replace(":teamId", teamId.toString())}`,
    {
      next: {
        revalidate: 60 * 60 * 2, // 2 hours
      },
    }
  );

  const data = await res.json();

  return data as Player[];
};
