"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SlideTabs, type SlideTabItem } from "@/components/ui/slide-tabs";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { useLeadModal } from "./LeadModalProvider";

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
      { label: "Historia", href: "/#construye-con-intencion" },
      { label: "Misión", href: "/#construye-con-intencion" },
      { label: "Visión", href: "/#construye-con-intencion" },
      { label: "Valores", href: "/#construye-con-intencion" },
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
  { label: "Trabajos", href: "/trabajos" },
  { label: "Planes", href: "/planes" },
  { label: "Contacto", href: "/contacto" },
];

function renderNavLink(
  target: { href: string; label: string },
  props: { className: string; onClick: () => void; ["data-cursor"]?: string; ["aria-label"]?: string },
  children: React.ReactNode
) {
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

export default function TopNav() {
  const pathname = usePathname();
  const { openModal } = useLeadModal();
  const logoSrc = SERVICE_LOGOS[pathname] ?? DEFAULT_LOGO;

  const logo = (
    <Image key={logoSrc} src={logoSrc} alt="ASHER Consulting" fill className="object-contain" priority />
  );

  return (
    // The nav bar itself is always visible up top on every breakpoint,
    // styled as a sliding-cursor pill — items with children expand a
    // dropdown on click instead of navigating. There's no separate
    // hamburger/fullscreen menu on mobile anymore; this is the only nav.
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 px-5 py-5 md:px-10 md:py-6">
      <Link
        href="/"
        data-cursor="expand"
        aria-label="ASHER — inicio"
        className="relative block h-8 w-8 shrink-0 md:h-10 md:w-10"
      >
        {logo}
      </Link>

      <SlideTabs tabs={NAV_ITEMS} activeHref={pathname} renderLink={renderNavLink} />

      <div className="hidden items-center gap-2 md:flex">
        <button
          type="button"
          onClick={() => openModal("nav")}
          data-cursor="expand"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
        >
          Reservar consultoría <span aria-hidden="true">→</span>
        </button>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          data-cursor="expand"
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          data-cursor="expand"
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
        >
          <LinkedinIcon />
        </a>
      </div>
    </header>
  );
}
