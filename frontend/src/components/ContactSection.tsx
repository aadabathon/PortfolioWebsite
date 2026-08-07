import { profile } from "../content/profile";
import { Container } from "./Container";
import { ResumeViewer } from "./ResumeViewer";

const CONTACT_LINKS = [
  {
    label: "Email",
    href: `mailto:${profile.links.email}`,
    value: profile.links.email,
    external: false,
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
    <section id="contact" className="scroll-mt-16 py-16 sm:py-20">
      <Container>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Contact
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          <ul className="space-y-5">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <div className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {link.label}
                </div>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="text-lg text-slate-800 underline underline-offset-2 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white"
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
          <ResumeViewer />
        </div>
      </Container>
    </section>
  );
}
