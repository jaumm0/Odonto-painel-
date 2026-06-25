const PHONE = "5567993404143" // 67 993404-143

export function whatsappLink(message) {
  const text = encodeURIComponent(
    message ||
      "Olá! Gostaria de agendar uma avaliação na Aurora Odontologia."
  )
  return `https://wa.me/${PHONE}?text=${text}`
}

export function whatsappContact(message) {
  const text = encodeURIComponent(message || "Olá! Tenho uma dúvida.")
  return `https://wa.me/${PHONE}?text=${text}`
}