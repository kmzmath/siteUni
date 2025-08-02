import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import { buttonVariants } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default Button;
