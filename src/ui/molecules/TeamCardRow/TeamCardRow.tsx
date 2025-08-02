import { ChevronDown, ChevronUp } from "lucide-react";

import { Card, Row, Text } from "@/ui/atoms";

import { TeamCardRowProps } from "./types";
import { getTooltipScores } from "./utils/functions";

const TeamCardRow: React.FC<TeamCardRowProps> = ({
  index,
  name,
  universityTag,
  points,
  imageUrl,
  matchesCount,
  advancedScores,
  isNew,
  variation,
  scoreVariation,
}) => (
  <Card isClickable>
    <Row
      justifyContent="between"
      alignItems="center"
      fullWidth
      gap="4"
      px="2"
      py="1"
    >
      <Row alignItems="center" gap="2">
        <div className="w-3 py-0.25 bg-accent rounded-sm flex items-center justify-center sm:w-4">
          <Text size="bodySmall" weight="bold">
            {index}
          </Text>
        </div>

        <div className="hidden w-4 py-0.25 items-center justify-center sm:flex">
          {isNew ? (
            <Text size="bodyXXSmall" color="accent">
              NOVO
            </Text>
          ) : variation !== 0 ? (
            <Text
              size="bodySmall"
              weight="bold"
              color={variation > 0 ? "success" : "error"}
            >
              {variation > 0 ? "+" : ""}
              {variation}
            </Text>
          ) : (
            <Text size="bodySmall" weight="bold">
              -
            </Text>
          )}
        </div>

        <div className="w-4 h-4 flex items-center justify-center sm:w-6 sm:h-6">
          <img
            src={imageUrl}
            alt={name}
            width={48}
            height={48}
            className="object-contain w-4 h-4 sm:w-6 sm:h-6"
          />
        </div>

        <div>
          <Row alignItems="center" gap="1">
            <Text
              size="bodyLarge"
              className="text-nowrap max-[400px]:max-w-[100px] sm:max-w-[300px] overflow-hidden text-ellipsis"
            >
              {name}
            </Text>
            <Text
              size="bodySmall"
              color="gray"
              className="hidden text-nowrap md:block"
            >
              ({matchesCount} {matchesCount === 1 ? "partida" : "partidas"})
            </Text>
          </Row>
          <Text size="bodySmall" color="gray">
            {universityTag}
          </Text>
        </div>
      </Row>

      <Row alignItems="center" gap="1">
        {Number(scoreVariation) !== 0 && (
          <Row className="hidden sm:flex">
            {Number(scoreVariation) > 0 ? (
              <ChevronUp size={10} className="text-success" />
            ) : (
              <ChevronDown size={10} className="text-destructive" />
            )}

            <Text
              size="bodyXSmall"
              color={Number(scoreVariation) > 0 ? "success" : "error"}
            >
              {scoreVariation.replace("-", "")}
            </Text>
          </Row>
        )}

        <Text
          size="bodyLarge"
          align="right"
          className="min-w-[45px]"
          dataTooltipId="ranking-tooltip"
          dataTooltipHtml={getTooltipScores(advancedScores)}
        >
          {points}
        </Text>
      </Row>
    </Row>
  </Card>
);

export default TeamCardRow;
