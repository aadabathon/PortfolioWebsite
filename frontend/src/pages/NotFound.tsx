import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "../components/Container";

export function NotFound() {
  const { pathname } = useLocation();
  // Keep the layout intact if the GIF is ever missing instead of showing a
  // broken-image icon next to the punchline.
  const [gifFailed, setGifFailed] = useState(false);

  return (
    <section className="grid-paper flex min-h-[60vh] items-center py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Error 404 &middot; Collision detected
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              You ran face-first into nothing.
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-ink-muted">
              The page you were going for doesn&rsquo;t exist. Patrick ran the
              same route, and the figure shows how that went.
            </p>

            <pre className="mt-8 max-w-md overflow-x-auto border border-rule bg-surface px-4 py-3 font-mono text-xs leading-6 text-ink-muted">
              <span className="text-ink-faint">$</span> GET{" "}
              <span className="text-ink">{pathname}</span>
              {"\n"}
              <span className="text-accent">FAULT</span> no route mapped at
              this address
              {"\n"}
              <span className="text-accent">FAULT</span> obstacle avoidance
              disabled
              {"\n"}
              <span className="text-ink-faint">hint:</span> mountains are
              load-bearing
            </pre>

            <Link
              to="/"
              className="mt-8 inline-block font-mono text-xs uppercase tracking-[0.15em] text-ink-muted underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              <span aria-hidden="true">&larr;</span> Back away slowly
            </Link>
          </div>

          {!gifFailed && (
            <figure className="w-full max-w-sm justify-self-center lg:justify-self-end">
              <div className="border border-rule-strong bg-surface p-2">
                <img
                  src="/images/404/patrick-mountain.gif"
                  alt="Patrick Star running at full speed straight into a mountain, on loop"
                  width={320}
                  height={240}
                  className="block h-auto w-full"
                  onError={() => setGifFailed(true)}
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                Fig. 404 &mdash; Pathfinding, field test
              </figcaption>
            </figure>
          )}
        </div>
      </Container>
    </section>
  );
}
