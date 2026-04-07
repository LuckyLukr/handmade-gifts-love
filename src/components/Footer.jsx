import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="font-serif footer-brand">Maruščiny korbáčky</div>
          <p className="footer-brand-desc">
            Ručně vyráběné korbáčky na Moravě. Poctivá chuť, tradiční receptura a domácí přístup bez zbytečných okolků.
          </p>
        </div>

        <div>
          <h2 className="footer-heading">Rychlé odkazy</h2>
          <ul className="footer-list">
            <li><a href="#uvod" className="focus-ring footer-link">Úvod</a></li>
            <li><a href="#o-nas" className="focus-ring footer-link">O nás</a></li>
            <li><a href="#nabidka" className="focus-ring footer-link">Nabídka</a></li>
            <li><a href="#galerie" className="focus-ring footer-link">Galerie</a></li>
            <li><a href="#cenik" className="focus-ring footer-link">Ceník</a></li>
            <li><a href="#kontakt" className="focus-ring footer-link">Kontakt</a></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Kontakt</h2>
          <ul className="footer-list">
            <li><a href="mailto:objednavky@marusciny-korbacky.cz" className="focus-ring footer-link">objednavky@marusciny-korbacky.cz</a></li>
            <li><a href="tel:+420777123456" className="focus-ring footer-link">+420 777 123 456</a></li>
            <li><a href="#" className="focus-ring footer-link">Facebook</a></li>
            <li><a href="#" className="focus-ring footer-link">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Maruščiny korbáčky. Ruční výroba na Moravě.
      </div>
    </footer>
  )
}
