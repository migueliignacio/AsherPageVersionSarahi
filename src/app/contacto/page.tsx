import type { Metadata } from "next";
import BackToHome from "@/components/BackToHome";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contacto — ASHER",
  description: "¿Listo para que tu marca se mueva? Reserva una consultoría con ASHER.",
};

export default function ContactoPage() {
  return (
    <>
      <BackToHome />
      <Contact />
    </>
  );
}
