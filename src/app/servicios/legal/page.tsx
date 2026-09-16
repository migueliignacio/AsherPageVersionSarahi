import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import BentoGrid from "@/components/ui/bento-grid-01";
import { TextColor } from "@/components/ui/text-color";

export const metadata: Metadata = {
  title: "Legal — ASHER",
  description: "Respaldo legal desde el día uno.",
};

export default function LegalPage() {
  return (
    <>
      <MinimalistHero
        logoText="ASHER"
        navLinks={[]}
        mainText="Respaldo legal desde el día uno: registro de marca, contratos y protección para que tu negocio crezca sin sobresaltos."
        readMoreLink="/contacto"
        imageSrc="/asher/teito-mascota.png"
        imageAlt="TEÍTO — mascota de ASHER"
        overlayText={{ part1: "respaldo", part2: "legal" }}
        socialLinks={[
          { icon: "instagram", href: "https://instagram.com" },
          { icon: "linkedin", href: "https://linkedin.com" },
        ]}
        locationText="Ecuador"
        circleClassName="bg-[#84172e]/90"
      />

      <TextColor
        className="bg-[var(--color-bg)] px-6 py-20 md:py-28"
        words={[
          { text: "Contratos.", from: "#84172e", to: "#e11d48" },
          { text: "Marca.", from: "#e11d48", to: "#84172e" },
          { text: "Blindaje.", from: "#84172e", to: "#fb7185" },
        ]}
      />

      <BentoGrid
        eyebrow="Legal"
        speedValue="24h"
        cards={[
          { title: "Contratos claros", description: "Documentos redactados para entenderse, no para confundir." },
          { title: "Estructura a la medida", description: "Organizamos la parte legal de tu negocio según cómo creces." },
          { title: "Cobertura total", description: "Respaldo legal para marca, contratos, datos y operaciones." },
          { title: "Respuesta rápida", description: "Resolvemos tus dudas legales sin semanas de espera." },
          { title: "Blindaje legal", description: "Protección desde el día uno, no como último paso." },
          { title: "Siempre disponible", description: "Acompañamiento legal accesible cuando lo necesitas." },
        ]}
      />
    </>
  );
}
