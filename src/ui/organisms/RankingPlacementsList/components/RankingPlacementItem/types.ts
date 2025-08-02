import { AdvancedScores, Team } from "@/types";

export type RankingPlacementItemProps = {
  index: number;
  points: string;
  matchesCount: number;
  team: Team;
  scores: AdvancedScores;
  isNew: boolean;
  variation: number;
  scoreVariation: string;
};
