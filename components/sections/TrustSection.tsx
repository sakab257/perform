import Image from "next/image";
import FadeIn from "@/components/atoms/FadeIn";
import StatItem from "@/components/molecules/StatItem";
import { trust } from "@/lib/data";

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        {/* Text + Image row */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center mb-16 md:mb-20">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg">
              <strong className="font-bold">{trust.heading.bold}</strong>
              {trust.heading.regular}
            </p>
            <div className="relative w-full md:w-70 lg:w-[320px] aspect-4/3 rounded-sm overflow-hidden">
              <Image
                src={trust.image.src}
                alt={trust.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {trust.stats.map((stat) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}