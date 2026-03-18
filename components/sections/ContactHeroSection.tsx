import Image from "next/image";
import FadeIn from "@/components/atoms/FadeIn";
import ContactForm from "@/components/molecules/ContactForm";
import { contactPage } from "@/lib/data";

export default function ContactHeroSection() {
  return (
    <section className="bg-black text-white pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column */}
          <FadeIn>
            <div>
              {/* Avatar */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden mb-6">
                <Image
                  src={contactPage.portrait.src}
                  alt={contactPage.portrait.alt}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight mb-6">
                {contactPage.heading}
              </h1>

              <p className="text-white-50 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                {contactPage.paragraph}
              </p>

              <hr className="border-white-15 mb-8" />

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm">
                  <PhoneIcon />
                  <span>{contactPage.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MailIcon />
                  <span>{contactPage.email}</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right column: form */}
          <FadeIn delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M14.6667 11.28V13.28C14.6667 13.7 14.3467 14.0533 13.9333 14.0933C13.6067 14.1267 13.34 14.1467 13.1333 14.1467C7.24 14.1467 2.52 9.42667 2.52 3.53333C2.52 3.32667 2.54 3.06 2.57333 2.73333C2.61333 2.32 2.96667 2 3.38667 2H5.38667C5.58667 2 5.76667 2.14 5.81333 2.33333C5.90667 2.72667 6.04 3.24667 6.22667 3.73333C6.3 3.92 6.24667 4.13333 6.1 4.28L5.12 5.26C5.92 6.84 7.16 8.08 8.74 8.88L9.72 7.9C9.86667 7.75333 10.08 7.7 10.2667 7.77333C10.7533 7.96 11.2733 8.09333 11.6667 8.18667C11.86 8.23333 12 8.41333 12 8.61333V10.6133"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M2.66669 2.66669H13.3334C14.0667 2.66669 14.6667 3.26669 14.6667 4.00002V12C14.6667 12.7334 14.0667 13.3334 13.3334 13.3334H2.66669C1.93335 13.3334 1.33335 12.7334 1.33335 12V4.00002C1.33335 3.26669 1.93335 2.66669 2.66669 2.66669Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 4L8.00002 8.66667L1.33335 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
