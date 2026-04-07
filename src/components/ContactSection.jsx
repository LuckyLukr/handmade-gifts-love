import React from 'react'
import '../styles/tailwindLike.css'

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-beige">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-3xl bg-white p-8 shadow-soft">
            <div className="text-3xl">📍</div>
            <h2 className="mt-4 text-2xl font-bold text-brown">Kde vyrábím</h2>
            <p className="mt-3 text-[#6b4c5c]">
              Korábky vznikají doma, v klidném prostředí a po domluvě je možné řešit osobní předání i zaslání.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-8 shadow-soft">
            <div className="text-3xl">✉️</div>
            <h2 className="mt-4 text-2xl font-bold text-brown">E-mail pro objednávky</h2>
            <p className="mt-3 text-[#6b4c5c]">objednavky@korabky-od-anicky.cz</p>
            <a
              href="mailto:objednavky@korabky-od-anicky.cz"
              className="focus-ring mt-5 inline-block font-bold text-cocoa hover:text-brown"
            >
              Napsat e-mail
            </a>
          </article>

          <article className="rounded-3xl bg-white p-8 shadow-soft">
            <div className="text-3xl">📞</div>
            <h2 className="mt-4 text-2xl font-bold text-brown">Telefon</h2>
            <p className="mt-3 text-[#6b4c5c]">+420 777 123 456</p>
            <a href="tel:+420777123456" className="focus-ring mt-5 inline-block font-bold text-cocoa hover:text-brown">
              Zavolat
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
