import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

export const metadata: Metadata = {
  title: "Branding — ASHER",
  description: "Identidad de marca con carácter.",
};

export default function BrandingPage() {
  return (
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
  );
}
