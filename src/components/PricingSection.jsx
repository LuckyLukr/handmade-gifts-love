import React from 'react'
import '../styles/PricingSection.css'

const rows = [
  { name: 'Klasické korbáčky', desc: 'Jemná tradiční chuť z kvalitního kravského sýra', qty: '1 kg', price: '790 Kč' },
  { name: 'Chilli korbáčky', desc: 'Tradiční korbáčky s pikantním chilli nádechem', qty: '1 kg', price: '890 Kč' },
  { name: 'Pepřové korbáčky', desc: 'Ochucená varianta s výraznější pepřovou chutí', qty: '1 kg', price: '890 Kč' },
  { name: 'Česnekové korbáčky', desc: 'Poctivé korbáčky s jemným česnekovým dochucením', qty: '1 kg', price: '890 Kč' },
  { name: 'Korbáčky se sladkou paprikou', desc: 'Ochucená varianta se sladkou paprikou a plnější chutí', qty: '1 kg', price: '890 Kč' },
]

export default function PricingSection() {
  return (
    <section id="cenik" className="pricing">
      <div className="pricing-inner">
        <div className="section-header">
          <h2 className="section-title font-serif">Ceník</h2>
          <p className="section-desc">
            Jednoduchý přehled cen za 1 kg pro základní nabídku. Další varianty, větší odběr nebo nové příchutě lze snadno doplnit.
          </p>
        </div>

        <div className="pricing-table-wrap">
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
              <tbody>
                {rows.map((row) => (
                  <tr key={row.name}>
                    <td className="pricing-td name">{row.name}</td>
                    <td className="pricing-td">{row.desc}</td>
                    <td className="pricing-td">{row.qty}</td>
                    <td className="pricing-td price">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pricing-note">
          <p>
            Máte zájem o větší množství, dárkové balení nebo se chcete zeptat na další varianty? Napište Marušce a vše se dá domluvit osobně.
          </p>
        </div>
      </div>
    </section>
  )
}
