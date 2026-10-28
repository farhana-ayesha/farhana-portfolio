import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="scroll-mt-16 border-b border-border"
    >
      <div className="shell pb-16 pt-14 sm:pt-20 md:pb-24 md:pt-24">
        <p className="eyebrow animate-fade-up">
          {profile.role} — {profile.location}
        </p>

        <h1
          id="hero-title"
          className="mt-5 animate-fade-up text-[clamp(3.4rem,10.5vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.045em] text-foreground"
          style={{ animationDelay: "60ms" }}
        >
          {profile.name}
        </h1>

        <div className="mt-12 grid gap-10 border-t border-border pt-8 md:mt-16 md:grid-cols-12 md:gap-8">
          <div
            className="animate-fade-up md:col-span-7"
            style={{ animationDelay: "120ms" }}
          >
            <p className="max-w-xl text-lg leading-relaxed text-foreground sm:text-xl">
              {profile.intro}
            </p>
          </div>

          <div
            className="animate-fade-up md:col-span-5 md:pl-6"
            style={{ animationDelay: "180ms" }}
          >
            <p className="flex items-start gap-2.5 font-mono text-[11px] uppercase leading-5 tracking-[0.14em] text-muted">
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight-bright"
              />
              {profile.availability}
            </p>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
              <a href="#projects" className="btn-primary group">
                View projects
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="link-underline inline-flex items-center gap-1.5 text-[15px] font-medium text-foreground"
              >
                Get in touch
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 flex gap-6 font-mono text-[11px] uppercase tracking-[0.14em]">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-1 text-foreground"
              >
                GitHub
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-1 text-foreground"
              >
                LinkedIn
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
