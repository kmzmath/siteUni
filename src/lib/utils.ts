import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Margins, Paddings } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPaddings = (paddings: Paddings) =>
  Object.entries(paddings)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}-${value}`)
    .join(" ");

export const getMargins = (margins: Margins) =>
  Object.entries(margins)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}-${value}`)
    .join(" ");
