import { createDateValue } from "@/api/utils/functions";
import {
  AdvancedScores,
  Ranking,
  RankingPlacement,
  RemoteAdvancedScores,
  RemoteRanking,
  RemoteRankingPlacement,
  RemoteSnapshot,
  Snapshot,
  Team,
} from "@/types";

export const scoresAdapter = (scores: RemoteAdvancedScores): AdvancedScores => {
  const {
    bradley_terry = 0,
    colley = 0,
    elo = 0,
    elo_mov = 0,
    massey = 0,
    pagerank = 0,
    pca = 0,
    sos = 0,
    trueskill = 0,
    consistency = 0,
    integrado = 0,
  } = scores;

  return {
    bradley_terry: Number(bradley_terry?.toFixed(4)),
    colley: Number(colley?.toFixed(4)),
    elo: Number(elo?.toFixed(4)),
    elo_mov: Number(elo_mov?.toFixed(4)),
    massey: Number(massey?.toFixed(4)),
    pagerank: Number(pagerank?.toFixed(4)),
    pca: Number(pca?.toFixed(4)),
    sos: Number(sos?.toFixed(4)),
    trueskill: Number(trueskill?.toFixed(4)),
    consistency: Number(consistency?.toFixed(4)),
    integrado: Number(integrado?.toFixed(4)),
  };
};

export const placementAdapter = (
  placement: RemoteRankingPlacement,
  teams: Team[]
): RankingPlacement => {
  const {
    ci_lower,
    ci_upper,
    games_count,
    nota_final,
    posicao,
    scores,
    team_id,
    is_new,
    variacao,
    variacao_nota,
  } = placement;

  return {
    ciLower: ci_lower,
    ciUpper: ci_upper,
    matchesCount: games_count,
    score: Number(nota_final * 10).toFixed(0),
    position: posicao,
    scores: scoresAdapter(scores),
    team: teams.find((t) => t.id === team_id)!,
    isNew: is_new,
    variation: variacao,
    scoreVariation: Number(variacao_nota * 10).toFixed(0),
  };
};

export const rankingAdapter = (
  ranking: RemoteRanking,
  teams: Team[]
): Ranking => {
  const { last_update, ranking: placements } = ranking;

  return {
    lastUpdate: createDateValue(`${last_update}`, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "America/Sao_Paulo",
    }),
    placements: placements.map((placement) =>
      placementAdapter(placement, teams)
    ),
  };
};

export const snapshotAdapter = (
  snapshot: RemoteSnapshot,
  teams: Team[]
): Snapshot => {
  const { id, created_at, total_teams, total_matches, metadata, ranking } =
    snapshot;

  return {
    id,
    createdAt: createDateValue(`${created_at}`, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "America/Sao_Paulo",
    }),
    totalTeams: total_teams,
    totalMatches: total_matches,
    metadata: {
      version: metadata.version,
      timestamp: metadata.timestamp,
      algorithmsUsed: metadata.algorithms_used,
    },
    ranking: ranking.map((placement) => placementAdapter(placement, teams)),
  };
};
