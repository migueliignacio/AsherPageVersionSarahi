import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [p1, p2, p3, p4, p5, p6] = projects;

  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mb-16 flex flex-col gap-4 md:mb-24 md:flex-row md:items-end md:justify-between">
        <h2
          data-reveal
          className="font-display max-w-xl text-4xl font-medium uppercase leading-[0.95] tracking-tight md:text-6xl"
        >
          Selected work
        </h2>
        <p data-reveal className="max-w-sm text-sm text-[var(--color-ink-soft)]">
          A handful of the products, platforms and brands we&apos;ve helped bring into the world.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12">
        <ProjectCard project={p1} className="md:col-span-8" />
        <ProjectCard project={p2} className="md:col-span-4 md:mt-24" />

        <ProjectCard project={p3} className="md:col-span-4" />
        <ProjectCard project={p4} className="md:col-span-8 md:mt-16" />

        <ProjectCard project={p5} className="md:col-span-5 md:col-start-2" />
        <ProjectCard project={p6} className="md:col-span-4 md:col-start-8 md:mt-20" />
      </div>

      <div className="mt-20 md:mt-28">
        <Link
          href="/work"
          data-cursor="view"
          className="font-display inline-flex items-center gap-3 text-2xl font-medium uppercase tracking-tight md:text-3xl"
        >
          View all work <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
