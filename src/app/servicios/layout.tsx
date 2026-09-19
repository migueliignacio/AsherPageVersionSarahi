import ServicesSubHeader from "@/components/ServicesSubHeader";

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServicesSubHeader />
      {children}
    </>
  );
}
