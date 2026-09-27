export interface ProjectRepo {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  // Optional: a project can be worth listing before there's a screenshot
  // worth showing. ProjectCard draws a placeholder panel when this is
  // missing, and falls back to the same panel if the image fails to load.
  imageUrl?: string;
  // Most projects are one repo, but some (e.g. firmware + a separate
  // ML/logging pipeline) are legitimately split across a few — list all
  // of them here rather than picking one arbitrarily.
  repos: ProjectRepo[];
  tags: string[];
  demoUrl?: string;
  // Marks work that's still active, so the card can say so instead of
  // looking like a finished project that's missing its screenshot.
  status?: "in-progress";
}
