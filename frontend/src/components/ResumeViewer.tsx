import { useState } from "react";
import { profile } from "../content/profile";

const VARIANTS = [
  { id: "hardware", label: "Hardware", href: profile.links.resume },
  { id: "software", label: "Software", href: profile.links.resumeSoftware },
] as const;

type VariantId = (typeof VARIANTS)[number]["id"];

const LINK_CLASS =
  "font-mono text-xs uppercase tracking-[0.15em] text-ink-muted underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

export function ResumeViewer() {
  const [variantId, setVariantId] = useState<VariantId>("hardware");
  const variant = VARIANTS.find((v) => v.id === variantId) ?? VARIANTS[0];

  const actions = [
    { label: "Transcripts", href: "/transcript.pdf", download: false },
    { label: "Open", href: variant.href, download: false },
    { label: "Download", href: variant.href, download: true },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
            Resume
          </h3>
          <div
            role="group"
            aria-label="Resume version"
            className="inline-flex border border-rule"
          >
            {VARIANTS.map((v) => {
              const active = v.id === variantId;
              return (
                <button
                  key={v.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setVariantId(v.id)}
                  className={`px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
                    active
                      ? "bg-surface text-accent"
                      : "text-ink-faint hover:text-ink"
                  }`}
                >
                  {v.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.download ? undefined : "_blank"}
              rel={action.download ? undefined : "noreferrer"}
              download={action.download || undefined}
              className={LINK_CLASS}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>

      {/* Hidden below md: a 70vh PDF embed is unusable on a phone and
          unreliable in iOS Safari. Small screens get the links above. */}
      <iframe
        src={variant.href}
        title={`${variant.label} resume`}
        className="mt-4 hidden h-[70vh] min-h-[500px] w-full border border-rule md:block"
      >
        <p>
          Your browser can't display embedded PDFs.{" "}
          <a href={variant.href} className="underline underline-offset-2">
            Download the resume instead
          </a>
          .
        </p>
      </iframe>
    </div>
  );
}
