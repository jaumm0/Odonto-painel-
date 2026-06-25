import React, { useState } from "react"
import { whatsappLink } from "../lib/whatsapp.js"

const PROCEDURES = [
  "Avaliação geral",
  "Lentes de contato dental",
  "Implantes",
  "Clareamento",
  "Harmonização orofacial",
  "Ortodontia invisível",
  "Reabilitação oral",
]

const TIMES = ["Manhã", "Tarde", "Qualquer horário"]

export default function Booking() {
  const [form, setForm] = useState({
    nome: "",
    procedimento: PROCEDURES[0],
    horario: TIMES[0],
    detalhe: "",
  })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const message =
    `Olá! Gostaria de agendar uma avaliação na Aurora Odontologia.%0A%0A` +
    `*Nome:* ${form.nome || "—"}%0A` +
    `*Procedimento de interesse:* ${form.procedimento}%0A` +
    `*Preferência de horário:* ${form.horario}%0A` +
    `*Detalhes:* ${form.detalhe || "—"}`

  const link = whatsappLink(decodeURIComponent(message))

  return (
    <section id="agendar" className="relative bg-ink text-sand py-28 lg:py-40 overflow-hidden">
      {/* subtle decorative line */}
      <div className="absolute top-0 inset-x-0 hairline" style={{ opacity: 0.25, background: "linear-gradient(90deg,transparent,#c9a878,transparent)" }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left — invitation */}
        <div className="lg:col-span-5 reveal">
          <p className="text-[11px] tracking-luxe uppercase text-sand/50 mb-6">
            Agendamento
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05]">
            Sua jornada
            <span className="italic text-gold-soft"> começa aqui</span>.
          </h2>
          <p className="mt-8 text-sand/70 leading-relaxed font-light max-w-md">
            Preencha os campos abaixo e finalize o seu agendamento em segundos,
            direto pelo WhatsApp. Nossa equipe retornará para confirmar o horário.
          </p>

          <div className="mt-12 space-y-6 border-t border-sand/20 pt-10">
            <div className="flex items-start gap-4">
              <span className="text-gold-soft text-xs mt-1">◆</span>
              <div>
                <p className="text-[11px] tracking-wide-2 uppercase text-sand/50">Endereço</p>
                <p className="text-sand/90 font-light mt-1">
                  Rua Oscar Freire, 1200 · Jardins, São Paulo
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-gold-soft text-xs mt-1">◆</span>
              <div>
                <p className="text-[11px] tracking-wide-2 uppercase text-sand/50">Horários</p>
                <p className="text-sand/90 font-light mt-1">
                  Seg a Sex · 8h às 19h · Sáb · 8h às 13h
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-gold-soft text-xs mt-1">◆</span>
              <div>
                <p className="text-[11px] tracking-wide-2 uppercase text-sand/50">Contato</p>
                <p className="text-sand/90 font-light mt-1">
                  +55 (67) 99340-143
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <form
          onSubmit={(e) => { e.preventDefault(); window.open(link, "_blank", "noopener,noreferrer") }}
          className="lg:col-span-6 lg:col-start-7 reveal reveal-delay-1 space-y-8"
        >
          <Field label="Nome completo">
            <input
              type="text"
              value={form.nome}
              onChange={set("nome")}
              required
              placeholder="Como podemos te chamar?"
              className="w-full bg-transparent border-b border-sand/30 py-3 text-sand font-light placeholder:text-sand/40 focus:border-gold-soft focus:outline-none transition-colors duration-300"
            />
          </Field>

          <div className="grid sm:grid-cols-2 gap-8">
            <Field label="Procedimento de interesse">
              <select
                value={form.procedimento}
                onChange={set("procedimento")}
                className="w-full bg-transparent border-b border-sand/30 py-3 text-sand font-light focus:border-gold-soft focus:outline-none transition-colors duration-300 [&>option]:text-ink"
              >
                {PROCEDURES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </Field>

            <Field label="Preferência de horário">
              <select
                value={form.horario}
                onChange={set("horario")}
                className="w-full bg-transparent border-b border-sand/30 py-3 text-sand font-light focus:border-gold-soft focus:outline-none transition-colors duration-300 [&>option]:text-ink"
              >
                {TIMES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Detalhes (opcional)">
            <textarea
              value={form.detalhe}
              onChange={set("detalhe")}
              rows={3}
              placeholder="Conte-nos um pouco sobre o que você procura…"
              className="w-full bg-transparent border-b border-sand/30 py-3 text-sand font-light placeholder:text-sand/40 focus:border-gold-soft focus:outline-none transition-colors duration-300 resize-none"
            />
          </Field>

          <button
            type="submit"
            className="group inline-flex items-center gap-3 bg-sand text-ink px-8 py-4 text-[12px] tracking-wide-2 uppercase hover:bg-gold hover:text-sand transition-colors duration-500"
          >
            Agendar pelo WhatsApp
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
          </button>
          <p className="block text-[11px] tracking-wide-2 uppercase text-sand/40">
            Resposta em até 1 hora útil
          </p>
        </form>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-luxe uppercase text-sand/50">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  )
}