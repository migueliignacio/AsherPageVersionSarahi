"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  backOut,
  easeIn,
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const TITLE_LINES = ["NUESTROS", "TRABAJOS"].map((line, lineIndex, all) => {
  const offset = all.slice(0, lineIndex).reduce((sum, previous) => sum + previous.length, 0);
  return { line, letters: line.split("").map((char, i) => ({ char, index: offset + i })) };
});

// Scroll timeline, in the same relative units the original pinned animation
// used: letters rise, the logo pills pop in and cross the title, leave, and
// the title lifts away. Everything maps onto one scroll progress (0..1).
const TOTAL = 5.4;
const at = (t: number) => t / TOTAL;
const quartOut = (t: number) => 1 - Math.pow(1 - t, 4);
const linear = (t: number) => t;

interface Pill {
  src: string;
  alt: string;
  bg: string;
  position: string;
  rotate: number;
  cross: { x: number; y: number; rotate: number };
}

const pills: Pill[] = [
  { src: "/marcas/spc.png", alt: "Social Padel Club", bg: "#0b1956", position: "left-[5%] top-[18%]", rotate: -8, cross: { x: 55, y: 12, rotate: 10 } },
  { src: "/marcas/batidoos.png", alt: "Batidoos", bg: "#520000", position: "right-[8%] top-[20%]", rotate: 7, cross: { x: -55, y: 18, rotate: -12 } },
  { src: "/marcas/velez-guevara.png", alt: "Vélez Guevara Abogados", bg: "#d8cbb8", position: "left-[15%] top-[48%]", rotate: 5, cross: { x: 48, y: -5, rotate: -8 } },
  { src: "/marcas/barak-maniquies.png", alt: "Barak Maniquíes", bg: "#8fb0e3", position: "right-[12%] top-[52%]", rotate: -6, cross: { x: -45, y: -8, rotate: 12 } },
];

function Letter({ progress, index, char }: { progress: MotionValue<number>; index: number; char: string }) {
  const start = index * 0.08;
  const range = [at(start), at(start + 1.2)];
  const y = useTransform(progress, range, [180, 0], { ease: quartOut });
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span style={{ y, opacity }} className="inline-block">
      {char}
    </motion.span>
  );
}

function LogoPill({ progress, pill, index }: { progress: MotionValue<number>; pill: Pill; index: number }) {
  const enterStart = 1.7 + index * 0.08;
  const leaveStart = 3.4 + index * 0.05;
  const life = [at(enterStart), at(enterStart + 0.7), at(leaveStart), at(leaveStart + 0.8)];
  const opacity = useTransform(progress, life, [0, 1, 1, 0]);
  const scale = useTransform(progress, life, [0.7, 1.3, 1.3, 0.8], { ease: [backOut, linear, easeIn] });
  const cross = [at(1.7), at(3.2)];
  const x = useTransform(progress, cross, ["0vw", `${pill.cross.x}vw`]);
  const y = useTransform(progress, cross, ["0vh", `${pill.cross.y}vh`]);
  const rotate = useTransform(progress, cross, [pill.rotate, pill.rotate + pill.cross.rotate]);

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity, background: pill.bg }}
      className={`absolute flex h-16 w-36 items-center justify-center rounded-full shadow-[0_18px_40px_-15px_rgba(11,25,86,0.45)] md:h-24 md:w-56 ${pill.position}`}
    >
      <div className="relative aspect-square h-[78%] overflow-hidden rounded-full bg-white">
        <Image src={pill.src} alt={pill.alt} fill sizes="88px" className="object-cover" />
      </div>
    </motion.div>
  );
}

export default function OurWorkSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const exit = [at(4.4), at(5.4)];
  const titleY = useTransform(scrollYProgress, exit, ["0vh", "-15vh"]);
  const titleScale = useTransform(scrollYProgress, exit, [1, 1.2]);
  const titleOpacity = useTransform(scrollYProgress, exit, [1, 0]);

  return (
    <section ref={ref} className="relative h-[400vh] w-full bg-[var(--color-bg)]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-30">
          {pills.map((pill, i) => (
            <LogoPill key={pill.src} progress={scrollYProgress} pill={pill} index={i} />
          ))}
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.h2
            aria-label="Nuestros trabajos"
            style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
            className="select-none whitespace-nowrap text-center text-[16vw] font-bold uppercase leading-[0.82] tracking-[-0.04em] text-[var(--color-ink)] md:text-[14vw]"
          >
            {TITLE_LINES.map(({ line, letters }) => (
              <span key={line} aria-hidden="true" className="block">
                {letters.map(({ char, index }) => (
                  <Letter key={index} progress={scrollYProgress} index={index} char={char} />
                ))}
              </span>
            ))}
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
