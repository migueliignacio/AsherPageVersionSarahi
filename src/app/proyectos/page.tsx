import type { Metadata } from "next";
import { Component as CinematicSection } from "@/components/ui/cinematic-product-scroll-section";
import { clientProjects as projects } from "@/data/client-projects";

export const metadata: Metadata = {
  title: "Proyectos — ASHER",
  description: "Lo que hemos hecho con Batidoos, Barak Maniquíes, Grupo Vélez y Social Padel Club.",
};

export default function ProyectosPage() {
  return (
    <div className="palette-asher">
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
          background: project.background,
          tone: project.tone,
        }))}
      />
    </div>
  );
}
