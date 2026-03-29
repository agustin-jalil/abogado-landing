"use client"

import { motion } from "framer-motion"
import { Calendar, Scale, ChevronDown } from "lucide-react"
import { useState } from "react"
import { HonorarioModal } from "@/components/honorario-modal"
import { WhatsAppButton } from "@/components/whatsapp-button"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 py-28 md:px-8"
      >
        {/* Subtle grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.25 0 0 / 0.35) 1px, transparent 1px), linear-gradient(90deg, oklch(0.25 0 0 / 0.35) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Top fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40"
          style={{ background: "linear-gradient(to bottom, var(--background) 0%, transparent 100%)" }}
        />
        {/* Bottom fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
          style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 100%)" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-[var(--glass-bg)] px-4 py-1.5 text-[11px] font-medium tracking-widest uppercase text-muted-foreground backdrop-blur-md"
          >
            <Scale size={12} />
            Estudio Jurídico Premium
          </motion.div>

          {/* Title */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.12}
            variants={fadeUp}
            className="text-balance text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Su defensa legal,{" "}
            <span className="text-muted-foreground">con la solidez</span>
            <br className="hidden sm:block" />
            {" "}que merece.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.24}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Alcántara &amp; Asociados brinda asesoramiento jurídico de excelencia con
            más de 20 años de trayectoria. Estrategia legal precisa, resultados
            concretos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.36}
            variants={fadeUp}
            className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="group flex cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-foreground px-6 py-4 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/90 hover:shadow-[0_0_24px_oklch(0.97_0_0_/_0.15)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
            >
              <Calendar size={16} />
              Consultar Honorarios (JUS)
            </button>
            <WhatsAppButton />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={fadeUp}
            className="mt-14 flex flex-wrap justify-center gap-px rounded-xl border border-border overflow-hidden"
          >
            {[
              { value: "+20", label: "Años de trayectoria" },
              { value: "+800", label: "Casos resueltos" },
              { value: "98%", label: "Clientes satisfechos" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-1 min-w-[100px] flex-col items-center justify-center gap-1 bg-[var(--surface)] px-6 py-5"
              >
                <span className="text-xl font-semibold text-foreground sm:text-2xl">
                  {stat.value}
                </span>
                <span className="text-[11px] text-center text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 0.6 } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={18} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      <HonorarioModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
