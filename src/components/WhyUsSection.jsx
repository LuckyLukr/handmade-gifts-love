import React from 'react'
import '../styles/whyus.css'

const features = [
  { icon: '👐', title: 'Ruční výroba', desc: 'Každý kus prochází poctivou domácí přípravou.', img: 'https://picsum.photos/500/300?random=9' },
  { icon: '🥛', title: 'Kvalitní suroviny', desc: 'Základem je kvalitní kravský sýr a čistá chuť.', img: null },
  { icon: '📜', title: 'Tradiční receptura', desc: 'Vychází z osvědčeného postupu bez zbytečných kompromisů.', img: null },
  { icon: '🌾', title: 'Moravský původ', desc: 'Regionální charakter je na webu i v samotném produktu.', img: null },
  { icon: '😋', title: 'Poctivá chuť', desc: 'Jemná klasika i více ochucených variant, které si snadno oblíbíte.', img: null },
]

export default function WhyUsSection() {
  return (
    <section id="proc-nase" className="whyus-section">
      <div className="container whyus-inner">
        <div className="section-header">
          <h2 className="font-serif section-title">Proč právě naše korbáčky</h2>
          <p className="section-desc">
            To nejdůležitější je jednoduché: dobré suroviny, poctivá práce a chuť, která zůstává věrná tradici.
          </p>
        </div>

        <div className="whyus-grid">
          {features.map((f, i) => (
            <article key={i} className="whyus-card shadow-soft">
              {f.img && (
                <div className="whyus-img-wrap">
                  <img src={f.img} alt={f.title} className="whyus-img" loading="lazy" />
                </div>
              )}
              <div className="whyus-icon">{f.icon}</div>
              <h3 className="whyus-title">{f.title}</h3>
              <p className="whyus-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
