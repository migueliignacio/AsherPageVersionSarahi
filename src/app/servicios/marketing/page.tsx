import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

export const metadata: Metadata = {
  title: "Marketing — ASHER",
  description: "Campañas y contenido que mueven tu marca.",
};

export default function MarketingPage() {
  return (
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
  );
}
