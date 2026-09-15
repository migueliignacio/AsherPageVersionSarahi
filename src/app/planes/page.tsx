import type { Metadata } from "next";
import BackToHome from "@/components/BackToHome";
import Tiers from "@/components/Tiers";
import CustomPlan from "@/components/CustomPlan";

export const metadata: Metadata = {
  title: "Planes — ASHER",
  description: "Un nivel para cada etapa, o arma tu propio pack a la medida.",
};

export default function PlanesPage() {
  return (
    <>
      <BackToHome />
      <Tiers />
      <CustomPlan />
    </>
  );
}
