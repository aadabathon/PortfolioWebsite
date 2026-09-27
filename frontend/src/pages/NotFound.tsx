import { Link } from "react-router-dom";
import { Container } from "../components/Container";

// PLACEHOLDER COPY — swap in your own. The route and layout are the part
// that had to exist; the joke is yours to write.
export function NotFound() {
  return (
    <section className="grid-paper flex min-h-[60vh] items-center py-20">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Address failed to decode
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-7 text-ink-muted">
          Nothing is mapped at that path.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block font-mono text-xs uppercase tracking-[0.15em] text-ink-muted underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          <span aria-hidden="true">&larr;</span> Return to a valid address
        </Link>
      </Container>
    </section>
  );
}
