"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";
import GlyphPortal from "./GlyphPortal";
import { brand } from "@/data/asher";
import { useLeadModal } from "./LeadModalProvider";

/** Fondo tras el cristal: el azul plano del logo, que es también el color de la palabra ASHER. */
function PortalBackground() {
  return <div style={{ position: "absolute", inset: 0, background: "#0b1956" }} />;
}

/**
 * Hero — cámara de scroll a través de la palabra Asher (Glyph Portal).
 *
 * El Navbar (ver Navbar.tsx) no tiene un estado claro/oscuro propio — su
 * mini-logo solo aparece/desaparece según `scrollY`. El portal no expone
 * zonas claras/oscuras separadas en el DOM (todo pasa dentro de un mismo pin
 * vía canvas/clip-path), así que este componente no intenta sincronizar nada
 * extra ahí; el prop `onProgress` de GlyphPortal queda disponible para quien
 * quiera esa sincronización más adelante.
 */
export default function Hero() {
  const { openModal } = useLeadModal();
  const isDarkRef = useRef(false);
  const handlePortalProgress = useCallback((p: number) => {
    // Punto de extensión: aquí se podría sincronizar el Navbar si en el
    // futuro necesita saber si el fondo bajo la barra es oscuro.
    isDarkRef.current = p > 0.55;
  }, []);

  return (
    <div id="top">
      <GlyphPortal
        word={brand.name.toUpperCase()}
        focusChar="S"
        scrollLength={2.2}
        enterLabel="Entrar"
        onProgress={handlePortalProgress}
        background={<PortalBackground />}
        style={{
          "--gp-paper": "var(--color-bg)",
          "--gp-ink": "var(--color-navy)",
          "--gp-field": "var(--color-navy)",
          "--gp-foreground": "var(--color-bg)",
        }}
        front={
          <>
            <p
              className="absolute left-1/2 -translate-x-1/2 text-center font-mono text-[10px] uppercase tracking-[0.25em] sm:text-xs"
              style={{ top: "calc(var(--gp-word-top, 30%) - 40px)", color: "var(--color-ink-soft)" }}
            >
              {brand.disciplines}
            </p>
            <p
              className="absolute left-1/2 hidden -translate-x-1/2 px-6 text-center text-sm sm:block sm:text-base"
              style={{ top: "calc(var(--gp-word-bottom, 60%) + 20px)", color: "var(--color-ink-soft)" }}
            >
              {brand.heroSub}
            </p>
          </>
        }
      >
        <div className="mx-auto flex max-w-2xl flex-col items-start gap-7">
          <p
            className="inline-flex rounded-full border px-4 py-1.5 text-[10px] uppercase tracking-[0.3em]"
            style={{ borderColor: "rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.85)" }}
          >
            Bienvenido a {brand.name}
          </p>
          <h2
            className="font-display font-medium tracking-tight"
            style={{ fontSize: "clamp(2rem,5vw,3.6rem)", color: "var(--color-bg)", lineHeight: 1.05 }}
          >
            {brand.heroHeadline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="max-w-lg text-sm leading-relaxed sm:text-base" style={{ color: "rgba(255,255,255,0.8)" }}>
            {brand.heroIntro}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-8 gap-y-4">
            <button
              type="button"
              onClick={() => openModal("hero")}
              data-cursor="expand"
              className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--color-bg)", color: "var(--color-navy)" }}
            >
              Reservar consultoría
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
            <Link
              href="/servicios"
              data-cursor="expand"
              className="inline-flex items-center gap-2 text-sm underline underline-offset-4 sm:text-base"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Ver servicios <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </GlyphPortal>
    </div>
  );
}
