import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section"
    >
      <div className="shell">
        <SectionHeading
          index="05"
          label="Contact"
          title="Let's work together."
          titleId="contact-title"
        />

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:gap-8">
          <div className="hidden md:col-span-4 md:block" aria-hidden="true" />

          <div className="md:col-span-8">
            <p className="max-w-xl text-lg leading-8 text-foreground">
              I&apos;m open to frontend roles, remote work and freelance
              projects. Reach me on LinkedIn, or browse my code on GitHub.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-primary group"
              >
                Connect on LinkedIn
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-[15px] font-medium text-foreground"
              >
                View GitHub
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
