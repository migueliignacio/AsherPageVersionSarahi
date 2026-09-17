import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackToHome from "@/components/BackToHome";
import { caseStudies } from "@/data/work";

export const metadata: Metadata = {
  title: "Trabajos — ASHER",
  description: "Los proyectos en los que hemos trabajado.",
};

export default function TrabajosPage() {
  return (
    <>
      <BackToHome />
      <section className="px-5 pb-16 pt-10 md:px-10 md:pb-20">
        <p className="mb-10 whitespace-nowrap text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          Nuestro trabajo
        </p>
        <h1 className="font-display max-w-3xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl">
          Algunos de los proyectos que hemos construido.
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
          Seguimos sumando casos a esta página. Mientras tanto, cuéntanos tu proyecto y con gusto te
          compartimos ejemplos relevantes por tu ruta de interés.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-px border-t border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((project) => (
          <Link
            key={project.slug}
            href={`/trabajos/${project.slug}`}
            data-cursor="view"
            className="group relative flex flex-col gap-5 bg-[var(--color-bg)] p-6 transition-colors duration-300 md:p-8"
          >
            <div className="relative aspect-square w-24 overflow-hidden rounded-2xl" style={{ background: `color-mix(in srgb, ${project.accent} 12%, var(--color-bg))` }}>
              <Image src={project.cover} alt={project.title} fill className="object-contain p-2" />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em]" style={{ color: project.accent }}>
                {project.category}
              </p>
              <h2 className="font-display text-xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">{project.summary}</p>
            </div>
            <span
              className="mt-auto inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-ink)]"
              aria-hidden="true"
            >
              Ver caso <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
