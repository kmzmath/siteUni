"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const TabsTrigger: React.FC<
  React.ComponentProps<typeof TabsPrimitive.Trigger>
> = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    data-slot="tabs-trigger"
    className={cn(
      "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-0.5 rounded-sm border border-transparent px-1 py-0.5 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-2 cursor-pointer",
      className
    )}
    {...props}
  />
);

TabsTrigger.displayName = "TabsTrigger";

export default TabsTrigger;
