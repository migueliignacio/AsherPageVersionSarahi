import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ClientLogos from "@/components/ClientLogos";
import OurWorkSection from "@/components/OurWorkSection";
import InversionCircleScrollAnimation from "@/components/ui/inversion-circle-scroll-animation";
import Routes from "@/components/Routes";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <OurWorkSection />
      <InversionCircleScrollAnimation />
      <Routes />
      <Marquee
        text="Branding ✦ Digital Web ✦ Legal ✦ Marketing ✦"
        reverse
        className="border-t border-[var(--color-line)] py-6"
      />
    </>
  );
}
