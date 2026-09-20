import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import BentoGrid from "@/components/ui/bento-grid-01";
import { ServiceCatalog } from "@/components/ui/service-catalog";
import { TextColor } from "@/components/ui/text-color";
import { serviceAddons } from "@/data/service-addons";
import { brand } from "@/data/asher";

export const metadata: Metadata = {
  title: "Marketing — ASHER",
  description: "Campañas y contenido que mueven tu marca.",
};

export default function MarketingPage() {
  return (
    <>
      <MinimalistHero
        mainText="Campañas y contenido pensados para que tu marca se mueva: más alcance, más conversaciones, más clientes."
        readMoreLink="/contacto"
        title="Marketing"
        socialLinks={[
          { icon: "instagram", href: brand.socialLinks.instagram },
          { icon: "facebook", href: brand.socialLinks.facebook },
          { icon: "tiktok", href: brand.socialLinks.tiktok },
          { icon: "whatsapp", href: brand.socialLinks.whatsapp },
        ]}
        locationText="Ecuador"
        circleClassName="bg-[#6f95d6]"
      />

      <div className="flex h-[220px] items-center justify-center px-5 md:h-[280px]">
        <GooeyText
          texts={["Contenido", "Campañas", "Alcance", "Marca"]}
          morphTime={1}
          cooldownTime={0.4}
          className="font-display font-medium"
        />
      </div>

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

      <ServiceCatalog
        eyebrow="Adicionales — Marketing"
        title="Suma extras a tu campaña"
        items={serviceAddons.marketing.items}
        accent={serviceAddons.marketing.accent}
        onAccent={serviceAddons.marketing.onAccent}
      />

      <TextColor
        className="bg-[var(--color-bg)] px-6 py-20 md:py-28"
        words={[
          { text: "Contenido.", from: "#0b1956", to: "#6f95d6" },
          { text: "Campañas.", from: "#6f95d6", to: "#0b1956" },
          { text: "Alcance.", from: "#0b1956", to: "#6f95d6" },
        ]}
      />
    </>
  );
}
