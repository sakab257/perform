import Image from "next/image";
import Link from "next/link";
import ScrollLink from "@/components/atoms/ScrollLink";
import { footer } from "@/lib/data";
import ScrollToTop from "@/components/atoms/ScrollToTop";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-20">
          {/* Brand column */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo-icon.png"
                alt="Perform logo"
                width={20}
                height={20}
              />
              <span className="font-bold text-base font-inter">
                {footer.brand}
              </span>
            </Link>
            <p className="text-sm text-white-50 leading-relaxed mb-6">
              {footer.description}
            </p>
            <p className="text-sm text-white-50">
              Créé par{" "}
              <Link
                href={footer.createdBy.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:underline"
              >
                {footer.createdBy.label}
              </Link>
            </p>
          </div>

          {/* Sections column */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Rubriques</h4>
            <ul className="flex flex-col gap-3">
              {footer.sections.map((link) => (
                <li key={link.label}>
                  <ScrollLink
                    href={link.href}
                    className="text-sm text-white-50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials column */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Réseaux</h4>
            <ul className="flex flex-col gap-3">
              {footer.socials.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white-50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal + scroll to top */}
        <div className="mt-12 pt-8 border-t border-white-15 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {footer.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white-50 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-xs text-white-50">
              © {new Date().getFullYear()} Perform. Tous droits réservés.
            </span>
          </div>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
}
