import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ClientLogos from "@/components/ClientLogos";
import About from "@/components/About";
import OurWorkSection from "@/components/OurWorkSection";
import InversionCircleScrollAnimation from "@/components/ui/inversion-circle-scroll-animation";
import Routes from "@/components/Routes";
import { marqueeItems } from "@/data/asher";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        text={`${marqueeItems.join(" ✦ ")} ✦`}
        className="border-y border-[var(--color-line)] py-6"
      />
      <ClientLogos />
      <About />
      <OurWorkSection />
      <InversionCircleScrollAnimation />
      <Routes />
    </>
  );
}
