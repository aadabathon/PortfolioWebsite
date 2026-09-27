import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Hero } from "../components/Hero";
import { ProjectsSection } from "../components/ProjectsSection";

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
