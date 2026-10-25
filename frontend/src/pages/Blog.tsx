import { ComingSoon } from "../components/ComingSoon";
import { Container } from "../components/Container";
import { PostCard } from "../components/PostCard";
import { SectionHeading } from "../components/SectionHeading";
import { posts } from "../content/posts";

export function Blog() {
  if (posts.length === 0) {
    return (
      <ComingSoon
        index="01"
        title="Blog Posts"
        description="Long-form write-ups are on the way — mostly notes on digital design, FPGA work, and whatever I'm building at the time."
      />
    );
  }

  return (
    <section className="grid-paper min-h-[60vh] py-20 sm:py-24">
      <Container>
        <SectionHeading index="01">Blog Posts</SectionHeading>
        <p className="mt-10 max-w-xl text-[15px] leading-7 text-ink-muted">
          Long-form write-ups on what I'm building, and the occasional
          longer think about markets.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
