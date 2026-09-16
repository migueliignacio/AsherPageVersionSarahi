"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { brand, disciplines } from "@/data/asher";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative overflow-hidden bg-[var(--color-violet)] text-[var(--color-bg)]"
    >
      <motion.div
        className="grid gap-12 px-5 pb-56 pt-20 md:grid-cols-12 md:gap-10 md:px-10 md:pb-72 md:pt-24"
        variants={containerVariants}
      >
        <motion.div
          className="space-y-5 text-sm leading-relaxed text-[var(--color-bg)]/80 md:col-span-4"
          variants={itemVariants}
        >
          <div className="relative h-12 w-12">
            <Image
              src="/asher/asher-logo.png"
              alt="ASHER"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-medium text-[var(--color-bg)]">{brand.tagline}</p>
          <p>
            Consultora integral de marca, marketing, tecnología y protección
            legal. Construimos, mejoramos, digitalizamos y protegemos marcas —
            todo bajo un mismo techo.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {disciplines.map((d) => (
              <span
                key={d.title}
                className="rounded-full border border-[var(--color-bg)]/25 px-3 py-1.5 text-xs"
              >
                {d.title}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div className="space-y-8 text-sm md:col-span-3 md:col-start-6" variants={itemVariants}>
          <div>
            <h2 className="mb-2 font-medium">Contacto</h2>
            <p className="leading-relaxed text-[var(--color-bg)]/70">
              <a href={`mailto:${brand.email}`} data-cursor="expand" className="hover:text-[var(--color-bg)]">
                {brand.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-medium">Conecta</h2>
            <div className="flex gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                data-cursor="expand"
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-bg)]/40 text-sm transition-colors duration-300 hover:bg-[var(--color-bg)] hover:text-[var(--color-violet)]"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                data-cursor="expand"
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-bg)]/40 text-sm transition-colors duration-300 hover:bg-[var(--color-bg)] hover:text-[var(--color-violet)]"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-2 text-[var(--color-bg)]/70">
            <Link href="/privacidad" data-cursor="expand" className="hover:text-[var(--color-bg)]">
              Política de Privacidad
            </Link>
            <Link href="/terminos" data-cursor="expand" className="hover:text-[var(--color-bg)]">
              Términos de Uso
            </Link>
            <Link href="/contacto" data-cursor="expand" className="hover:text-[var(--color-bg)]">
              Contacto
            </Link>
          </nav>
        </motion.div>

        <motion.div className="text-sm md:col-span-4 md:col-start-9" variants={itemVariants}>
          <h2 className="mb-3">
            <span className="font-medium">Mantente cerca — </span>
            <span className="text-[var(--color-bg)]/70">
              de vez en cuando enviamos notas sobre marca, crecimiento y blindaje
              legal.
            </span>
          </h2>

          <form className="mt-5 flex items-center gap-2 rounded-full bg-[var(--color-violet-deep)] p-1.5 pl-5">
            <label htmlFor="footer-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Correo electrónico"
              className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-[var(--color-bg)]/45"
            />
            <button
              type="submit"
              data-cursor="expand"
              className="shrink-0 rounded-full bg-[var(--color-bg)]/15 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-300 hover:bg-[var(--color-bg)] hover:text-[var(--color-violet)]"
            >
              Unirme <span aria-hidden="true">→</span>
            </button>
          </form>
        </motion.div>
      </motion.div>

      {/* Ghost wordmark: oversized, clipped by the viewport, sits behind content. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 select-none" aria-hidden="true">
        <span
          className="font-display block whitespace-nowrap px-3 font-medium leading-[0.72] tracking-[-0.04em] text-[var(--color-bg)]/12"
          style={{ fontSize: "clamp(6rem, 30vw, 26rem)" }}
        >
          <span className="font-serif-italic italic">A</span>sher
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-2 px-5 pb-24 text-xs text-[var(--color-bg)]/55 md:flex-row md:items-center md:justify-between md:px-10 md:pb-28">
        <p>{brand.copyright}</p>
        <p>{brand.disciplines}</p>
      </div>
    </motion.footer>
  );
}
