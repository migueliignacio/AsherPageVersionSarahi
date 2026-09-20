import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import BentoGrid from "@/components/ui/bento-grid-01";
import { ServiceCatalog } from "@/components/ui/service-catalog";
import { TextColor } from "@/components/ui/text-color";
import { serviceAddons } from "@/data/service-addons";
import { brand } from "@/data/asher";

export const metadata: Metadata = {
  title: "Branding — ASHER",
  description: "Identidad de marca con carácter.",
};

export default function BrandingPage() {
  return (
    <>
      <MinimalistHero
        mainText="Construimos identidades de marca con carácter: naming, sistemas visuales y guías que se sostienen en el tiempo."
        readMoreLink="/contacto"
        title="Branding"
        socialLinks={[
          { icon: "instagram", href: brand.socialLinks.instagram },
          { icon: "facebook", href: brand.socialLinks.facebook },
          { icon: "tiktok", href: brand.socialLinks.tiktok },
          { icon: "whatsapp", href: brand.socialLinks.whatsapp },
        ]}
        locationText="Ecuador"
        circleClassName="bg-[#520000]"
      />

      <div className="flex h-[220px] items-center justify-center px-5 md:h-[280px]">
        <GooeyText
          texts={["Identidad", "Estilo", "Carácter", "Marca"]}
          morphTime={1}
          cooldownTime={0.4}
          className="font-display font-medium"
        />
      </div>

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

      <ServiceCatalog
        eyebrow="Adicionales — Branding"
        title="Suma extras a tu identidad de marca"
        items={serviceAddons.branding.items}
        accent={serviceAddons.branding.accent}
        onAccent={serviceAddons.branding.onAccent}
      />

      <TextColor
        className="bg-[var(--color-bg)] px-6 py-20 md:py-28"
        words={[
          { text: "Identidad.", from: "#520000", to: "#a98080" },
          { text: "Estilo.", from: "#a98080", to: "#520000" },
          { text: "Carácter.", from: "#520000", to: "#a98080" },
        ]}
      />
    </>
  );
}
