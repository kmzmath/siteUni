import { PropsWithChildren } from "react";

export type CardProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
  isClickable?: boolean;
}>;
