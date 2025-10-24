export const metadata = {
  title: "LUXSHIELD™ – Luxury MagSafe Armor Case",
  description:
    "Military-grade slim protection + MagSafe ultra-lock ring. Ships from USA only. 30-day returns. Lifetime protection guarantee."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
