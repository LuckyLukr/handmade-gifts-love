import React from 'react'
import '../styles/contact.css'

export default function ContactSection() {
  return (
    <section id="kontakt" className="contact-section">
      <div className="container contact-inner">
        <div className="contact-grid">
          <article className="contact-card shadow-soft">
            <div className="contact-icon">📍</div>
            <h2 className="contact-title">Kde vyrábíme</h2>
            <p className="contact-text">
              Korbáčky vznikají na Moravě v malé domácí výrobě, kde je důležitá poctivost, čistota a tradiční přístup.
            </p>
          </article>

          <article className="contact-card shadow-soft">
            <div className="contact-icon">✉️</div>
            <h2 className="contact-title">E-mail pro objednávky</h2>
            <p className="contact-text">objednavky@marusciny-korbacky.cz</p>
            <a href="mailto:objednavky@marusciny-korbacky.cz" className="focus-ring contact-link">
              Napsat e-mail
            </a>
          </article>

          <article className="contact-card shadow-soft">
            <div className="contact-icon">📞</div>
            <h2 className="contact-title">Telefon</h2>
            <p className="contact-text">+420 777 123 456</p>
            <a href="tel:+420777123456" className="focus-ring contact-link">
              Zavolat
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
