import { MarqueeLogoScroller } from "@/components/ui/marquee-logo-scroller";

const marcas = [
  {
    src: "/marcas/spc.png",
    alt: "Social Padel Club",
    gradient: { from: "#3d4d8f", via: "#0b1956", to: "#060e2e" },
  },
  {
    src: "/marcas/batidoos.png",
    alt: "Batidoos",
    gradient: { from: "#8a2a2a", via: "#520000", to: "#2e0000" },
  },
  {
    src: "/marcas/velez-guevara.png",
    alt: "Vélez Guevara Abogados",
    gradient: { from: "#efe6d6", via: "#d8cbb8", to: "#b5a88f" },
  },
  {
    src: "/marcas/barak-maniquies.png",
    alt: "Barak Maniquíes",
    gradient: { from: "#c3d3ef", via: "#8fb0e3", to: "#5f83c4" },
  },
];

export default function ClientLogos() {
  return (
    <div className="px-5 py-16 md:px-10 md:py-24">
      <MarqueeLogoScroller
        title="Marcas que han confiado en Asher"
        description="Negocios que han confiado en ASHER para mover su marca."
        logos={marcas}
        speed="normal"
      />
    </div>
  );
}
