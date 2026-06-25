import React from "react"
import { whatsappLink } from "../lib/whatsapp.js"

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
          alt="Dentista examinando sorriso de paciente"
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.style.display = "none"
            e.target.parentElement.style.background =
              "linear-gradient(135deg, #0a1a3f 0%, #14264f 60%, #060f28 100%)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/85 via-ink/55 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/80 via-transparent to-ink-deep/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-12 pt-28">
            <p className="reveal text-[11px] md:text-xs tracking-luxe uppercase text-sand/70 mb-8">
              São Paulo · Odontologia de excelência
            </p>
            <h1 className="reveal reveal-delay-1 font-serif text-sand text-[44px] leading-[1.05] sm:text-6xl lg:text-[88px] lg:leading-[0.98] max-w-4xl font-light">
              A arte de criar
              <span className="block italic text-gold-soft">sorrisos</span>
              <span className="block">que duram uma vida.</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-10 max-w-xl text-sand/75 text-lg font-light leading-relaxed">
              Uma clínica odontológica de alto padrão, onde tecnologia,
              estética e cuidado humano se encontram para transformar a sua
              saúde e a sua confiança.
            </p>

            <div className="reveal reveal-delay-3 mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href={whatsappLink(
                  "Olá! Vim pelo site e gostaria de agendar uma avaliação na Aurora Odontologia."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-sand text-ink px-8 py-4 text-[12px] tracking-wide-2 uppercase hover:bg-gold hover:text-sand transition-colors duration-500"
              >
                Agendar avaliação
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#procedimentos"
                className="text-[12px] tracking-wide-2 uppercase text-sand/80 border-b border-sand/30 pb-1 hover:text-sand hover:border-sand/80 transition-colors duration-300"
              >
                Conheça os procedimentos
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 pb-10 flex justify-center">
          <a href="#intro" className="group flex flex-col items-center gap-3 text-sand/60 hover:text-sand transition-colors duration-300">
            <span className="text-[10px] tracking-luxe uppercase">Role</span>
            <span className="relative block h-12 w-px bg-sand/30 overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-4 bg-sand animate-[scrollcue_2.4s_ease-in-out_infinite]" />
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes scrollcue {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}