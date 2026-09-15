"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { brand } from "@/data/asher";
import { useLeadModal } from "./LeadModalProvider";

export default function Contact() {
  const { openModal } = useLeadModal();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Gentle counter-scroll so the shape drifts against the copy column.
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={ref}
      id="contacto"
      className="grid items-center gap-16 border-t border-[var(--color-line)] px-5 py-28 md:grid-cols-2 md:gap-10 md:px-10 md:py-40"
    >
      <div>
        <h2
          data-reveal
          className="font-display max-w-xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:text-6xl"
        >
          ¿Listo para que tu marca se mueva?
        </h2>

        <p data-reveal className="mt-6 max-w-md text-sm leading-relaxed text-[var(--color-ink-soft)]">
          Elige una ruta, cuéntanos tu proyecto, y empezamos esta semana — con
          respaldo legal desde el día uno.
        </p>

        <div data-reveal className="mt-10 flex items-center gap-3">
          <button
            type="button"
            onClick={() => openModal("contacto")}
            data-cursor="expand"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
          >
            Reservar consultoría <span aria-hidden="true">→</span>
          </button>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            aria-label="Hablar por WhatsApp"
            data-cursor="expand"
            className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
          </a>
          <a
            href={`mailto:${brand.email}`}
            aria-label="Escribir por correo"
            data-cursor="expand"
            className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-lavender)] text-[var(--color-ink)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Mail size={18} strokeWidth={1.8} />
          </a>
        </div>
      </div>

      <motion.div style={{ y: imageY }} className="justify-self-center">
        <div
          data-reveal
          className="relative aspect-square w-[min(78vw,30rem)] overflow-hidden rounded-[50%] bg-[var(--color-surface)]"
        >
          <Image
            src="/asher/teito-mascota.png"
            alt="TEÍTO — mascota de ASHER"
            fill
            className="object-cover"
            quality={90}
          />
        </div>
      </motion.div>
    </section>
  );
}
