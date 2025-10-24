"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function Page() {
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <main className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar onOpenCart={openCart} />
      <Hero onOpenCart={openCart} />
      <Features />
      <Gallery onOpenCart={openCart} />
      <Reviews onOpenCart={openCart} />
      <FAQ />
      <Footer />
      <CartDrawer open={cartOpen} onClose={closeCart} />
    </main>
  );
}
