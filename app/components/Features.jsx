export default function Features() {
  return (
    <section
      id="features"
      className="relative border-t border-white/10 bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8 lg:gap-12">
        {[
          {
            num: "1",
            title: "MagSafe Ultra-Lock",
            desc: "High-torque magnet ring → steady grip on car mounts / wireless chargers. No slip on bumpy roads.",
            note: "Works with MagSafe stands & batteries."
          },
          {
            num: "2",
            title: "Armor Slimline",
            desc: "Shock-absorb frame + CNC metal camera bezel. Under 2mm thin.",
            note: "Lab drop tested from 2m onto concrete."
          },
          {
            num: "3",
            title: "Soft-Touch Finish",
            desc: "Matte anti-fingerprint texture. Feels luxury, won’t slide out of your hand.",
            note: "Inspired by high-end automotive interiors."
          }
        ].map((f, i) => (
          <div
            key={i}
            className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-glow-card"
          >
            <div className="flex items-center gap-3 text-white">
              <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-white text-neutral-900 text-[10px] font-bold shadow-[0_24px_80px_rgba(255,255,255,.6)]">
                {f.num}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              {f.desc}
            </p>
            <p className="mt-4 text-[11px] text-white/40">{f.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
