import { valueProps } from "@/data/asher";
import TextBlockAnimation from "@/components/ui/text-block-animation";

export default function About() {
  return (
    <section id="quienes-somos" className="px-5 py-16 md:px-10 md:py-24">
      <TextBlockAnimation blockColor="#8fb0e3" duration={0.5} className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          01 — Quiénes somos
        </p>
      </TextBlockAnimation>

      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <TextBlockAnimation blockColor="#0b1956" delay={0.1} className="md:col-span-7">
          <h2 className="font-display text-balance text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl">
            Claridad para crecer
          </h2>
        </TextBlockAnimation>

        <div className="space-y-5 text-sm leading-relaxed text-[var(--color-ink-soft)] md:col-span-4 md:col-start-9">
          <TextBlockAnimation blockColor="#520000" duration={0.5} delay={0.2}>
            <p>
              Somos una consultora integral de marca, marketing, tecnología y
              protección legal. Construimos, mejoramos, digitalizamos y protegemos
              marcas.
            </p>
          </TextBlockAnimation>
          <TextBlockAnimation blockColor="#0b1956" duration={0.5} delay={0.3}>
            <p>
              Con respaldo legal desde el día uno — no como último paso, sino como
              la base de todo lo que construimos contigo.
            </p>
          </TextBlockAnimation>
        </div>
      </div>

      <ul data-reveal className="mt-16 flex flex-wrap gap-3 md:mt-24">
        {valueProps.map((prop) => (
          <li
            key={prop}
            className="rounded-full border border-[var(--color-ink)]/20 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.08em]"
          >
            {prop}
          </li>
        ))}
      </ul>
    </section>
  );
}
