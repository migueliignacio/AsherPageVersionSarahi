import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — GLYPH Studio",
  description: "Selected work from GLYPH, an independent creative studio.",
};

export default function WorkPage() {
  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-44">
      <h1
        data-reveal
        className="font-display max-w-3xl text-4xl font-medium uppercase leading-[0.95] tracking-tight md:text-7xl"
      >
        Selected work
      </h1>
      <p data-reveal className="mt-6 max-w-md text-[var(--color-ink-soft)]">
        Brands, products and platforms we&apos;ve designed and built for ambitious teams.
      </p>

      <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-16 md:mt-28 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
