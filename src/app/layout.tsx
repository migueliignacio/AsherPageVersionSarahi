import type { Metadata } from "next";
import { Space_Grotesk, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import StickyNavPill from "@/components/StickyNavPill";
import ImpactBadge from "@/components/ImpactBadge";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "ASHER — Consultora de Crecimiento de Marca",
  description:
    "Estrategia, marca, digital y legal bajo un mismo techo. Construimos marca sin fricciones, con respaldo legal desde el día uno.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-ink)] cursor-none-desktop">
        <SmoothScroll />
        <CustomCursor />
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyNavPill />
        <ImpactBadge />
      </body>
    </html>
  );
}
