import { Container } from "./Container";

export function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          {title}
        </h1>
        <div className="mt-6 rounded-lg border border-dashed border-slate-300 p-12 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
          {description}
        </div>
      </Container>
    </section>
  );
}
