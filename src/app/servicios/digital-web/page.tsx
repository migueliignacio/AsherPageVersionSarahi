import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import BentoGrid from "@/components/ui/bento-grid-01";
import { TextColor } from "@/components/ui/text-color";

export const metadata: Metadata = {
  title: "Digital Web — ASHER",
  description: "Sitios y productos digitales.",
};

export default function DigitalWebPage() {
  return (
    <>
      <MinimalistHero
        logoText="ASHER"
        navLinks={[]}
        mainText="Diseñamos y construimos sitios y productos digitales rápidos, claros y listos para convertir visitas en clientes."
        readMoreLink="/contacto"
        imageSrc="/asher/teito-mascota.png"
        imageAlt="TEÍTO — mascota de ASHER"
        overlayText={{ part1: "presencia", part2: "digital" }}
        socialLinks={[
          { icon: "instagram", href: "https://instagram.com" },
          { icon: "linkedin", href: "https://linkedin.com" },
        ]}
        locationText="Ecuador"
        circleClassName="bg-[#79b826]/90"
      />

      <BentoGrid
        eyebrow="Digital Web"
        speedValue="100ms"
        cards={[
          { title: "Tipografía web", description: "Textos legibles y con personalidad en cualquier dispositivo." },
          { title: "Layouts flexibles", description: "Interfaces que se acomodan a cada pantalla sin perder orden." },
          { title: "CDN global", description: "Tu sitio se carga rápido sin importar desde dónde te visiten." },
          { title: "Carga instantánea", description: "Sitios optimizados para que nadie se vaya antes de ver tu marca." },
          { title: "Seguridad primero", description: "Certificados SSL y buenas prácticas desde el primer despliegue." },
          { title: "100% responsive", description: "Se ve perfecto en celular, tablet y escritorio." },
        ]}
      />

      <TextColor
        className="bg-[var(--color-bg)] px-6 py-20 md:py-28"
        words={[
          { text: "Diseño.", from: "#79b826", to: "#baf76a" },
          { text: "Código.", from: "#06b6d4", to: "#79b826" },
          { text: "Resultados.", from: "#22c55e", to: "#79b826" },
        ]}
      />
    </>
  );
}
