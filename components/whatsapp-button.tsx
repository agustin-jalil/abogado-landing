"use client"

/**
 * Reutilizable: botón de WhatsApp con gradiente verde nativo y logo SVG oficial.
 * Úsalo en Hero, CTA final y Navbar mobile.
 */
export function WhatsAppButton({
  label = "Contactar ahora",
  fullWidth = false,
}: {
  label?: string
  fullWidth?: boolean
}) {
  return (
    <a
      href="https://wa.me/5491112345678?text=Hola,%20me%20gustaría%20consultar%20sobre%20sus%20servicios%20legales."
      target="_blank"
      rel="noopener noreferrer"
      className={`flex cursor-pointer items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-sm font-semibold transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 ${
        fullWidth ? "w-full" : "sm:w-auto"
      }`}
      style={{
        background: "linear-gradient(135deg, #1fad4b 0%, #25D366 60%, #128C7E 100%)",
        color: "#fff",
        boxShadow: "0 2px 24px 0 rgba(37,211,102,0.18)",
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 32px 0 rgba(37,211,102,0.34)"
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow =
          "0 2px 24px 0 rgba(37,211,102,0.18)"
      }}
    >
      {/* WhatsApp SVG oficial */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="17"
        height="17"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.358.637 4.661 1.844 6.676L2.667 29.333l6.853-1.797A13.265 13.265 0 0016.004 29.333c7.368 0 13.329-5.969 13.329-13.333 0-7.364-5.961-13.333-13.329-13.333zm0 24.358a11.03 11.03 0 01-5.635-1.546l-.404-.239-4.068 1.067 1.085-3.963-.263-.419A11.002 11.002 0 015.01 16c0-6.063 4.933-10.997 10.994-10.997 6.06 0 10.993 4.934 10.993 10.997 0 6.063-4.933 10.997-10.993 10.997zm6.038-8.235c-.328-.166-1.954-.963-2.256-1.074-.303-.11-.523-.165-.743.165-.22.33-.852 1.074-1.044 1.294-.192.22-.384.248-.713.083-.328-.165-1.388-.512-2.645-1.631-.977-.872-1.636-1.949-1.828-2.279-.192-.33-.021-.51.144-.675.148-.148.328-.386.493-.579.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.743-1.793-1.017-2.453-.268-.645-.541-.557-.743-.567l-.633-.011c-.22 0-.578.083-.881.413-.303.33-1.154 1.128-1.154 2.756 0 1.627 1.182 3.201 1.347 3.421.165.22 2.326 3.556 5.638 4.987.788.34 1.403.543 1.882.695.79.252 1.509.216 2.077.131.634-.094 1.953-.798 2.228-1.569.276-.771.276-1.432.193-1.569-.083-.138-.303-.22-.633-.386z" />
      </svg>
      {label}
    </a>
  )
}
