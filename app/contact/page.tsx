import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CtaSection from "@/components/sections/CtaSection";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHeroSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
