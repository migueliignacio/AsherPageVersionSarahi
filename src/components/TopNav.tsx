"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SlideTabs, type SlideTabItem } from "@/components/ui/slide-tabs";
import { InstagramIcon, FacebookIcon, TiktokIcon, WhatsappIcon } from "./SocialIcons";
import { useLeadModal } from "./LeadModalProvider";
import CartButton from "./CartButton";
import { brand } from "@/data/asher";

const SOCIAL_LINKS = [
  { icon: InstagramIcon, href: brand.socialLinks.instagram, label: "Instagram" },
  { icon: FacebookIcon, href: brand.socialLinks.facebook, label: "Facebook" },
  { icon: TiktokIcon, href: brand.socialLinks.tiktok, label: "TikTok" },
  { icon: WhatsappIcon, href: brand.socialLinks.whatsapp, label: "WhatsApp" },
];

const SERVICE_LOGOS: Record<string, string> = {
  "/servicios/branding": "/asher/logos/branding.png",
  "/servicios/digital-web": "/asher/logos/digital-web.png",
  "/servicios/legal": "/asher/logos/legal.png",
  "/servicios/marca": "/asher/logos/marca.png",
  "/servicios/marketing": "/asher/logos/marketing.png",
};
const DEFAULT_LOGO = "/asher/logos/asher-consulting.png";

const NAV_ITEMS: SlideTabItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Quiénes somos",
    children: [
      { label: "Historia", href: "/quienes-somos#historia" },
      { label: "Misión", href: "/quienes-somos#mision" },
      { label: "Visión", href: "/quienes-somos#vision" },
      { label: "Valores", href: "/quienes-somos#valores" },
    ],
  },
  {
    label: "Servicios",
    children: [
      { label: "Branding", href: "/servicios/branding" },
      { label: "Digital Web", href: "/servicios/digital-web" },
      { label: "Legal", href: "/servicios/legal" },
      { label: "Marca", href: "/servicios/marca" },
      { label: "Marketing", href: "/servicios/marketing" },
    ],
  },
  { label: "Proceso", href: "/proceso" },
  { label: "Clientes", href: "/clientes" },
  { label: "Planes", href: "/planes" },
  { label: "Contacto", href: "/contacto" },
];

type LinkProps = { className: string; onClick: () => void; ["data-cursor"]?: string; ["aria-label"]?: string };

function renderNavLink(target: { href: string; label: string }, props: LinkProps, children: React.ReactNode) {
  // Hash targets go through SmoothScroll's Lenis-aware click handler (needs
  // a plain <a>); real routes get next/link for a client-side transition.
  if (target.href.includes("#")) {
    return (
      <a href={target.href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={target.href} {...props}>
      {children}
    </Link>
  );
}

function MobileNav({ onReservar }: { onReservar: () => void }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openChild, setOpenChild] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const closeAll = () => {
    setOpen(false);
    setOpenChild(null);
  };

  // Close on route change — adjusted during render, not an effect, per
  // React's guidance for state that depends on a prop/context change.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (open) closeAll();
  }

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) closeAll();
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div ref={rootRef} className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        data-cursor="expand"
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--color-ink)] bg-[var(--color-bg)]"
      >
        <span
          className="block h-px w-5 bg-[var(--color-ink)] transition-transform duration-300"
          style={{ transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
        />
        <span
          className="block h-px w-5 bg-[var(--color-ink)] transition-opacity duration-300"
          style={{ opacity: open ? 0 : 1 }}
        />
        <span
          className="block h-px w-5 bg-[var(--color-ink)] transition-transform duration-300"
          style={{ transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-full mt-3 w-[86vw] max-w-sm rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] p-5 shadow-xl"
          >
            <ul className="flex flex-col divide-y divide-[var(--color-line)]">
              {NAV_ITEMS.map((item, i) => {
                const hasChildren = !!item.children?.length;
                const isChildOpen = openChild === i;
                return (
                  <li key={item.label} className="py-3 first:pt-0 last:pb-0">
                    {hasChildren ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setOpenChild(isChildOpen ? null : i)}
                          aria-expanded={isChildOpen}
                          data-cursor="expand"
                          className="flex w-full items-center justify-between text-sm font-medium uppercase tracking-[0.08em] text-[var(--color-ink)]"
                        >
                          {item.label}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isChildOpen ? "rotate-180" : ""}`} />
                        </button>
                        <div
                          className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                          style={{ gridTemplateRows: isChildOpen ? "1fr" : "0fr" }}
                        >
                          <div className="min-h-0">
                            <ul className="mt-3 flex flex-col gap-3 pl-1">
                              {item.children!.map((child) => (
                                <li key={child.label}>
                                  {renderNavLink(
                                    { href: child.href, label: child.label },
                                    {
                                      className:
                                        "block text-sm text-[var(--color-ink-soft)] transition-colors duration-200 hover:text-[var(--color-ink)]",
                                      onClick: closeAll,
                                    },
                                    child.label
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      renderNavLink(
                        { href: item.href!, label: item.label },
                        { className: "block text-sm font-medium uppercase tracking-[0.08em] text-[var(--color-ink)]", onClick: closeAll },
                        item.label
                      )
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--color-line)] pt-5">
              <button
                type="button"
                onClick={() => {
                  closeAll();
                  onReservar();
                }}
                data-cursor="expand"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-bg)]"
              >
                Reservar consultoría <span aria-hidden="true">→</span>
              </button>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    data-cursor="expand"
                    className="text-[var(--color-ink)]/60 transition-colors duration-300 hover:text-[var(--color-ink)]"
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TopNav() {
  const pathname = usePathname();
  const { openModal } = useLeadModal();
  const logoSrc = SERVICE_LOGOS[pathname] ?? DEFAULT_LOGO;

  const logo = (
    <Image
      key={logoSrc}
      src={logoSrc}
      alt="ASHER Consulting"
      fill
      className="object-contain"
      priority
    />
  );

  return (
    // Desktop: the full sliding-cursor pill, always visible. Mobile: logo +
    // a classic 3-line toggle that opens a compact dropdown card instead —
    // trying to cram the same pill into a narrow screen (even scrollable)
    // looked broken, so mobile gets its own simpler, reliable layout.
    <header className="fixed inset-x-0 top-0 z-50 palette-asher flex items-center justify-between gap-3 px-5 py-5 md:px-10 md:py-6">
      <Link
        href="/"
        data-cursor="expand"
        aria-label="ASHER — inicio"
        className="relative block h-8 w-8 shrink-0 md:h-10 md:w-10"
      >
        {logo}
      </Link>

      <div className="hidden md:block">
        <SlideTabs tabs={NAV_ITEMS} activeHref={pathname} renderLink={renderNavLink} />
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <button
          type="button"
          onClick={() => openModal("nav")}
          data-cursor="expand"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
        >
          Reservar consultoría <span aria-hidden="true">→</span>
        </button>
        <CartButton className="h-10 w-10" />
        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            data-cursor="expand"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
          >
            <Icon />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <CartButton className="h-10 w-10" />
        <MobileNav onReservar={() => openModal("nav-mobile")} />
      </div>
    </header>
  );
}
