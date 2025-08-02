import { RemoteTeam, Team } from "@/types";

import { stateAdapter } from "../../states/utils/adapters";

export const teamAdapter = (team: RemoteTeam): Team => {
  const {
    id,
    name,
    tag,
    slug,
    university,
    university_tag,
    instagram,
    twitch,
    estado_info,
    logo,
  } = team;

  return {
    id,
    name,
    imageUrl: logo,
    slug,
    university,
    tag,
    universityTag: university_tag,
    state: estado_info ? stateAdapter(estado_info) : undefined,
    instagram,
    twitch,
  };
};
