import mainApi from "@/api";
import { Page, Text, Tooltip } from "@/ui/atoms";
import { RankingPlacementsList } from "@/ui/organisms";

import { RankingDisclaimer } from "./components";

const Home: React.FC = async () => {
  const snapshots = await mainApi.getRankingSnapshots();

  return (
    <div className="min-h-screen px-2 font-[family-name:var(--font-geist-sans)] sm:px-4 lg:px-8">
      <Tooltip
        id="ranking-tooltip"
        place="left"
        delayShow={250}
        delayHide={250}
      />

      <Page>
        <div className="flex flex-col items-center justify-center py-4">
          <Text size="titleLarge" weight="bold" align="center">
            Ranking Universitário de Valorant
          </Text>
        </div>

        <RankingDisclaimer />

        <main>
          <RankingPlacementsList snapshots={snapshots} />
        </main>
      </Page>
    </div>
  );
};

export default Home;
