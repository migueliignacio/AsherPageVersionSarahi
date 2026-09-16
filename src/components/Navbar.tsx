"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
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

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useLeadModal();
  const logoSrc = SERVICE_LOGOS[pathname] ?? DEFAULT_LOGO;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-10 md:py-6">
      <div>
        <Link
          href="/"
          data-cursor="expand"
          aria-label="ASHER — inicio"
          className="relative block h-8 w-8 md:h-10 md:w-10"
        >
          <Image
            key={logoSrc}
            src={logoSrc}
            alt="ASHER Consulting"
            fill
            className="object-contain"
            priority
          />
        </Link>
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
      </div>
    </header>
  );
}
