"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const TabsList: React.FC<React.ComponentProps<typeof TabsPrimitive.List>> = ({
  className,
  ...props
}) => (
  <TabsPrimitive.List
    data-slot="tabs-list"
    className={cn(
      "bg-card text-muted-foreground inline-flex h-6 w-fit items-center justify-center rounded-md p-[3px]",
      className
    )}
    {...props}
  />
);

TabsList.displayName = "TabsList";

export default TabsList;
