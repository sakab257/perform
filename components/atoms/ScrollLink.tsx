"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ScrollLink({
  href,
  children,
  className,
  onClick,
}: ScrollLinkProps) {
  const pathname = usePathname();

  if (!href.startsWith("#")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const id = href.slice(1);

    if (pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }

    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    onClick?.();
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
