import React from 'react'
import '../styles/tailwindLike.css'
import '../components/FocusStyles.css'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const onHash = () => setMenuOpen(false)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const toggleMenu = () => setMenuOpen((v) => !v)

  const mobileClass = menuOpen ? '' : 'hidden'

  return (
    <header className="sticky top-0 z-50 border-b border-[#f3cfe0] bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#uvod" className="focus-ring inline-flex items-center gap-3 text-brown" aria-label="Přejít na úvod">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-beige text-xl shadow-soft">
            🧺
          </div>
          <div>
            <div className="font-serif text-2xl font-bold leading-none">Korábky od babičky Aničky</div>
            <div className="text-sm text-cocoa">Ručně vyráběné s láskou a pečlivostí</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Hlavní navigace">
          <a
            href="#galerie"
            className="focus-ring text-base font-semibold text-brown transition-all duration-200 hover:text-cocoa"
          >
            Galerie
          </a>
          <a
            href="#ceny"
            className="focus-ring text-base font-semibold text-brown transition-all duration-200 hover:text-cocoa"
          >
            Ceny
          </a>
          <a
            href="#o-vyrobe"
            className="focus-ring text-base font-semibold text-brown transition-all duration-200 hover:text-cocoa"
          >
            O výrobě
          </a>
          <a
            href="#kontakt"
            className="focus-ring text-base font-semibold text-brown transition-all duration-200 hover:text-cocoa"
          >
            Kontakt
          </a>
          <a
            href="#objednat"
            className="focus-ring rounded-full bg-cocoa px-5 py-3 text-base font-bold text-white transition-all duration-200 hover:bg-brown"
          >
            Objednat
          </a>
        </nav>

        <button
          id="menuBtn"
          type="button"
          onClick={toggleMenu}
          className="focus-ring-rect inline-flex items-center justify-center rounded-xl border border-[#f4c9de] bg-white p-3 text-brown md:hidden"
          aria-label="Otevřít menu"
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-controls="mobileMenu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div id="mobileMenu" className={`${mobileClass} border-t border-[#f3cfe0] bg-soft md:hidden`}>
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6" aria-label="Mobilní navigace">
          <a
            href="#galerie"
            onClick={() => setMenuOpen(false)}
            className="focus-ring-rect rounded-xl px-3 py-3 text-base font-semibold text-brown hover:bg-beige"
          >
            Galerie
          </a>
          <a
            href="#ceny"
            onClick={() => setMenuOpen(false)}
            className="focus-ring-rect rounded-xl px-3 py-3 text-base font-semibold text-brown hover:bg-beige"
          >
            Ceny
          </a>
          <a
            href="#o-vyrobe"
            onClick={() => setMenuOpen(false)}
            className="focus-ring-rect rounded-xl px-3 py-3 text-base font-semibold text-brown hover:bg-beige"
          >
            O výrobě
          </a>
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="focus-ring-rect rounded-xl px-3 py-3 text-base font-semibold text-brown hover:bg-beige"
          >
            Kontakt
          </a>
          <a
            href="#objednat"
            onClick={() => setMenuOpen(false)}
            className="focus-ring-rect mt-2 rounded-xl bg-cocoa px-3 py-3 text-center text-base font-bold text-white hover:bg-brown"
          >
            Objednat
          </a>
        </nav>
      </div>
    </header>
  )
}
