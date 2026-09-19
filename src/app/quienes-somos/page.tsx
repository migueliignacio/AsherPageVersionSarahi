import type { Metadata } from "next";
import BackToHome from "@/components/BackToHome";
import { QuoteBlock } from "@/components/ui/quote-block";

export const metadata: Metadata = {
  title: "Quiénes somos — ASHER",
  description: "Historia, misión, visión y valores de ASHER Consulting.",
};

export default function QuienesSomosPage() {
  return (
    <>
      <BackToHome />

      <section className="px-5 pb-20 pt-6 md:px-10">
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          Quiénes somos
        </p>
        <h1 className="font-display max-w-3xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl">
          Claridad para crecer, respaldo desde el día uno.
        </h1>
      </section>

      <section id="historia" className="border-t border-[var(--color-line)] px-5 py-20 md:px-10 md:py-28">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          Historia
        </p>
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <h2 className="font-display max-w-md text-balance text-3xl font-medium leading-[1.05] tracking-tight md:col-span-5 md:text-5xl">
            Nacimos para juntar lo que normalmente anda separado.
          </h2>
          <div className="space-y-5 text-sm leading-relaxed text-[var(--color-ink-soft)] md:col-span-6 md:col-start-7">
            <p>
              ASHER nace de una idea simple: una marca no crece solo con buen diseño, ni solo con estrategia, ni
              solo con papeles en regla — crece cuando todo eso avanza junto, desde el principio.
            </p>
            <p>
              Por eso somos una consultora integral de marca, marketing, tecnología y protección legal. No
              trabajamos por partes sueltas; construimos, mejoramos, digitalizamos y protegemos marcas bajo un
              mismo techo, para que ningún negocio tenga que elegir entre crecer rápido o crecer bien.
            </p>
          </div>
        </div>
      </section>

      <section id="mision" className="border-t border-[var(--color-line)] py-20 md:py-28">
        <p className="mb-8 px-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)] md:px-10">
          Misión
        </p>
        <QuoteBlock
          eyebrow="Nuestra misión"
          accent="#3d3bff"
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
          accent="#79b826"
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
          accent="#fb1b7c"
          lines={[
            { bold: "Todo bajo", thin: "un mismo techo." },
            { bold: "Construimos", thin: "para crecer." },
            { bold: "Blindaje", thin: "desde el principio." },
            { bold: "Estrategia", thin: "que se ejecuta." },
          ]}
        />
      </section>
    </>
  );
}
