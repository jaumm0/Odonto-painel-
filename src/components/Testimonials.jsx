import React, { useEffect, useState } from "react"

const TESTIMONIALS = [
  {
    quote:
      "Nunca me senti tão acolhida em uma clínica. O resultado superou todas as expectativas — finalmente sorriso com confiança.",
    author: "Camila R.",
    detail: "Lentes de contato dental",
  },
  {
    quote:
      "Profissionalismo absoluto do primeiro ao último dia. A tecnologia é impressionante, mas o cuidado humano é o que marca.",
    author: "André M.",
    detail: "Reabilitação oral",
  },
  {
    quote:
      "Cada detalhe foi pensado. O planejamento digital me mostrou o resultado antes mesmo de começar — perfeito.",
    author: "Patrícia L.",
    detail: "Ortodontia invisível",
  },
  {
    quote:
      "Ambiente impecável e equipe de altíssimo nível. Recomendo de olhos fechados para qualquer pessoa que busca excelência.",
    author: "Fernando C.",
    detail: "Implantes",
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(id)
  }, [])

  const t = TESTIMONIALS[i]

  return (
    <section id="depoimentos" className="relative bg-sand py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <p className="reveal text-[11px] tracking-luxe uppercase text-ink/40 mb-10">
          Depoimentos
        </p>

        <div className="reveal reveal-delay-1 relative min-h-[280px] sm:min-h-[240px]">
          <span className="font-serif text-7xl text-gold/30 leading-none block mb-4">“</span>
          {TESTIMONIALS.map((item, idx) => (
            <blockquote
              key={idx}
              className="absolute inset-x-0 top-16 transition-all duration-1000 ease-lux"
              style={{
                opacity: idx === i ? 1 : 0,
                transform: idx === i ? "translateY(0)" : "translateY(20px)",
                pointerEvents: idx === i ? "auto" : "none",
              }}
            >
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light leading-snug text-ink italic">
                {item.quote}
              </p>
              <footer className="mt-8">
                <p className="text-sm tracking-wide-2 uppercase text-ink">
                  {item.author}
                </p>
                <p className="mt-1 text-[11px] tracking-wide-2 uppercase text-ink/40">
                  {item.detail}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="reveal reveal-delay-2 mt-12 flex items-center justify-center gap-3">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Depoimento ${idx + 1}`}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-12 bg-ink" : "w-6 bg-ink/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}