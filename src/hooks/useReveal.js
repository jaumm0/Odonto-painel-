import { useEffect } from "react"

// Observa todos os elementos com a classe .reveal e adiciona .is-visible
// quando entram na viewport. Scroll elegante, sem libs.
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"))
    if (els.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}