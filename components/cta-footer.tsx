"use client"

import { motion } from "framer-motion"
import { Calendar, Scale, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import { HonorarioModal } from "@/components/honorario-modal"
import { WhatsAppButton } from "@/components/whatsapp-button"

export function CtaSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden py-28 px-6">
        {/* Subtle radial accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            className="h-[400px] w-[600px] rounded-full opacity-[0.04]"
            style={{
              background: "radial-gradient(circle, oklch(0.97 0 0) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mb-5 inline-flex items-center justify-center rounded-full border border-border bg-[var(--glass-bg)] p-3 backdrop-blur-md"
          >
            <Scale size={22} className="text-foreground" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-balance text-3xl font-semibold text-foreground md:text-5xl"
          >
            Su caso merece la mejor defensa posible.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            No espere a que el tiempo juegue en su contra. Agenda una consulta
            hoy y cuente con representación legal de alto impacto desde el
            primer día.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.26 }}
            className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="flex cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-foreground px-6 py-4 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/90 hover:shadow-[0_0_24px_oklch(0.97_0_0_/_0.15)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
            >
              <Calendar size={16} />
              Consultar Honorarios (JUS)
            </button>
            <WhatsAppButton label="Contactar ahora" />
          </motion.div>
        </div>
      </section>

      <HonorarioModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--surface)] px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <Scale size={14} className="text-background" />
              </div>
              <span className="text-sm font-semibold text-foreground tracking-tight">
                Alcántara &amp; Asociados
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Estudio jurídico de excelencia con más de 20 años de trayectoria.
              Comprometidos con la justicia, la transparencia y los resultados de
              nuestros clientes.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter / X" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Áreas de Práctica
            </h3>
            <ul className="space-y-2">
              {[
                "Derecho Civil",
                "Derecho Laboral",
                "Sucesiones",
                "Accidentes de Tránsito",
                "Derecho Societario",
                "Derecho Inmobiliario",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Contacto
            </h3>
            <ul className="space-y-3">
              {[
                { Icon: Phone, text: "+54 9 11 1234-5678" },
                { Icon: Mail, text: "consultas@alcantara-asociados.com.ar" },
                { Icon: MapPin, text: "Av. Corrientes 1234, Piso 8, CABA" },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon size={14} className="mt-0.5 shrink-0 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              Lun – Vie: 9:00 – 18:00 hs
            </p>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Alcántara &amp; Asociados. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Política de Privacidad", "Términos de Uso"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
