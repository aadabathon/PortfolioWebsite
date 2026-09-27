import { profile } from "../content/profile";

const ACTIONS = [
  { label: "Transcripts", href: "/transcript.pdf", download: false },
  { label: "Open", href: profile.links.resume, download: false },
  { label: "Download", href: profile.links.resume, download: true },
];

export function ResumeViewer() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          Resume
        </h3>
        <div className="flex gap-5">
          {ACTIONS.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.download ? undefined : "_blank"}
              rel={action.download ? undefined : "noreferrer"}
              download={action.download || undefined}
              className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>

      {/* Hidden below md: a 70vh PDF embed is unusable on a phone and
          unreliable in iOS Safari. Small screens get the links above. */}
      <iframe
        src={profile.links.resume}
        title="Resume"
        className="mt-4 hidden h-[70vh] min-h-[500px] w-full border border-rule md:block"
      >
        <p>
          Your browser can't display embedded PDFs.{" "}
          <a href={profile.links.resume} className="underline underline-offset-2">
            Download the resume instead
          </a>
          .
        </p>
      </iframe>
    </div>
  );
}
