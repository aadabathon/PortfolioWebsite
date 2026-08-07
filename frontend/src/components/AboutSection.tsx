import { Container } from "./Container";
import { Hero } from "./Hero";
import { Skills } from "./Skills";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 py-16 sm:py-20">
      <Container>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          About Me
        </h2>
        <Hero />
        <Skills />
      </Container>
    </section>
  );
}
