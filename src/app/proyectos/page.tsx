import type { Metadata } from "next";
import Link from "next/link";
import OurWorkSection from "@/components/OurWorkSection";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import { TextParallaxContent } from "@/components/ui/text-parallax-content-scroll";
import { Component as CinematicSection } from "@/components/ui/cinematic-product-scroll-section";
import { clientProjects as projects } from "@/data/client-projects";

export const metadata: Metadata = {
  title: "Proyectos — ASHER",
  description: "Lo que hemos hecho con Batidoos, Barak Maniquíes, Grupo Vélez y Social Padel Club.",
};

export default function ProyectosPage() {
  return (
    <div className="palette-asher">
      <OurWorkSection />

      {projects.map((project) => (
        <TextParallaxContent
          key={project.id}
          id={project.id}
          subheading={project.areas}
          heading={project.name}
          tone={project.tone}
          background={project.background}
          imgUrl={project.logo}
          imgAlt={`Logo de ${project.name}`}
          imgFit="contain"
        >
          <div className="mx-auto grid max-w-5xl gap-8 px-4 pb-24 pt-12 md:grid-cols-12 md:gap-10 md:pb-32">
            <TextBlockAnimation blockColor={project.accent} className="md:col-span-4">
              <h2 className="font-display text-balance text-3xl font-semibold leading-[1.05] tracking-tight">
                Lo que hicimos con {project.name}.
              </h2>
            </TextBlockAnimation>

            <div className="md:col-span-8">
              <TextBlockAnimation blockColor={project.accent} duration={0.5} delay={0.1} className="mb-8">
                <p className="text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-2xl">{project.summary}</p>
              </TextBlockAnimation>

              <ul className="mb-8 flex flex-wrap gap-3">
                {project.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-[var(--color-ink)]/20 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.08em]"
                  >
                    {service}
                  </li>
                ))}
              </ul>

              <Link
                href={project.href}
                data-cursor="expand"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Ver el servicio <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </TextParallaxContent>
      ))}

      <CinematicSection
        eyebrow="PORTAFOLIO"
        titleFirst="MARCAS EN"
        titleRest="MOVIMIENTO"
        description="Cuatro negocios, cuatro formas de trabajar juntos: desde lo legal hasta la marca y la web."
        items={projects.map((project) => ({
          id: project.id,
          title: project.name,
          kicker: project.areas,
          description: project.summary,
          image: project.logo,
          href: project.href,
          colors: project.colors,
          tags: project.services,
        }))}
      />
    </div>
  );
}
