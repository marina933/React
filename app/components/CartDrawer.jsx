"use client";

import { ShoppingCart, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";

export default function CartDrawer({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-sm bg-neutral-900 h-full shadow-2xl flex flex-col border-l border-white/10">
        {/* Header */}
        <div className="p-6 flex items-start justify-between border-b border-white/10">
          <div>
            <p className="text-sm uppercase tracking-wide text-white/60">
              Cart
            </p>
            <h2 className="text-xl font-semibold text-white">
              LUXSHIELD™ Case
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-sm"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          <div className="flex gap-4">
            <div className="bg-neutral-800/60 border border-white/10 rounded-xl w-24 h-24 flex items-center justify-center text-white/50 text-[10px] uppercase tracking-wide">
              IMG
            </div>
            <div className="flex-1 text-sm leading-relaxed">
              <p className="font-medium text-white">
                LUXSHIELD™ Magnetic Armor Case
              </p>
              <p className="text-white/60">
                iPhone 16 Pro • Obsidian Black
              </p>
              <p className="text-white mt-2 font-semibold">
                $39
                <span className="text-white/60 text-xs align-top">.00</span>
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-neutral-800/40 border border-white/10 p-4 text-xs leading-relaxed text-white/70">
            <p className="font-medium text-white flex items-center gap-2 text-sm">
              <ShieldCheck size={16} className="text-emerald-400" />
              Lifetime Protection
            </p>
            <p className="mt-1">
              1x free replacement if the frame cracks or the MagSafe
              ring loses strength.
            </p>
          </div>

          <div className="rounded-xl bg-neutral-800/40 border border-white/10 p-4 text-xs leading-relaxed text-white/70">
            <p className="font-medium text-white flex items-center gap-2 text-sm">
              <Truck size={16} className="text-sky-400" />
              Fast US Shipping
            </p>
            <p className="mt-1">
              Ships from Illinois / California fulfillment hubs.
              No customs. No hidden fees.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/60">Subtotal</span>
            <span className="text-white font-semibold">$39.00</span>
          </div>
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-neutral-900 font-semibold text-sm py-3 hover:bg-white/90 active:scale-[.99] transition">
            <ShoppingCart size={16} />
            <span>Secure Checkout</span>
          </button>
          <p className="text-[10px] text-white/40 text-center leading-relaxed">
            Stripe • PayPal • Apple Pay
          </p>
        </div>
      </div>
    </div>
  );
}
