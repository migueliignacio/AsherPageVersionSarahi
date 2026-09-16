import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

export const metadata: Metadata = {
  title: "Legal — ASHER",
  description: "Respaldo legal desde el día uno.",
};

export default function LegalPage() {
  return (
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
      circleClassName="bg-[var(--color-violet)]/80"
    />
  );
}
