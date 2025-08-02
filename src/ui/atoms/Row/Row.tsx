import { cn, getPaddings } from "@/lib/utils";

import { rowStyles } from "./styles";
import { RowProps } from "./types";

const Row: React.FC<RowProps> = ({
  children,
  className,
  gap,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  ...props
}) => (
  <div
    className={cn(
      rowStyles({ className, ...props }),
      gap && `gap-${gap}`,
      getPaddings({ p, px, py, pt, pr, pb, pl })
    )}
  >
    {children}
  </div>
);

export default Row;
