import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function ComingSoon({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading index={index}>{title}</SectionHeading>
        <p className="mt-10 max-w-md text-[15px] leading-7 text-ink-muted">
          {description}
        </p>
      </Container>
    </section>
  );
}
