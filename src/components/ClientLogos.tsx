import { MarqueeLogoScroller } from "@/components/ui/marquee-logo-scroller";

const marcas = [
  {
    src: "/marcas/spc.jpg",
    alt: "Social Padel Club",
    gradient: { from: "#FF6FB5", via: "#E6007A", to: "#99004F" },
  },
  {
    src: "/marcas/batidoos.jpg",
    alt: "Batidoos",
    gradient: { from: "#D6FF5C", via: "#AFFF01", to: "#7A9900" },
  },
  {
    src: "/marcas/velez-guevara.jpg",
    alt: "Vélez Guevara Abogados",
    gradient: { from: "#6690FF", via: "#1E3A8A", to: "#0F1F45" },
  },
  {
    src: "/marcas/barak-maniquies.jpg",
    alt: "Barak Maniquíes",
    gradient: { from: "#FFD98A", via: "#C9A227", to: "#7A5B0E" },
  },
];

export default function ClientLogos() {
  return (
    <div className="px-5 py-16 md:px-10 md:py-24">
      <MarqueeLogoScroller
        title="Marcas con las que hemos trabajado"
        description="Negocios que han confiado en ASHER para mover su marca."
        logos={marcas}
        speed="slow"
      />
    </div>
  );
}
