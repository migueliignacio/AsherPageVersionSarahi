import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import BentoGrid from "@/components/ui/bento-grid-01";
import { ServiceCatalog } from "@/components/ui/service-catalog";
import { TextColor } from "@/components/ui/text-color";
import { serviceAddons } from "@/data/service-addons";
import { brand } from "@/data/asher";

export const metadata: Metadata = {
  title: "Marca — ASHER",
  description: "Estrategia y posicionamiento de marca.",
};

export default function MarcaPage() {
  return (
    <>
      <MinimalistHero
        mainText="Definimos la estrategia y el posicionamiento de tu marca: a quién le hablas, qué te hace distinto y cómo se nota en todo lo que haces."
        readMoreLink="/contacto"
        title="Marca"
        socialLinks={[
          { icon: "instagram", href: brand.socialLinks.instagram },
          { icon: "facebook", href: brand.socialLinks.facebook },
          { icon: "tiktok", href: brand.socialLinks.tiktok },
          { icon: "whatsapp", href: brand.socialLinks.whatsapp },
        ]}
        locationText="Ecuador"
        circleClassName="bg-[#0b1956]"
      />

      <div className="flex h-[220px] items-center justify-center px-5 md:h-[280px]">
        <GooeyText
          texts={["Estrategia", "Posicionamiento", "Claridad", "Marca"]}
          morphTime={1}
          cooldownTime={0.4}
          className="font-display font-medium"
        />
      </div>

      <BentoGrid
        eyebrow="Marca"
        speedValue="3 pasos"
        cards={[
          { title: "Voz de marca", description: "Cómo hablas, qué dices y por qué le importa a tu cliente." },
          { title: "Arquitectura de marca", description: "Organizamos líneas de producto, submarcas y mensajes." },
          { title: "Posicionamiento", description: "Un lugar claro y propio en la mente de tu mercado." },
          { title: "Diagnóstico en 3 pasos", description: "Entendemos tu marca actual antes de mover una sola pieza." },
          { title: "Marca protegida", description: "Consistencia y respaldo legal en cada decisión de marca." },
          { title: "Coherencia en todos lados", description: "La misma marca, reconocible en cualquier canal." },
        ]}
      />

      <ServiceCatalog
        eyebrow="Adicionales — Marca"
        title="Suma extras a tu estrategia de marca"
        items={serviceAddons.marca.items}
        accent={serviceAddons.marca.accent}
        onAccent={serviceAddons.marca.onAccent}
      />

      <TextColor
        className="bg-[var(--color-bg)] px-6 py-20 md:py-28"
        words={[
          { text: "Estrategia.", from: "#0b1956", to: "#858cab" },
          { text: "Posicionamiento.", from: "#858cab", to: "#0b1956" },
          { text: "Claridad.", from: "#0b1956", to: "#858cab" },
        ]}
      />
    </>
  );
}
