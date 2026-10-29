import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, reversed = false }) {
  const { live, github } = project.links;

  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className="grid gap-6 border-b border-border py-10 lg:grid-cols-12 lg:gap-8 lg:py-14"
    >
      <figure
        className={`lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="group relative aspect-[16/10] overflow-hidden border border-border bg-surface">
          <Image
            src={project.preview.src}
            alt={project.preview.alt}
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.01]"
          />
        </div>
        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {project.name} — live site
        </figcaption>
      </figure>

      <div
        className={`flex flex-col lg:col-span-5 ${
          reversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="flex items-baseline gap-3">
          <span className="index">{project.index}</span>
          <h3
            id={`project-${project.slug}`}
            className="text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl"
          >
            {project.name}
          </h3>
        </div>

        <p className="mt-3 text-[15px] font-medium text-foreground">
          {project.tagline}
        </p>
        <p className="mt-3 text-sm leading-6 text-muted">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-6">
              <span
                aria-hidden="true"
                className="mt-[13px] h-px w-3 shrink-0 bg-accent"
              />
              <span className="text-foreground">{highlight}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 font-mono text-[11px] uppercase leading-5 tracking-[0.14em] text-muted">
          {project.stack.join(" · ")}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} live site`}
            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            Live site
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
            >
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
