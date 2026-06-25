import React, { useEffect, useState } from "react"
import { whatsappLink } from "../lib/whatsapp.js"

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href={whatsappLink("Olá! Gostaria de agendar uma avaliação na Aurora Odontologia.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-ink text-sand px-5 py-4 shadow-2xl transition-all duration-700 ease-lux hover:bg-gold ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.91z"/>
        <path d="M16.046 13.996c-.073-.122-.267-.195-.557-.343-.29-.146-1.713-.846-1.979-.941-.266-.097-.46-.146-.654.146-.193.293-.75.941-.92 1.134-.169.195-.339.219-.628.073-.29-.146-1.223-.451-2.326-1.434-.86-.767-1.442-1.713-1.611-2.003-.169-.293-.018-.451.128-.597.131-.131.29-.343.435-.513.146-.171.194-.293.292-.488.097-.195.048-.366-.024-.513-.073-.146-.654-1.578-.896-2.158-.236-.568-.476-.49-.654-.499l-.557-.01c-.193 0-.513.073-.78.366-.267.293-1.019.996-1.019 2.428 0 1.431 1.042 2.814 1.187 3.009.146.195 2.046 3.12 4.956 4.379.692.299 1.232.477 1.654.612.695.221 1.328.19 1.829.115.559-.083 1.713-.7 1.952-1.376.24-.676.24-1.256.168-1.376z"/>
      </svg>
      <span className="text-[11px] tracking-wide-2 uppercase">Agendar</span>
    </a>
  )
}