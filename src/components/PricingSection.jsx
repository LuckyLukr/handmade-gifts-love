import React from 'react'
import '../styles/PricingSection.css'

const rows = [
  {
    name: 'Klasické korbáčky',
    desc: 'Jemná tradiční chuť z kvalitního kravského sýra',
    weight: '100 g',
    price: 'od 89 Kč',
  },
  {
    name: 'Chilli korbáčky',
    desc: 'Tradiční korbáčky s pikantním chilli nádechem',
    weight: '100 g',
    price: 'od 99 Kč',
  },
]

export default function PricingSection() {
  return (
    <section id="cenik" className="pricing-section">
      <div className="container-7xl pricing-inner">
        <div className="section-header">
          <h2 className="font-serif section-title">Ceník</h2>
          <p className="section-subtitle">
            Jednoduchý přehled cen pro základní nabídku. Další varianty, větší odběr nebo nové příchutě lze snadno doplnit.
          </p>
        </div>

        <div className="pricing-table-wrap shadow-soft">
          <div className="pricing-table-scroll">
            <table className="pricing-table">
              <thead>
                <tr className="pricing-thead-row">
                  <th className="pricing-th">Produkt</th>
                  <th className="pricing-th">Popis</th>
                  <th className="pricing-th">Balení</th>
                  <th className="pricing-th">Cena</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className="pricing-tr">
                    <td className="pricing-td pricing-td-name">{row.name}</td>
                    <td className="pricing-td">{row.desc}</td>
                    <td className="pricing-td">{row.weight}</td>
                    <td className="pricing-td pricing-td-price">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pricing-note shadow-soft">
          <p className="pricing-note-text">
            Máte zájem o větší množství, dárkové balení nebo se chcete zeptat na další varianty? Napište Marušce a vše se dá domluvit osobně.
          </p>
        </div>
      </div>
    </section>
  )
}
