"use client";

import { useCallback, useRef } from "react";
import GlyphPortal from "./GlyphPortal";
import { brand } from "@/data/asher";
import { useLeadModal } from "./LeadModalProvider";

/** Fondo tras el cristal, una vez que el zoom revela el campo oscuro. */
function PortalBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(circle at 20% 15%, rgba(111,132,183,0.22), transparent 45%),
          radial-gradient(circle at 82% 75%, rgba(216,203,184,0.10), transparent 50%),
          linear-gradient(150deg, #0b1956 0%, #14226b 55%, #0b1956 100%)
        `,
      }}
    />
  );
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
        word={brand.name}
        focusChar="s"
        scrollLength={2.2}
        enterLabel="Entrar"
        onProgress={handlePortalProgress}
        background={<PortalBackground />}
        style={{
          "--gp-paper": "var(--color-bg)",
          "--gp-ink": "var(--color-ink)",
          "--gp-field": "var(--color-ink)",
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
        <div className="mx-auto flex max-w-2xl flex-col items-start gap-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: "rgba(245,243,238,0.55)" }}>
            Estás dentro de {brand.name}
          </p>
          <h2
            className="font-display font-medium tracking-tight"
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", color: "var(--color-bg)", lineHeight: 1.1 }}
          >
            {brand.heroHeadline}.
          </h2>
          <p className="max-w-lg text-sm leading-relaxed sm:text-base" style={{ color: "rgba(245,243,238,0.75)" }}>
            {brand.heroSub}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
            <button
              type="button"
              onClick={() => openModal("hero")}
              className="group inline-flex items-center gap-3 text-sm font-semibold sm:text-base"
              style={{ color: "var(--color-bg)" }}
            >
              <span className="relative pb-1">
                Reservar consultoría
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100"
                  style={{ background: "var(--color-bg)" }}
                />
              </span>
              <span
                className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center overflow-hidden rounded-full transition-transform duration-300 ease-out group-hover:translate-x-1"
                style={{ background: "rgba(245,243,238,0.15)" }}
              >
                →
              </span>
            </button>
            <a
              href="#servicios"
              className="text-sm underline underline-offset-4 sm:text-base"
              style={{ color: "rgba(245,243,238,0.75)" }}
            >
              Ver servicios
            </a>
          </div>
        </div>
      </GlyphPortal>
    </div>
  );
}
