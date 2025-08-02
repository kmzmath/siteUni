import { cva } from "class-variance-authority";

const baseStyle = "flex flex-row";

export const rowStyles = cva(baseStyle, {
  variants: {
    justifyContent: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    alignItems: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    justifyContent: "start",
    alignItems: "center",
  },
});
