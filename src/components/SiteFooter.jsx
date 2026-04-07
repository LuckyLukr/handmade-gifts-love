import React from 'react'
import '../styles/tailwindLike.css'

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#f1d2e2] bg-[#fff6fa]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="font-serif text-3xl font-bold text-brown">Korábky od babičky Aničky</div>
          <p className="mt-3 max-w-md text-[#6b4c5c]">
            Ručně vyráběné korábky s domácím, útulným a důvěryhodným duchem. Každý kus je tvořen s láskou a poctivostí.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-brown">Rychlé odkazy</h2>
          <ul className="mt-4 space-y-2 text-[#6b4c5c]">
            <li>
              <a href="#uvod" className="focus-ring hover:text-brown">
                Úvod
              </a>
            </li>
            <li>
              <a href="#galerie" className="focus-ring hover:text-brown">
                Galerie
              </a>
            </li>
            <li>
              <a href="#ceny" className="focus-ring hover:text-brown">
                Ceny
              </a>
            </li>
            <li>
              <a href="#o-vyrobe" className="focus-ring hover:text-brown">
                O výrobě
              </a>
            </li>
            <li>
              <a href="#kontakt" className="focus-ring hover:text-brown">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-brown">Informace</h2>
          <ul className="mt-4 space-y-2 text-[#6b4c5c]">
            <li>
              <a href="#" className="focus-ring hover:text-brown">
                Ochrana soukromí
              </a>
            </li>
            <li>
              <a href="#" className="focus-ring hover:text-brown">
                Obchodní podmínky
              </a>
            </li>
            <li>
              <a href="mailto:objednavky@korabky-od-anicky.cz" className="focus-ring hover:text-brown">
                objednavky@korabky-od-anicky.cz
              </a>
            </li>
            <li>
              <a href="tel:+420777123456" className="focus-ring hover:text-brown">
                +420 777 123 456
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#f3d7e4] px-4 py-5 text-center text-sm text-[#8c6277] sm:px-6 lg:px-8">
        © 2025 Korábky od babičky Aničky. Všechna práva vyhrazena.
      </div>
    </footer>
  )
}
