"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Scale, Menu, X } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Áreas de Práctica", href: "#areas" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-[var(--glass-bg)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8 md:py-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <Scale size={14} className="text-background" />
            </div>
            <span className="text-sm font-semibold text-foreground tracking-tight">
              Alcántara &amp; Asociados
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #1fad4b 0%, #25D366 60%, #128C7E 100%)",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="13" height="13" fill="white" aria-hidden="true">
                <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.358.637 4.661 1.844 6.676L2.667 29.333l6.853-1.797A13.265 13.265 0 0016.004 29.333c7.368 0 13.329-5.969 13.329-13.333 0-7.364-5.961-13.333-13.329-13.333zm0 24.358a11.03 11.03 0 01-5.635-1.546l-.404-.239-4.068 1.067 1.085-3.963-.263-.419A11.002 11.002 0 015.01 16c0-6.063 4.933-10.997 10.994-10.997 6.06 0 10.993 4.934 10.993 10.997 0 6.063-4.933 10.997-10.993 10.997zm6.038-8.235c-.328-.166-1.954-.963-2.256-1.074-.303-.11-.523-.165-.743.165-.22.33-.852 1.074-1.044 1.294-.192.22-.384.248-.713.083-.328-.165-1.388-.512-2.645-1.631-.977-.872-1.636-1.949-1.828-2.279-.192-.33-.021-.51.144-.675.148-.148.328-.386.493-.579.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.743-1.793-1.017-2.453-.268-.645-.541-.557-.743-.567l-.633-.011c-.22 0-.578.083-.881.413-.303.33-1.154 1.128-1.154 2.756 0 1.627 1.182 3.201 1.347 3.421.165.22 2.326 3.556 5.638 4.987.788.34 1.403.543 1.882.695.79.252 1.509.216 2.077.131.634-.094 1.953-.798 2.228-1.569.276-.771.276-1.432.193-1.569-.083-.138-.303-.22-.633-.386z" />
              </svg>
              Contactar ahora
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground active:bg-[var(--surface)] md:hidden"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu — full width overlay card */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Tap outside to close */}
            <motion.div
              key="menu-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-20 md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[62px] left-4 right-4 z-20 rounded-2xl border border-border bg-[var(--card)] p-3 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center rounded-xl px-4 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-[var(--surface)] hover:text-foreground active:bg-[var(--surface-hover)]"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 border-t border-border pt-3">
                  <WhatsAppButton label="Contactar ahora" fullWidth />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
