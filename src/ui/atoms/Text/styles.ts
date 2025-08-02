import { cva } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    size: {
      titleLarge: "text-4xl sm:text-5xl",
      titleMedium: "text-2xl sm:text-3xl",
      titleSmall: "text-xl sm:text-2xl",
      bodyLarge: "text-base sm:text-lg",
      bodyMedium: "text-sm sm:text-base",
      bodySmall: "text-xs sm:text-sm",
      bodyXSmall: "text-xs sm:text-xs",
      bodyXXSmall: "text-tiny sm:text-tiny",
    },
    weight: {
      normal: "",
      medium: "font-medium",
      bold: "font-bold",
    },
    color: {
      default: "text-primary",
      gray: "text-muted-foreground",
      error: "text-destructive",
      success: "text-success",
      accent: "text-accent-foreground",
      white: "text-white",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "bodyMedium",
    weight: "normal",
    color: "default",
  },
});
