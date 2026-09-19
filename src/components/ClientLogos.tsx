import { MarqueeLogoScroller } from "@/components/ui/marquee-logo-scroller";

const marcas = [
  {
    src: "/marcas/spc.png",
    alt: "Social Padel Club",
    gradient: { from: "#9aa9cf", via: "#6f84b7", to: "#4a5f95" },
  },
  {
    src: "/marcas/batidoos.png",
    alt: "Batidoos",
    gradient: { from: "#e9e1d2", via: "#d8cbb8", to: "#b5a88f" },
  },
  {
    src: "/marcas/velez-guevara.png",
    alt: "Vélez Guevara Abogados",
    gradient: { from: "#4a5f95", via: "#0b1956", to: "#070f3a" },
  },
  {
    src: "/marcas/barak-maniquies.png",
    alt: "Barak Maniquíes",
    gradient: { from: "#7d846e", via: "#4c5340", to: "#2f3427" },
  },
];

export default function ClientLogos() {
  return (
    <div className="px-5 py-16 md:px-10 md:py-24">
      <MarqueeLogoScroller
        title="Marcas con las que hemos trabajado"
        description="Negocios que han confiado en ASHER para mover su marca."
        logos={marcas}
        speed="fast"
      />
    </div>
  );
}
