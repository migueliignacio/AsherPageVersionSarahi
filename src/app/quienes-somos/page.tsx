import type { Metadata } from "next";
import { TextParallaxContent } from "@/components/ui/text-parallax-content-scroll";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import { Component as QuienesSomosHero } from "@/components/ui/connoisseur-stack-interactor";
import HowItWorks, { type Step, type StepPosition } from "@/components/ui/how-it-works";
import { phases } from "@/data/asher";

// Asher's own palette instead of the community component's orange/blue/purple.
const PHASE_COLORS = [
  { bg: "bg-[#0b1956]/10", text: "text-[#0b1956]", border: "border-[#0b1956]/20" },
  { bg: "bg-[#520000]/10", text: "text-[#520000]", border: "border-[#520000]/20" },
  { bg: "bg-[#8fb0e3]/15", text: "text-[#0b1956]", border: "border-[#8fb0e3]/30" },
];

const PROCESO_STEPS: Step[] = phases.map((phase, index) => ({
  title: phase.title,
  description: phase.description,
  colors: PHASE_COLORS[index % PHASE_COLORS.length],
}));

const PROCESO_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-0 md:left-[15%]", rotate: "rotate-8" },
  { className: "md:absolute md:top-[120px] md:right-[15%]", rotate: "-rotate-8" },
  { className: "md:absolute md:top-[450px] md:left-[15%]", rotate: "rotate-8" },
  { className: "md:absolute md:top-[570px] md:right-[10%]", rotate: "-rotate-8" },
  { className: "md:absolute md:top-[850px] md:left-[15%]", rotate: "rotate-8" },
  { className: "md:absolute md:top-[970px] md:right-[15%]", rotate: "-rotate-8" },
];

export const metadata: Metadata = {
  title: "Quiénes somos — ASHER",
  description: "Historia, misión, visión y valores de ASHER Consulting.",
};

export default function QuienesSomosPage() {
  return (
    <div className="palette-asher">
      <QuienesSomosHero eyebrow="Quiénes somos" />

      <TextParallaxContent
        id="historia"
        subheading="Historia"
        heading="Nacimos para juntar lo que anda separado."
        background="linear-gradient(150deg, #14226b 0%, #0b1956 55%, #060e2e 100%)"
      >
        <div className="mx-auto grid max-w-5xl gap-8 px-4 pb-24 pt-12 md:grid-cols-12 md:gap-10 md:pb-32">
          <TextBlockAnimation blockColor="#0b1956" className="md:col-span-4">
            <h2 className="font-display text-balance text-3xl font-semibold leading-[1.05] tracking-tight">
              Nacimos para juntar lo que normalmente anda separado.
            </h2>
          </TextBlockAnimation>
          <div className="space-y-5 md:col-span-8">
            <TextBlockAnimation blockColor="#520000" duration={0.5} delay={0.1}>
              <p className="text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-2xl">
                ASHER nace de una idea simple: una marca no crece solo con buen diseño, ni solo con estrategia, ni
                solo con papeles en regla — crece cuando todo eso avanza junto, desde el principio.
              </p>
            </TextBlockAnimation>
            <TextBlockAnimation blockColor="#0b1956" duration={0.5} delay={0.2}>
              <p className="text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-2xl">
                Por eso somos una consultora integral de marca, marketing, tecnología y protección legal. No
                trabajamos por partes sueltas; construimos, mejoramos, digitalizamos y protegemos marcas bajo un
                mismo techo, para que ningún negocio tenga que elegir entre crecer rápido o crecer bien.
              </p>
            </TextBlockAnimation>
          </div>
        </div>
      </TextParallaxContent>

      <TextParallaxContent
        id="mision"
        subheading="Nuestra misión"
        heading="Construimos marca sin fricciones."
        background="linear-gradient(150deg, #7a1f1f 0%, #520000 55%, #2e0000 100%)"
      />

      <TextParallaxContent
        id="vision"
        subheading="Nuestra visión"
        heading="Un mañana mejor, construido entre todos."
        tone="light"
        background="linear-gradient(150deg, #c3d3ef 0%, #8fb0e3 60%, #6f93cf 100%)"
      />

      <TextParallaxContent
        id="valores"
        subheading="Nuestros valores"
        heading="Todo bajo un mismo techo."
        tone="light"
        background="linear-gradient(150deg, #f2f5fb 0%, #dbe4f5 60%, #c3d3ef 100%)"
      />

      <TextParallaxContent
        id="proceso"
        subheading="Cómo trabajamos"
        heading="Diagnóstico. Estrategia. Ejecución."
        background="linear-gradient(150deg, #14226b 0%, #0b1956 55%, #060e2e 100%)"
      >
        <div className="pb-24 pt-16 md:pb-32">
          <HowItWorks steps={PROCESO_STEPS} positions={PROCESO_POSITIONS} height={1380} />
        </div>
      </TextParallaxContent>
    </div>
  );
}
