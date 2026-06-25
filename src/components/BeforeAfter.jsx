import React, { useRef, useState } from "react"

const CASES = [
  {
    title: "Lentes de contato dental",
    desc: "Harmonização do sorriso com facetas ultrafinas.",
    before: "/smile-before.svg",
    after: "/smile-after.svg",
  },
]

function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50)
  const ref = useRef(null)
  const dragging = useRef(false)

  const setFromClientX = (clientX) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }

  const onDown = (clientX) => { dragging.current = true; setFromClientX(clientX) }
  const onMove = (clientX) => { if (dragging.current) setFromClientX(clientX) }
  const onUp = () => { dragging.current = false }

  return (
    <div
      ref={ref}
      className="ba-slider relative aspect-[4/3] w-full overflow-hidden bg-mist select-none"
      onMouseDown={(e) => onDown(e.clientX)}
      onMouseMove={(e) => onMove(e.clientX)}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={(e) => onDown(e.touches[0].clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={onUp}
    >
      {/* After (full) */}
      <img src={after} alt="Depois" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <span className="absolute top-5 right-5 z-20 text-[10px] tracking-luxe uppercase text-sand bg-ink/70 px-3 py-1.5">
        Depois
      </span>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt="Antes"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: ref.current ? `${ref.current.clientWidth}px` : "100%" }}
          draggable={false}
        />
        <span className="absolute top-5 left-5 z-20 text-[10px] tracking-luxe uppercase text-sand bg-ink/70 px-3 py-1.5">
          Antes
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 z-30 pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-px bg-white/90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="text-ink text-xs">⟷</span>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 z-40 w-full h-full opacity-0"
        aria-label="Comparar antes e depois"
      />
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section id="antes-depois" className="relative bg-ink py-28 lg:py-40 text-sand overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="reveal">
            <p className="text-[11px] tracking-luxe uppercase text-sand/50 mb-6">
              Resultados reais
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] max-w-2xl">
              Antes e depois,
              <span className="italic text-gold-soft"> no detalhe.</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-1 max-w-md text-sand/70 leading-relaxed font-light">
            Arraste o controle para revelar a transformação. Cada caso é planejado
            milimetricamente — do diagnóstico ao sorriso final.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 reveal">
            <BeforeAfterSlider before={CASES[0].before} after={CASES[0].after} />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 reveal reveal-delay-1">
            <p className="text-[11px] tracking-luxe uppercase text-gold-soft mb-5">
              Caso clínico
            </p>
            <h3 className="font-serif text-3xl lg:text-4xl font-light mb-6">
              {CASES[0].title}
            </h3>
            <p className="text-sand/70 leading-relaxed font-light mb-8">
              {CASES[0].desc} Resultado natural, preservando a essência do
              paciente e respeitando a harmonia facial.
            </p>
            <div className="space-y-4 border-t border-sand/20 pt-8">
              {[
                "Planejamento digital 3D",
                "Materiais de alta estética",
                "Preservação dental máxima",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm text-sand/80">
                  <span className="h-px w-6 bg-gold-soft" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}