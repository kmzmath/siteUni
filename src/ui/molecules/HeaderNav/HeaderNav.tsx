"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Text } from "@/ui/atoms";

import { HeaderNavProps } from "./types";

const HeaderNav: React.FC<HeaderNavProps> = ({ label, path }) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link href={path} replace className="h-full">
      <div
        className={`flex items-center gap-1 h-full relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px]  after:transition-opacity after:duration-300 after:opacity-0 hover:after:opacity-100 ${
          isActive
            ? "after:opacity-100 after:bg-primary"
            : "after:opacity-0 after:bg-transparent"
        }`}
      >
        <Text size="bodySmall">{label}</Text>
      </div>
    </Link>
  );
};

export default HeaderNav;
