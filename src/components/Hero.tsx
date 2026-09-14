"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Blob from "./Blob";
import { brand } from "@/data/asher";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Progress runs 0 → 1 while the tall wrapper scrolls past a pinned viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The wordmark shrinks toward the top-left header slot. transformOrigin is
  // pinned to "left top" so scale and translate converge on the same point
  // instead of fighting each other; the final crossfade hands off to the
  // Navbar's mini logo, which fades in over the same scroll range.
  const scale = useTransform(scrollYProgress, [0, 0.72], [1, 0.11]);
  const x = useTransform(scrollYProgress, [0, 0.72], ["0%", "1.5%"]);
  const y = useTransform(scrollYProgress, [0, 0.72], ["0%", "-6%"]);
  const markOpacity = useTransform(scrollYProgress, [0, 0.6, 0.74], [1, 1, 0]);

  const copyOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.28], [0, -40]);

  // Warm blob recedes as the violet one rises — the brand's colour turn.
  const warmOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const warmY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const violetOpacity = useTransform(scrollYProgress, [0.35, 0.85], [0, 1]);
  const violetY = useTransform(scrollYProgress, [0.35, 1], ["24%", "-4%"]);

  return (
    <section ref={ref} className="relative h-[220svh]">
      <div className="sticky top-0 flex h-svh flex-col justify-between overflow-hidden">
        <motion.div style={{ opacity: warmOpacity, y: warmY }} className="absolute inset-0">
          <Blob
            from="#ffd9c9"
            to="#ff8a5c"
            className="left-[-14%] top-[-10%] h-[70vh] w-[70vh] md:h-[88vh] md:w-[88vh]"
            blur="70px"
          />
        </motion.div>

        <motion.div style={{ opacity: violetOpacity, y: violetY }} className="absolute inset-0">
          <Blob
            from="#d9d5f7"
            to="#6d5bc4"
            className="left-1/2 top-[-24%] h-[62vh] w-[62vh] -translate-x-1/2 md:h-[80vh] md:w-[80vh]"
            blur="80px"
            delay="-7s"
          />
        </motion.div>

        {/* Giant wordmark — acts as the page header until it collapses. */}
        <motion.div
          style={{ scale, x, y, opacity: markOpacity, transformOrigin: "left top" }}
          className="relative z-10 select-none px-5 pt-20 leading-[0.78] md:px-10 md:pt-24"
        >
          <p
            aria-hidden="true"
            className="font-display block whitespace-nowrap font-medium tracking-[-0.04em]"
            style={{ fontSize: "clamp(5rem, 26vw, 26rem)" }}
          >
            <span className="font-serif-italic italic">A</span>sher
            <span className="align-super text-[0.14em] tracking-normal">™</span>
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: copyOpacity, y: copyY }}
          className="relative z-10 mx-auto max-w-2xl px-6 pb-32 text-center md:pb-40"
        >
          <h1 className="font-display text-balance text-2xl font-medium leading-tight tracking-tight md:text-4xl">
            {brand.heroHeadline}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-[var(--color-ink-soft)] md:text-base">
            {brand.heroSub}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
