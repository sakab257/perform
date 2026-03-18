import Image from "next/image";
import FadeIn from "@/components/atoms/FadeIn";
import Button from "@/components/atoms/Button";
import { ctaSection } from "@/lib/data";

export default function CtaSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ctaSection.backgroundImage.src}
          alt={ctaSection.backgroundImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 z-1 bg-black/60" />

      {/* Content */}
      <div className="container-site relative z-10 text-center text-white">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter mb-4">
            {ctaSection.heading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-white-50 text-sm md:text-base mb-8 max-w-md mx-auto">
            {ctaSection.paragraph}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex justify-center">
            <Button href="/contact">{ctaSection.cta}</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
