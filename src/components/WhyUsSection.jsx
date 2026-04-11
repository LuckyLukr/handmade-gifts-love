import React from 'react'
import '../styles/whyus.css'

const PH2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAIAAAC6s0uzAAAwAElEQVR4nO3de5BV9Z3/8c9bN4GQkBAYk0hApFQSnViVQKmQqkTQpl5clIopY3jQ4aGlvI1Om9Jbkp2r1po6dNfN0V2j8c2VZqM6WxJ0nZ0Ue4yGqk0rQ0dBq2IwqK0lqg6iQolRIgkE1m8zv7x2+v3c4zvH7vN7fWb7zv8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zxP2kP3v1oAAACgM3m9AQAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKf8h5E8x7k2lQAAAABJRU5ErkJggg=="

const features = [
  { icon: '👐', title: 'Ruční výroba', desc: 'Každý kus prochází poctivou domácí přípravou.', img: PH2 },
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
