import type { Metadata } from "next";
import BackToHome from "@/components/BackToHome";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Proceso — ASHER",
  description: "Diagnóstico. Estrategia. Ejecución. Así trabajamos en ASHER.",
};

export default function ProcesoPage() {
  return (
    <>
      <BackToHome />
      <Process />
    </>
  );
}
