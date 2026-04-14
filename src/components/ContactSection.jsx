import React from 'react'
import '../styles/contact.css'

export default function ContactSection() {
  return (
    <section id="kontakt" className="contact-section contact-section--cream">
      <div className="container contact-inner">
        <div className="contact-grid">
          <div className="contact-card-main shadow-soft">
            <h2 className="font-serif contact-main-title">Kontakt</h2>
            <p className="contact-main-desc">
              Pokud máte dotaz k nabídce, ceně nebo dostupnosti, neváhejte se ozvat. Každá objednávka je řešená osobně a s péčí.
            </p>

            <div className="contact-details">
              <div>
                <p className="contact-detail-label">E-mail</p>
                <a href="mailto:objednavky@maruscinykorbacky.cz" className="contact-detail-link">
                  objednavky@maruscinykorbacky.cz
                </a>
              </div>
              <div>
                <p className="contact-detail-label">Telefon</p>
                <a href="tel:+420777123456" className="contact-detail-link">
                  +420 777 123 456
                </a>
              </div>
              <div>
                <p className="contact-detail-label">Osobní přístup</p>
                <p className="contact-detail-text">
                  Každou objednávku je možné domluvit individuálně podle chuti, množství i termínu.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-how-card shadow-soft">
            <h3 className="contact-how-title">Jak objednat</h3>
            <ol className="contact-how-list">
              <li><span className="contact-how-num">1.</span> Vyberte si variantu korbáčků.</li>
              <li><span className="contact-how-num">2.</span> Napište e-mail nebo zavolejte.</li>
              <li><span className="contact-how-num">3.</span> Uveďte množství a případné přání.</li>
              <li><span className="contact-how-num">4.</span> Maruška se s vámi domluví na dalším postupu.</li>
            </ol>

            <div className="contact-tip">
              <p className="contact-tip-title">Tip</p>
              <p className="contact-tip-text">
                Korbáčky jsou krásným a chutným dárkem na návštěvu, oslavu i jen tak pro radost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
