import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const DRAWER_LINKS = [
  { to: "/", label: "Portfolio" },
  { to: "/blog", label: "Blog Posts" },
];

export function NavDrawer() {
  const [open, setOpen] = useState(false);

  // Close on Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open site navigation"
        aria-expanded={open}
        aria-controls="site-nav-drawer"
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 text-ink-muted transition-colors hover:text-accent"
      >
        <span className="h-px w-5 bg-current" />
        <span className="h-px w-5 bg-current" />
        <span className="h-px w-5 bg-current" />
      </button>

      {/* `inert` while closed is load-bearing: opacity-0 + pointer-events-none
          hides the drawer visually but leaves its links in the tab order. */}
      <div
        id="site-nav-drawer"
        className={`fixed inset-0 z-20 transition-opacity ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        inert={!open}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />
        <nav
          aria-label="Site sections"
          className={`absolute inset-y-0 left-0 flex w-full max-w-xs transform flex-col gap-1 border-r border-rule bg-surface p-6 transition-transform duration-200 sm:w-80 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close site navigation"
            className="mb-8 self-start font-mono text-xs uppercase tracking-[0.15em] text-ink-faint transition-colors hover:text-accent"
          >
            Close
          </button>
          {DRAWER_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2 text-lg transition-colors ${
                  isActive
                    ? "font-semibold text-accent"
                    : "text-ink-muted hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
