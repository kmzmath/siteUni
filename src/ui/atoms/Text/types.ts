import { PropsWithChildren } from "react";

import { VariantProps } from "class-variance-authority";

import { Margins } from "@/types";

import { textVariants } from "./styles";

export type TextProps = PropsWithChildren<
  VariantProps<typeof textVariants> & {
    className?: string;
    onClick?: () => void;
    title?: string;
    dataTooltipId?: string;
    dataTooltipContent?: string;
    dataTooltipHtml?: string;
  } & Margins
>;
