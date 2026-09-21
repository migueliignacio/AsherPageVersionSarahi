"use client";

import Link from "next/link";
import { TextParallaxContent } from "@/components/ui/text-parallax-content-scroll";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import { brand } from "@/data/asher";
import { useLeadModal } from "./LeadModalProvider";

/** Home scroll block: the hero's welcome message as a parallax card plus its call to action. */
export default function HomeIntro() {
  const { openModal } = useLeadModal();

  return (
    <TextParallaxContent
      subheading={`Bienvenido a ${brand.name}`}
      heading={brand.heroHeadline.join(" ")}
      background="linear-gradient(150deg, #14226b 0%, #0b1956 55%, #060e2e 100%)"
    >
      <div className="mx-auto grid max-w-5xl gap-8 px-4 pb-24 pt-12 md:grid-cols-12 md:gap-10 md:pb-32">
        <TextBlockAnimation blockColor="#0b1956" className="md:col-span-4">
          <h2 className="font-display text-balance text-3xl font-semibold leading-[1.05] tracking-tight">
            Integramos todo lo que tu marca necesita.
          </h2>
        </TextBlockAnimation>

        <div className="md:col-span-8">
          <TextBlockAnimation blockColor="#520000" duration={0.5} delay={0.1} className="mb-8">
            <p className="text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-2xl">{brand.heroIntro}</p>
          </TextBlockAnimation>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <button
              type="button"
              onClick={() => openModal("home-intro")}
              data-cursor="expand"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Reservar consultoría
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
            <Link
              href="/servicios"
              data-cursor="expand"
              className="inline-flex items-center gap-2 text-sm underline underline-offset-4 sm:text-base"
            >
              Ver servicios <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </TextParallaxContent>
  );
}
