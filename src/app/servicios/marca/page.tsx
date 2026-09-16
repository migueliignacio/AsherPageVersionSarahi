import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import BentoGrid from "@/components/ui/bento-grid-01";
import { TextColor } from "@/components/ui/text-color";

export const metadata: Metadata = {
  title: "Marca — ASHER",
  description: "Estrategia y posicionamiento de marca.",
};

export default function MarcaPage() {
  return (
    <>
      <MinimalistHero
        logoText="ASHER"
        navLinks={[]}
        mainText="Definimos la estrategia y el posicionamiento de tu marca: a quién le hablas, qué te hace distinto y cómo se nota en todo lo que haces."
        readMoreLink="/contacto"
        imageSrc="/asher/teito-mascota.png"
        imageAlt="TEÍTO — mascota de ASHER"
        overlayText={{ part1: "estrategia", part2: "de marca" }}
        socialLinks={[
          { icon: "instagram", href: "https://instagram.com" },
          { icon: "linkedin", href: "https://linkedin.com" },
        ]}
        locationText="Ecuador"
        circleClassName="bg-[#aa7ef6]/90"
      />

      <TextColor
        className="bg-[var(--color-bg)] px-6 py-20 md:py-28"
        words={[
          { text: "Estrategia.", from: "#7c3aed", to: "#aa7ef6" },
          { text: "Posicionamiento.", from: "#aa7ef6", to: "#f0abfc" },
          { text: "Claridad.", from: "#c084fc", to: "#aa7ef6" },
        ]}
      />

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
    </>
  );
}
