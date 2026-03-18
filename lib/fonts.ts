import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const manrope = localFont({
  src: [
    {
      path: "../public/fonts/manrope-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope-800.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});
