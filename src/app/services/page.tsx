import type { Metadata } from "next";
import Services from "@/components/Services";
import ServicesDetail from "@/components/ServicesDetail";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Services — GLYPH Studio",
  description: "Brand, digital, campaign and content services from GLYPH Studio.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="px-6 pt-32 md:px-10 md:pt-44">
        <h1
          data-reveal
          className="font-display max-w-3xl text-4xl font-medium uppercase leading-[0.95] tracking-tight md:text-7xl"
        >
          What we do
        </h1>
      </div>
      <Services />
      <ServicesDetail />
      <Contact />
    </>
  );
}
