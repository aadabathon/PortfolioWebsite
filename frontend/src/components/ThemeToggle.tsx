import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* localStorage can throw in private mode; fall through to the OS. */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* Not persisting is fine; the choice still applies for this visit. */
    }
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="flex h-9 w-9 items-center justify-center text-ink-faint transition-colors hover:text-accent"
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-12.5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1zm0 18a1 1 0 0 1-1-1V20a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1zM3.5 13a1 1 0 0 1 0-2H5a1 1 0 1 1 0 2H3.5zm15.5 0a1 1 0 0 1 0-2h1.5a1 1 0 1 1 0 2H19zM5.99 7.4a1 1 0 0 1-.7-1.71l1.06-1.06a1 1 0 0 1 1.42 1.42L6.7 7.11a1 1 0 0 1-.71.29zm11 11a1 1 0 0 1-.7-1.71l1.06-1.06a1 1 0 0 1 1.41 1.41l-1.06 1.07a1 1 0 0 1-.71.29zm-9.94 0a1 1 0 0 1-.71-.29l-1.06-1.07a1 1 0 0 1 1.42-1.41l1.06 1.06a1 1 0 0 1-.71 1.71zm11-11a1 1 0 0 1-.71-.29l-1.06-1.06a1 1 0 1 1 1.41-1.42l1.07 1.06a1 1 0 0 1-.71 1.71z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12.3 22a10 10 0 0 1-.9-19.96 1 1 0 0 1 1 1.51 8 8 0 0 0 10.05 11.4 1 1 0 0 1 1.32 1.32A10 10 0 0 1 12.3 22z" />
        </svg>
      )}
    </button>
  );
}
