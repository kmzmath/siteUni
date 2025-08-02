import Link from "next/link";

import { Card, Text } from "@/ui/atoms";

import { PlayerCardProps } from "./types";

const PlayerCard: React.FC<PlayerCardProps> = ({ name, imageUrl }) => (
  <Link
    href={`https://tracker.gg/valorant/profile/riot/${encodeURIComponent(
      name
    )}`}
    target="_blank"
  >
    <Card className="w-[120px] relative group" isClickable>
      <div className="w-full h-[200px] relative overflow-hidden">
        <img
          src={imageUrl ?? "/images/user-silhouette.png"}
          alt={name}
          className="object-cover h-[200px] transition-transform duration-300 group-hover:scale-120"
        />
      </div>

      <div className="p-1.5">
        <Text
          size="bodyXSmall"
          color="gray"
          align="center"
          className="line-clamp-1 group-hover:text-primary transition-colors duration-300"
        >
          {name.split("#")[0]}
        </Text>
      </div>
    </Card>
  </Link>
);

export default PlayerCard;
