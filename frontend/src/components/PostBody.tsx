import Markdown, { type Components } from "react-markdown";

// Maps each Markdown element onto the site's own type styles, so posts read
// like the rest of the site instead of pulling in a generic prose theme.
const COMPONENTS: Components = {
  h2: ({ children }) => (
    <h2 className="mt-14 text-2xl font-bold tracking-tight text-ink">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 text-lg font-semibold text-ink">{children}</h3>
  ),
  p: ({ children }) => <p className="mt-5">{children}</p>,
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-ink-faint [&_ul]:mt-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-5 marker:text-ink-faint">
      {children}
    </ol>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-ink">{children}</strong>
  ),
  a: ({ href = "", children }) => {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="text-ink underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
      >
        {children}
      </a>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="mt-5 border-l-2 border-accent pl-4 italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="mt-12 border-rule" />,
  // Inline code gets a chip; code inside a fenced block is reset by the
  // `pre` styles below, since react-markdown renders both as <code>.
  code: ({ children }) => (
    <code className="border border-rule bg-surface px-1 py-0.5 font-mono text-[0.85em] text-ink">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mt-6 overflow-x-auto border border-rule bg-surface p-4 font-mono text-xs leading-6 text-ink [&>code]:border-0 [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[1em]">
      {children}
    </pre>
  ),
};

export function PostBody({ markdown }: { markdown: string }) {
  return (
    <div className="max-w-[68ch] text-base leading-8 text-ink-muted">
      <Markdown components={COMPONENTS}>{markdown}</Markdown>
    </div>
  );
}
