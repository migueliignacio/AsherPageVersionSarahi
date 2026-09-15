"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, BookOpen, Target, Eye, HeartHandshake } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { useLeadModal } from "./LeadModalProvider";
import MegaMenu, { type MegaMenuItem } from "./ui/mega-menu";

const NAV_ITEMS: MegaMenuItem[] = [
  {
    id: 1,
    label: "Quiénes somos",
    subMenus: [
      {
        title: "Nuestra empresa",
        items: [
          {
            label: "Historia",
            description: "Cómo llegamos hasta aquí",
            icon: BookOpen,
            href: "/#construye-con-intencion",
          },
          {
            label: "Misión",
            description: "Por qué existimos",
            icon: Target,
            href: "/#construye-con-intencion",
          },
          {
            label: "Visión",
            description: "Hacia dónde vamos",
            icon: Eye,
            href: "/#construye-con-intencion",
          },
          {
            label: "Valores",
            description: "Cómo trabajamos",
            icon: HeartHandshake,
            href: "/#construye-con-intencion",
          },
        ],
      },
    ],
  },
  { id: 2, label: "Servicios", href: "/servicios" },
  { id: 3, label: "Proceso", href: "/proceso" },
  { id: 4, label: "Visión", href: "/vision" },
  { id: 5, label: "Planes", href: "/planes" },
  { id: 6, label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const { openModal } = useLeadModal();

  const logoOpacity = useTransform(scrollY, [0, 420, 620], [0, 0, 1]);
  const logoY = useTransform(scrollY, [0, 420, 620], [-12, -12, 0]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-10 md:py-6">
      <div className="flex items-center gap-6">
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

        <MegaMenu items={NAV_ITEMS} className="hidden lg:flex" />
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => openModal("navbar")}
          data-cursor="expand"
          className="hidden items-center gap-2 rounded-full border border-[var(--color-ink)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] md:inline-flex"
        >
          Reservar consultoría <span aria-hidden="true">→</span>
        </button>

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
