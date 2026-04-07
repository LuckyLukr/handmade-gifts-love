import React from 'react'
import '../styles/products.css'

export default function ProductsSection() {
  return (
    <section id="nabidka" className="products-section">
      <div className="container products-inner">
        <div className="section-header">
          <h2 className="font-serif section-title">Nabídka produktů</h2>
          <p className="section-desc">
            V nabídce najdete oblíbenou klasiku i ochucené varianty pro ty, kdo mají rádi výraznější chuť.
            Přehled je připravený jednoduše a přehledně, aby šel web snadno rozšířit i o další příchutě.
          </p>
        </div>

        <div className="products-grid">
          <article className="product-card product-card--classic shadow-soft">
            <div className="product-img-wrap">
              <img
                src="https://picsum.photos/900/600?random=102"
                alt="Klasické korbáčky z kravského sýra"
                className="product-img"
                loading="lazy"
              />
            </div>
            <p className="product-tag">Tradiční varianta</p>
            <h3 className="product-name">Klasické korbáčky</h3>
            <p className="product-desc">
              Jemná tradiční chuť z kvalitního kravského sýra. Poctivá klasika, která se hodí ke každodennímu mlsání,
              na prkénko k posezení i jako malý moravský dárek.
            </p>
            <div className="product-tags">
              <span className="tag tag--classic">balení 1 kg</span>
              <span className="tag tag--classic">790 Kč</span>
            </div>
            <a href="#objednat" className="focus-ring product-btn">
              Objednat klasické
            </a>
          </article>

          <article className="product-card product-card--spicy shadow-soft">
            <div className="product-img-wrap">
              <img
                src="https://picsum.photos/900/600?random=103"
                alt="Ochucené korbáčky s výraznější chutí"
                className="product-img"
                loading="lazy"
              />
            </div>
            <div className="product-highlight-badge">Výraznější chuť</div>
            <p className="product-tag">Ochucené varianty</p>
            <h3 className="product-name">Chilli, pepřové, česnekové a sladká paprika</h3>
            <p className="product-desc">
              Tradiční korbáčky s ochucením pro výraznější chuťový zážitek. Vybrat si můžete chilli, pepřové,
              česnekové nebo variantu se sladkou paprikou. Stále poctivé, sýrové a moravské, jen s osobitým dochucením.
            </p>
            <div className="product-tags">
              <span className="tag tag--spicy">balení 1 kg</span>
              <span className="tag tag--spicy">890 Kč</span>
            </div>
            <a href="#objednat" className="focus-ring product-btn">
              Objednat ochucené
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
