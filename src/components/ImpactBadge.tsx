import Link from "next/link";

export default function ImpactBadge() {
  return (
    <Link
      href="#diagnostico"
      data-cursor="expand"
      aria-label="Hacer el diagnóstico de marca"
      className="group fixed bottom-5 right-4 z-40 grid h-24 w-24 place-items-center rounded-3xl transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-105 sm:h-32 sm:w-32 md:bottom-8 md:right-8 md:h-36 md:w-36"
    >
      <span
        className="spin-slow absolute inset-0 rounded-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, #ffd45c, #ff8a3d, #ff4620, #8b9fd4, #0b1956, #cfff5c, #ffd45c)",
        }}
        aria-hidden="true"
      />
      <span className="absolute inset-[3px] rounded-[1.35rem] bg-[var(--color-bg)]" aria-hidden="true" />
      <span className="relative z-10 px-2 text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.04em] sm:px-4 sm:text-[0.7rem] sm:tracking-[0.06em]">
        Haz tu
        <br />
        diagnóstico
        <br />
        en 3 pasos
        <span className="mt-1 block text-base transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
          ↘
        </span>
      </span>
    </Link>
  );
}
