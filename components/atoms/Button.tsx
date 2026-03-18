import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href = "/contact",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold text-sm rounded-pill transition-colors";
  const variants = {
    primary: "bg-white text-black px-5 py-3 hover:bg-gray-200",
    secondary:
      "bg-black text-white px-5 py-3 hover:bg-gray-800 border border-white-15",
  };

  const iconStyles = {
    primary: "bg-black text-white",
    secondary: "bg-white text-black",
  };

  return (
    <Link href={href} onClick={onClick} className={`${base} ${variants[variant]} ${className} group w-fit`}>
      {children}
      <span className={`flex items-center justify-center w-7 h-7 rounded-full group-hover:-rotate-40 transition-all ${iconStyles[variant]}`}>
        <ArrowIcon />
      </span>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.16669 7.00002H12.8334M12.8334 7.00002L7.00002 1.16669M12.8334 7.00002L7.00002 12.8334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
