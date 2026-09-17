"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

// Server page components can't hand a component reference across the
// server/client boundary as a prop, so social icons are picked by key here
// instead of passed in as components.
const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
} as const;

type SocialKey = keyof typeof SOCIAL_ICONS;

interface MinimalistHeroProps {
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: SocialKey; href: string }[];
  locationText: string;
  circleClassName?: string;
  className?: string;
}

const SocialIcon = ({ href, icon }: { href: string; icon: SocialKey }) => {
  const Icon = SOCIAL_ICONS[icon];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-ink)]/60 transition-colors hover:text-[var(--color-ink)]"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
};

export const MinimalistHero = ({
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  circleClassName,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[var(--color-bg)] p-8 font-sans md:p-12",
        className
      )}
    >
      {/* No internal logo/nav header here — the global fixed <TopNav> already
          covers every page, and this hero used to render its own "ASHER"
          wordmark on top of it, colliding in the corner on both mobile and
          desktop. */}
      <div className="relative mt-16 grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:mt-0 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-[var(--color-ink)]/80 md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block text-sm font-medium text-[var(--color-ink)] underline decoration-from-font"
          >
            Leer más
          </a>
        </motion.div>

        <div className="relative order-1 md:order-2 flex h-full items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className={cn(
              "absolute z-0 h-[300px] w-[300px] rounded-full md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]",
              circleClassName ?? "bg-[var(--color-accent)]/90"
            )}
          ></motion.div>
          <motion.div
            className="relative z-10 w-56 scale-150 md:w-64 lg:w-72"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={400}
              priority
              sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, 224px"
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="font-display text-7xl font-medium tracking-tight text-[var(--color-ink)] md:text-8xl lg:text-9xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-[var(--color-ink)]/80"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
