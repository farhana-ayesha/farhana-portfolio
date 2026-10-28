import ProjectCard from "@/components/project-card";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section border-b border-border"
    >
      <div className="shell">
        <SectionHeading
          index="03"
          label="Projects"
          title="Projects"
          titleId="projects-title"
        />

        <Reveal>
          <div className="mt-10 border-t border-border md:mt-14">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
