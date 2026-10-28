import SectionHeading from "@/components/section-heading";
import { techGroups } from "@/data/skills";

export default function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="section border-b border-border"
    >
      <div className="shell">
        <SectionHeading
          index="02"
          label="Stack"
          title="Tech stack"
          titleId="stack-title"
        />

        <ul className="mt-10 border-t border-border md:mt-14">
          {techGroups.map((group) => (
            <li
              key={group.title}
              className="grid gap-2 border-b border-border py-5 md:grid-cols-12 md:gap-8 md:py-6"
            >
              <h3 className="eyebrow md:col-span-4">{group.title}</h3>
              <p className="text-[15px] leading-6 text-foreground md:col-span-8">
                {group.items.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
