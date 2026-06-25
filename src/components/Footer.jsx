import React from "react"
import { whatsappLink, whatsappContact } from "../lib/whatsapp.js"

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-sand/70 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-sand/15">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-serif text-3xl tracking-wide text-sand">Aurora</span>
              <span className="text-[10px] tracking-luxe uppercase text-sand/40">Odontologia</span>
            </div>
            <p className="font-light leading-relaxed max-w-sm text-sand/60">
              Odontologia de alto padrão no coração de São Paulo. Estética,
              tecnologia e cuidado humano em cada detalhe.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-luxe uppercase text-sand/40 mb-5">Navegação</p>
            <ul className="space-y-3 text-sm font-light">
              {[
                { href: "#antes-depois", label: "Resultados" },
                { href: "#procedimentos", label: "Procedimentos" },
                { href: "#equipe", label: "Equipe" },
                { href: "#depoimentos", label: "Depoimentos" },
                { href: "#agendar", label: "Agendar" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold-soft transition-colors duration-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] tracking-luxe uppercase text-sand/40 mb-5">Contato</p>
            <ul className="space-y-3 text-sm font-light">
              <li>Rua Oscar Freire, 1200 · Jardins, São Paulo</li>
              <li>+55 (67) 99340-143</li>
              <li>contato@auroraodonto.com.br</li>
            </ul>
            <a
              href={whatsappContact("Olá! Gostaria de mais informações.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-6 items-center gap-2 text-[11px] tracking-wide-2 uppercase text-sand border-b border-sand/30 pb-1 hover:border-gold-soft hover:text-gold-soft transition-colors duration-300"
            >
              Falar no WhatsApp →
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-wide-2 uppercase text-sand/40">
          <p>© {new Date().getFullYear()} Aurora Odontologia</p>
          <p>Concebido com cuidado · São Paulo</p>
        </div>
      </div>
    </footer>
  )
}