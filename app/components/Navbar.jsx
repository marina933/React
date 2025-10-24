"use client";

import { ShoppingCart } from "lucide-react";

export default function Navbar({ onOpenCart }) {
  return (
    <header className="w-full sticky top-0 z-40 bg-neutral-950/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-500 text-neutral-900 font-semibold text-[10px] flex items-center justify-center leading-none shadow-[0_8px_32px_rgba(255,255,255,.4)]">
            LX
          </div>
          <span className="text-white font-medium text-sm tracking-wide">
            LUXSHIELD™
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-white/70">
          <a className="hover:text-white transition" href="#features">
            Features
          </a>
          <a className="hover:text-white transition" href="#gallery">
            Design
          </a>
          <a className="hover:text-white transition" href="#reviews">
            Reviews
          </a>
          <a className="hover:text-white transition" href="#faq">
            FAQ
          </a>
        </nav>

        {/* CTA */}
        <button
          onClick={onOpenCart}
          className="relative inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 font-semibold text-[13px] leading-none py-2.5 px-3.5 shadow-glow-btn hover:bg-white/90 active:scale-[.98] transition"
        >
          <ShoppingCart size={16} />
          <span className="hidden sm:inline">Buy Now</span>
          <span className="absolute -top-2 -right-2 text-[10px] bg-emerald-400 text-neutral-950 font-bold rounded-full px-1.5 py-0.5 leading-none shadow-glow-chip">
            HOT
          </span>
        </button>
      </div>
    </header>
  );
}
