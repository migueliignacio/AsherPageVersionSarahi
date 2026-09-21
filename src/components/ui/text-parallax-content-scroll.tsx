"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const IMG_PADDING = 12;
/** Space kept clear above the sticky card for the fixed nav bar. */
const NAV_OFFSET = 60;

export type ParallaxTone = "dark" | "light";

export interface TextParallaxContentProps {
  subheading: string;
  heading: string;
  /** CSS background of the sticky card (a palette colour or gradient). */
  background: string;
  /** "dark" = cream copy on a dark card, "light" = navy copy on a light card. */
  tone?: ParallaxTone;
  /** Optional picture shown on the right half of the card (md and up). */
  imgUrl?: string;
  imgAlt?: string;
  /** How the picture fills its frame: photos cover, logos are contained on white. */
  imgFit?: "cover" | "contain";
  /** Anchor id, so nav links can jump straight to this block. */
  id?: string;
  children?: ReactNode;
}

/**
 * A sticky card that shrinks and fades away while its title floats through
 * on a parallax, followed by the block's own content.
 */
export function TextParallaxContent({
  subheading,
  heading,
  background,
  tone = "dark",
  imgUrl,
  imgAlt = "",
  imgFit = "cover",
  id,
  children,
}: TextParallaxContentProps) {
  return (
    <div id={id} className="scroll-mt-16" style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyCard background={background} tone={tone} imgUrl={imgUrl} imgAlt={imgAlt} imgFit={imgFit} />
        <OverlayCopy heading={heading} subheading={subheading} tone={tone} withImage={Boolean(imgUrl)} />
      </div>
      {children}
    </div>
  );
}

function StickyCard({
  background,
  tone,
  imgUrl,
  imgAlt,
  imgFit,
}: {
  background: string;
  tone: ParallaxTone;
  imgUrl?: string;
  imgAlt: string;
  imgFit: "cover" | "contain";
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        background,
        height: `calc(100vh - ${NAV_OFFSET + IMG_PADDING}px)`,
        top: NAV_OFFSET,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        aria-hidden="true"
        className={cn("absolute inset-0", tone === "dark" ? "bg-[#060e2e]/45" : "bg-[#f7f4ed]/40")}
        style={{ opacity }}
      />
      {imgUrl && (
        <div className={cn("absolute inset-4 overflow-hidden rounded-2xl opacity-35 md:inset-y-6 md:left-auto md:right-6 md:w-[46%] md:opacity-100", imgFit === "contain" && "bg-white")}>
          <Image src={imgUrl} alt={imgAlt} fill sizes="(min-width: 768px) 46vw, 100vw" className={imgFit === "contain" ? "object-contain p-8 md:p-16" : "object-cover object-center"} />
        </div>
      )}
    </motion.div>
  );
}

function OverlayCopy({
  subheading,
  heading,
  tone,
  withImage,
}: {
  subheading: string;
  heading: string;
  tone: ParallaxTone;
  withImage: boolean;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity, paddingTop: NAV_OFFSET }}
      className={cn(
        "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center px-6 text-center",
        tone === "dark" ? "text-[#f7f4ed]" : "text-[var(--color-navy)]",
        withImage && "md:items-start md:pl-16 md:pr-[50%] md:text-left lg:pl-24"
      )}
    >
      <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.25em] md:mb-4 md:text-base md:tracking-[0.3em] md:[text-align:inherit]">
        {subheading}
      </p>
      <p className="font-display text-balance text-center text-4xl font-semibold leading-[1.02] tracking-tight md:text-7xl md:[text-align:inherit]">
        {heading}
      </p>
    </motion.div>
  );
}
