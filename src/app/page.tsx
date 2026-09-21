import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ClientLogos from "@/components/ClientLogos";
import ProductsServices from "@/components/ProductsServices";
import InversionCircleScrollAnimation from "@/components/ui/inversion-circle-scroll-animation";
import Routes from "@/components/Routes";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ProductsServices />
      <InversionCircleScrollAnimation />
      <Routes />
      <Marquee
        text="Branding ✦ Legal ✦ Digital Web ✦ Marca ✦ Marketing ✦"
        reverse
        className="border-t border-[var(--color-line)] py-6"
      />
    </>
  );
}
