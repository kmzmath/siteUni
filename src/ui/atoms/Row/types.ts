import { PropsWithChildren } from "react";

import { VariantProps } from "class-variance-authority";

import { Paddings } from "@/types";

import { rowStyles } from "./styles";

export type RowProps = PropsWithChildren<
  VariantProps<typeof rowStyles> & {
    className?: string;
    gap?: string;
  } & Paddings
>;
