import { Row, Text } from "@/ui/atoms";
import { HeaderNav } from "@/ui/molecules";

import { ThemeSwitch } from "./components";
import { NAV_ITEMS } from "./utils/constants";

const GlobalHeader: React.FC = () => {
  return (
    <header className="w-full mb-3 bg-background border-b-1 border-border px-2 sm:px-4 lg:px-8">
      <div className="flex items-center justify-between gap-2 max-w-[1200px] h-[60px] mx-auto">
        <Row className="items-center gap-8 h-full">
          <Text size="titleSmall" weight="bold">
            UniVLR
          </Text>

          <Row className="items-center gap-4 h-full">
            {NAV_ITEMS.map((item) => (
              <HeaderNav key={item.label} label={item.label} path={item.path} />
            ))}
          </Row>
        </Row>

        <ThemeSwitch />
      </div>
    </header>
  );
};

export default GlobalHeader;
