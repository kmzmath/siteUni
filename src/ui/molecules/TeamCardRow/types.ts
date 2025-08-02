import { AdvancedScores } from "@/types";

export type TeamCardRowProps = {
  index: number;
  name: string;
  universityTag: string;
  points: string;
  imageUrl: string;
  matchesCount: number;
  advancedScores?: AdvancedScores;
  isNew: boolean;
  variation: number;
  scoreVariation: string;
};
