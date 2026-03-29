"use client"

import { Drawer } from "vaul"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, ExternalLink, Scale } from "lucide-react"
import { useState, useEffect } from "react"

interface HonorarioModalProps {
  open: boolean
  onClose: () => void
}

const JUS_VALUE = 46_890

const fees = [
  { area: "Consulta inicial", jus: "3 JUS" },
  { area: "Derecho Civil", jus: "desde 15 JUS" },
  { area: "Derecho Laboral", jus: "desde 10 JUS" },
  { area: "Sucesiones", jus: "desde 20 JUS" },
  { area: "Accidentes de Tránsito", jus: "desde 12 JUS" },
]

// ─── Shared inner content ────────────────────────────────────────────────────
function ModalContent({ onClose, titleId }: { onClose: () => void; titleId: string }) {
  const formattedJUS = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(JUS_VALUE)

  return (
    <>
      {/* Título oculto para accesibilidad */}
      <h2 id={titleId} className="sr-only">
        Honorarios Profesionales
      </h2>
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]">
            <Scale size={16} className="text-foreground" />
          </div>
          <div id={titleId} className="text-base font-semibold text-foreground leading-tight">
            Honorarios Profesionales
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground active:bg-[var(--surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Cerrar"
        >
          <X size={15} />
        </button>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[var(--border)]" />

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-5 space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Nuestros honorarios se expresan en Unidades JUS para garantizar transparencia
          y actualización automática según el Colegio de Abogados.
        </p>

        {/* JUS value card */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Valor JUS vigente
          </p>
          <p className="mt-1.5 text-3xl font-semibold tracking-tight text-foreground">
            {formattedJUS}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Actualizado al mes en curso · fuente oficial CPACF
          </p>
        </div>

        {/* Fee list */}
        <ul className="space-y-2">
          {fees.map((item) => (
            <li
              key={item.area}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] px-4 py-3 text-sm"
            >
              <span className="text-muted-foreground">{item.area}</span>
              <span className="font-medium text-foreground">{item.jus}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://calendly.com/alcantara-asociados"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-4 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/90 hover:shadow-[0_0_24px_oklch(0.97_0_0_/_0.15)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Calendar size={16} />
          Agendar consulta en Calendly
          <ExternalLink size={13} className="opacity-60" />
        </a>

        <p className="text-center text-[11px] text-muted-foreground pb-1">
          La primera consulta de 30 min es informativa y sin cargo.
        </p>
      </div>
    </>
  )
}

// ─── Mobile: vaul Drawer (bottom sheet nativo) ───────────────────────────────
function MobileDrawer({ open, onClose }: HonorarioModalProps) {
  return (
    <Drawer.Root
      open={open}
      onOpenChange={(v) => { if (!v) onClose() }}
      shouldScaleBackground
    >
      <Drawer.Portal>
        {/* Overlay */}
        <Drawer.Overlay className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm" />

        {/* Sheet */}
        <Drawer.Content
          aria-labelledby="drawer-title"
          className="fixed bottom-0 left-0 right-0 z-50 flex max-h-[90dvh] flex-col rounded-t-3xl border-t border-x border-[var(--border)] bg-[var(--card)] outline-none focus:outline-none"
        >
          {/* Drag handle — vaul uses this as the drag target automatically */}
          <div className="mx-auto mt-3 mb-1 h-1 w-10 shrink-0 rounded-full bg-[var(--border)]" />

          <ModalContent onClose={onClose} titleId="drawer-title" />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

// ─── Desktop: framer-motion centered modal ───────────────────────────────────
function DesktopModal({ open, onClose }: HonorarioModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title-desktop"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-1/2 z-50 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl max-h-[85vh]"
          >
            <ModalContent onClose={onClose} titleId="modal-title-desktop" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ─── Orchestrator: renders the right one per viewport ────────────────────────
export function HonorarioModal({ open, onClose }: HonorarioModalProps) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Función para verificar el ancho de pantalla
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768)
    
    // Ejecutar al montar
    checkScreen()
    
    // Escuchar cambios de tamaño
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  if (!open) return null

  return (
    <>
      {isDesktop ? (
        <DesktopModal open={open} onClose={onClose} />
      ) : (
        <MobileDrawer open={open} onClose={onClose} />
      )}
    </>
  )
}
