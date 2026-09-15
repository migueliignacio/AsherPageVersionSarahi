import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import OurWorkSection from "@/components/OurWorkSection";
import InversionCircleScrollAnimation from "@/components/ui/inversion-circle-scroll-animation";
import { marqueeItems } from "@/data/asher";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        text={`${marqueeItems.join(" ✦ ")} ✦`}
        className="border-y border-[var(--color-line)] py-6"
      />
      <About />
      <OurWorkSection />
      <InversionCircleScrollAnimation />
    </>
  );
}
