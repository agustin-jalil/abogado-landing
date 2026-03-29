"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Valentina Torres",
    rating: 5,
    text: "El estudio gestionó mi caso laboral con una precisión impecable. En tres meses logramos un acuerdo que superó mis expectativas. Altamente recomendable.",
    date: "Hace 2 semanas",
  },
  {
    name: "Rodrigo Gómez",
    rating: 5,
    text: "Claridad, honestidad y resultados. Así definiría al equipo de Alcántara. Me asesoraron en la sucesión de mi padre y manejaron todo con enorme profesionalismo.",
    date: "Hace 1 mes",
  },
  {
    name: "Lucía Fernández",
    rating: 5,
    text: "Después del accidente de tránsito no sabía por dónde empezar. El Dr. Alcántara me guió en cada paso y obtuvimos una indemnización justa. Gracias infinitas.",
    date: "Hace 1 mes",
  },
  {
    name: "Martín Crespo",
    rating: 5,
    text: "Consulté por un despido sin causa y en menos de cuatro meses el caso se resolvió favorablemente. Comunicación constante y estrategia muy sólida.",
    date: "Hace 2 meses",
  },
  {
    name: "Sofía Ríos",
    rating: 5,
    text: "El equipo demostró un dominio total del derecho civil. Mi contrato de locación se resolvió de manera rápida y transparente. Sin duda volvería a elegirlos.",
    date: "Hace 2 meses",
  },
  {
    name: "Esteban Vilar",
    rating: 5,
    text: "Profesionales de primera categoría. Resolvieron una disputa societaria compleja en tiempo récord y con una preparación que impresionó incluso a la contraparte.",
    date: "Hace 3 meses",
  },
  {
    name: "Camila Herrera",
    rating: 5,
    text: "Excelente estudio. Me ayudaron a recuperar deuda impaga de forma eficiente. La atención personalizada hace toda la diferencia. Muy recomendables.",
    date: "Hace 3 meses",
  },
  {
    name: "Diego Montoya",
    rating: 5,
    text: "Usé sus servicios para un trámite sucesorio que parecía interminable. Con su intervención se resolvió en pocas semanas. Un equipo excepcional.",
    date: "Hace 4 meses",
  },
]

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[0]
}) {
  return (
    <div className="w-80 shrink-0 rounded-2xl border border-border bg-[var(--glass-bg)] p-6 backdrop-blur-md">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-foreground text-foreground"
          />
        ))}
      </div>
      {/* Quote */}
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </p>
      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface)] text-xs font-semibold text-foreground">
            {review.name.charAt(0)}
          </div>
          <span className="text-sm font-medium text-foreground">
            {review.name}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>
    </div>
  )
}

export function ReviewsSection() {
  const duplicated = [...reviews, ...reviews]

  return (
    <section id="resenas" className="relative overflow-hidden py-20 md:py-24">
      {/* Section header */}
      <div className="mx-auto mb-14 max-w-2xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Reseñas de Clientes
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-balance text-3xl font-semibold text-foreground md:text-4xl"
        >
          Lo que dicen quienes confiaron en nosotros
        </motion.h2>
      </div>

      {/* Left fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
        style={{
          background:
            "linear-gradient(to right, var(--background) 0%, transparent 100%)",
        }}
      />
      {/* Right fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
        style={{
          background:
            "linear-gradient(to left, var(--background) 0%, transparent 100%)",
        }}
      />

      {/* Marquee */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {duplicated.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
