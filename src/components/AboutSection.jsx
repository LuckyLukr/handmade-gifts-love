import React from 'react'
import '../styles/AboutSection.css'

const cards = [
  {
    title: 'Moravský původ',
    text: 'Regionální charakter a inspirace tradiční domácí výrobou.',
  },
  {
    title: 'Ruční příprava',
    text: 'Každý korbáček vzniká s péčí, bez zbytečné okázalosti a s důrazem na poctivost.',
  },
  {
    title: 'Chuť, která má příběh',
    text: 'Jednoduché suroviny, tradiční postup a výsledná chuť, ke které se lidé rádi vrací.',
  },
]

export default function AboutSection() {
  return (
    <section id="o-nas" className="about ornament-divider">
      <div className="about-inner">
        <div className="about-grid">
          <div>
            <p className="about-badge">O Marušce a domácí výrobě</p>
            <h2 className="about-title font-serif">Korbáčky, které vznikají poctivě a srdcem</h2>
            <p className="about-text">
              Maruška vyrábí korbáčky na Moravě ručně, v malém a s respektem k tradiční receptuře.
              Každý svazek sýrových nitek prochází pečlivou domácí přípravou, aby si zachoval jemnou chuť,
              správnou strukturu a poctivý charakter, který k moravským korbáčkům patří.
            </p>
            <p className="about-text">
              Nejde o velkovýrobu, ale o malý rodinný přístup. Důležité jsou kvalitní suroviny, čistá chuť kravského sýra
              a radost z výrobku, který může potěšit doma, na oslavě i jako milý jedlý dárek.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card-list">
              {cards.map((card) => (
                <div key={card.title} className="about-card">
                  <h3 className="about-card-title">{card.title}</h3>
                  <p className="about-card-text">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
