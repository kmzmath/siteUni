"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const TabsContent: React.FC<
  React.ComponentProps<typeof TabsPrimitive.Content>
> = ({ className, ...props }) => (
  <TabsPrimitive.Content
    data-slot="tabs-content"
    className={cn("flex-1 outline-none", className)}
    {...props}
  />
);

TabsContent.displayName = "TabsContent";

export default TabsContent;
