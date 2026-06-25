import React from "react"
import { whatsappContact } from "../lib/whatsapp.js"

const STATS = [
  { value: "18", label: "Anos de excelência" },
  { value: "12mil+", label: "Sorrisos transformados" },
  { value: "98%", label: "Pacientes satisfeitos" },
]

export default function Intro() {
  return (
    <section id="intro" className="relative bg-sand py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <div className="lg:col-span-5 reveal">
          <p className="text-[11px] tracking-luxe uppercase text-ink/40 mb-6">
            Nossa essência
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-light text-ink">
            Cuidado que vai
            <span className="italic text-gold"> além do sorriso</span>.
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 reveal reveal-delay-1">
          <p className="text-lg text-ink/70 leading-relaxed font-light">
            Na Aurora, acreditamos que cada paciente é único. Por isso, o nosso
            atendimento começa pela escuta — um diagnóstico minucioso, um plano
            sob medida e uma equipe dedicada a cada detalhe da sua jornada.
          </p>
          <p className="mt-6 text-ink/60 leading-relaxed font-light">
            Aqui, tecnologia de ponta e estética refinada caminham lado a lado
            com acolhimento. O resultado é uma experiência serena e um sorriso
            que reflete a sua melhor versão.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-ink/15 pt-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl lg:text-4xl text-ink">{s.value}</p>
                <p className="mt-2 text-[11px] tracking-wide-2 uppercase text-ink/50 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href={whatsappContact("Olá! Gostaria de conhecer melhor a Aurora Odontologia.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 text-[12px] tracking-wide-2 uppercase text-ink border-b border-ink/40 pb-1 hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Conversar com a equipe
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}