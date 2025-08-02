import { BASE_URL } from "@/api";
import endpoints from "@/api/utils/endpoints";
import { RemoteRanking, RemoteSnapshot } from "@/types";

import { getTeams } from "../teams";

import { rankingAdapter, snapshotAdapter } from "./utils/adapters";

export const getRanking = async () => {
  const res = await fetch(`${BASE_URL}${endpoints.ranking}`, {
    next: {
      revalidate: 60 * 60 * 2, // 2 hours
    },
  });
  const data = (await res.json()) as RemoteRanking;

  const teams = await getTeams();

  return rankingAdapter(data, teams);
};

export const getRankingSnapshots = async () => {
  const res = await fetch(`${BASE_URL}${endpoints.rankingSnapshots}`, {
    next: {
      revalidate: 60 * 60 * 12, // 12 hours
    },
  });
  const { data } = (await res.json()) as { data: RemoteSnapshot[] };

  const teams = await getTeams();

  return data.map((snapshot) => snapshotAdapter(snapshot, teams));
};
