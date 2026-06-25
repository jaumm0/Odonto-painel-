import React from "react"
import { useReveal } from "./hooks/useReveal.js"
import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import Intro from "./components/Intro.jsx"
import BeforeAfter from "./components/BeforeAfter.jsx"
import Procedures from "./components/Procedures.jsx"
import Team from "./components/Team.jsx"
import Testimonials from "./components/Testimonials.jsx"
import Booking from "./components/Booking.jsx"
import Footer from "./components/Footer.jsx"
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx"

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-sand text-ink overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Intro />
        <BeforeAfter />
        <Procedures />
        <Team />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}