import type { Metadata } from "next";
import Insights from "@/components/Insights";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Insights — GLYPH Studio",
  description: "Ideas, essays and experiments from the GLYPH studio.",
};

export default function InsightsPage() {
  return (
    <div className="pt-16">
      <div className="px-6 pt-16 md:px-10 md:pt-28">
        <h1
          data-reveal
          className="font-display max-w-3xl text-4xl font-medium uppercase leading-[0.95] tracking-tight md:text-7xl"
        >
          Insights
        </h1>
      </div>
      <Insights />
      <Newsletter />
    </div>
  );
}
