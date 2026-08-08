import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const DRAWER_LINKS = [
  { to: "/", label: "Portfolio" },
  { to: "/blog", label: "Blog Posts" },
  { to: "/quant", label: "Quant Tools" },
  { to: "/ml", label: "ML Tools" },
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
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <span className="h-0.5 w-5 bg-slate-700 dark:bg-slate-300" />
        <span className="h-0.5 w-5 bg-slate-700 dark:bg-slate-300" />
        <span className="h-0.5 w-5 bg-slate-700 dark:bg-slate-300" />
      </button>

      <div
        className={`fixed inset-0 z-20 transition-opacity ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />
        <nav
          aria-label="Site sections"
          className={`absolute inset-y-0 left-0 flex w-full max-w-xs transform flex-col gap-1 bg-white p-6 shadow-lg transition-transform duration-200 dark:bg-slate-950 sm:w-80 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close site navigation"
            className="mb-6 self-start text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
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
                `rounded px-3 py-2 text-lg ${
                  isActive
                    ? "font-semibold text-slate-900 dark:text-slate-100"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
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
