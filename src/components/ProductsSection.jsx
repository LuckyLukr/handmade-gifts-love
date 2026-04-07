import React from 'react'
import '../styles/ProductsSection.css'

export default function ProductsSection() {
  return (
    <section id="nabidka" className="products">
      <div className="products-inner">
        <div className="section-header">
          <h2 className="section-title font-serif">Nabídka produktů</h2>
          <p className="section-desc">
            V nabídce najdete oblíbenou klasiku i ochucené varianty pro ty, kdo mají rádi výraznější chuť.
            Přehled je připravený jednoduše a přehledně, aby šel web snadno rozšířit i o další příchutě.
          </p>
        </div>

        <div className="products-grid">
          <article className="product-card">
            <div className="product-img-wrap">
              <img
                src="https://picsum.photos/900/600?random=102"
                alt="Klasické korbáčky z kravského sýra"
                className="product-img"
                loading="lazy"
              />
            </div>
            <p className="product-type">Tradiční varianta</p>
            <h3 className="product-name">Klasické korbáčky</h3>
            <p className="product-desc">
              Jemná tradiční chuť z kvalitního kravského sýra. Poctivá klasika, která se hodí ke každodennímu mlsání,
              na prkénko k posezení i jako malý moravský dárek.
            </p>
            <div className="product-tags">
              <span className="product-tag">balení 1 kg</span>
              <span className="product-tag">790 Kč</span>
            </div>
            <a href="#objednat" className="product-btn focus-ring">Objednat klasické</a>
          </article>

          <article className="product-card featured">
            <div className="product-img-wrap">
              <img
                src="https://picsum.photos/900/600?random=103"
                alt="Ochucené korbáčky s výraznější chutí"
                className="product-img"
                loading="lazy"
              />
            </div>
            <div className="product-badge-accent">Výraznější chuť</div>
            <p className="product-type">Ochucené varianty</p>
            <h3 className="product-name">Chilli, pepřové, česnekové a sladká paprika</h3>
            <p className="product-desc">
              Tradiční korbáčky s ochucením pro výraznější chuťový zážitek. Vybrat si můžete chilli, pepřové,
              česnekové nebo variantu se sladkou paprikou. Stále poctivé, sýrové a moravské, jen s osobitým dochucením.
            </p>
            <div className="product-tags">
              <span className="product-tag accent">balení 1 kg</span>
              <span className="product-tag accent">890 Kč</span>
            </div>
            <a href="#objednat" className="product-btn focus-ring">Objednat ochucené</a>
          </article>
        </div>
      </div>
    </section>
  )
}
