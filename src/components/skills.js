import SectionHeading from "@/components/section-heading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section border-b border-border"
    >
      <div className="shell">
        <SectionHeading
          index="04"
          label="Skills"
          title="Skills"
          titleId="skills-title"
        />

        <ol className="mt-10 grid gap-x-12 border-t border-border pt-8 sm:grid-cols-2 md:mt-14">
          {skills.map((skill, index) => (
            <li
              key={skill.title}
              className="border-b border-border py-6 first:pt-0 sm:[&:nth-child(-n+2)]:pt-0"
            >
              <div className="flex items-baseline gap-3">
                <span className="index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-foreground">
                  {skill.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                {skill.description}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {skill.evidence}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
