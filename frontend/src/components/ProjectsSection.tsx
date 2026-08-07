import { Container } from "./Container";
import { ProjectsPlaceholder } from "./ProjectsPlaceholder";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/40 sm:py-20"
    >
      <Container>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Projects
        </h2>
        <ProjectsPlaceholder />
      </Container>
    </section>
  );
}
