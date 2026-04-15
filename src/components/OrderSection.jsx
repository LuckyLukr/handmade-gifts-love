import React from 'react'
import '../styles/order.css'

export default function OrderSection() {
  return (
    <section id="objednat" className="order-section order-section--soft">
      <div className="container order-centered-inner">
        <p className="order-centered-badge">Objednávka jednoduše</p>
        <h2 className="font-serif order-centered-title">Chcete si objednat korbáčky?</h2>
        <p className="order-centered-desc">
          Stačí se ozvat e-mailem nebo telefonicky. Napište, o jakou variantu máte zájem, kolik kilogramů byste chtěli
          a zda jde o běžnou objednávku nebo dárek. Maruška se vám ráda ozve zpět.
        </p>
        <div className="order-centered-actions">
          <a
            href="mailto:objednavky@maruscinykorbacky.cz"
            className="focus-ring order-btn-email-centered"
          >
            Objednat e-mailem
          </a>
          <a href="tel:+420777123456" className="focus-ring order-btn-phone-centered">
            Zavolat Marušce
          </a>
        </div>
      </div>
    </section>
  )
}
