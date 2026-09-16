import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import BentoGrid from "@/components/ui/bento-grid-01";
import { TextColor } from "@/components/ui/text-color";

export const metadata: Metadata = {
  title: "Marketing — ASHER",
  description: "Campañas y contenido que mueven tu marca.",
};

export default function MarketingPage() {
  return (
    <>
      <MinimalistHero
        logoText="ASHER"
        navLinks={[]}
        mainText="Campañas y contenido pensados para que tu marca se mueva: más alcance, más conversaciones, más clientes."
        readMoreLink="/contacto"
        imageSrc="/asher/teito-mascota.png"
        imageAlt="TEÍTO — mascota de ASHER"
        overlayText={{ part1: "más", part2: "alcance" }}
        socialLinks={[
          { icon: "instagram", href: "https://instagram.com" },
          { icon: "linkedin", href: "https://linkedin.com" },
        ]}
        locationText="Ecuador"
        circleClassName="bg-[#f1562c]/90"
      />

      <BentoGrid
        eyebrow="Marketing"
        speedValue="+40%"
        cards={[
          { title: "Mensajes que destacan", description: "Copys y creatividades pensadas para detener el scroll." },
          { title: "Campañas flexibles", description: "Contenido que se adapta a cada red y objetivo." },
          { title: "Más alcance", description: "Llega a más personas con la estrategia correcta de medios." },
          { title: "Resultados medibles", description: "Reportes claros de qué está funcionando y qué no." },
          { title: "Datos protegidos", description: "Campañas que respetan la privacidad de tus clientes." },
          { title: "Contenido para cada canal", description: "Instagram, WhatsApp, email — todo coordinado." },
        ]}
      />

      <TextColor
        className="bg-[var(--color-bg)] px-6 py-20 md:py-28"
        words={[
          { text: "Contenido.", from: "#f1562c", to: "#fb923c" },
          { text: "Campañas.", from: "#fb923c", to: "#f1562c" },
          { text: "Alcance.", from: "#f1562c", to: "#fbbf24" },
        ]}
      />
    </>
  );
}
