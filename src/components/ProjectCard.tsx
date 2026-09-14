import Link from "next/link";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: Props) {
  const aspect =
    project.orientation === "portrait" ? "aspect-[3/4]" : project.orientation === "square" ? "aspect-square" : "aspect-[16/10]";

  return (
    <article className={`group ${className}`}>
      <Link href={`/work#${project.name.toLowerCase()}`} data-cursor="view" className="block">
        <div className={`relative w-full overflow-hidden rounded-md ${aspect}`} data-reveal-image>
          <div
            className="absolute inset-0 flex items-end p-5 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
            style={{ background: `linear-gradient(155deg, ${project.accent}, #12121022)` }}
          >
            <span className="font-display text-2xl font-medium uppercase tracking-tight text-[var(--color-bg)] opacity-70 md:text-3xl">
              {project.name}
            </span>
          </div>
          <span
            className="absolute right-5 top-5 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full bg-[var(--color-bg)] text-[var(--color-ink)] opacity-0 transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0 group-hover:opacity-100"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
              {project.index} — {project.category}
            </span>
            <h3 className="font-display mt-1 text-xl font-medium tracking-tight md:text-2xl">{project.name}</h3>
            <p className="mt-1 max-w-[36ch] text-sm text-[var(--color-ink-soft)]">{project.description}</p>
          </div>
          <span className="whitespace-nowrap text-xs text-[var(--color-ink-soft)]">{project.year}</span>
        </div>
      </Link>
    </article>
  );
}
