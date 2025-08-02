import { Button, Text } from "@/ui/atoms";
import { Dialog } from "@/ui/molecules";

type Props = {
  openRatingDisclaimerModal: () => void;
  closeModal: () => void;
};

const RankingDisclaimerModal: React.FC<Props> = ({
  closeModal,
  openRatingDisclaimerModal,
}) => (
  <Dialog title="Importante" closeDialog={closeModal} className="w-[1200px]">
    <Text
      size="bodySmall"
      color="gray"
      align="center"
      mb="3"
      className="max-w-[1200px]"
    >
      Esse site tenta prever a força das equipes do cenário universitário de
      Valorant através de seus resultados nos campeonatos do cenário. Tudo não
      passa de uma tentativa de previsão feita por um algoritmo, e não
      necessariamente reflete a realidade da equipe. O algoritmo também não leva
      em consideração pontos importantes como quem foram os jogadores que
      jogaram as partidas, mapas, fases, etc...
      <br />
      <br />O site não possui nenhum objetivo em ofender ou elogiar nenhuma
      equipe, organização ou jogador. Todos os dados são obtidos através de
      cálculos e algoritmos e não possuem nenhum viés de opinião. Você pode
      conferir as métricas{" "}
      <span
        className="text-sky-400 cursor-pointer hover:underline"
        onClick={openRatingDisclaimerModal}
      >
        clicando aqui.
      </span>
    </Text>

    <Button onClick={closeModal}>Entendi</Button>
  </Dialog>
);

export default RankingDisclaimerModal;
