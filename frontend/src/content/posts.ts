import type { Post } from "../types/post";

// Every Markdown file in ./blog/ is a post. Vite inlines them at build time,
// so adding a post is just adding a file: no list to update here.
//
// Each file starts with a small frontmatter block:
//
//   ---
//   title: "Post title"
//   date: 2026-10-24
//   summary: "One or two sentences for the card on /blog."
//   tags: [quanthub, markets]
//   ---
//
// Only that flat `key: value` shape is supported, which is all a post needs.
// It isn't full YAML, so a real YAML library would be overkill here.
const files = import.meta.glob<string>("./blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const WORDS_PER_MINUTE = 230;

function parseValue(raw: string): string | string[] {
  const value = raw.trim();
  if (value.startsWith("[") && value.endsWith("]")) {
    return value
      .slice(1, -1)
      .split(",")
      .map((item) => unquote(item.trim()))
      .filter(Boolean);
  }
  return unquote(value);
}

function unquote(value: string): string {
  const quoted = /^(["'])(.*)\1$/.exec(value);
  return quoted ? quoted[2] : value;
}

function parsePost(path: string, source: string): Post | null {
  const slug = path.replace(/^.*\//, "").replace(/\.md$/, "");
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(source);
  if (!match) {
    console.error(`Blog post ${path} has no frontmatter; skipping it.`);
    return null;
  }

  const fields: Record<string, string | string[]> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    fields[line.slice(0, separator).trim()] = parseValue(line.slice(separator + 1));
  }

  const { title, date, summary = "", tags = [] } = fields;
  if (typeof title !== "string" || typeof date !== "string") {
    console.error(`Blog post ${path} needs a title and a date; skipping it.`);
    return null;
  }

  const body = match[2].trim();
  return {
    slug,
    title,
    date,
    summary: Array.isArray(summary) ? summary.join(", ") : summary,
    tags: Array.isArray(tags) ? tags : [tags],
    body,
    readingMinutes: Math.max(
      1,
      Math.round(body.split(/\s+/).length / WORDS_PER_MINUTE),
    ),
  };
}

// Newest first. ISO dates sort correctly as plain strings.
export const posts: Post[] = Object.entries(files)
  .map(([path, source]) => parsePost(path, source))
  .filter((post): post is Post => post !== null)
  .sort((a, b) => b.date.localeCompare(a.date));

// Parsed as a local date: `new Date("2026-10-24")` is UTC midnight, which
// shows as the day before anywhere west of Greenwich.
export function formatPostDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
