import SectionHeading from "@/components/section-heading";
import { profile } from "@/data/profile";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Focus", value: "React + Next.js" },
  { label: "Availability", value: "Remote roles & freelance" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section border-b border-border"
    >
      <div className="shell">
        <SectionHeading
          index="01"
          label="About"
          title="About me"
          titleId="about-title"
        />

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:gap-8">
          <div className="hidden md:col-span-4 md:block" aria-hidden="true" />

          <div className="md:col-span-8">
            <div className="space-y-5 text-lg leading-8 text-foreground">
              {profile.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
