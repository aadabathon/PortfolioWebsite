import { profile } from "../content/profile";
import { Container } from "./Container";
import { ResumeViewer } from "./ResumeViewer";
import { SectionHeading } from "./SectionHeading";

// Entries without an href render as plain text.
const CONTACT_LINKS: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}[] = [
  {
    label: "Email",
    value: profile.links.email,
  },
  {
    label: "Phone Number (Text Preferred)",
    value: profile.links.phone,
  },
  {
    label: "GitHub",
    href: profile.links.github,
    value: profile.links.github.replace("https://", ""),
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    value: profile.links.linkedin.replace("https://", ""),
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <SectionHeading index="03">Contact</SectionHeading>
        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,18rem)_1fr]">
          <ul className="space-y-6">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                  {link.label}
                </div>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="mt-1 block break-words text-ink underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {link.value}
                  </a>
                ) : (
                  <p className="mt-1 break-words text-ink">{link.value}</p>
                )}
              </li>
            ))}
          </ul>
          <ResumeViewer />
        </div>
      </Container>
    </section>
  );
}
