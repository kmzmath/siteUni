import { cn } from "@/lib/utils";

import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  className,
  children,
  onClick,
  isClickable = !!onClick,
}) => (
  <div
    className={cn(
      "bg-card border border-border rounded-md",
      isClickable &&
        "hover:bg-card/80 transition-colors duration-300 cursor-pointer",
      className
    )}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Card;
