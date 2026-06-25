import React from "react"

const TEAM = [
  {
    name: "Dra. Helena Brandão",
    role: "Dentista esteticista · CRO-SP 42.180",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Rafael Moretti",
    role: "Implantodontista · CRO-SP 38.945",
    image: "https://plus.unsplash.com/premium_photo-1667511093147-49d50916cd79?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dra. Marina Salles",
    role: "Harmonização orofacial · CRO-SP 45.771",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
  },
]

export default function Team() {
  return (
    <section id="equipe" className="relative bg-mist py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="reveal">
            <p className="text-[11px] tracking-luxe uppercase text-ink/40 mb-6">
              Quem cuida de você
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] text-ink max-w-2xl">
              Especialistas
              <span className="italic text-gold"> à sua espera</span>.
            </h2>
          </div>
          <p className="reveal reveal-delay-1 max-w-sm text-ink/60 leading-relaxed font-light">
            Uma equipe seleto, com formação contínua e paixão pelo detalhe —
            dedicada a construir uma relação de confiança com cada paciente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {TEAM.map((m, i) => (
            <div key={m.name} className={`reveal reveal-delay-${i + 1}`}>
              <div className="relative aspect-[4/5] overflow-hidden bg-sand group">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-[1.6s] ease-lux group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none"
                    e.target.parentElement.style.background =
                      "linear-gradient(160deg, #e9ebef 0%, #f4f5f7 100%)"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-2xl font-light text-ink">{m.name}</h3>
                <p className="mt-2 text-[11px] tracking-wide-2 uppercase text-ink/50">
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}