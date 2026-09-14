import type { Metadata } from "next";
import Studio from "@/components/Studio";
import Team from "@/components/Team";
import Culture from "@/components/Culture";
import Impact from "@/components/Impact";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Studio — GLYPH",
  description: "Meet the team behind GLYPH, an independent creative studio.",
};

export default function StudioPage() {
  return (
    <div className="pt-16">
      <Studio />
      <Team />
      <Marquee
        text="Curious • Bold • Human • Experimental • Responsible •"
        className="border-y border-[var(--color-line)] py-6"
      />
      <Culture />
      <Impact />
    </div>
  );
}
