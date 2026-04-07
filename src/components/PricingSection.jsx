import React from 'react'
import '../styles/tailwindLike.css'

function PriceCard({ badge, badgeClass, title, price, text, items, buttonText, buttonHref, buttonClass }) {
  return (
    <article className="rounded-3xl border border-[#f3cfe0] bg-white p-8 shadow-soft">
      {badge ? <div className={badgeClass}>{badge}</div> : null}
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cocoa">{title}</p>
      <h3 className="mt-3 text-3xl font-extrabold text-brown">{price}</h3>
      <p className="mt-4 text-[#6b4c5c]">{text}</p>
      <ul className="mt-6 space-y-3 text-[#5f4350]">
        {items.map((it) => (
          <li key={it}>• {it}</li>
        ))}
      </ul>
      <a href={buttonHref} className={buttonClass}>
        {buttonText}
      </a>
    </article>
  )
}

export default function PricingSection() {
  return (
    <section id="ceny" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold text-brown sm:text-5xl">Ceny</h2>
          <p className="mt-4 text-lg leading-8 text-[#6b4c5c]">
            Ceny jsou orientační a odvíjejí se podle velikosti, zdobení a náročnosti výroby. Pokud si přejete něco konkrétního,
            ráda připravím korábek na domluvu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-[#f3cfe0] bg-white p-8 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cocoa">Malý korábek</p>
            <h3 className="mt-3 text-3xl font-extrabold text-brown">od 180 Kč</h3>
            <p className="mt-4 text-[#6b4c5c]">Milý drobný kousek pro radost, dekoraci nebo malé poděkování.</p>
            <ul className="mt-6 space-y-3 text-[#5f4350]">
              <li>• vhodný jako dárek</li>
              <li>• jemné přírodní ladění</li>
              <li>• možnost drobného zdobení</li>
            </ul>
            <a
              href="#objednat"
              className="focus-ring mt-8 inline-block rounded-full bg-beige px-6 py-3 font-bold text-brown transition-all duration-200 hover:bg-sand"
            >
              Mám zájem
            </a>
          </article>

          <article className="rounded-3xl border-2 border-cocoa bg-[#fff5fa] p-8 shadow-soft">
            <div className="mb-4 inline-block rounded-full bg-cocoa px-4 py-2 text-sm font-bold text-white">Nejoblíbenější</div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cocoa">Střední korábek</p>
            <h3 className="mt-3 text-3xl font-extrabold text-brown">od 290 Kč</h3>
            <p className="mt-4 text-[#6b4c5c]">Vyvážená velikost, která krásně vynikne doma i jako osobní dárek.</p>
            <ul className="mt-6 space-y-3 text-[#5f4350]">
              <li>• oblíbený formát do interiéru</li>
              <li>• více prostoru pro detail</li>
              <li>• možnost barevného sladění</li>
            </ul>
            <a
              href="#objednat"
              className="focus-ring mt-8 inline-block rounded-full bg-cocoa px-6 py-3 font-bold text-white transition-all duration-200 hover:bg-brown"
            >
              Chci objednat
            </a>
          </article>

          <article className="rounded-3xl border border-[#f3cfe0] bg-white p-8 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cocoa">Velký korábek</p>
            <h3 className="mt-3 text-3xl font-extrabold text-brown">od 420 Kč</h3>
            <p className="mt-4 text-[#6b4c5c]">Výraznější dekorace s osobitým charakterem a pečlivým ručním zpracováním.</p>
            <ul className="mt-6 space-y-3 text-[#5f4350]">
              <li>• vhodný na stůl nebo komodu</li>
              <li>• více detailů a zdobení</li>
              <li>• možnost výroby na přání</li>
            </ul>
            <a
              href="#objednat"
              className="focus-ring mt-8 inline-block rounded-full bg-beige px-6 py-3 font-bold text-brown transition-all duration-200 hover:bg-sand"
            >
              Zeptat se na variantu
            </a>
          </article>
        </div>

        <div className="mt-8 rounded-3xl bg-beige p-6 text-center text-[#5f4350] shadow-soft sm:p-8">
          <p className="text-lg font-semibold">
            Pokud si přejete speciální rozměr, jiný odstín nebo korábek jako dárek pro konkrétní příležitost, stačí napsat nebo zavolat.
          </p>
        </div>
      </div>
    </section>
  )
}
