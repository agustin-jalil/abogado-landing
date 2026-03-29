import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Estudio Jurídico Alcántara & Asociados | Abogados Premium',
  description:
    'Defensa legal de alto impacto. Especialistas en Derecho Civil, Laboral, Sucesiones y Accidentes de Tránsito. Consultá honorarios en JUS y agendá tu primera consulta.',
  generator: 'v0.app',
  keywords: [
    'estudio jurídico',
    'abogados',
    'derecho civil',
    'derecho laboral',
    'sucesiones',
    'accidentes de tránsito',
    'JUS',
    'honorarios',
  ],
  icons: {
    icon: '',
    apple: '',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
