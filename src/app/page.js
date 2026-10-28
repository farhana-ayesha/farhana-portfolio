import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="flex-1">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
