import { profile } from "../content/profile";
import { Container } from "./Container";

const QUICK_LINKS = [
  { label: "Email", href: `mailto:${profile.links.email}`, external: false },
  { label: "GitHub", href: profile.links.github, external: true },
  { label: "LinkedIn", href: profile.links.linkedin, external: true },
  { label: "Resume", href: profile.links.resume, external: true },
];

// The landing moment. This used to live inside AboutSection, which meant the
// first thing on the page was a small "ABOUT ME" label followed by six
// paragraphs of bio — no point of arrival at all.
export function Hero() {
  return (
    <section className="grid-paper border-b border-rule">
      <Container className="flex flex-col-reverse items-start gap-10 py-20 sm:flex-row sm:items-center sm:justify-between sm:py-28">
        <div className="flex-1">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {profile.location}
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed text-ink-muted">
            {profile.role}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="corner-ticks shrink-0 p-1.5">
          <img
            src="/images/profile/websitepic1.jpg"
            alt={profile.name}
            className="h-48 w-48 object-cover sm:h-60 sm:w-60"
          />
        </div>
      </Container>
    </section>
  );
}
