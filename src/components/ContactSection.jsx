import React from 'react'
import '../styles/ContactSection.css'

export default function ContactSection() {
  return (
    <section id="kontakt" className="contact-section">
      <div className="container-7xl contact-inner">
        <div className="section-header">
          <h2 className="font-serif section-title">Kontakt</h2>
          <p className="section-subtitle">
            Máte otázku nebo si chcete rovnou objednat? Ozvěte se Marušce e-mailem nebo telefonicky.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card shadow-soft">
            <div className="contact-icon">✉️</div>
            <h3 className="contact-card-title">E-mail</h3>
            <p className="contact-card-desc">Napište nám kdykoliv, odpovídáme obvykle do 24 hodin.</p>
            <a
              href="mailto:objednavky@marusciny-korbacky.cz"
              className="focus-ring contact-link"
            >
              objednavky@marusciny-korbacky.cz
            </a>
          </div>

          <div className="contact-card shadow-soft">
            <div className="contact-icon">📞</div>
            <h3 className="contact-card-title">Telefon</h3>
            <p className="contact-card-desc">Volejte ve všední dny od 8 do 18 hodin.</p>
            <a
              href="tel:+420777123456"
              className="focus-ring contact-link"
            >
              +420 777 123 456
            </a>
          </div>

          <div className="contact-card shadow-soft">
            <div className="contact-icon">📍</div>
            <h3 className="contact-card-title">Oblast doručení</h3>
            <p className="contact-card-desc">Osobní odběr na Moravě, možnost zaslání poštou po dohodě.</p>
            <span className="contact-location">Morava, Česká republika</span>
          </div>
        </div>
      </div>
    </section>
  )
}
