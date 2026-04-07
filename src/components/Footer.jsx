import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">🧀</div>
              <div>
                <div className="font-serif footer-logo-title">Maruščiny korbáčky</div>
                <div className="footer-logo-subtitle">Poctivá chuť Moravy v každém vláknu</div>
              </div>
            </div>
            <p className="footer-brand-text">
              Ručně vyráběné moravské korbáčky z kravského sýra. Malá domácí výroba s důrazem na poctivost, tradici a chuť.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Patičková navigace">
            <h3 className="footer-nav-title">Navigace</h3>
            <ul className="footer-nav-list">
              <li><a href="#o-nas" className="footer-nav-link">O nás</a></li>
              <li><a href="#nabidka" className="footer-nav-link">Nabídka</a></li>
              <li><a href="#galerie" className="footer-nav-link">Galerie</a></li>
              <li><a href="#cenik" className="footer-nav-link">Ceník</a></li>
              <li><a href="#kontakt" className="footer-nav-link">Kontakt</a></li>
              <li><a href="#objednat" className="footer-nav-link">Objednat</a></li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h3 className="footer-nav-title">Kontakt</h3>
            <ul className="footer-nav-list">
              <li>
                <a href="mailto:objednavky@marusciny-korbacky.cz" className="footer-nav-link">
                  objednavky@marusciny-korbacky.cz
                </a>
              </li>
              <li>
                <a href="tel:+420777123456" className="footer-nav-link">
                  +420 777 123 456
                </a>
              </li>
              <li className="footer-nav-text">Morava a okolí</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Maruščiny korbáčky. Poctivá ruční výroba na Moravě.
          </p>
        </div>
      </div>
    </footer>
  )
}
