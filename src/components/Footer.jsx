import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="font-serif footer-brand">Maruščiny korbáčky</div>
          <p className="footer-brand-desc">
            Ručně vyráběné korbáčky s domácím přístupem, poctivou chutí a milou moravskou atmosférou.
          </p>
        </div>

        <div>
          <h2 className="footer-heading">Objednávky</h2>
          <div className="footer-contact-list">
            <p>
              <a href="mailto:objednavky@maruscinykorbacky.cz" className="focus-ring footer-link footer-link--bold">
                objednavky@maruscinykorbacky.cz
              </a>
            </p>
            <p>
              <a href="tel:+420777123456" className="focus-ring footer-link footer-link--bold">
                +420 777 123 456
              </a>
            </p>
          </div>
        </div>

        <div className="footer-img-wrap shadow-soft">
          <img
            src="/images/footer-1.png"
            alt="Domácí balení korbáčků připravené pro zákazníky"
            className="footer-img"
            loading="lazy"
          />
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Maruščiny korbáčky. Vyráběno s láskou na Moravě.
      </div>
    </footer>
  )
}
