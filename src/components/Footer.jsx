import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-7xl footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#uvod" className="focus-ring footer-logo" aria-label="Přejít na úvod">
              <div className="footer-logo-icon">🧀</div>
              <div>
                <div className="font-serif footer-logo-title">Maruščiny korbáčky</div>
                <div className="footer-logo-subtitle">Poctivá chuť Moravy v každém vláknu</div>
              </div>
            </a>
            <p className="footer-brand-desc">
              Ručně vyráběné moravské korbáčky z kravského sýra. Malá domácí výroba s důrazem na poctivost, kvalitu a tradiční chuť.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Patičková navigace">
            <h3 className="footer-nav-title">Navigace</h3>
            <ul className="footer-nav-list">
              <li><a href="#o-nas" className="focus-ring footer-nav-link">O nás</a></li>
              <li><a href="#nabidka" className="focus-ring footer-nav-link">Nabídka</a></li>
              <li><a href="#galerie" className="focus-ring footer-nav-link">Galerie</a></li>
              <li><a href="#cenik" className="focus-ring footer-nav-link">Ceník</a></li>
              <li><a href="#kontakt" className="focus-ring footer-nav-link">Kontakt</a></li>
              <li><a href="#objednat" className="focus-ring footer-nav-link">Objednat</a></li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h3 className="footer-nav-title">Kontakt</h3>
            <ul className="footer-nav-list">
              <li>
                <a href="mailto:objednavky@marusciny-korbacky.cz" className="focus-ring footer-nav-link">
                  objednavky@marusciny-korbacky.cz
                </a>
              </li>
              <li>
                <a href="tel:+420777123456" className="focus-ring footer-nav-link">
                  +420 777 123 456
                </a>
              </li>
              <li className="footer-nav-link footer-nav-text">Morava, Česká republika</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Maruščiny korbáčky. Všechna práva vyhrazena.
          </p>
          <p className="footer-made">Poctivá ruční výroba na Moravě 🧀</p>
        </div>
      </div>
    </footer>
  )
}
