import type { Metadata } from "next";
import { TextParallaxContent } from "@/components/ui/text-parallax-content-scroll";
import { QuoteBlock } from "@/components/ui/quote-block";
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

      <section id="mision" className="border-t border-[var(--color-line)] py-20 md:py-28">
        <p className="mb-8 px-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)] md:px-10">
          Misión
        </p>
        <QuoteBlock
          eyebrow="Nuestra misión"
          accent="#0b1956"
          lines={[
            { bold: "Construimos marca", thin: "sin fricciones," },
            { bold: "con respaldo legal", thin: "desde el día uno —" },
            { bold: "no como", thin: "último paso." },
          ]}
        />
      </section>

      <section id="vision" className="border-t border-[var(--color-line)] py-20 md:py-28">
        <p className="mb-8 px-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)] md:px-10">
          Visión
        </p>
        <QuoteBlock
          eyebrow="Nuestra visión"
          accent="#520000"
          lines={[
            { bold: "Un mañana mejor,", thin: "construido entre todos." },
            { bold: "Cinco disciplinas,", thin: "un solo equipo detrás de cada marca." },
          ]}
        />
      </section>

      <section id="valores" className="border-t border-[var(--color-line)] py-20 md:py-28">
        <p className="mb-8 px-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)] md:px-10">
          Valores
        </p>
        <QuoteBlock
          eyebrow="Nuestros valores"
          accent="#0b1956"
          lines={[
            { bold: "Todo bajo", thin: "un mismo techo." },
            { bold: "Construimos", thin: "para crecer." },
            { bold: "Blindaje", thin: "desde el principio." },
            { bold: "Estrategia", thin: "que se ejecuta." },
          ]}
        />
      </section>

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
