"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PILLS = [
  { label: "Nova", color: "var(--color-accent-3)", className: "left-[6%] top-[26%] -rotate-[7deg]" },
  { label: "Aura", color: "var(--color-lavender)", className: "left-[22%] bottom-[16%] rotate-[5deg]" },
  { label: "Drift", color: "var(--color-accent)", className: "right-[10%] bottom-[10%] -rotate-[4deg]" },
  { label: "Orbit", color: "var(--color-lavender)", className: "right-[16%] top-[18%] rotate-[8deg]" },
];

export default function OurWorkIntro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Wipes the headline open from the left as the section enters view.
  const clip = useTransform(scrollYProgress, [0.1, 0.85], [100, 0]);
  const clipPath = useTransform(clip, (v) => `inset(0 ${v}% 0 0)`);

  return (
    <section ref={ref} className="relative overflow-hidden px-5 py-32 md:px-10 md:py-48">
      {/* Faint three-column grid guides */}
      <div className="pointer-events-none absolute inset-0 mx-auto grid max-w-[1600px] grid-cols-3" aria-hidden="true">
        <div className="border-r border-[var(--color-line)]" />
        <div className="border-r border-[var(--color-line)]" />
        <div />
      </div>

      <p data-reveal className="relative z-20 ml-auto mb-24 max-w-sm text-sm leading-relaxed md:mb-32">
        <span className="font-medium">Our clients — </span>
        <span className="text-[var(--color-ink-soft)]">
          are founders, cultural institutions and teams building things that
          haven&rsquo;t existed before.
        </span>
      </p>

      <div className="relative mx-auto max-w-[1400px]">
        {PILLS.map((pill) => (
          <div
            key={pill.label}
            data-cursor="view"
            className={`group absolute z-0 hidden rounded-full px-8 py-5 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:rotate-0 hover:scale-105 md:block ${pill.className}`}
            style={{ background: pill.color }}
          >
            <span className="font-display text-lg font-medium tracking-tight text-[var(--color-ink)]">
              {pill.label}
            </span>
          </div>
        ))}

        <motion.h2
          style={{ clipPath }}
          className="font-display relative z-10 text-center font-medium uppercase leading-[0.85] tracking-[-0.03em] mix-blend-multiply"
        >
          <span className="block" style={{ fontSize: "clamp(3.5rem, 15vw, 14rem)" }}>
            Our work
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
