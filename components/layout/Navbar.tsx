"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

const nav = [
  { label: "Servicios",  href: "#servicios" },
  { label: "Productos",  href: "#productos" },
  { label: "Demo",       href: "#demo" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Clientes",   href: "#casos" },
  { label: "Nosotros",   href: "#nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* Urgency bar */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.45)", background: "rgba(167,139,250,0.18)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center gap-3 text-[12px]" style={{ fontFamily: "var(--font-body)", color: "var(--text-2)" }}>
          <span>🚀</span>
          <span><strong style={{ color: "var(--violet-d)" }}>Nuevo:</strong> Agente Negociador IA — cierra acuerdos 3× más rápido.</span>
          <a href="#productos" className="inline-flex items-center gap-1 font-semibold" style={{ color: "var(--blue)" }}>
            Ver ahora <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.30)",
          backdropFilter: "blur(24px) saturate(1.9)",
          WebkitBackdropFilter: "blur(24px) saturate(1.9)",
          borderBottom: "1px solid rgba(255,255,255,0.65)",
          boxShadow: scrolled ? "0 4px 24px rgba(100,80,200,0.12), inset 0 -1px 0 rgba(255,255,255,0.50)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#inicio" className="flex items-center flex-shrink-0">
  <Image
    src="/logo-inteliabyte.png"
    alt="Inteliabyte"
    width={260}
    height={72}
    priority
    className="h-10 w-auto lg:h-12"
  />
</a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((l) => (
              <a key={l.href} href={l.href}
                className="px-3.5 py-2 rounded-xl text-[13.5px] font-medium transition-all duration-150"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-3)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(167,139,250,0.12)"; (e.currentTarget as HTMLElement).style.color = "var(--violet-d)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = "var(--text-3)"; }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a href="tel:+593990000000" className="flex items-center gap-1.5 text-[12.5px] px-3 py-2 rounded-xl transition-all"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-3)" }}>
              <Phone className="w-3.5 h-3.5" />+593 99 000 0000
            </a>
            <a href="#contacto" className="btn-glass text-[12.5px] px-5 py-2.5 rounded-xl">Contactar</a>
            <a href="#demo" className="btn-primary text-[12.5px] px-5 py-2.5 rounded-xl">
              Demo Gratis <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile */}
          <button className="lg:hidden p-2 rounded-xl transition-all" onClick={() => setOpen(!open)}
            style={{ background: "rgba(255,255,255,0.50)", border: "1px solid rgba(255,255,255,0.70)" }}>
            {open ? <X className="w-5 h-5" style={{ color: "var(--text)" }} /> : <Menu className="w-5 h-5" style={{ color: "var(--text)" }} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
<motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
  style={{ background: "rgba(255,255,255,0.60)", backdropFilter: "blur(24px) saturate(1.9)", WebkitBackdropFilter: "blur(24px) saturate(1.9)", borderBottom: "1px solid rgba(255,255,255,0.70)", boxShadow: "0 8px 32px rgba(100,80,200,0.15)" }}
  className="absolute top-full left-0 right-0 p-5">
  <div className="mb-4">
    <Image
      src="/logo-inteliabyte.png"
      alt="Inteliabyte"
      width={220}
      height={60}
      className="h-10 w-auto"
    />
  </div>

  <nav className="flex flex-col gap-1 mb-5">
              <a href="#demo" className="btn-primary justify-center py-3.5 text-[14px]">Demo Gratis</a>
              <a href="#contacto" className="btn-glass justify-center py-3.5 text-[14px]">Hablar con asesor</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
