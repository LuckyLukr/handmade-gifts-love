import React from 'react'
import '../styles/ContactSection.css'

const contacts = [
  {
    icon: '📞',
    title: 'Telefon',
    text: 'Zavolejte Marušce přímo. Ráda odpoví na dotazy a pomůže s objednávkou.',
    link: 'tel:+420123456789',
    linkLabel: '+420 123 456 789',
  },
  {
    icon: '✉️',
    title: 'E-mail',
    text: 'Napište nám e-mail a ozveme se vám co nejdříve.',
    link: 'mailto:maruska@korbacky.cz',
    linkLabel: 'maruska@korbacky.cz',
  },
  {
    icon: '📍',
    title: 'Místo',
    text: 'Výroba probíhá na Moravě. Osobní předání je možné po domluvě.',
    link: null,
    linkLabel: 'Morava, Česká republika',
  },
]

export default function ContactSection() {
  return (
    <section id="kontakt" className="contact ornament-divider">
      <div className="contact-inner">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title font-serif">Kontakt</h2>
          <p className="section-desc">
            Máte otázku, chcete se domluvit na objednávce nebo potřebujete poradit s výběrem? Ozvěte se Marušce.
          </p>
        </div>

        <div className="contact-grid">
          {contacts.map((c) => (
            <div key={c.title} className="contact-card">
              <div className="contact-icon">{c.icon}</div>
              <h3 className="contact-title">{c.title}</h3>
              <p className="contact-text">{c.text}</p>
              {c.link ? (
                <a href={c.link} className="contact-link">{c.linkLabel}</a>
              ) : (
                <span className="contact-link" style={{ cursor: 'default' }}>{c.linkLabel}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
