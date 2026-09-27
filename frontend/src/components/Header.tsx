import { Link } from "react-router-dom";
import { profile } from "../content/profile";
import { Container } from "./Container";
import { NavDrawer } from "./NavDrawer";
import { ThemeToggle } from "./ThemeToggle";

// Absolute paths, not bare "#about" fragments: these used to be dead links on
// every route except "/" because the target sections only exist on the home
// page. Routing to "/#about" works from anywhere — Layout does the scrolling.
const SECTION_LINKS = [
  { to: "/#about", label: "About" },
  { to: "/#projects", label: "Projects" },
  { to: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/85 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <NavDrawer />
          <Link
            to="/"
            className="font-semibold tracking-tight text-ink transition-colors hover:text-accent"
          >
            {profile.name}
          </Link>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="flex gap-4 sm:gap-6">
            {SECTION_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
