import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

export const metadata: Metadata = {
  title: "Marca — ASHER",
  description: "Estrategia y posicionamiento de marca.",
};

export default function MarcaPage() {
  return (
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
      circleClassName="bg-[var(--color-lavender)]/90"
    />
  );
}
