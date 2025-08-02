import Image from "next/image";

import { Row, Text } from "@/ui/atoms";

import { TeamHeaderProps } from "./types";

const TeamHeader: React.FC<TeamHeaderProps> = ({
  name,
  tag,
  imageUrl,
  universityTag,
  university,
  state,
}) => (
  <div className="flex flex-col rounded-md bg-card">
    <div className="w-full h-[200px] relative overflow-hidden rounded-t-md bg-card border-t border-x border-border">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm bg-card"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "70%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </div>

    <Row className="px-3 z-1 gap-3 border border-border rounded-b-md">
      <div className="flex items-center justify-center mt-[-100px]">
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="min-w-[200px] min-h-[200px] object-contain"
        />
      </div>

      <div className="flex flex-col gap-1 py-3">
        <Row className="items-center">
          <Text size="titleMedium" weight="bold" className="whitespace-pre">
            {name}{" "}
          </Text>

          <Text size="titleMedium" color="gray">
            | {tag}
          </Text>
        </Row>

        <div className="flex flex-col">
          <Text size="bodyMedium">
            {universityTag} - {university}
          </Text>

          {state && (
            <Row alignItems="center" gap="1">
              <img src={state.icon} alt={state.name} width={20} height={20} />

              <Text size="bodyMedium">{state.name}</Text>
            </Row>
          )}
        </div>
      </div>
    </Row>
  </div>
);

export default TeamHeader;
