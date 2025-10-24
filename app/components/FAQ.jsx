"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "How fast is US shipping?",
      a: "48-72h processing. 2-5 day delivery via USPS/UPS from US warehouses."
    },
    {
      q: "What phones are supported?",
      a: "iPhone 14 / 15 / 16, Samsung Galaxy S24 series, Pixel 9 Pro. We keep adding new fits."
    },
    {
      q: "Return policy?",
      a: "30-day money-back. No questions asked if product is unused / undamaged."
    },
    {
      q: "Is this real protection or just aesthetics?",
      a: "Lab drop tested from 2m onto concrete. Raised 1.5mm bezel around screen and camera."
    }
  ];

  return (
    <section
      id="faq"
      className="relative border-t border-white/10 bg-neutral-950/60 py-24"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight text-center">
          FAQ
        </h2>
        <p className="mt-3 text-white/60 text-sm text-center">
          Real questions US customers ask before checkout.
        </p>

        <div className="mt-10 divide-y divide-white/10 border border-white/10 rounded-2xl bg-neutral-900/40 shadow-glow-card">
          {faqs.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full text-left p-5 flex flex-col hover:bg-white/5 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-white text-sm font-medium leading-relaxed">
                  {item.q}
                </div>
                <ChevronDown
                  className={`text-white/50 flex-shrink-0 transition-transform ${
                    open === idx ? "rotate-180" : "rotate-0"
                  }`}
                  size={16}
                />
              </div>
              {open === idx && (
                <div className="text-white/60 text-[13px] leading-relaxed mt-3">
                  {item.a}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
