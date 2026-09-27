import { projects } from "../content/projects";
import { Container } from "./Container";
import { ProjectCard } from "./ProjectCard";
import { ProjectsPlaceholder } from "./ProjectsPlaceholder";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="grid-paper scroll-mt-20 border-y border-rule py-20 sm:py-24"
    >
      <Container>
        <SectionHeading index="02">Projects</SectionHeading>
        {projects.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <ProjectsPlaceholder />
        )}
      </Container>
    </section>
  );
}
