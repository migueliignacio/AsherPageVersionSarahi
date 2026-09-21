import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackToHome from "@/components/BackToHome";
import { caseStudies } from "@/data/work";
import TextBlockAnimation from "@/components/ui/text-block-animation";

export const metadata: Metadata = {
  title: "Clientes — ASHER",
  description: "Las marcas que confían en ASHER y los casos que hemos construido con ellas.",
};

export default function ClientesPage() {
  return (
    <div className="palette-asher">
      <BackToHome />
      <section className="px-5 pb-16 pt-10 md:px-10 md:pb-20">
        <TextBlockAnimation blockColor="#8fb0e3" duration={0.5} animateOnScroll={false} className="mb-10">
          <p className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
            Nuestros clientes
          </p>
        </TextBlockAnimation>
        <TextBlockAnimation blockColor="#0b1956" animateOnScroll={false} delay={0.1}>
          <h1 className="font-display max-w-3xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl">
            Marcas que ya se mueven con ASHER.
          </h1>
        </TextBlockAnimation>
        <TextBlockAnimation blockColor="#520000" duration={0.5} animateOnScroll={false} delay={0.3} className="mt-8">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
            Historias de marcas que construimos, mejoramos y protegemos. Seguimos sumando casos; mientras tanto, cuéntanos tu proyecto y te compartimos ejemplos de tu ruta de interés.
          </p>
        </TextBlockAnimation>
      </section>

      <section className="grid grid-cols-1 gap-px border-t border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((project) => (
          <Link
            key={project.slug}
            href={`/clientes/${project.slug}`}
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
    </div>
  );
}
