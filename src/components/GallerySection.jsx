import React from 'react'
import '../styles/GallerySection.css'

const galleryItems = [
  {
    thumb: 'https://picsum.photos/700/500?random=104',
    full: 'https://picsum.photos/1400/1000?random=104',
    alt: 'Čerstvé korbáčky naaranžované na dřevěném stole',
    title: 'Čerstvě připravené',
    desc: 'Poctivé sýrové nitě připravené k zabalení i ochutnání.',
  },
  {
    thumb: 'https://picsum.photos/700/500?random=105',
    full: 'https://picsum.photos/1400/1000?random=105',
    alt: 'Detail tradičních korbáčků z kravského sýra',
    title: 'Detail struktury',
    desc: 'Jemná vláknitost a vzhled, který dělá korbáčky korbáčky.',
  },
  {
    thumb: 'https://picsum.photos/700/500?random=106',
    full: 'https://picsum.photos/1400/1000?random=106',
    alt: 'Domácí výroba korbáčků na Moravě',
    title: 'Domácí výroba',
    desc: 'Ruční práce, klidné tempo a péče o každý detail.',
  },
  {
    thumb: 'https://picsum.photos/700/500?random=107',
    full: 'https://picsum.photos/1400/1000?random=107',
    alt: 'Klasické korbáčky naservírované jako pochoutka',
    title: 'Klasická varianta',
    desc: 'Jemná chuť kravského sýra v tradičním pojetí.',
  },
  {
    thumb: 'https://picsum.photos/700/500?random=108',
    full: 'https://picsum.photos/1400/1000?random=108',
    alt: 'Chilli korbáčky s výraznější chutí',
    title: 'Ochucené varianty',
    desc: 'Chilli, pepřové, česnekové i sladká paprika pro pestřejší výběr.',
  },
  {
    thumb: 'https://picsum.photos/700/500?random=109',
    full: 'https://picsum.photos/1400/1000?random=109',
    alt: 'Balíčky korbáčků připravené k objednávce',
    title: 'Připraveno k objednávce',
    desc: 'Korbáčky vhodné pro domácí mlsání i jako jedlý dárek.',
  },
]

export default function GallerySection({ onOpenLightbox }) {
  return (
    <section id="galerie" className="gallery ornament-divider">
      <div className="gallery-inner">
        <div className="section-header">
          <h2 className="section-title font-serif">Galerie korbáčků</h2>
          <p className="section-desc">
            Fotky ukazují hotové korbáčky i detaily domácí výroby. Kliknutím si můžete obrázky pohodlně zvětšit.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <button
              key={item.full}
              type="button"
              className="gallery-item focus-ring-rect"
              onClick={() => onOpenLightbox(item.full, item.alt)}
            >
              <img
                src={item.thumb}
                alt={item.alt}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-info">
                <h3 className="gallery-title">{item.title}</h3>
                <p className="gallery-desc">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
