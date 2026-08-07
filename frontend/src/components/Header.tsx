import { profile } from "../content/profile";
import { Container } from "./Container";

const NAV_LINKS = [
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <Container className="flex items-center justify-between py-4">
        <span className="font-semibold text-slate-900 dark:text-slate-100">
          {profile.name}
        </span>
        <nav className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 dark:hover:text-slate-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
