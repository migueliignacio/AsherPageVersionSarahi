"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";

export default function Navbar() {
  const { scrollY } = useScroll();

  const logoOpacity = useTransform(scrollY, [0, 420, 620], [0, 0, 1]);
  const logoY = useTransform(scrollY, [0, 420, 620], [-12, -12, 0]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-10 md:py-6">
      <motion.div style={{ opacity: logoOpacity, y: logoY }}>
        <Link
          href="/"
          data-cursor="expand"
          aria-label="ASHER — inicio"
          className="relative h-8 w-8 md:h-10 md:w-10"
        >
          <Image
            src="/asher/asher-logo.png"
            alt="ASHER"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </motion.div>

      <div className="flex items-center gap-2">
        <Link
          href="#contacto"
          data-cursor="expand"
          className="hidden items-center gap-2 rounded-full border border-[var(--color-ink)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] md:inline-flex"
        >
          Reservar consultoría <span aria-hidden="true">→</span>
        </Link>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          data-cursor="expand"
          className="hidden h-10 w-10 place-items-center rounded-full border border-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] md:grid"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          data-cursor="expand"
          className="hidden h-10 w-10 place-items-center rounded-full border border-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] md:grid"
        >
          <LinkedinIcon />
        </a>
        <button
          type="button"
          aria-label="Buscar"
          data-cursor="expand"
          className="hidden h-10 w-10 place-items-center rounded-full border border-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] md:grid"
        >
          <Search size={16} strokeWidth={1.6} />
        </button>

        <MobileMenu />
      </div>
    </header>
  );
}
