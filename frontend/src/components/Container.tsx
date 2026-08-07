import type { ReactNode } from "react";

// Single width/margin strategy reused by every section so the page reads as
// one consistent column on both landscape and tall/vertical monitors,
// instead of each section hardcoding its own max-width.
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
