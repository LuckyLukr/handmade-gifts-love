import React from 'react'
import '../styles/about.css'

const PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAASwCAIAAABmKk4nAAEAAElEQVR4nOzdeZgcdZ348e9M0z2tq6uru+y9L4IAIgsiSkAQEUWXxQX3w6+4O3hQxC0RFRGQVRAcREAGBBQEhAhCiIuQfRhgk90d9mZ7q7uru6urM8k5f0x3V9Vd3d3V9fV6P5/Pp1N9X7Vq1aq/7+7z5n0yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhK7P3fDwAAAPxg1m9fAAAAwH8YAgAAAPB/CgAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAPD/8gY2Vq9eTQAAAAAASUVORK5CYII="

export default function AboutSection() {
  return (
    <section id="o-nas" className="ornament-divider about-section">
      <div className="container about-inner">
        <div className="about-grid">
          <div className="about-text">
            <p className="about-badge">O Marušce a domácí výrobě</p>
            <h2 className="font-serif about-title">Korbáčky, které vznikají poctivě a srdcem</h2>
            <p className="about-para">
              Maruška vyrábí korbáčky na Moravě ručně, v malém a s respektem k tradiční receptuře.
              Každý svazek sýrových nitek prochází pečlivou domácí přípravou, aby si zachoval jemnou chuť,
              správnou strukturu a poctivý charakter, který k moravským korbáčkům patří.
            </p>
            <p className="about-para">
              Nejde o velkovýrobu, ale o malý rodinný přístup. Důležité jsou kvalitní suroviny, čistá chuť kravského sýra
              a radost z výrobku, který může potěšit doma, na oslavě i jako milý jedlý dárek.
            </p>
          </div>

          <div className="about-cards shadow-soft">
            <div className="about-card-grid">
              <div className="about-img-wrap">
                <img
                  src={PLACEHOLDER}
                  alt="Korbáčky položené na dřevěném prkénku"
                  className="about-img"
                />
              </div>
              <div className="about-card">
                <h3 className="about-card-title">Moravský původ</h3>
                <p className="about-card-text">Regionální charakter a inspirace tradiční domácí výrobou.</p>
              </div>
              <div className="about-card">
                <h3 className="about-card-title">Ruční příprava</h3>
                <p className="about-card-text">Každý korbáček vzniká s péčí, bez zbytečné okázalosti a s důrazem na poctivost.</p>
              </div>
              <div className="about-card">
                <h3 className="about-card-title">Chuť, která má příběh</h3>
                <p className="about-card-text">Jednoduché suroviny, tradiční postup a výsledná chuť, ke které se lidé rádi vrací.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
