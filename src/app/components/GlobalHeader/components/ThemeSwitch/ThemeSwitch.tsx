"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { withClientOnly } from "@/hocs";
import { cn } from "@/lib/utils";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleThemeChange = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  if (!currentTheme) return null;

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "inline-flex relative peer w-5 h-[1.3rem] shrink-0 rounded-full border border-border outline-none shadow-xs cursor-pointer bg-input focus-visible:border-ring focus-visible:ring-ring/50 transition-all duration-300 ease-in-out focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
      )}
      checked={currentTheme === "dark"}
      onCheckedChange={handleThemeChange}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "block absolute size-[1.1rem] rounded-full pointer-events-none ring-0 bg-primary-foreground transition-all duration-300 ease-in-out dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground data-[state=checked]:left-[calc(100%-1.1rem)] data-[state=unchecked]:left-0"
        )}
      >
        <Sun className="absolute top-0 left-0 translate-x-0.5 translate-y-0.5 h-[0.6rem] w-[0.6rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute top-0 left-0 translate-x-0.5 translate-y-0.5 h-[0.6rem] w-[0.6rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
};

export default withClientOnly(ThemeSwitch);
