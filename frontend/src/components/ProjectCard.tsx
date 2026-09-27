import { useState } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../types/project";

// Drawn instead of an <img> when a project has no screenshot yet, or when the
// file 404s. A dot grid keeps the card's visual weight instead of leaving a
// flat hole where the image should be.
function ImageFallback({ title }: { title: string }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-[radial-gradient(var(--rule-strong)_1px,transparent_1px)] bg-[length:10px_10px]"
      role="img"
      aria-label={`${title} — no screenshot yet`}
    >
      <span className="bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
        Screenshot coming
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(project.imageUrl) && !imageFailed;

  return (
    <article className="corner-ticks group flex flex-col border border-rule bg-surface transition-colors hover:border-rule-strong">
      {/* Same dot grid sits behind contained screenshots, so the letterbox
          bars read as matting rather than dead space. */}
      <div className="aspect-video border-b border-rule bg-[radial-gradient(var(--grid)_1px,transparent_1px)] bg-[length:10px_10px]">
        {showImage ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-contain"
          />
        ) : (
          <ImageFallback title={project.title} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-snug text-ink">
            <Link
              to={`/projects/${project.slug}`}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>
          <div className="flex shrink-0 items-center gap-3">
            {project.repos.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                title={repo.label}
                aria-label={`${project.title} on GitHub: ${repo.label}`}
                className="text-ink-faint transition-colors hover:text-accent"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.535-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {project.status === "in-progress" && (
          <span className="mt-2 inline-flex w-fit items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            <span className="h-1 w-1 rounded-full bg-accent" />
            In progress
          </span>
        )}

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-muted">
          {project.description}
        </p>

        {project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <Link
          to={`/projects/${project.slug}`}
          className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-accent"
          aria-label={`Read more about ${project.title}`}
        >
          Read more <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
