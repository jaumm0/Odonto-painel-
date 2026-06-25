import React, { useState } from "react"
import { whatsappLink } from "../lib/whatsapp.js"

const PROCEDURES = [
  {
    n: "01",
    name: "Lentes de contato dental",
    desc: "Facetas ultrafinas que redesenham o sorriso com naturalidade e precisão milimétrica.",
    image: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "02",
    name: "Implantes dentários",
    desc: "Reabilitação completa com implantes de titânio e planejamento guiado por computador.",
    image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "03",
    name: "Clareamento profissional",
    desc: "Tecnologia de última geração para um sorriso luminoso, seguro e duradouro.",
    image: "https://images.unsplash.com/photo-1670250492416-570b5b7343b1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "04",
    name: "Harmonização orofacial",
    desc: "Equilíbrio facial por meio de toxina, bioestimuladores e procedimentos minimamente invasivos.",
    image: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "05",
    name: "Ortodontia invisível",
    desc: "Alinhadores transparentes e discretos para corrigir o sorriso com conforto e estética.",
    image: "https://images.unsplash.com/photo-1495573020741-8a2f372bbec3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "06",
    name: "Reabilitação oral",
    desc: "Recuperação completa da função e da estética, devolvendo confiança e qualidade de vida.",
    image: "https://images.unsplash.com/photo-1667133295315-820bb6481730?auto=format&fit=crop&w=1200&q=80",
  },
]

export default function Procedures() {
  const [active, setActive] = useState(0)

  return (
    <section id="procedimentos" className="relative bg-sand py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="reveal">
            <p className="text-[11px] tracking-luxe uppercase text-ink/40 mb-6">
              Tratamentos
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] text-ink max-w-2xl">
              Procedimentos
              <span className="italic text-gold"> sob medida</span>.
            </h2>
          </div>
          <p className="reveal reveal-delay-1 max-w-sm text-ink/60 leading-relaxed font-light">
            Da estética à reabilitação completa — cada tratamento é conduzido
            por especialistas e apoiado por tecnologia de precisão.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* List */}
          <div className="lg:col-span-7">
            {PROCEDURES.map((p, i) => (
              <a
                key={p.n}
                href={whatsappLink(`Olá! Tenho interesse em ${p.name}. Gostaria de mais informações.`)}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive(i)}
                className="reveal group block border-t border-ink/15 last:border-b py-8 lg:py-10"
              >
                <div className="flex items-baseline gap-6 lg:gap-10">
                  <span className="font-serif text-2xl text-ink/40 group-hover:text-gold transition-colors duration-500 w-12">
                    {p.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl lg:text-4xl font-light text-ink group-hover:text-gold transition-colors duration-500">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-ink/55 leading-relaxed font-light max-w-xl group-hover:text-ink/75 transition-colors duration-500">
                      {p.desc}
                    </p>
                  </div>
                  <span className="hidden lg:block text-2xl text-ink/30 group-hover:text-gold group-hover:translate-x-1 transition-all duration-500">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Sticky preview image (desktop) */}
          <div className="hidden lg:block lg:col-span-4 lg:col-start-9">
            <div className="sticky top-28">
              <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                {PROCEDURES.map((p, i) => (
                  <img
                    key={p.n}
                    src={p.image}
                    alt={p.name}
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-lux"
                    style={{
                      opacity: i === active ? 1 : 0,
                      transform: i === active ? "scale(1)" : "scale(1.06)",
                    }}
                    onError={(e) => {
                      // Fallback elegante: gradient em vez de imagem quebrada.
                      // Não esconde o elemento, então ele continua alternando no hover.
                      e.target.src =
                        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='%23e9ebef'/><stop offset='1' stop-color='%23f4f5f7'/></linearGradient></defs><rect width='3' height='4' fill='url(%23g)'/></svg>"
                      e.target.onerror = null
                    }}
                  />
                ))}
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] tracking-luxe uppercase text-sand/80 mb-1">
                    {PROCEDURES[active].n}
                  </p>
                  <p className="font-serif text-2xl text-sand font-light">
                    {PROCEDURES[active].name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}