"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  Target,
  Eye,
  HeartHandshake,
  PenTool,
  Globe,
  Scale,
  Tag,
  Megaphone,
} from "lucide-react";

type SubItem = {
  label: string;
  description: string;
  icon: React.ElementType;
  href: string;
};

type NavItem = {
  id: number;
  label: string;
  href?: string;
  subMenus?: { title: string; items: SubItem[] }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    label: "Quiénes somos",
    subMenus: [
      {
        title: "Nuestra empresa",
        items: [
          { label: "Historia", description: "Cómo llegamos hasta aquí", icon: BookOpen, href: "/#construye-con-intencion" },
          { label: "Misión", description: "Por qué existimos", icon: Target, href: "/#construye-con-intencion" },
          { label: "Visión", description: "Hacia dónde vamos", icon: Eye, href: "/#construye-con-intencion" },
          { label: "Valores", description: "Cómo trabajamos", icon: HeartHandshake, href: "/#construye-con-intencion" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Servicios",
    subMenus: [
      {
        title: "Lo que hacemos",
        items: [
          { label: "Branding", description: "Identidad de marca", icon: PenTool, href: "/servicios" },
          { label: "Digital Web", description: "Sitios y productos digitales", icon: Globe, href: "/servicios" },
          { label: "Legal", description: "Respaldo desde el día uno", icon: Scale, href: "/servicios" },
          { label: "Marca", description: "Estrategia y posicionamiento", icon: Tag, href: "/servicios" },
          { label: "Marketing", description: "Campañas y contenido", icon: Megaphone, href: "/servicios" },
        ],
      },
    ],
  },
  { id: 3, label: "Proceso", href: "/proceso" },
  { id: 4, label: "Trabajos", href: "/trabajos" },
  { id: 5, label: "Planes", href: "/planes" },
  { id: 6, label: "Contacto", href: "/contacto" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [openId, setOpenId] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close any open dropdown on navigation — adjusted during render (not an
  // effect) per React's guidance for state that depends on a prop change.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (openId !== null) setOpenId(null);
  }

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpenId(null);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 md:bottom-8"
    >
      <nav
        aria-label="Navegación"
        className="pointer-events-auto flex flex-wrap items-center justify-center gap-1 rounded-[28px] border border-white/10 bg-[var(--color-ink)]/85 p-1.5 backdrop-blur-md sm:flex-nowrap sm:rounded-full"
      >
        {NAV_ITEMS.map((item) => {
          const isOpen = openId === item.id;

          if (item.subMenus) {
            return (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  data-cursor="expand"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-[0.66rem] font-medium uppercase tracking-[0.1em] transition-colors duration-300 sm:px-4 sm:text-xs ${
                    isOpen ? "bg-[var(--color-bg)] text-[var(--color-ink)]" : "text-[var(--color-bg)]/55 hover:text-[var(--color-bg)]"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <div className="absolute bottom-full left-1/2 mb-3 w-max max-w-[88vw] -translate-x-1/2">
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="rounded-2xl border border-white/10 bg-[var(--color-ink)] p-4 shadow-xl"
                      >
                        {item.subMenus.map((sub) => (
                          <div key={sub.title}>
                            <h3 className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-[var(--color-bg)]/45">
                              {sub.title}
                            </h3>
                            <ul className="space-y-3">
                              {sub.items.map((sub2) => {
                                const Icon = sub2.icon;
                                return (
                                  <li key={sub2.label}>
                                    <a
                                      href={sub2.href}
                                      data-cursor="expand"
                                      onClick={() => setOpenId(null)}
                                      className="group flex items-start gap-3"
                                    >
                                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-[var(--color-bg)]/25 text-[var(--color-bg)] transition-colors duration-300 group-hover:bg-[var(--color-bg)] group-hover:text-[var(--color-ink)]">
                                        <Icon className="h-4 w-4" />
                                      </div>
                                      <div className="w-max leading-5">
                                        <p className="text-sm font-medium text-[var(--color-bg)]">{sub2.label}</p>
                                        <p className="text-xs text-[var(--color-bg)]/50 transition-colors duration-300 group-hover:text-[var(--color-bg)]/75">
                                          {sub2.description}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href!}
              data-cursor="expand"
              aria-current={isActive ? "true" : undefined}
              className={`rounded-full px-3 py-2 text-[0.66rem] font-medium uppercase tracking-[0.1em] transition-colors duration-300 sm:px-4 sm:text-xs ${
                isActive ? "bg-[var(--color-bg)] text-[var(--color-ink)]" : "text-[var(--color-bg)]/55 hover:text-[var(--color-bg)]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
