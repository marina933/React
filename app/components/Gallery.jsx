"use client";

export default function Gallery({ onOpenCart }) {
  const finishes = ["Obsidian Black", "Titan Smoke", "Arctic Clear"];

  return (
    <section
      id="gallery"
      className="relative border-t border-white/10 bg-neutral-950/60 py-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-xl">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">
            Looks like $120. Costs $39.
          </h2>
          <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-md">
            Modern, minimal, premium. The kind of case that shows up in
            luxury tech TikToks. You sell the vibe — and you keep the margin.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {finishes.map((finish, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 border border-white/10 shadow-glow-card"
            >
              <div className="aspect-[4/5] flex items-center justify-center text-white/20 text-[10px] uppercase tracking-widest bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.12)_0%,rgba(0,0,0,0)_60%)]">
                IMG {finish}
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="text-white">
                  <div className="text-sm font-medium">{finish}</div>
                  <div className="text-[11px] text-white/50">
                    Limited batch
                  </div>
                </div>
                <button
                  onClick={onOpenCart}
                  className="text-[11px] font-semibold rounded-lg bg-white text-neutral-900 py-2 px-3 hover:bg-white/90 active:scale-[.98]"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
