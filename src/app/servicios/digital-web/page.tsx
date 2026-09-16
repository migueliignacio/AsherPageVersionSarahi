import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

export const metadata: Metadata = {
  title: "Digital Web — ASHER",
  description: "Sitios y productos digitales.",
};

export default function DigitalWebPage() {
  return (
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
      circleClassName="bg-[var(--color-accent-2)]/90"
    />
  );
}
