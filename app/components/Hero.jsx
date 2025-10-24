"use client";

import { useState } from "react";
import { ShoppingCart, Star, ShieldCheck, Truck, Sparkles } from "lucide-react";

export default function Hero({ onOpenCart }) {
  return (
    <section className="relative overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.12)_0%,rgba(0,0,0,0)_60%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,.18)_0%,rgba(0,0,0,0)_60%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,.12)_0%,rgba(0,0,0,0)_60%)] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-24 lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left copy */}
        <div className="max-w-xl flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/60 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full px-3 py-1 w-fit">
            <Sparkles size={12} className="text-emerald-400" />
            <span>New • US Fulfillment Only</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
            Luxury MagSafe Armor
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-400">
              {" "}
              for Next-Gen iPhone
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-lg">
            Ultra-slim military-grade drop protection + high torque MagSafe
            lock ring + soft-touch anti-fingerprint finish.
            Built to look premium. Tested to survive real impact.
            Ships fast from US warehouses. No customs, no drama.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={onOpenCart}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-neutral-900 font-semibold text-sm py-3 px-5 shadow-glow-white hover:bg-white/90 active:scale-[.98] transition w-full sm:w-auto"
            >
              <ShoppingCart size={16} />
              <span>Buy now – $39</span>
            </button>

            <div className="text-[11px] text-white/50 leading-relaxed flex flex-col">
              <div className="flex items-center gap-1 text-white">
                <Star size={14} className="text-amber-400" />
                <Star size={14} className="text-amber-400" />
                <Star size={14} className="text-amber-400" />
                <Star size={14} className="text-amber-400" />
                <Star size={14} className="text-amber-400" />
                <span className="font-medium text-[11px] text-white ml-1">
                  4.9/5
                </span>
              </div>
              <span className="text-white/50">
                2,184+ US verified reviews
              </span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-xs text-white/70 max-w-xs">
            <div className="flex items-start gap-2">
              <ShieldCheck
                size={16}
                className="text-emerald-400 flex-shrink-0"
              />
              <div>
                <p className="text-white font-medium">
                  Military-grade drop test
                </p>
                <p>2m concrete impact lab test</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Truck size={16} className="text-sky-400 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">US-only shipping</p>
                <p>2-5 day delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product mock / hero visual */}
        <div className="mt-16 lg:mt-0 flex items-center justify-center relative">
          <div className="relative w-[260px] sm:w-[300px] md:w-[340px] aspect-[3/5] rounded-[2rem] bg-gradient-to-br from-neutral-800 via-neutral-900 to-black border border-white/20 shadow-[0_60px_200px_rgba(0,0,0,.8),0_20px_60px_rgba(255,255,255,.1)_inset] flex items-center justify-center">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.18)_0%,rgba(0,0,0,0)_60%)] opacity-30" />
            <div className="text-center px-6">
              <div className="text-[10px] uppercase tracking-widest text-white/40">
                Product Render
              </div>
              <div className="mt-3 text-xl font-semibold text-white">
                LUXSHIELD™
              </div>
              <div className="text-xs text-white/50">
                Obsidian / MagSafe Lock Ring
              </div>
              <div className="mt-6 text-[10px] text-white/40 leading-relaxed max-w-[220px] mx-auto">
                High-density impact frame, soft inner microfiber,
                CNC-milled metallic camera bezel.
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white text-neutral-900 text-[10px] font-semibold rounded-xl py-2 px-3 shadow-[0_24px_80px_rgba(255,255,255,.6)]">
            $39 <span className="text-neutral-500 font-normal">USD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
