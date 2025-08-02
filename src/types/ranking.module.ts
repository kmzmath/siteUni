import { DateValue } from "./general.module";
import { Team } from "./teams.module";

export interface RemoteAdvancedScores {
  colley: number;
  massey: number;
  elo: number;
  elo_mov: number;
  trueskill: number;
  pagerank: number;
  bradley_terry: number;
  pca: number;
  sos: number;
  consistency: number;
  integrado: number;
}

export interface AdvancedScores {
  colley: number;
  massey: number;
  elo: number;
  elo_mov: number;
  trueskill: number;
  pagerank: number;
  bradley_terry: number;
  pca: number;
  sos: number;
  consistency: number;
  integrado: number;
}

export interface RemoteRankingPlacement {
  posicao: number;
  team_id: number;
  team: string;
  tag: string;
  university: string;
  nota_final: number;
  ci_lower: number;
  ci_upper: number;
  incerteza: number;
  games_count: number;
  variacao: number;
  variacao_nota: number;
  is_new: boolean;
  scores: RemoteAdvancedScores;
}

export interface RankingPlacement {
  ciLower: number;
  ciUpper: number;
  matchesCount: number;
  score: string;
  position: number;
  scores: AdvancedScores;
  scoreVariation: string;
  team: Team;
  isNew: boolean;
  variation: number;
}

export interface RemoteRanking {
  cached: boolean;
  last_update: string;
  limit?: number;
  total: number;
  ranking: RemoteRankingPlacement[];
}

export interface Ranking {
  lastUpdate: DateValue;
  placements: RankingPlacement[];
}

export interface RemoteSnapshot {
  id: number;
  created_at: string;
  total_teams: number;
  total_matches: number;
  metadata: {
    version: string;
    timestamp: string;
    algorithms_used: string[];
  };
  ranking: RemoteRankingPlacement[];
}

export interface Snapshot {
  id: number;
  createdAt: DateValue;
  totalTeams: number;
  totalMatches: number;
  metadata: {
    version: string;
    timestamp: string;
    algorithmsUsed: string[];
  };
  ranking: RankingPlacement[];
}
