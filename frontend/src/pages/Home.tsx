import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { ProjectsPlaceholder } from "../components/ProjectsPlaceholder";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <main>
        <Hero />
        <Skills />
        <ProjectsPlaceholder />
      </main>
      <Footer />
    </div>
  );
}
