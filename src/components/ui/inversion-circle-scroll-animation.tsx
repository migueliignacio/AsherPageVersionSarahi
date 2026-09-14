"use client";

/**
 * InversionCircleScrollAnimation adapted for ASHER
 *
 * Scroll-driven animation:
 *   Phase 1 (scroll 0→viewH):
 *     A violet circle rises from below to center (Power4 InOut easing).
 *
 *   Phase 2 (scroll viewH→2×viewH):
 *     Circle expands to fill screen (ease-in² easing).
 *
 *   CSS clip-path creates colour inversion effect:
 *     White text visible inside the expanding circle.
 */

import { useEffect, useRef, useState } from "react";

const BALL_SIZE = 380; // px — fixed diameter during Phase 1

export default function InversionCircleScrollAnimation() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Styles />
      <div ref={wrapperRef} className="icsa-wrap">
        <HeroSection wrapperRef={wrapperRef} />
        <ContentSection wrapperRef={wrapperRef} />
      </div>
    </>
  );
}

type WRef = React.RefObject<HTMLDivElement | null>;

function HeroSection({ wrapperRef }: { wrapperRef: WRef }) {
  const [scrollY, setScrollY] = useState(0);
  const [viewH, setViewH] = useState(600);
  const [viewW, setViewW] = useState(800);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const measure = () => {
      setViewH(el.clientHeight);
      setViewW(el.clientWidth);
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const onScroll = () => setScrollY(el.scrollTop);
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", onScroll);
    };
  }, [wrapperRef]);

  // phase progress 0 → 1
  const p1 = clamp(scrollY / viewH);
  const p2 = clamp((scrollY - viewH) / viewH);

  // Power4 InOut
  const p1e = p1 < 0.5 ? 8 * p1 ** 4 : 1 - (-2 * p1 + 2) ** 4 / 2;
  // ease-in²
  const p2e = p2 * p2;

  // geometry
  const yOff = (1 - p1e) * (viewH / 2 + BALL_SIZE / 2);
  const coverSize = Math.max(viewW, viewH) * 2.8;
  const ballSize = BALL_SIZE + p2e * (coverSize - BALL_SIZE);
  const clipX = viewW / 2;
  const clipY = viewH / 2 + yOff;
  const clipR = ballSize / 2;

  return (
    <div className="icsa-track">
      <section className="icsa-hero">
        {/* expanding violet circle */}
        <div
          className="icsa-ball"
          style={{
            width: ballSize,
            height: ballSize,
            transform: `translate(-50%, calc(-50% + ${yOff}px))`,
          }}
        />

        {/* black text — always visible */}
        <div className="icsa-layer icsa-dark">
          <h1>Construimos marca sin fricciones</h1>
          <p>Con estrategia, diseño y legal desde el día uno.</p>
        </div>

        {/* white text — clipped to the circle (inversion) */}
        <div
          className="icsa-layer icsa-light"
          style={{ clipPath: `circle(${clipR}px at ${clipX}px ${clipY}px)` }}
        >
          <h1>Construimos marca sin fricciones</h1>
          <p>Con estrategia, diseño y legal desde el día uno.</p>
        </div>
      </section>
    </div>
  );
}

function ContentSection({ wrapperRef }: { wrapperRef: WRef }) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const root = wrapperRef.current;
    if (!el || !root) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setOn(true);
      },
      { root, threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [wrapperRef]);

  return (
    <section ref={ref} className={`icsa-cs${on ? " on" : ""}`}>
      <div className="icsa-inner">
        <span className="icsa-label">Cinco disciplinas</span>
        <h2>
          Todo bajo un mismo techo.
          <br />
          Respaldo legal desde el inicio.
        </h2>
        <p>
          Estrategia, marca, digital, publicidad y legal. Un equipo, una visión.
          Construimos para crecer.
        </p>
        <CTAButton />
      </div>
    </section>
  );
}

function CTAButton() {
  return <button className="icsa-btn">Reservar consultoría</button>;
}

const clamp = (v: number) => Math.min(1, Math.max(0, v));

function Styles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');

      .icsa-wrap *, .icsa-wrap *::before, .icsa-wrap *::after {
        box-sizing: border-box; margin: 0; padding: 0;
      }

      .icsa-wrap {
        width: 100%; height: 100vh;
        overflow-y: scroll; overflow-x: clip;
        font-family: 'Inter', sans-serif;
        background: #f5f3ee;
      }

      .icsa-track { height: 300vh; position: relative; }

      .icsa-hero {
        position: sticky; top: 0;
        height: 100vh; overflow: hidden;
      }

      .icsa-ball {
        position: absolute; top: 50%; left: 50%;
        border-radius: 50%;
        background: linear-gradient(135deg, #9a92e0, #6d5bc4);
        will-change: transform, width, height;
        box-shadow: 0 40px 80px rgba(109, 91, 196, 0.3);
      }

      .icsa-layer {
        position: absolute; inset: 0;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        text-align: center; padding: 0 2rem;
        pointer-events: none;
      }
      .icsa-dark  { color: #121210; z-index: 2; }
      .icsa-light { color: #f5f3ee; z-index: 3; will-change: clip-path; }

      .icsa-layer h1 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(2.5rem, 7vw, 6rem);
        font-weight: 700; letter-spacing: -0.03em; line-height: 1.05;
      }
      .icsa-layer p {
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        font-weight: 400; margin-top: 1.25rem; opacity: .75;
      }

      .icsa-cs {
        min-height: 100vh;
        display: flex; align-items: center; justify-content: center;
        padding: 6rem 2rem;
        background: #3b1f79; color: #f5f3ee;
        transition: background 2.4s cubic-bezier(.25,0,.1,1),
                    color      2.4s cubic-bezier(.25,0,.1,1);
      }
      .icsa-cs.on { background: #f5f3ee; color: #121210; }

      .icsa-inner {
        max-width: 720px; text-align: center;
        display: flex; flex-direction: column;
        align-items: center; gap: 1.75rem;
      }

      .icsa-inner > * {
        opacity: 0; transform: translateY(24px);
        transition: opacity .7s ease, transform .7s ease;
      }
      .icsa-cs.on .icsa-inner > * { opacity: 1; transform: translateY(0); }

      .icsa-cs.on .icsa-label { transition-delay: .10s; }
      .icsa-cs.on h2          { transition-delay: .24s; }
      .icsa-cs.on p           { transition-delay: .38s; }
      .icsa-cs.on .icsa-btn   { transition-delay: .52s; }

      .icsa-label {
        font-size: .75rem; font-weight: 600;
        letter-spacing: .18em; text-transform: uppercase; opacity: .5;
      }
      .icsa-inner h2 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(2rem, 6vw, 4rem);
        font-weight: 700; letter-spacing: -.03em; line-height: 1.08;
      }
      .icsa-inner p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        line-height: 1.75; opacity: .65; max-width: 560px;
      }

      .icsa-btn {
        background: linear-gradient(135deg, #3b1f79, #6d5bc4);
        color: #f5f3ee;
        padding: 12px 32px; border-radius: 24px; border: none;
        cursor: pointer; font-family: 'Space Grotesk', sans-serif;
        font-size: 1rem; font-weight: 600; letter-spacing: .01em;
        transition: opacity .2s ease, transform .2s ease, box-shadow .2s ease;
        box-shadow: 0 10px 30px rgba(59, 31, 121, 0.2);
      }
      .icsa-btn:hover  { opacity: .9; transform: translateY(-2px); box-shadow: 0 15px 40px rgba(59, 31, 121, 0.3); }
      .icsa-btn:active { opacity: 1;   transform: translateY(0); }

      .icsa-cs.on .icsa-btn {
        background: linear-gradient(135deg, #ff4620, #ff8a5c);
        color: #f5f3ee;
        box-shadow: 0 10px 30px rgba(255, 70, 32, 0.2);
      }
      .icsa-cs.on .icsa-btn:hover { box-shadow: 0 15px 40px rgba(255, 70, 32, 0.3); }
    `}</style>
  );
}
