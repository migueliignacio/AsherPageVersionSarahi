import type { Metadata } from "next";
import BackToHome from "@/components/BackToHome";
import Vision from "@/components/Vision";

export const metadata: Metadata = {
  title: "Visión — ASHER",
  description: "Un mañana mejor, juntos. Cinco disciplinas, un solo equipo.",
};

export default function VisionPage() {
  return (
    <>
      <BackToHome />
      <Vision />
    </>
  );
}
