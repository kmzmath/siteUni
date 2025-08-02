import { AdvancedScores } from "@/types";

export const getTooltipScores = (scores?: AdvancedScores) => {
  if (!scores) return "";

  return Object.entries(scores)
    .map(([key, value]) => `${key}: ${value}`)
    .join("<br />");
};
