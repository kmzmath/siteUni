import * as TabsPrimitive from "@radix-ui/react-tabs";

import { TabsContent, TabsList, TabsTrigger } from "./components";

export interface TabsComponent
  extends React.FC<React.ComponentProps<typeof TabsPrimitive.Root>> {
  Content: typeof TabsContent;
  List: typeof TabsList;
  Trigger: typeof TabsTrigger;
}
