import { Link } from "react-router-dom";
import { formatPostDate } from "../content/posts";
import type { Post } from "../types/post";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="corner-ticks group relative flex flex-col border border-rule bg-surface p-6 transition-colors hover:border-rule-strong">
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        <span aria-hidden="true"> &middot; </span>
        {post.readingMinutes} min read
      </p>

      <h2 className="mt-3 text-xl font-semibold leading-snug text-ink">
        {/* The ::after overlay makes the whole card clickable while keeping
            a single, properly named link for screen readers. */}
        <Link
          to={`/blog/${post.slug}`}
          className="transition-colors after:absolute after:inset-0 group-hover:text-accent"
        >
          {post.title}
        </Link>
      </h2>

      {post.summary && (
        <p className="mt-3 text-sm leading-6 text-ink-muted">{post.summary}</p>
      )}

      {post.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <span
        aria-hidden="true"
        className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors group-hover:text-accent"
      >
        Read post &rarr;
      </span>
    </article>
  );
}
