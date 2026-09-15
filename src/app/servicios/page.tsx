import type { Metadata } from "next";
import BackToHome from "@/components/BackToHome";
import Routes from "@/components/Routes";

export const metadata: Metadata = {
  title: "Servicios — ASHER",
  description: "Una sola marca, cinco frentes: estrategia, marca, digital, publicidad y legal.",
};

export default function ServiciosPage() {
  return (
    <>
      <BackToHome />
      <Routes />
    </>
  );
}
