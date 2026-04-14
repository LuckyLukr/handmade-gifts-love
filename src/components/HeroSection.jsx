import React from 'react'
import '../styles/hero.css'

export default function HeroSection() {
  return (
    <section id="uvod" className="folklore-pattern hero-section">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-badge">Ruční výroba na Moravě</p>
          <h1 className="font-serif hero-title">
            Poctivé moravské korbáčky od Marušky
          </h1>
          <p className="hero-description">
            Ručně vyráběné korbáčky z kravského sýra, připravované s tradicí, péčí a chutí Moravy.
            V každém balení najdete poctivou práci, kvalitní suroviny a kousek domácího moravského folkloru.
          </p>

          <div className="hero-actions">
            <a href="#nabidka" className="focus-ring hero-btn-primary">
              Zobrazit nabídku
            </a>
            <a href="#galerie" className="focus-ring hero-btn-secondary">
              Prohlédnout galerii
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card shadow-soft">
              <div className="stat-value">100 %</div>
              <p className="stat-label">ruční výroba s důrazem na kvalitu</p>
            </div>
            <div className="stat-card shadow-soft">
              <div className="stat-value">Morava</div>
              <p className="stat-label">regionální charakter a tradiční přístup</p>
            </div>
            <div className="stat-card shadow-soft">
              <div className="stat-value">5 variant</div>
              <p className="stat-label">klasické, chilli, pepřové, česnekové a sladká paprika</p>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-blur-left"></div>
          <div className="hero-blur-right"></div>
          <div className="hero-image-frame shadow-soft">
            <img
              src="https://picsum.photos/1200/900?random=101"
              alt="Tradiční moravské korbáčky z kravského sýra naservírované na talíři"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
