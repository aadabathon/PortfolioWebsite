export interface ProjectRepo {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  // Most projects are one repo, but some (e.g. firmware + a separate
  // ML/logging pipeline) are legitimately split across a few — list all
  // of them here rather than picking one arbitrarily.
  repos: ProjectRepo[];
  tags: string[];
  demoUrl?: string;
}
