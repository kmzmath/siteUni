"use client";

import { useMemo } from "react";

import { AgentsRowProps } from "./types";
import { orderAgentsByRole } from "./utils/functions";

const AgentsRow: React.FC<AgentsRowProps> = ({ agents, matchId, teamSlug }) => {
  const orderedAgents = useMemo(() => orderAgentsByRole(agents), [agents]);

  return (
    <>
      {orderedAgents.map((agent) => (
        <img
          key={`${teamSlug}-${matchId}-${agent}`}
          src={`/images/agents/${agent.toLowerCase()}.png`}
          alt={agent ?? ""}
          title={agent}
          width={20}
          height={20}
          className="object-contain w-[20px] h-[20px]"
        />
      ))}
    </>
  );
};

export default AgentsRow;
