import React, { useState } from 'react'
import '../styles/header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#uvod" className="focus-ring header-logo" aria-label="Přejít na úvod">
          <div className="logo-icon">🧀</div>
          <div>
            <div className="font-serif logo-title">Maruščiny korbáčky</div>
            <div className="logo-subtitle">Poctivá chuť Moravy v každém vláknu</div>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Hlavní navigace">
          <a href="#o-nas" className="focus-ring nav-link">O nás</a>
          <a href="#nabidka" className="focus-ring nav-link">Nabídka</a>
          <a href="#galerie" className="focus-ring nav-link">Galerie</a>
          <a href="#cenik" className="focus-ring nav-link">Ceník</a>
          <a href="#kontakt" className="focus-ring nav-link">Kontakt</a>
          <a href="#objednat" className="focus-ring nav-cta">Objednat</a>
        </nav>

        <button
          type="button"
          className="focus-ring-rect mobile-menu-btn"
          aria-label="Otevřít menu"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div id="mobileMenu" className="mobile-menu">
          <nav className="container mobile-nav" aria-label="Mobilní navigace">
            <a href="#o-nas" className="focus-ring-rect mobile-nav-link" onClick={closeMenu}>O nás</a>
            <a href="#nabidka" className="focus-ring-rect mobile-nav-link" onClick={closeMenu}>Nabídka</a>
            <a href="#galerie" className="focus-ring-rect mobile-nav-link" onClick={closeMenu}>Galerie</a>
            <a href="#cenik" className="focus-ring-rect mobile-nav-link" onClick={closeMenu}>Ceník</a>
            <a href="#kontakt" className="focus-ring-rect mobile-nav-link" onClick={closeMenu}>Kontakt</a>
            <a href="#objednat" className="focus-ring-rect mobile-nav-cta" onClick={closeMenu}>Objednat</a>
          </nav>
        </div>
      )}
    </header>
  )
}
