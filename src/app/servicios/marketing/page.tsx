import type { Metadata } from "next";
import { MessageSquare, Layers, TrendingUp, BarChart3, ShieldCheck, Share2 } from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { FeatureShaderCards } from "@/components/ui/feature-shader-cards";
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

      <FeatureShaderCards
        eyebrow="Marketing"
        colors={["#0b1956", "#6f95d6"]}
        features={[
          { title: "Mensajes que destacan", description: "Copys y creatividades pensadas para detener el scroll.", icon: <MessageSquare /> },
          { title: "Campañas flexibles", description: "Contenido que se adapta a cada red y objetivo.", icon: <Layers /> },
          { title: "Más alcance", description: "Llega a más personas con la estrategia correcta de medios.", icon: <TrendingUp /> },
          { title: "Resultados medibles", description: "Reportes claros de qué está funcionando y qué no.", icon: <BarChart3 /> },
          { title: "Datos protegidos", description: "Campañas que respetan la privacidad de tus clientes.", icon: <ShieldCheck /> },
          { title: "Contenido para cada canal", description: "Instagram, WhatsApp, email — todo coordinado.", icon: <Share2 /> },
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
