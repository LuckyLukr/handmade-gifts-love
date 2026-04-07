import React from 'react'
import '../styles/pricing.css'

const priceItems = [
  { name: 'Klasické korbáčky', desc: 'Jemná tradiční chuť z kvalitního kravského sýra', amount: '790 Kč' },
  { name: 'Chilli korbáčky', desc: 'Tradiční korbáčky s pikantním chilli nádechem', amount: '890 Kč' },
  { name: 'Pepřové korbáčky', desc: 'Ochucená varianta s výraznější pepřovou chutí', amount: '890 Kč' },
  { name: 'Česnekové korbáčky', desc: 'Poctivé korbáčky s jemným česnekovým dochucením', amount: '890 Kč' },
  { name: 'Korbáčky se sladkou paprikou', desc: 'Ochucená varianta se sladkou paprikou a plnější chutí', amount: '890 Kč' },
]

export default function PricingSection() {
  return (
    <section id="cenik" className="pricing-section">
      <div className="container pricing-inner">
        <div className="section-header">
          <h2 className="font-serif section-title">Ceník</h2>
          <p className="section-desc">
            Jednoduchý přehled cen za 1 kg pro základní nabídku. Další varianty, větší odběr nebo nové příchutě lze snadno doplnit.
          </p>
        </div>

        <div className="pricing-table-wrap shadow-soft">
          <div className="pricing-table-scroll">
            <table className="pricing-table">
              <thead className="pricing-thead">
                <tr>
                  <th className="pricing-th">Produkt</th>
                  <th className="pricing-th">Popis</th>
                  <th className="pricing-th">Balení</th>
                  <th className="pricing-th">Cena</th>
                </tr>
              </thead>
              <tbody className="pricing-tbody">
                {priceItems.map((item, i) => (
                  <tr key={i}>
                    <td className="pricing-td pricing-td--name">{item.name}</td>
                    <td className="pricing-td">{item.desc}</td>
                    <td className="pricing-td">1 kg</td>
                    <td className="pricing-td pricing-td--price">{item.amount}</td>
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
