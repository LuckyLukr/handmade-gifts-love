import React from 'react'
import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section id="uvod" className="hero folklore-pattern">
      <div className="hero-inner">
        <div>
          <p className="hero-badge">Ruční výroba na Moravě</p>
          <h1 className="hero-title font-serif">
            Poctivé moravské korbáčky od Marušky
          </h1>
          <p className="hero-desc">
            Ručně vyráběné korbáčky z kravského sýra, připravované s tradicí, péčí a chutí Moravy.
            V každém balení najdete poctivou práci, kvalitní suroviny a kousek domácího moravského folkloru.
          </p>

          <div className="hero-btns">
            <a href="#nabidka" className="btn-primary focus-ring">Zobrazit nabídku</a>
            <a href="#galerie" className="btn-secondary focus-ring">Prohlédnout galerii</a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-value">100 %</div>
              <p className="stat-label">ruční výroba s důrazem na kvalitu</p>
            </div>
            <div className="stat-card">
              <div className="stat-value">Morava</div>
              <p className="stat-label">regionální charakter a tradiční přístup</p>
            </div>
            <div className="stat-card">
              <div className="stat-value">5 variant</div>
              <p className="stat-label">klasické, chilli, pepřové, česnekové a sladká paprika</p>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-blob-1" />
          <div className="hero-blob-2" />
          <div className="hero-img-frame">
            <img
              src="https://picsum.photos/800/900?random=101"
              alt="Tradiční moravské korbáčky z kravského sýra naservírované na dřevěném prkénku"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
