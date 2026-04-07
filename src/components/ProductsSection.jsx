import React from 'react'
import '../styles/ProductsSection.css'

export default function ProductsSection() {
  return (
    <section id="nabidka" className="products-section bg-cream">
      <div className="container-7xl products-inner">
        <div className="section-header">
          <h2 className="font-serif section-title">Nabídka produktů</h2>
          <p className="section-subtitle">
            V nabídce najdete oblíbenou klasiku i chilli variantu pro ty, kdo mají rádi výraznější chuť.
            Přehled je připravený jednoduše a přehledně, aby šel web snadno rozšířit i o další příchutě.
          </p>
        </div>

        <div className="products-grid">
          <article className="product-card product-card-classic shadow-soft">
            <div className="product-img-wrap">
              <img
                src="https://picsum.photos/900/600?random=102"
                alt="Klasické korbáčky z kravského sýra"
                className="product-img"
                loading="lazy"
              />
            </div>
            <p className="product-tag product-tag-classic">Tradiční varianta</p>
            <h3 className="product-name">Klasické korbáčky</h3>
            <p className="product-desc">
              Jemná tradiční chuť z kvalitního kravského sýra. Poctivá klasika, která se hodí ke každodennímu mlsání,
              na prkénko k posezení i jako malý moravský dárek.
            </p>
            <div className="product-tags">
              <span className="product-pill product-pill-beige">balení 100 g</span>
              <span className="product-pill product-pill-beige">od 89 Kč</span>
            </div>
            <a href="#objednat" className="focus-ring product-btn">
              Objednat klasické
            </a>
          </article>

          <article className="product-card product-card-chilli shadow-soft">
            <div className="product-img-wrap">
              <img
                src="https://picsum.photos/900/600?random=103"
                alt="Chilli korbáčky s pikantním nádechem"
                className="product-img"
                loading="lazy"
              />
            </div>
            <div className="product-featured-badge">Výraznější chuť</div>
            <p className="product-tag product-tag-chilli">Pikantní varianta</p>
            <h3 className="product-name">Chilli korbáčky</h3>
            <p className="product-desc">
              Tradiční korbáčky s pikantním chilli nádechem pro výraznější chuťový zážitek.
              Stále poctivé, sýrové a moravské, jen s příjemně ostřejším zakončením.
            </p>
            <div className="product-tags">
              <span className="product-pill product-pill-accent">balení 100 g</span>
              <span className="product-pill product-pill-accent">od 99 Kč</span>
            </div>
            <a href="#objednat" className="focus-ring product-btn">
              Objednat chilli
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
