import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackToHome from "@/components/BackToHome";
import { QuoteBlock } from "@/components/ui/quote-block";

export const metadata: Metadata = {
  title: "AS, la mascota de ASHER — Trabajos",
  description: "Cómo diseñamos a AS, el personaje de marca de ASHER Consulting.",
};

export default function MascotaAsherPage() {
  return (
    <>
      <BackToHome />

      <section className="px-5 pb-12 pt-10 md:px-10 md:pb-16">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          Trabajo — Branding
        </p>
        <h1 className="font-display max-w-3xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl">
          AS, la mascota de ASHER
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
          Antes de vender un solo servicio, ASHER tenía que explicarse a sí misma: cuatro
          disciplinas distintas —marca, digital, marketing y legal— bajo un mismo techo. Le dimos
          una cara amigable a esa idea.
        </p>
      </section>

      <div className="relative mx-auto aspect-[6/7] w-full max-w-xl overflow-hidden rounded-3xl bg-[var(--color-surface)] md:aspect-[4/5]">
        <Image
          src="/asher/trabajos/mascota-asher/cover.png"
          alt="AS, la mascota de ASHER, de cuerpo completo"
          fill
          priority
          sizes="(min-width: 768px) 576px, 90vw"
          className="object-cover"
        />
      </div>

      <section className="border-t border-[var(--color-line)] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)] md:col-span-3">
            El reto
          </p>
          <div className="space-y-5 text-sm leading-relaxed text-[var(--color-ink-soft)] md:col-span-7">
            <p>
              Contar qué hace una consultora integral en una sola imagen es difícil, sobre todo
              cuando esa consultora junta cosas que normalmente van por separado. Necesitábamos un
              símbolo que se sintiera cercano y no corporativo, capaz de aparecer igual de bien en
              una tarjeta de presentación que en una historia de Instagram.
            </p>
            <p>
              La respuesta no fue un ícono más: fue un personaje con el que la gente pudiera
              quedarse.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-20 md:px-10 md:py-28">
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          Conoce a AS
        </p>
        <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-10">
          <div className="md:col-span-7">
            <dl className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)] text-sm">
              {[
                ["Nombre", "AS"],
                ["Marca", "ASHER Consulting"],
                ["Formato", "Mascota de peluche, hecha a mano"],
                ["Personalidad", "Curioso, cercano, siempre en movimiento"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-6 py-4">
                  <dt className="text-[var(--color-ink-soft)]">{label}</dt>
                  <dd className="font-display text-right font-medium tracking-tight">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-[var(--color-surface)] md:col-span-5">
            <Image
              src="/asher/trabajos/mascota-asher/badge.png"
              alt="Retrato de AS en formato de icono"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-20 md:px-10 md:py-28">
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          Vistas
        </p>
        <p className="mb-10 max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
          Un personaje de marca tiene que sostenerse desde cualquier ángulo: de frente, de perfil,
          de espalda y en 3/4 — listo para ilustraciones, redes sociales o un futuro peluche real.
        </p>
        <div className="relative aspect-[900/230] w-full overflow-hidden rounded-2xl bg-[var(--color-surface)]">
          <Image
            src="/asher/trabajos/mascota-asher/views.png"
            alt="Vistas de frente, lado, espalda y 3/4 de AS"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] py-20 md:py-28">
        <div className="mb-10 px-5 md:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
            Personalidad
          </p>
        </div>
        <QuoteBlock
          eyebrow="Quién es AS"
          accent="#fb1b7c"
          lines={[
            { bold: "Curioso,", thin: "cercano" },
            { bold: "y siempre", thin: "en movimiento." },
          ]}
        />
        <div className="relative mx-auto aspect-[8/5] w-full max-w-2xl overflow-hidden rounded-2xl bg-[var(--color-surface)]">
          <Image
            src="/asher/trabajos/mascota-asher/action.png"
            alt="AS caminando, en pose de acción"
            fill
            sizes="(min-width: 768px) 640px, 90vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-20 md:px-10 md:py-28">
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          En cualquier pose
        </p>
        <p className="mb-10 max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
          Sentado, dormido, caminando o saltando: AS se adapta al tono de cada mensaje sin perder
          lo que lo hace reconocible.
        </p>
        <div className="relative aspect-[900/220] w-full overflow-hidden rounded-2xl bg-[var(--color-surface)]">
          <Image
            src="/asher/trabajos/mascota-asher/poses.png"
            alt="AS sentado, dormido, caminando y saltando"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-[var(--color-ink)] px-8 py-12 text-[var(--color-bg)] md:flex-row md:items-center md:justify-between md:px-12">
          <div>
            <h3 className="font-display text-2xl font-medium tracking-tight md:text-4xl">
              ¿Tu marca necesita un personaje así?
            </h3>
            <p className="mt-2 max-w-md text-sm text-[var(--color-bg)]/70">
              Diseñamos identidades, mascotas y sistemas visuales que la gente recuerda.
            </p>
          </div>
          <Link
            href="/servicios/branding"
            data-cursor="expand"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--color-bg)] px-7 py-4 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-ink)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Ver branding <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
