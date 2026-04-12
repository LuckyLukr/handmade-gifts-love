import React from 'react'
import '../styles/gallery.css'

const galleryItems = [
  {
    thumb: 'https://picsum.photos/800/640?random=3',
    full: 'https://picsum.photos/1200/900?random=3',
    alt: 'Čerstvé korbáčky naaranžované na dřevěném stole',
    title: 'Čerstvě připravené',
    desc: 'Poctivé sýrové nitě připravené k zabalení i ochutnání.',
  },
  {
    thumb: 'https://picsum.photos/800/640?random=4',
    full: 'https://picsum.photos/1200/900?random=4',
    alt: 'Detail tradičních korbáčků z kravského sýra',
    title: 'Detail struktury',
    desc: 'Jemná vláknitost a vzhled, který dělá korbáčky korbáčky.',
  },
  {
    thumb: 'https://picsum.photos/800/640?random=5',
    full: 'https://picsum.photos/1200/900?random=5',
    alt: 'Domácí výroba korbáčků na Moravě',
    title: 'Domácí výroba',
    desc: 'Ruční práce, klidné tempo a péče o každý detail.',
  },
  {
    thumb: 'https://picsum.photos/800/640?random=6',
    full: 'https://picsum.photos/1200/900?random=6',
    alt: 'Klasické korbáčky naservírované jako pochoutka',
    title: 'Klasická varianta',
    desc: 'Jemná chuť kravského sýra v tradičním pojetí.',
  },
  {
    thumb: 'https://picsum.photos/800/640?random=7',
    full: 'https://picsum.photos/1200/900?random=7',
    alt: 'Chilli korbáčky s výraznější chutí',
    title: 'Ochucené varianty',
    desc: 'Chilli, pepřové, česnekové i sladká paprika pro pestřejší výběr.',
  },
  {
    thumb: 'https://picsum.photos/800/640?random=8',
    full: 'https://picsum.photos/1200/900?random=8',
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
