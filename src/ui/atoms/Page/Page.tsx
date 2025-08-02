import { PropsWithChildren } from "react";

const Page: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => <div className={`max-w-[1200px] mx-auto ${className}`}>{children}</div>;

export default Page;
