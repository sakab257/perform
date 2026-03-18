"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactPage, coachingPlans } from "@/lib/data";

export default function ContactForm() {
  const f = contactPage.formFields;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative bg-black text-white rounded-md p-6 md:p-8 overflow-hidden">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-5"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label={f.name.label} placeholder={f.name.placeholder} />
              <Field
                label={f.email.label}
                placeholder={f.email.placeholder}
                type="email"
              />
            </div>

            {/* Phone + Coaching plan row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label={f.phone.label}
                placeholder={f.phone.placeholder}
                optional
                type="tel"
              />
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">
                  {f.coachingPlan.label}{" "}
                  <span className="text-white-50 font-normal">(optionnel)</span>
                </label>
                <select className="bg-white-15 border border-white-15 rounded-sm px-3 py-2.5 text-sm text-white-50 outline-none focus:border-white-25 appearance-none">
                  <option value="">{f.coachingPlan.placeholder}</option>
                  {coachingPlans.map((plan) => (
                    <option key={plan.name} value={plan.name}>
                      {plan.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">{f.message.label}</label>
              <textarea
                placeholder={f.message.placeholder}
                rows={4}
                className="bg-white-15 border border-white-15 rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-white-50 outline-none focus:border-white-25 resize-y"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group cursor-pointer flex items-center justify-center gap-2 bg-white text-black font-semibold text-sm py-3 rounded-pill hover:bg-gray-200 transition-colors"
            >
              {contactPage.submitButton}
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white group-hover:-rotate-40 transition-all">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1.16669 7.00002H12.8334M12.8334 7.00002L7.00002 1.16669M12.8334 7.00002L7.00002 12.8334"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center text-center py-16 gap-4"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <motion.path
                  d="M5 13L9 17L19 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Message envoyé !</h3>
            <p className="text-sm text-white-50 max-w-xs">
              Merci pour votre message. Je vous répondrai dans les plus brefs délais.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  optional = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  optional?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium">
        {label}
        {optional && (
          <span className="text-white-50 font-normal"> (optionnel)</span>
        )}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-white-15 border border-white-15 rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-white-50 outline-none focus:border-white-25"
      />
    </div>
  );
}
