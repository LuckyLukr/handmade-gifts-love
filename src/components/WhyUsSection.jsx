import React from 'react'
import '../styles/WhyUsSection.css'

const features = [
  { icon: '👐', title: 'Ruční výroba', desc: 'Každý kus prochází poctivou domácí přípravou.' },
  { icon: '🥛', title: 'Kvalitní suroviny', desc: 'Základem je kvalitní kravský sýr a čistá chuť.' },
  { icon: '📜', title: 'Tradiční receptura', desc: 'Vychází z osvědčeného postupu bez zbytečných kompromisů.' },
  { icon: '🌾', title: 'Moravský původ', desc: 'Regionální charakter je na webu i v samotném produktu.' },
  { icon: '😋', title: 'Poctivá chuť', desc: 'Jemná klasika i chilli varianta, které si snadno oblíbíte.' },
]

export default function WhyUsSection() {
  return (
    <section id="proc-nase" className="whyus-section bg-cream">
      <div className="container-7xl whyus-inner">
        <div className="section-header">
          <h2 className="font-serif section-title">Proč právě naše korbáčky</h2>
          <p className="section-subtitle">
            To nejdůležitější je jednoduché: dobré suroviny, poctivá práce a chuť, která zůstává věrná tradici.
          </p>
        </div>

        <div className="whyus-grid">
          {features.map((f, idx) => (
            <article key={idx} className="whyus-card shadow-soft">
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
