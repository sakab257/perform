export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs uppercase tracking-widest text-gray font-semibold">
      {children}
    </span>
  );
}
