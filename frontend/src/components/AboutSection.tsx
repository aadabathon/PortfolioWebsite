import { profile } from "../content/profile";
import { Container } from "./Container";
import { Hero } from "./Hero";
import { Skills } from "./Skills";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:justify-between">
          <div className="flex-1">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              About Me
            </h2>
            <Hero />
          </div>
          <img
            src="/images/profile/websitepic1.jpg"
            alt={profile.name}
            className="h-48 w-48 flex-shrink-0 rounded-xl object-cover sm:h-60 sm:w-60"
          />
        </div>
        <Skills />
      </Container>
    </section>
  );
}
