"use client"

import { motion } from "framer-motion"
import {
  FileText,
  Briefcase,
  BookOpen,
  Car,
  Building2,
  Home,
} from "lucide-react"

const areas = [
  {
    icon: FileText,
    title: "Derecho Civil",
    description:
      "Contratos, daños y perjuicios, propiedad intelectual y reclamaciones patrimoniales con respaldo procesal completo.",
    badge: "Alta demanda",
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    description:
      "Despidos, accidentes de trabajo, reclamos de haberes y representación ante el SECLO y la justicia laboral.",
    badge: null,
  },
  {
    icon: BookOpen,
    title: "Sucesiones",
    description:
      "Tramitación judicial y extrajudicial de sucesiones, testamentos, declaratorias de herederos y partición de bienes.",
    badge: null,
  },
  {
    icon: Car,
    title: "Accidentes de Tránsito",
    description:
      "Reclamación de indemnizaciones, lesiones corporales, daño material y gestión ante aseguradoras.",
    badge: "Sin cargo inicial",
  },
  {
    icon: Building2,
    title: "Derecho Societario",
    description:
      "Constitución de empresas, contratos societarios, fusiones, adquisiciones y conflictos entre socios.",
    badge: null,
  },
  {
    icon: Home,
    title: "Derecho Inmobiliario",
    description:
      "Compraventa, locaciones, desalojos, propiedad horizontal y saneamiento de títulos en toda la provincia.",
    badge: null,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
}

export function AreasSection() {
  return (
    <section id="areas" className="relative py-20 px-5 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Nuestro enfoque
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-balance text-3xl font-semibold text-foreground md:text-4xl"
          >
            Áreas de Práctica
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4 text-base leading-relaxed text-muted-foreground"
          >
            Cada caso es único. Nuestro equipo combina especialización técnica
            y experiencia acumulada para ofrecer soluciones legales concretas
            en cada rama del derecho.
          </motion.p>
        </div>

        {/* Desktop grid / Mobile horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <AreaCard area={area} />
            </motion.div>
          ))}
        </div>

        {/* Mobile scroll — wider cards, edge-to-edge feel */}
        <div className="flex md:hidden gap-3 overflow-x-auto pb-5 -mx-5 px-5 snap-x snap-mandatory scrollbar-hide">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="snap-start shrink-0 w-[80vw] max-w-[320px]"
            >
              <AreaCard area={area} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AreaCard({ area }: { area: (typeof areas)[0] }) {
  const Icon = area.icon
  return (
    <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-border bg-[var(--surface)] p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-[var(--surface-hover)] hover:shadow-[0_0_40px_oklch(0.97_0_0_/_0.04)]">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-[var(--glass-bg)] transition-colors duration-200 group-hover:border-foreground/20">
          <Icon size={18} className="text-foreground" />
        </div>
        {area.badge && (
          <span className="rounded-full border border-border bg-[var(--glass-bg)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {area.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-foreground">{area.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {area.description}
        </p>
      </div>

      {/* Arrow accent */}
      <div className="mt-auto pt-2">
        <span className="text-xs text-muted-foreground transition-all duration-200 group-hover:text-foreground">
          Consultar &rarr;
        </span>
      </div>
    </div>
  )
}
