import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import BentoGrid from "@/components/ui/bento-grid-01";
import { TextColor } from "@/components/ui/text-color";

export const metadata: Metadata = {
  title: "Branding — ASHER",
  description: "Identidad de marca con carácter.",
};

export default function BrandingPage() {
  return (
    <>
      <MinimalistHero
        logoText="ASHER"
        navLinks={[]}
        mainText="Construimos identidades de marca con carácter: naming, sistemas visuales y guías que se sostienen en el tiempo."
        readMoreLink="/contacto"
        imageSrc="/asher/teito-mascota.png"
        imageAlt="TEÍTO — mascota de ASHER"
        overlayText={{ part1: "marca", part2: "con carácter" }}
        socialLinks={[
          { icon: "instagram", href: "https://instagram.com" },
          { icon: "linkedin", href: "https://linkedin.com" },
        ]}
        locationText="Ecuador"
        circleClassName="bg-[#fb1b7c]/90"
      />

      <BentoGrid
        eyebrow="Branding"
        speedValue="5 días"
        cards={[
          { title: "Identidad verbal", description: "Naming, tono de voz y mensajes que suenan a ti." },
          { title: "Sistemas visuales", description: "Logotipo, colores y tipografía que se adaptan a cualquier formato." },
          { title: "Marca en todos lados", description: "Presencia consistente en cada punto de contacto con tu cliente." },
          { title: "Lanzamiento ágil", description: "De la idea a una marca lista para usarse, sin demoras." },
          { title: "Marca registrada", description: "Protegemos tu nombre y tu identidad desde el primer día." },
          { title: "Lista para cualquier pantalla", description: "Assets de marca optimizados para redes, web e impresos." },
        ]}
      />

      <TextColor
        className="bg-[var(--color-bg)] px-6 py-20 md:py-28"
        words={[
          { text: "Identidad.", from: "#fb1b7c", to: "#ff8fc4" },
          { text: "Estilo.", from: "#c026d3", to: "#fb1b7c" },
          { text: "Carácter.", from: "#fb1b7c", to: "#f43f5e" },
        ]}
      />
    </>
  );
}
