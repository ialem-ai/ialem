import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";
import "./legal.css";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LegalHeader />
      {children}
      <Footer />
    </>
  );
}
