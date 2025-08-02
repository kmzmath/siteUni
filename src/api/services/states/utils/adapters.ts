import { RemoteState, State } from "@/types";

export const stateAdapter = (state: RemoteState): State => {
  const { id, nome, icone, regiao, sigla } = state;

  return { id, name: nome, icon: icone, region: regiao, abbreviation: sigla };
};
