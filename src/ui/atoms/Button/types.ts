import { VariantProps } from "class-variance-authority";

import { buttonVariants } from "./styles";

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
