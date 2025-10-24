export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-neutral-950 py-16 text-[11px] text-white/40">
      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-3 max-w-xs">
          <div className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-500 text-neutral-900 font-semibold text-[10px] flex items-center justify-center leading-none shadow-[0_8px_32px_rgba(255,255,255,.4)]">
              LX
            </div>
            <span className="text-white font-medium text-sm tracking-wide">
              LUXSHIELD™
            </span>
          </div>
          <p className="text-white/50 leading-relaxed text-[11px]">
            Premium MagSafe Armor • US Fulfillment • 30-Day Returns •
            Lifetime Protection.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-white text-[11px] font-semibold uppercase tracking-wider">
            Shop
          </div>
          <a className="block text-white/60 hover:text-white" href="#">
            iPhone
          </a>
          <a className="block text-white/60 hover:text-white" href="#">
            Samsung
          </a>
          <a className="block text-white/60 hover:text-white" href="#">
            Pixel
          </a>
        </div>

        <div className="space-y-2">
          <div className="text-white text-[11px] font-semibold uppercase tracking-wider">
            Legal (US)
          </div>
          <a className="block text-white/60 hover:text-white" href="#">
            Terms of Service
          </a>
          <a className="block text-white/60 hover:text-white" href="#">
            Privacy Policy
          </a>
          <a className="block text-white/60 hover:text-white" href="#">
            Refund Policy
          </a>
        </div>

        <div className="space-y-2">
          <div className="text-white text-[11px] font-semibold uppercase tracking-wider">
            Support
          </div>
          <a className="block text-white/60 hover:text-white" href="#faq">
            FAQ
          </a>
          <a className="block text-white/60 hover:text-white" href="#reviews">
            Reviews
          </a>
          <span className="block text-white/60 hover:text-white">
            support@luxshield.example
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 text-center text-white/30">
        <p>
          © {year} LUXSHIELD™ · All rights reserved · Built for US
          market only
        </p>
      </div>
    </footer>
  );
}
