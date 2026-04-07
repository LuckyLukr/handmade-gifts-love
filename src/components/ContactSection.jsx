import React from 'react'
import '../styles/contact.css'

export default function ContactSection() {
  return (
    <section id="kontakt" className="contact-section">
      <div className="container contact-inner">
        <div className="section-header">
          <h2 className="font-serif section-title">Kontakt</h2>
          <p className="section-desc">
            Máte dotaz, chcete se domluvit na objednávce nebo potřebujete poradit s výběrem? Ozvěte se Marušce přímo.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card shadow-soft">
            <div className="contact-icon">✉️</div>
            <h3 className="contact-card-title">E-mail</h3>
            <p className="contact-card-text">objednavky@marusciny-korbacky.cz</p>
            <a
              href="mailto:objednavky@marusciny-korbacky.cz"
              className="focus-ring contact-link"
            >
              Napsat e-mail
            </a>
          </div>

          <div className="contact-card shadow-soft">
            <div className="contact-icon">📞</div>
            <h3 className="contact-card-title">Telefon</h3>
            <p className="contact-card-text">+420 777 123 456</p>
            <a
              href="tel:+420777123456"
              className="focus-ring contact-link"
            >
              Zavolat
            </a>
          </div>

          <div className="contact-card shadow-soft">
            <div className="contact-icon">📍</div>
            <h3 className="contact-card-title">Oblast doručení</h3>
            <p className="contact-card-text">Morava a okolí, domluvíme se individuálně.</p>
            <a href="#objednat" className="focus-ring contact-link">
              Objednat
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
