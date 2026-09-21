import Image from "next/image";
import Link from "next/link";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import { serviceAddons, serviceOrder } from "@/data/service-addons";

const summaries: Record<string, string> = {
  branding: "Identidad con sentido y proyección.",
  "digital-web": "Experiencias que impulsan tu crecimiento.",
  legal: "Tu proyecto, bien protegido.",
  marketing: "Ideas que conectan y generan valor.",
};

/** Placeholder collage until the real photo is supplied: card, navy paper and a maroon drape. */
function Collage() {
  return (
    <div aria-hidden="true" className="relative h-[340px] w-full overflow-hidden md:h-full md:min-h-[520px]">
      <div
        className="absolute -right-[12%] top-[8%] h-[120%] w-[62%] bg-[var(--color-navy)]"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)", top: "22%" }}
      />
      <div
        className="absolute -right-[8%] -top-[6%] h-[80%] w-[38%] rounded-bl-[70%] bg-[#520000]"
        style={{ boxShadow: "inset 18px 0 40px rgba(0,0,0,0.25)" }}
      />
      <div
        className="absolute left-[14%] top-[-6%] h-[78%] w-[52%] rotate-[24deg] bg-white shadow-[0_30px_60px_-20px_rgba(6,14,46,0.45)]"
      >
        <Image
          src="/asher/logos/asher-consulting.png"
          alt=""
          fill
          sizes="(min-width: 768px) 30vw, 60vw"
          className="-rotate-[24deg] scale-[0.8] object-contain mix-blend-multiply"
        />
      </div>
      <p className="absolute bottom-[10%] right-[6%] max-w-[9rem] font-mono text-[10px] uppercase leading-relaxed tracking-[0.25em] text-[var(--color-bg)]/80">
        Estrategia que te acompaña de verdad.
      </p>
    </div>
  );
}

/** Statement block that follows the hero scroll: message and call to action, then the four services. */
export default function HomeStatement() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
      <div className="grid overflow-hidden md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 flex flex-col justify-center py-14 md:py-24 md:pr-10">
          <div className="mb-8 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-ink-soft)] md:mb-10 md:text-xs">
            <span className="h-px w-10 bg-[var(--color-ink)]/60" aria-hidden="true" />
            Estrategia · Marca · Digital · Legal
          </div>

          <TextBlockAnimation blockColor="#0b1956">
            <h2
              className="text-[2.9rem] font-normal leading-[1.02] tracking-tight text-[var(--color-navy)] md:text-[5.2rem]"
              style={{ fontFamily: "var(--font-serif-italic)" }}
            >
              No cambiamos lo que eres. <em>Lo aclaramos.</em>
            </h2>
          </TextBlockAnimation>

          <TextBlockAnimation blockColor="#8fb0e3" duration={0.5} delay={0.15} className="mt-7 max-w-md">
            <p className="text-lg leading-snug text-[var(--color-ink-soft)] md:text-xl">
              Estrategia, marca, marketing, digital y protección legal en una sola dirección.
            </p>
          </TextBlockAnimation>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/quienes-somos"
              data-cursor="expand"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--color-navy)] px-7 py-4 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Descubrir Asher <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/servicios"
              data-cursor="expand"
              className="inline-flex items-center rounded-full border border-[var(--color-navy)] px-7 py-4 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-navy)] transition-colors duration-300 hover:bg-[var(--color-navy)] hover:text-[var(--color-bg)]"
            >
              Ver servicios
            </Link>
          </div>

          <div className="mt-10 flex items-start gap-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.25em] text-[var(--color-ink-soft)]">
            <span className="mt-2 h-px w-10 shrink-0 bg-[var(--color-ink)]/60" aria-hidden="true" />
            <p>
              Ideas más claras.
              <br />
              Marcas más fuertes.
            </p>
          </div>
        </div>

        <Collage />
      </div>

      <ul className="grid grid-cols-2 border-t border-[var(--color-line)] md:grid-cols-4">
        {serviceOrder.map((slug) => (
          <li
            key={slug}
            className="border-b border-[var(--color-line)] px-2 py-7 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
          >
            <Link href={`/servicios/${slug}`} data-cursor="expand" className="group block">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]">
                {serviceAddons[slug].label}
              </p>
              <span className="my-3 block h-px w-8 bg-[var(--color-ink)]/50 transition-all duration-300 group-hover:w-14" />
              <p className="max-w-[14rem] text-sm leading-snug text-[var(--color-ink-soft)]">{summaries[slug]}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
