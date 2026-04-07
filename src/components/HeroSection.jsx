import React from 'react'
import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section id="uvod" className="hero-section folklore-pattern bg-cream">
      <div className="container-7xl hero-inner">
        <div className="hero-content">
          <p className="hero-badge">Ruční výroba na Moravě</p>
          <h1 className="font-serif hero-title">
            Poctivé moravské korbáčky od Marušky
          </h1>
          <p className="hero-description">
            Ručně vyráběné korbáčky z kravského sýra, připravované s tradicí, péčí a chutí Moravy.
            V každém balení najdete poctivou práci, kvalitní suroviny a kousek domácího moravského folkloru.
          </p>

          <div className="hero-buttons">
            <a href="#nabidka" className="focus-ring hero-btn-primary">
              Zobrazit nabídku
            </a>
            <a href="#galerie" className="focus-ring hero-btn-secondary">
              Prohlédnout galerii
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-card shadow-soft">
              <div className="hero-stat-value">100 %</div>
              <p className="hero-stat-desc">ruční výroba s důrazem na kvalitu</p>
            </div>
            <div className="hero-stat-card shadow-soft">
              <div className="hero-stat-value">Morava</div>
              <p className="hero-stat-desc">regionální charakter a tradiční přístup</p>
            </div>
            <div className="hero-stat-card shadow-soft">
              <div className="hero-stat-value">Klasik i chilli</div>
              <p className="hero-stat-desc">oblíbené varianty pro jemnou i výraznější chuť</p>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-blob hero-blob-left"></div>
          <div className="hero-blob hero-blob-right"></div>
          <div className="hero-image-frame shadow-soft">
            <img
              src="https://picsum.photos/800/900?random=101"
              alt="Tradiční moravské korbáčky z kravského sýra naservírované na dřevěném prkénku"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
