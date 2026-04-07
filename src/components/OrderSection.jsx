import React, { useState } from 'react'
import '../styles/OrderSection.css'

export default function OrderSection() {
  const [form, setForm] = useState({ jmeno: '', email: '', telefon: '', zprava: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = form.jmeno || 'Zákazník'
    const email = form.email || 'bez e-mailu'
    const phone = form.telefon || 'bez telefonu'
    const message = form.zprava || 'Dobrý den, mám zájem o korbáčky.'
    const subject = encodeURIComponent('Objednávka korbáčků z webu')
    const body = encodeURIComponent(
      'Dobrý den,\n\n' +
      'jmenuji se ' + name + '.\n' +
      'E-mail: ' + email + '\n' +
      'Telefon: ' + phone + '\n\n' +
      'Zpráva:\n' + message + '\n\n' +
      'Děkuji.'
    )
    window.location.href = 'mailto:objednavky@marusciny-korbacky.cz?subject=' + subject + '&body=' + body
  }

  return (
    <section id="objednat" className="order-section bg-cream">
      <div className="container-7xl order-inner">
        <div className="order-grid">
          <div className="order-contact shadow-soft">
            <p className="order-contact-label">Kontakt a objednávka</p>
            <h2 className="font-serif order-contact-title">Máte chuť na poctivé korbáčky?</h2>
            <p className="order-contact-desc">
              Napište Marušce e-mail nebo zavolejte. Stačí připojit informaci, o jakou variantu máte zájem,
              kolik balení byste si přáli a zda preferujete klasické nebo chilli korbáčky.
            </p>

            <div className="order-contact-buttons">
              <a
                href="mailto:objednavky@marusciny-korbacky.cz?subject=Objednávka%20korbáčků"
                className="focus-ring order-btn-email"
              >
                Napsat e-mail
              </a>
              <a href="tel:+420777123456" className="focus-ring order-btn-call">
                Zavolat
              </a>
            </div>

            <div className="order-contact-info">
              <div className="order-info-card">
                <h3 className="order-info-title">E-mail</h3>
                <p className="order-info-value">objednavky@marusciny-korbacky.cz</p>
              </div>
              <div className="order-info-card">
                <h3 className="order-info-title">Telefon</h3>
                <p className="order-info-value">+420 777 123 456</p>
              </div>
            </div>
          </div>

          <aside className="order-form-wrap shadow-soft" aria-labelledby="kontaktni-formular">
            <h2 id="kontaktni-formular" className="font-serif order-form-title">Napsat Marušce</h2>
            <p className="order-form-subtitle">
              Vyplňte krátkou zprávu a objednávku můžete poslat rovnou e-mailem.
            </p>

            <form className="order-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="jmeno" className="form-label">Jméno</label>
                <input
                  id="jmeno"
                  name="jmeno"
                  type="text"
                  placeholder="Například Jana Nováková"
                  className="focus-ring-rect form-input"
                  value={form.jmeno}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vas@email.cz"
                  className="focus-ring-rect form-input"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="telefon" className="form-label">Telefon</label>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  placeholder="+420 123 456 789"
                  className="focus-ring-rect form-input"
                  value={form.telefon}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="zprava" className="form-label">Zpráva</label>
                <textarea
                  id="zprava"
                  name="zprava"
                  rows={5}
                  placeholder="Dobrý den, mám zájem o 2 balení klasických korbáčků a 1 balení chilli varianty..."
                  className="focus-ring-rect form-input form-textarea"
                  value={form.zprava}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="focus-ring form-submit">
                Odeslat objednávku
              </button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  )
}
