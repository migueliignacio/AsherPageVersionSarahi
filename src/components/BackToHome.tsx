import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToHome() {
  return (
    <div className="px-5 pt-28 md:px-10 md:pt-32">
      <Link
        href="/"
        data-cursor="expand"
        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)]/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-ink-soft)] transition-colors duration-300 hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
      >
        <ArrowLeft size={14} strokeWidth={1.8} />
        Volver al inicio
      </Link>
    </div>
  );
}
