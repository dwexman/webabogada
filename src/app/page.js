import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroHome from "@/components/sections/HeroHome";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CasesPreview from "@/components/sections/CasesPreview";
import ContactCta from "@/components/sections/ContactCta";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <AboutPreview />
        <ServicesPreview />
        <CasesPreview />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}