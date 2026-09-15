import type { Metadata } from "next";
import BackToHome from "@/components/BackToHome";

export const metadata: Metadata = {
  title: "Trabajos — ASHER",
  description: "Los proyectos en los que hemos trabajado.",
};

export default function TrabajosPage() {
  return (
    <>
      <BackToHome />
      <section className="px-5 pb-28 pt-10 md:px-10 md:pb-40">
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          Nuestro trabajo
        </p>
        <h1 className="font-display max-w-3xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl">
          Pronto vas a poder ver aquí los proyectos que hemos desarrollado.
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
          Estamos documentando nuestro trabajo. Mientras tanto, cuéntanos tu proyecto y con gusto te
          compartimos casos relevantes por tu ruta de interés.
        </p>
      </section>
    </>
  );
}
