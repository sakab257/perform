import AnimatedCounter from "@/components/atoms/AnimatedCounter";

interface StatItemProps {
  value: number;
  label: string;
}

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs md:text-sm text-gray">{label}</span>
      <span className="text-3xl md:text-5xl font-bold font-inter">
        <AnimatedCounter value={value} />
      </span>
    </div>
  );
}
