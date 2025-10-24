"use client";

import { Star, ShoppingCart } from "lucide-react";

export default function Reviews({ onOpenCart }) {
  const reviews = [
    {
      name: "Jalen R.",
      body: "Dropped my phone on bare concrete. Zero panic. Zero cracks.",
      tag: "Impact Tested"
    },
    {
      name: "Vanessa L.",
      body: "That matte texture is insane. I’m done with glossy cheap Amazon cases.",
      tag: "Luxury Feel"
    },
    {
      name: "Chris M.",
      body: "MagSafe lock is PERFECT. My car mount doesn’t yeet off on bumps.",
      tag: "Car Mount Secure"
    },
    {
      name: "Alyssa P.",
      body: "Looks custom on my iPhone 16 Pro Gold. Not generic at all.",
      tag: "Aesthetic"
    }
  ];

  return (
    <section
      id="reviews"
      className="relative border-t border-white/10 bg-neutral-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Left summary */}
          <div className="max-w-lg">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">
              People paid $39 and feel like they robbed us.
            </h2>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Real USA reviews. We care about two things:
              legit protection + luxury vibe. That’s it.
            </p>

            <div className="mt-6 flex items-center gap-2 text-white">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-400" />
              ))}
              <span className="text-sm font-semibold">4.9/5 average</span>
            </div>
            <div className="text-[11px] text-white/40">
              Based on 2,184+ US verified reviews
            </div>

            <button
              onClick={onOpenCart}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-neutral-900 font-semibold text-sm py-3 px-5 shadow-glow-white hover:bg-white/90 active:scale-[.98] transition"
            >
              <ShoppingCart size={16} />
              <span>Buy now – $39</span>
            </button>
          </div>

          {/* Review cards */}
          <div className="grid sm:grid-cols-2 gap-6 flex-1">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="rounded-2xl bg-neutral-900/40 border border-white/10 p-5 shadow-glow-card flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 text-[11px] text-white/60">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} size={12} className="text-amber-400" />
                  ))}
                  <span className="text-white font-medium text-[11px]">
                    5.0
                  </span>
                </div>
                <p className="mt-3 text-white text-sm leading-relaxed">
                  {r.body}
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px]">
                  <span className="text-white/60">{r.name}</span>
                  <span className="text-white/40 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
                    {r.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
