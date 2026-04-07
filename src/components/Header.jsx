import React, { useState } from 'react'
import '../styles/Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <header className="header-sticky">
      <div className="container-7xl header-inner">
        <a href="#uvod" className="focus-ring header-logo" aria-label="Přejít na úvod">
          <div className="header-logo-icon">🧀</div>
          <div>
            <div className="font-serif header-logo-title">Maruščiny korbáčky</div>
            <div className="header-logo-subtitle">Poctivá chuť Moravy v každém vláknu</div>
          </div>
        </a>

        <nav className="header-nav-desktop" aria-label="Hlavní navigace">
          <a href="#o-nas" className="focus-ring header-nav-link">O nás</a>
          <a href="#nabidka" className="focus-ring header-nav-link">Nabídka</a>
          <a href="#galerie" className="focus-ring header-nav-link">Galerie</a>
          <a href="#cenik" className="focus-ring header-nav-link">Ceník</a>
          <a href="#kontakt" className="focus-ring header-nav-link">Kontakt</a>
          <a href="#objednat" className="focus-ring header-nav-cta">Objednat</a>
        </nav>

        <button
          type="button"
          className="focus-ring-rect header-menu-btn"
          aria-label="Otevřít menu"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div id="mobileMenu" className="header-mobile-menu">
          <nav className="container-7xl header-mobile-nav" aria-label="Mobilní navigace">
            <a href="#o-nas" className="focus-ring-rect header-mobile-link" onClick={closeMenu}>O nás</a>
            <a href="#nabidka" className="focus-ring-rect header-mobile-link" onClick={closeMenu}>Nabídka</a>
            <a href="#galerie" className="focus-ring-rect header-mobile-link" onClick={closeMenu}>Galerie</a>
            <a href="#cenik" className="focus-ring-rect header-mobile-link" onClick={closeMenu}>Ceník</a>
            <a href="#kontakt" className="focus-ring-rect header-mobile-link" onClick={closeMenu}>Kontakt</a>
            <a href="#objednat" className="focus-ring-rect header-mobile-cta" onClick={closeMenu}>Objednat</a>
          </nav>
        </div>
      )}
    </header>
  )
}
