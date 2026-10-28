import About from "@/components/about";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="flex-1">
      <Hero />
      <About />
      <TechStack />
      <Skills />
    </main>
  );
}
