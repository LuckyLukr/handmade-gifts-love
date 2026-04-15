import React from 'react'
import '../styles/gallery.css'

const galleryItems = [
  {
    thumb: '/images/gallery-1.webp',
    full: '/images/gallery-1.webp',
    alt: 'Fotografie korbáčků od Marušky',
    title: 'Čerstvě připravené',
    desc: 'Poctivé sýrové nitě připravené k zabalení i ochutnání.',
  },
  {
    thumb: '/images/gallery-2.jpg',
    full: '/images/gallery-2.jpg',
    alt: 'Detail korbáčků od Marušky',
    title: 'Detail struktury',
    desc: 'Jemná vláknitost a vzhled, který dělá korbáčky korbáčky.',
  },
  {
    thumb: '/images/gallery-3.jpg',
    full: '/images/gallery-3.jpg',
    alt: 'Domácí výroba korbáčků',
    title: 'Domácí výroba',
    desc: 'Ruční práce, klidné tempo a péče o každý detail.',
  },
  {
    thumb: '/images/gallery-4.jpg',
    full: '/images/gallery-4.jpg',
    alt: 'Klasické korbáčky od Marušky',
    title: 'Klasická varianta',
    desc: 'Jemná chuť kravského sýra v tradičním pojetí.',
  },
]

export default function GallerySection({ onOpenLightbox }) {
  return (
    <section id="galerie" className="ornament-divider gallery-section gallery-section--soft">
      <div className="container gallery-inner">
        <div className="section-header">
          <h2 className="font-serif section-title">Galerie korbáčků</h2>
          <p className="section-desc">
            Fotky ukazují hotové korbáčky i detaily domácí výroby. Kliknutím si můžete obrázky pohodlně zvětšit.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <button
              key={i}
              type="button"
              className="focus-ring-rect gallery-item shadow-soft"
              onClick={() => onOpenLightbox(item.full, item.alt)}
            >
              <img
                src={item.thumb}
                alt={item.alt}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">
                <h3 className="gallery-caption-title">{item.title}</h3>
                <p className="gallery-caption-desc">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
