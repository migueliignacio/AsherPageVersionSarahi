"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CinematicItem {
  id: string;
  title: string;
  /** Small label above the title (e.g. the areas worked on). */
  kicker: string;
  description: string;
  image: string;
  href: string;
  /** Brand colours, shown as dots. */
  colors: string[];
  /** What was delivered, shown as chips. */
  tags: string[];
  /** Overview-card background, in that project's own palette. */
  background: string;
  /** "dark" = white text/pill on the card, "light" = navy. */
  tone: "dark" | "light";
}

export interface CinematicSectionProps {
  eyebrow: string;
  titleFirst: string;
  titleRest: string;
  description: string;
  items: CinematicItem[];
  paletteLabel?: string;
  tagsLabel?: string;
  actionLabel?: string;
  overviewLabel?: string;
  overviewLinkLabel?: string;
  overviewLinkHref?: string;
  detailLabel?: string;
}

/** Tile with the logo in full colour on a background from that project's own palette. */
function OverviewCard({ item, detailLabel }: { item: CinematicItem; detailLabel: string }) {
  const onDark = item.tone === "dark";

  return (
    <div className="group relative block h-full w-full overflow-hidden rounded-3xl border border-[var(--color-line)] transition-colors duration-700 hover:border-[var(--color-ink)]/50">
      <div className="relative aspect-[3/4] w-full overflow-hidden" style={{ background: item.background }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 300px"
        />

        <div className="absolute bottom-6 left-1/2 z-30 w-fit -translate-x-1/2 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            href={item.href}
            data-cursor="expand"
            className={cn(
              "block cursor-pointer whitespace-nowrap rounded-full px-3 py-1.5 text-[8px] font-medium uppercase tracking-normal shadow-xl backdrop-blur-md transition-colors duration-300 sm:px-8 sm:py-3 sm:text-[10px]",
              onDark ? "bg-white/90 text-[var(--color-navy)] hover:bg-white" : "bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-deep)]"
            )}
          >
            {detailLabel}
          </Link>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center p-3 text-center sm:p-6 md:p-8">
        <span className="mb-1 text-[8px] font-light uppercase tracking-[0.4em] text-[var(--color-ink-soft)] sm:mb-3 sm:text-[9px]">
          {item.kicker}
        </span>
        <h4 className="line-clamp-2 w-full text-xs font-normal uppercase tracking-widest text-[var(--color-ink)] sm:text-sm md:text-base">
          {item.title}
        </h4>
      </div>

      <div className="absolute left-0 top-0 h-px w-8 bg-[var(--color-ink)]/30 opacity-0 transition-opacity delay-100 duration-700 group-hover:opacity-100" />
      <div className="absolute left-0 top-0 h-8 w-px bg-[var(--color-ink)]/30 opacity-0 transition-opacity delay-100 duration-700 group-hover:opacity-100" />
      <div className="absolute right-0 top-0 h-px w-8 bg-[var(--color-ink)]/30 opacity-0 transition-opacity delay-100 duration-700 group-hover:opacity-100" />
      <div className="absolute right-0 top-0 h-8 w-px bg-[var(--color-ink)]/30 opacity-0 transition-opacity delay-100 duration-700 group-hover:opacity-100" />
    </div>
  );
}

/**
 * One full-height scene per item. On desktop it pins while a coloured copy of the
 * picture wipes in over the grayscale one and the details step in; on mobile the
 * wipe follows the scroll left to right.
 */
function ItemHero({
  item,
  reversed,
  paletteLabel,
  tagsLabel,
  actionLabel,
}: {
  item: CinematicItem;
  reversed: boolean;
  paletteLabel: string;
  tagsLabel: string;
  actionLabel: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const mask = section.querySelector<HTMLElement>(".color-mask");
      const mobile = window.innerWidth < 768;

      let progress = 0;
      if (mobile) {
        const startReveal = windowHeight;
        const endReveal = windowHeight * 0.25;
        progress = (startReveal - rect.top) / (startReveal - endReveal);
      } else if (rect.top <= 0) {
        const total = rect.height - windowHeight;
        if (total > 0) progress = Math.abs(rect.top) / total;
      }
      progress = Math.min(Math.max(progress, 0), 1);

      if (mask) {
        mask.style.clipPath = mobile
          ? `inset(0 ${100 - progress * 100}% 0 0)`
          : `inset(0 0 ${100 - progress * 100}% 0)`;
      }

      section.querySelectorAll(".reveal-step").forEach((step) => {
        const start = parseFloat(step.getAttribute("data-progress") || "0");
        step.classList.toggle("active", progress > start);
      });
    };

    handleScroll();
    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const step =
    "reveal-step opacity-0 translate-y-12 transition-all duration-1000 ease-out [&.active]:translate-y-0 [&.active]:opacity-100";

  return (
    <div ref={sectionRef} className="relative h-auto w-full md:h-[200vh]">
      <div className="relative h-auto w-full overflow-hidden md:sticky md:top-0 md:h-screen md:pt-14">
        <div className="grid h-auto w-full grid-cols-1 md:h-full md:grid-cols-2">
          <div
            className={`relative mx-auto flex w-full max-w-[400px] items-center justify-center p-3 sm:max-w-[480px] sm:p-8 md:max-w-none md:p-8 ${
              reversed ? "md:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white md:aspect-auto md:h-full">
              <Image src={item.image} alt={item.title} fill className="object-contain p-8 grayscale brightness-110 md:p-16" sizes="(min-width: 768px) 50vw, 90vw" />
              <div className="color-mask absolute inset-0 h-full w-full will-change-[clip-path]" style={{ clipPath: "inset(0 0 100% 0)" }}>
                <Image src={item.image} alt="" aria-hidden="true" fill className="object-contain p-8 md:p-16" sizes="(min-width: 768px) 50vw, 90vw" />
              </div>
            </div>
          </div>

          <div className={`relative z-20 flex items-center justify-center px-6 py-5 md:p-12 ${reversed ? "md:order-1" : ""}`}>
            <div className="flex w-full max-w-sm flex-col gap-6 md:max-w-md md:gap-10">
              <div className={step} data-progress="0.2">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-ink-soft)]">{item.kicker}</p>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-ink)] md:text-5xl">{item.title}</h2>
              </div>

              <div className={step} data-progress="0.4">
                <p className="border-t border-[var(--color-line)] pt-6 text-sm leading-relaxed text-[var(--color-ink-soft)] md:text-base">
                  {item.description}
                </p>
              </div>

              <div className={`${step} grid grid-cols-2 gap-4 sm:gap-8`} data-progress="0.6">
                <div>
                  <span className="mb-3 block text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">{paletteLabel}</span>
                  <div className="flex flex-wrap gap-2.5">
                    {item.colors.map((color) => (
                      <div key={color} className="h-6 w-6 rounded-full border border-[var(--color-line)] shadow-inner" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div>
                  <span className="mb-3 block text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">{tagsLabel}</span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-[var(--color-ink)]">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`${step} pt-8`} data-progress="0.8">
                <Link
                  href={item.href}
                  data-cursor="expand"
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--color-navy)] text-xs font-medium uppercase text-[var(--color-bg)] transition-colors duration-300 hover:bg-[var(--color-navy-deep)]"
                >
                  <span className="tracking-widest">{actionLabel}</span>
                  <ArrowUpRight width={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const line = { hidden: { y: "110%" }, shown: { y: 0 } };

export function Component({
  eyebrow,
  titleFirst,
  titleRest,
  description,
  items,
  paletteLabel = "PALETA",
  tagsLabel = "SERVICIOS",
  actionLabel = "Ver servicio",
  overviewLabel = "RESUMEN",
  overviewLinkLabel = "Hablemos",
  overviewLinkHref = "/contacto",
  detailLabel = "Ver servicio",
}: CinematicSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByOneCard = () => {
    scrollerRef.current?.scrollBy({ left: scrollerRef.current.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-transparent text-[var(--color-ink)] antialiased selection:bg-[var(--color-navy)] selection:text-[var(--color-bg)]">
      {/* Intro */}
      <section className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[50%] w-[50%] animate-pulse rounded-full bg-[var(--color-navy)]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[60%] w-[60%] rounded-full bg-[#8fb0e3]/15 blur-[150px]" />

        <motion.div
          initial="hidden"
          animate="shown"
          transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
          className="relative z-10 -mt-10 flex w-full flex-col items-center justify-center px-6 text-center md:-mt-24"
        >
          <div className="mb-4 flex w-full justify-center overflow-hidden md:mb-6">
            <motion.span variants={line} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="block ps-[0.3em] text-[9px] font-black uppercase tracking-[0.3em] text-[var(--color-ink-soft)] md:ps-[0.8em] md:text-[10px] md:tracking-[0.8em]">
              {eyebrow}
            </motion.span>
          </div>

          <h1 className="font-display flex w-full flex-col items-center justify-center text-center text-5xl font-black leading-[0.9] tracking-tighter sm:text-6xl md:text-[8rem] lg:text-[10rem]">
            <span className="flex w-full justify-center overflow-hidden">
              <motion.span variants={line} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="block">
                {titleFirst}
              </motion.span>
            </span>
            <span className="mt-2 flex w-full justify-center overflow-hidden">
              <motion.span variants={line} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="block font-light italic text-[var(--color-ink-soft)]">
                {titleRest}
              </motion.span>
            </span>
          </h1>

          <div className="mt-6 flex w-full justify-center overflow-hidden md:mt-12">
            <motion.p variants={line} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="max-w-lg text-center text-sm font-light leading-relaxed tracking-wide text-[var(--color-ink-soft)] md:text-base">
              {description}
            </motion.p>
          </div>
        </motion.div>

        <div className="absolute bottom-8 flex flex-col items-center gap-4 md:bottom-12">
          <div className="relative h-12 w-px overflow-hidden bg-[var(--color-ink)]/10 md:h-20">
            <motion.div
              className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-transparent via-[var(--color-ink)]/50 to-transparent"
              animate={{ y: ["-100%", "220%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[9px] font-bold tracking-normal text-[var(--color-ink)]/40">DESLIZA</span>
        </div>
      </section>

      {items.map((item, index) => (
        <ItemHero
          key={item.id}
          item={item}
          reversed={index % 2 !== 0}
          paletteLabel={paletteLabel}
          tagsLabel={tagsLabel}
          actionLabel={actionLabel}
        />
      ))}

      {/* Overview */}
      <div className="w-full border-t border-[var(--color-line)] bg-transparent pb-4 pt-12 md:pb-6 md:pt-16">
        <div className="mx-auto w-full max-w-7xl px-2">
          <div className="mb-8 flex items-end justify-between border-b border-[var(--color-line)] pb-4">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">{overviewLabel}</span>
            <Link
              href={overviewLinkHref}
              data-cursor="expand"
              className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[var(--color-ink)] transition-colors hover:text-[var(--color-ink-soft)]"
            >
              <span className="tracking-[0.2em]">{overviewLinkLabel}</span>
              <ArrowDown className="h-3.5 w-3.5 -rotate-90 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="relative">
            <div
              ref={scrollerRef}
              className="no-scrollbar flex snap-x snap-mandatory justify-start gap-4 overflow-x-auto pb-8 md:justify-center md:gap-8"
            >
              {items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 90, damping: 11, delay: i * 0.15 }}
                  className="w-[42%] min-w-[42%] max-w-[42%] flex-shrink-0 cursor-pointer snap-center sm:w-[calc(33.333%-11px)] sm:min-w-[calc(33.333%-11px)] sm:max-w-[calc(33.333%-11px)] md:w-[260px] md:min-w-[260px] md:max-w-[280px]"
                >
                  <OverviewCard item={item} detailLabel={detailLabel} />
                </motion.div>
              ))}
            </div>

            {/* Mobile only: the peeking 3rd card already hints there's more,
                but back it up with a fade and a tap-to-advance arrow — from
                the sm breakpoint up, three full cards already show at once. */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-[var(--color-bg)] to-transparent sm:hidden"
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={scrollByOneCard}
              aria-label="Ver más proyectos"
              className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 animate-pulse items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-bg)] text-[var(--color-ink)] shadow-md sm:hidden"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
