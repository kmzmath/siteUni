"use client";

import * as React from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

import { TabsContent, TabsList, TabsTrigger } from "./components";
import { TabsComponent } from "./types";

const Tabs = (({ className, ...props }) => (
  <TabsPrimitive.Root
    data-slot="tabs"
    className={cn("flex flex-col gap-2", className)}
    {...props}
  />
)) as TabsComponent;

Tabs.Content = TabsContent;
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;

export default Tabs;
