import React, { useState } from 'react'
import '../styles/Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#uvod" className="logo-link focus-ring" aria-label="Přejít na úvod">
          <div className="logo-icon">🧀</div>
          <div>
            <div className="logo-title">Maruščiny korbáčky</div>
            <div className="logo-sub">Poctivá chuť Moravy v každém vláknu</div>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Hlavní navigace">
          <a href="#o-nas" className="nav-link focus-ring">O nás</a>
          <a href="#nabidka" className="nav-link focus-ring">Nabídka</a>
          <a href="#galerie" className="nav-link focus-ring">Galerie</a>
          <a href="#cenik" className="nav-link focus-ring">Ceník</a>
          <a href="#kontakt" className="nav-link focus-ring">Kontakt</a>
          <a href="#objednat" className="nav-cta focus-ring">Objednat</a>
        </nav>

        <button
          type="button"
          className="menu-btn focus-ring-rect"
          aria-label="Otevřít menu"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.5rem', width: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div id="mobileMenu" className={`mobile-menu${menuOpen ? '' : ' hidden'}`}>
        <nav className="mobile-nav" aria-label="Mobilní navigace">
          <a href="#o-nas" className="mobile-nav-link focus-ring-rect" onClick={closeMenu}>O nás</a>
          <a href="#nabidka" className="mobile-nav-link focus-ring-rect" onClick={closeMenu}>Nabídka</a>
          <a href="#galerie" className="mobile-nav-link focus-ring-rect" onClick={closeMenu}>Galerie</a>
          <a href="#cenik" className="mobile-nav-link focus-ring-rect" onClick={closeMenu}>Ceník</a>
          <a href="#kontakt" className="mobile-nav-link focus-ring-rect" onClick={closeMenu}>Kontakt</a>
          <a href="#objednat" className="mobile-nav-cta focus-ring-rect" onClick={closeMenu}>Objednat</a>
        </nav>
      </div>
    </header>
  )
}
