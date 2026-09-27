import { Link, useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { projects } from "../content/projects";
import { NotFound } from "./NotFound";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);

  // An unknown slug is a genuine 404, not an empty project page.
  if (!project) return <NotFound />;

  return (
    <article className="py-16 sm:py-20">
      <Container>
        <Link
          to="/#projects"
          className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-accent"
        >
          <span aria-hidden="true">&larr;</span> All projects
        </Link>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {project.title}
        </h1>

        {project.status === "in-progress" && (
          <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            <span className="h-1 w-1 rounded-full bg-accent" />
            In progress
          </span>
        )}

        {project.tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
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

        {project.imageUrl && (
          <div className="corner-ticks mt-10 border border-rule bg-[radial-gradient(var(--grid)_1px,transparent_1px)] bg-[length:10px_10px]">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="max-h-[60vh] w-full object-contain"
            />
          </div>
        )}

        <div className="mt-10 max-w-3xl text-[15px] leading-7 text-ink-muted">
          {project.description}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-6">
          {project.repos.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {repo.label}
            </a>
          ))}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Write-up / Demo
            </a>
          )}
        </div>
      </Container>
    </article>
  );
}
