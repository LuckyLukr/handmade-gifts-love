import React from 'react'
import '../styles/gallery.css'

const PH1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAASwCAIAAABmKk4nAAEAAElEQVR4nOzdeZgcdZ348e9M0z2tq6uru+y9L4IAIgsiSkAQEUWXxQX3w6+4O3hQxC0RFRGQVRAcREAGBBQEhAhCiIuQfRhgk90d9mZ7q7uru6urM8k5f0x3V9Vd3d3V9fV6P5/Pp1N9X7Vq1aq/7+7z5n0yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhK7P3fDwAAAPxg1m9fAAAAwH8YAgAAAPB/CgAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAMD/KQAAAPD/8gY2Vq9eTQAAAAAASUVORK5CYII="

const PH2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAIAAAC6s0uzAAAwAElEQVR4nO3de5BV9Z3/8c9bN4GQkBAYk0hApFQSnViVQKmQqkTQpl5clIopY3jQ4aGlvI1Om9Jbkp2r1po6dNfN0V2j8c2VZqM6WxJ0nZ0Ue4yGqk0rQ0dBq2IwqK0lqg6iQolRIgkE1m8zv7x2+v3c4zvH7vN7fWb7zv8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zzP8zxP2kP3v1oAAACgM3m9AQAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKcYAgAAQKf8h5E8x7k2lQAAAABJRU5ErkJggg=="

const galleryItems = [
  {
    thumb: PH1,
    full: PH1,
    alt: 'Čerstvé korbáčky naaranžované na dřevěném stole',
    title: 'Čerstvě připravené',
    desc: 'Poctivé sýrové nitě připravené k zabalení i ochutnání.',
  },
  {
    thumb: PH1,
    full: PH1,
    alt: 'Detail tradičních korbáčků z kravského sýra',
    title: 'Detail struktury',
    desc: 'Jemná vláknitost a vzhled, který dělá korbáčky korbáčky.',
  },
  {
    thumb: PH2,
    full: PH2,
    alt: 'Domácí výroba korbáčků na Moravě',
    title: 'Domácí výroba',
    desc: 'Ruční práce, klidné tempo a péče o každý detail.',
  },
  {
    thumb: PH1,
    full: PH1,
    alt: 'Klasické korbáčky naservírované jako pochoutka',
    title: 'Klasická varianta',
    desc: 'Jemná chuť kravského sýra v tradičním pojetí.',
  },
  {
    thumb: PH1,
    full: PH1,
    alt: 'Chilli korbáčky s výraznější chutí',
    title: 'Ochucené varianty',
    desc: 'Chilli, pepřové, česnekové i sladká paprika pro pestřejší výběr.',
  },
  {
    thumb: PH2,
    full: PH2,
    alt: 'Balíčky korbáčků připravené k objednávce',
    title: 'Připraveno k objednávce',
    desc: 'Korbáčky vhodné pro domácí mlsání i jako jedlý dárek.',
  },
]

export default function GallerySection({ onOpenLightbox }) {
  return (
    <section id="galerie" className="ornament-divider gallery-section">
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
