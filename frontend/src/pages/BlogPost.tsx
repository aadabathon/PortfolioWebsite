import { Link, useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { PostBody } from "../components/PostBody";
import { formatPostDate, posts } from "../content/posts";
import { NotFound } from "./NotFound";

export function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((entry) => entry.slug === slug);

  // An unknown slug is a genuine 404, not an empty post.
  if (!post) return <NotFound />;

  return (
    <article className="py-16 sm:py-20">
      <Container>
        <Link
          to="/blog"
          className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-accent"
        >
          <span aria-hidden="true">&larr;</span> All posts
        </Link>

        <header className="mt-8 max-w-[68ch] border-b border-rule pb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden="true"> &middot; </span>
            {post.readingMinutes} min read
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          {post.tags.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
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
        </header>

        <div className="mt-4">
          <PostBody markdown={post.body} />
        </div>

        <div className="mt-16 max-w-[68ch] border-t border-rule pt-6">
          <Link
            to="/blog"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            <span aria-hidden="true">&larr;</span> Back to all posts
          </Link>
        </div>
      </Container>
    </article>
  );
}
