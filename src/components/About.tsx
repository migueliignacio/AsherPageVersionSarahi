import { valueProps } from "@/data/asher";
import TextBlockAnimation from "@/components/ui/text-block-animation";

/** Body copy that follows the "Quiénes somos" parallax card. */
export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 md:pb-32">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <TextBlockAnimation blockColor="#0b1956" className="md:col-span-4">
          <h2 className="font-display text-balance text-3xl font-semibold leading-[1.05] tracking-tight">
            Una consultora integral.
          </h2>
        </TextBlockAnimation>

        <div className="space-y-5 md:col-span-8">
          <TextBlockAnimation blockColor="#520000" duration={0.5} delay={0.1}>
            <p className="text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-2xl">
              Somos una consultora integral de marca, marketing, tecnología y protección legal. Construimos,
              mejoramos, digitalizamos y protegemos marcas.
            </p>
          </TextBlockAnimation>
          <TextBlockAnimation blockColor="#0b1956" duration={0.5} delay={0.2}>
            <p className="text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-2xl">
              Con respaldo legal desde el día uno — no como último paso, sino como la base de todo lo que
              construimos contigo.
            </p>
          </TextBlockAnimation>
        </div>
      </div>

      <ul data-reveal className="mt-14 flex flex-wrap gap-3 md:mt-20">
        {valueProps.map((prop) => (
          <li
            key={prop}
            className="rounded-full border border-[var(--color-ink)]/20 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.08em]"
          >
            {prop}
          </li>
        ))}
      </ul>
    </div>
  );
}
