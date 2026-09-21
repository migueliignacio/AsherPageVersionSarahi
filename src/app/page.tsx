import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ClientLogos from "@/components/ClientLogos";
import InversionCircleScrollAnimation from "@/components/ui/inversion-circle-scroll-animation";
import Routes from "@/components/Routes";
import HomeStatement from "@/components/HomeStatement";
import OurWorkSection from "@/components/OurWorkSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeStatement />
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
