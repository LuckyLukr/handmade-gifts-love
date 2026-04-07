import React from 'react'
import '../styles/WhyUsSection.css'

const reasons = [
  { icon: '👐', title: 'Ruční výroba', desc: 'Každý kus prochází poctivou domácí přípravou.' },
  { icon: '🥛', title: 'Kvalitní suroviny', desc: 'Základem je kvalitní kravský sýr a čistá chuť.' },
  { icon: '📜', title: 'Tradiční receptura', desc: 'Vychází z osvědčeného postupu bez zbytečných kompromisů.' },
  { icon: '🌾', title: 'Moravský původ', desc: 'Regionální charakter je na webu i v samotném produktu.' },
  { icon: '😋', title: 'Poctivá chuť', desc: 'Jemná klasika i více ochucených variant, které si snadno oblíbíte.' },
]

export default function WhyUsSection() {
  return (
    <section id="proc-nase" className="why-us">
      <div className="why-us-inner">
        <div className="section-header">
          <h2 className="section-title font-serif">Proč právě naše korbáčky</h2>
          <p className="section-desc">
            To nejdůležitější je jednoduché: dobré suroviny, poctivá práce a chuť, která zůstává věrná tradici.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((r) => (
            <article key={r.title} className="why-card">
              <div className="why-icon">{r.icon}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
