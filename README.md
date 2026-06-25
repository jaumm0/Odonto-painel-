# Aurora Odontologia — Landing Page

Landing page de uma clínica odontológica de alto padrão. Visual clean, luxuoso
e minimalista, inspirado nas clínicas premium de São Paulo. Objetivo: gerar
agendamentos via WhatsApp.

## Stack

- **Vite** + **React 18** (JavaScript — sem TypeScript)
- **Tailwind CSS v4** (via plugin `@tailwindcss/vite`)
- Animações de scroll com `IntersectionObserver` (sem libs pesadas)

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # build de produção (gera /dist)
npm run preview  # pré-visualiza o build
```

## Estrutura

```
src/
  components/
    Nav.jsx            # navegação fixa, vira sólida no scroll
    Hero.jsx           # hero em tela cheia + CTA WhatsApp
    Intro.jsx           # essência + números
    BeforeAfter.jsx    # slider interativo "antes e depois"
    Procedures.jsx     # lista editorial (não cards) + preview sticky
    Team.jsx           # equipe
    Testimonials.jsx   # depoimentos em carrossel
    Booking.jsx        # formulário que monta mensagem do WhatsApp
    Footer.jsx
    FloatingWhatsApp.jsx
  hooks/useReveal.js   # animação de scroll elegante
  lib/whatsapp.js      # helper de links do WhatsApp
  index.css            # tema (cores, fontes serif/sans, utilitários)
```

## Personalização

- **Número do WhatsApp:** edite `PHONE` em `src/lib/whatsapp.js`.
- **Imagens:** substitua as URLs do Unsplash (`https://images.unsplash.com/...`)
  pelas fotos profissionais da clínica. Os componentes já possuem fallback
  elegante caso uma imagem não carregue.
- **Cores:** definidas no bloco `@theme` em `src/index.css`
  (`--color-ink`, `--color-sand`, `--color-gold`, etc.).
- **Fontes:** Cormorant Garamond (serif, títulos) + Inter (sans, textos),
  carregadas no `index.html`.