import React, { useEffect, useState } from "react"
import { whatsappLink } from "../lib/whatsapp.js"

const LINKS = [
  { href: "#antes-depois", label: "Resultados" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#agendar", label: "Agendar" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-lux ${
        scrolled
          ? "bg-sand/85 backdrop-blur-md border-b border-ink/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-wide text-ink">Aurora</span>
          <span className="text-[10px] tracking-luxe uppercase text-ink/50 group-hover:text-gold transition-colors">
            Odontologia
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[12px] tracking-wide-2 uppercase text-ink/70 hover:text-ink transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={whatsappLink("Olá! Gostaria de agendar uma avaliação na Aurora Odontologia.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-[12px] tracking-wide-2 uppercase text-sand bg-ink px-6 py-3 hover:bg-ink-soft transition-colors duration-300"
          >
            Agendar agora
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Menu"
          >
            <span className={`block h-px w-6 bg-ink transition-all duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-lux ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-6 flex flex-col gap-5 bg-sand/95 backdrop-blur-md border-t border-ink/10">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wide-2 uppercase text-ink/70"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}