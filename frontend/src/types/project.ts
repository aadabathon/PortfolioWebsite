export interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  tags: string[];
  demoUrl?: string;
}
