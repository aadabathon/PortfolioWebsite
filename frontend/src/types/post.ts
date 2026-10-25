export interface Post {
  // From the file name: content/blog/quanthub.md is /blog/quanthub.
  slug: string;
  title: string;
  // YYYY-MM-DD, as written in the frontmatter.
  date: string;
  summary: string;
  tags: string[];
  // The Markdown after the frontmatter. The title is rendered by the page,
  // so the body shouldn't repeat it as a "# heading".
  body: string;
  readingMinutes: number;
}
