import type { Metadata } from "next";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import BentoGrid from "@/components/ui/bento-grid-01";
import { ServiceCatalog } from "@/components/ui/service-catalog";
import { TextColor } from "@/components/ui/text-color";
import { serviceAddons } from "@/data/service-addons";
import { brand } from "@/data/asher";

export const metadata: Metadata = {
  title: "Digital Web — ASHER",
  description: "Sitios y productos digitales.",
};

export default function DigitalWebPage() {
  return (
    <>
      <MinimalistHero
        mainText="Diseñamos y construimos sitios y productos digitales rápidos, claros y listos para convertir visitas en clientes."
        readMoreLink="/contacto"
        title="Digital Web"
        socialLinks={[
          { icon: "instagram", href: brand.socialLinks.instagram },
          { icon: "facebook", href: brand.socialLinks.facebook },
          { icon: "tiktok", href: brand.socialLinks.tiktok },
          { icon: "whatsapp", href: brand.socialLinks.whatsapp },
        ]}
        locationText="Ecuador"
        circleClassName="bg-[#79b826]/90"
      />

      <div className="flex h-[220px] items-center justify-center px-5 md:h-[280px]">
        <GooeyText
          texts={["Diseño", "Código", "Velocidad", "Resultados"]}
          morphTime={1}
          cooldownTime={0.4}
          className="font-display font-medium"
        />
      </div>

      <BentoGrid
        eyebrow="Digital Web"
        speedValue="100ms"
        cards={[
          { title: "Tipografía web", description: "Textos legibles y con personalidad en cualquier dispositivo." },
          { title: "Layouts flexibles", description: "Interfaces que se acomodan a cada pantalla sin perder orden." },
          { title: "CDN global", description: "Tu sitio se carga rápido sin importar desde dónde te visiten." },
          { title: "Carga instantánea", description: "Sitios optimizados para que nadie se vaya antes de ver tu marca." },
          { title: "Seguridad primero", description: "Certificados SSL y buenas prácticas desde el primer despliegue." },
          { title: "100% responsive", description: "Se ve perfecto en celular, tablet y escritorio." },
        ]}
      />

      <ServiceCatalog
        eyebrow="Adicionales — Digital Web"
        title="Suma extras a tu presencia digital"
        items={serviceAddons["digital-web"].items}
        accent={serviceAddons["digital-web"].accent}
        origin="servicios_digital-web_addons"
      />

      <TextColor
        className="bg-[var(--color-bg)] px-6 py-20 md:py-28"
        words={[
          { text: "Diseño.", from: "#79b826", to: "#baf76a" },
          { text: "Código.", from: "#06b6d4", to: "#79b826" },
          { text: "Resultados.", from: "#22c55e", to: "#79b826" },
        ]}
      />
    </>
  );
}
