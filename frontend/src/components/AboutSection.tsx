import { useState } from "react";
import { profile } from "../content/profile";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Skills } from "./Skills";

// Six paragraphs at full length is more than anyone reads on arrival, so the
// tail is collapsed by default. All of it stays in the DOM either way.
const VISIBLE_PARAGRAPHS = 2;

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded
    ? profile.bio
    : profile.bio.slice(0, VISIBLE_PARAGRAPHS);
  const hasMore = profile.bio.length > VISIBLE_PARAGRAPHS;

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <SectionHeading index="01">About</SectionHeading>
        <div className="mt-10 max-w-3xl space-y-5 text-[15px] leading-7 text-ink-muted">
          {shown.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-accent underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
        <Skills />
      </Container>
    </section>
  );
}
