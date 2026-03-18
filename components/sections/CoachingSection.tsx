import FadeIn from "@/components/atoms/FadeIn";
import CoachingCard from "@/components/molecules/CoachingCard";
import { coachingPlans } from "@/lib/data";

export default function CoachingSection() {
  return (
    <section id="coaching" className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-12 md:mb-16">
            Plans de coaching
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {coachingPlans.map((plan, i) => (
            <CoachingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
