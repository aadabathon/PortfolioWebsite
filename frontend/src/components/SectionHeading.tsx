import type { ReactNode } from "react";

// Drawing-sheet style heading: a sheet number, a tracked mono label, and a
// hairline rule running out to the margin.
export function SectionHeading({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
        {children}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 bg-rule" />
    </div>
  );
}
