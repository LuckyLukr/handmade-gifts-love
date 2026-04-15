import React from 'react'
import '../styles/pricing.css'

const priceItems = [
  { name: 'Klasické korbáčky', desc: 'Jemná tradiční chuť z kravského sýra', amount: '790 Kč', alt: false },
  { name: 'Chilli korbáčky', desc: 'Pikantnější varianta pro výraznější chuť', amount: '890 Kč', alt: true },
  { name: 'Pepřové korbáčky', desc: 'Lehce kořeněná chuť s pepřovým tónem', amount: '890 Kč', alt: false },
  { name: 'Česnekové korbáčky', desc: 'Oblíbená varianta s jemným česnekovým dochucením', amount: '890 Kč', alt: true },
  { name: 'Sladká paprika', desc: 'Voňavá varianta s jemně paprikovým tónem', amount: '890 Kč', alt: false },
]

export default function PricingSection() {
  return (
    <section id="cenik" className="pricing-section pricing-section--soft">
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
                  <tr key={i} style={item.alt ? { backgroundColor: '#fffaf3' } : {}}>
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
      </div>
    </section>
  )
}
