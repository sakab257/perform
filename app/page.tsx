import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import CoachingSection from "@/components/sections/CoachingSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import AboutSection from "@/components/sections/AboutSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="relative z-10 bg-white">
          <TrustSection />
          <CoachingSection />
          <TestimonialSection />
          <AboutSection />
          <FaqSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
