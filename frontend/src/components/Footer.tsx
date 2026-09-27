import { profile } from "../content/profile";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-rule py-8">
      <Container className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-ink-faint">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React, Tailwind, and Vite — on Cloudflare Workers</span>
      </Container>
    </footer>
  );
}
