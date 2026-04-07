import React, { useState } from 'react'
import '../styles/OrderSection.css'

export default function OrderSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Děkujeme za objednávku! Maruška vás brzy kontaktuje.')
    setFormData({ name: '', email: '', phone: '', product: '', message: '' })
  }

  return (
    <section id="objednat" className="order">
      <div className="order-inner">
        <div className="order-grid">
          <div className="order-cta-box">
            <p className="order-cta-label">Objednávka</p>
            <h2 className="order-cta-title font-serif">Objednejte si poctivé moravské korbáčky</h2>
            <p className="order-cta-desc">
              Vyplňte formulář nebo nás kontaktujte přímo. Maruška se vám ozve a domluvíte vše potřebné – množství, variantu i způsob předání.
            </p>
            <div className="order-cta-btns">
              <a href="tel:+420123456789" className="order-btn-white focus-ring">📞 Zavolat Marušce</a>
              <a href="mailto:maruska@korbacky.cz" className="order-btn-outline focus-ring">✉️ Napsat e-mail</a>
            </div>
            <div className="order-info-grid">
              <div className="order-info-card">
                <h3>Dodání</h3>
                <p>Osobní předání nebo domluvená doprava v rámci Moravy.</p>
              </div>
              <div className="order-info-card">
                <h3>Minimální odběr</h3>
                <p>Minimální objednávka je 1 kg jedné varianty.</p>
              </div>
              <div className="order-info-card">
                <h3>Čerstvost</h3>
                <p>Korbáčky se připravují na objednávku, vždy čerstvé.</p>
              </div>
              <div className="order-info-card">
                <h3>Platba</h3>
                <p>Hotově při předání nebo převodem na účet.</p>
              </div>
            </div>
          </div>

          <div className="form-box">
            <h2 className="form-title font-serif">Objednávkový formulář</h2>
            <p className="form-desc">Vyplňte formulář a Maruška vás brzy kontaktuje.</p>
            <form className="form-fields" onSubmit={handleSubmit}>
              <div>
                <label className="form-label" htmlFor="name">Jméno a příjmení *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input focus-ring-rect"
                  placeholder="Jana Nováková"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="email">E-mail *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input focus-ring-rect"
                  placeholder="jana@example.cz"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="phone">Telefon</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-input focus-ring-rect"
                  placeholder="+420 123 456 789"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="product">Varianta korbáčků *</label>
                <input
                  id="product"
                  name="product"
                  type="text"
                  className="form-input focus-ring-rect"
                  placeholder="Klasické, chilli, pepřové…"
                  required
                  value={formData.product}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="message">Zpráva / množství</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-textarea focus-ring-rect"
                  placeholder="Napište množství, případné dotazy nebo způsob předání…"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="form-submit focus-ring">Odeslat objednávku</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
