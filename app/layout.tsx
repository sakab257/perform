import type { Metadata } from "next";
import { inter, manrope } from "@/lib/fonts";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perform — Coaching Triathlon",
  description:
    "Améliorez vos performances en triathlon grâce à des plans d'entraînement personnalisés, encadrés par un coach expérimenté dédié à votre réussite.",
  icons: { icon: "/images/logo-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
