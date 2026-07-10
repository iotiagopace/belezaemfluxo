import type { ReactNode } from "react";

export default function ShinyText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`shiny-text inline-block ${className}`}>{children}</span>;
}
