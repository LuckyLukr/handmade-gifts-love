import React from 'react'
import '../styles/tailwindLike.css'

function GalleryCard({ img, title, text }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-200 hover:-translate-y-1">
      <img src={img} alt={title} className="h-64 w-full object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-brown">{title}</h3>
        <p className="mt-2 text-[#6b4c5c]">{text}</p>
      </div>
    </article>
  )
}

export default function GallerySection() {
  return (
    <section id="galerie" className="bg-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold text-brown sm:text-5xl">Galerie korábků</h2>
          <p className="mt-4 text-lg leading-8 text-[#6b4c5c]">
            Každý korábek je trochu jiný. Někdy jemný a světlý, jindy rustikálnější a výraznější. Všechny ale spojuje ruční práce,
            poctivost a útulný domácí styl.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <GalleryCard
            img="https://picsum.photos/700/500?random=1"
            title="Světlý jemný korábek"
            text="Lehký, elegantní kousek vhodný jako dekorace do kuchyně, obýváku nebo jako milý dárek."
          />
          <GalleryCard
            img="https://picsum.photos/700/500?random=2"
            title="Přírodní rustikální korábek"
            text="Vynikne na dřevěném stole, polici nebo v chalupářském interiéru s teplou atmosférou."
          />
          <GalleryCard
            img="https://picsum.photos/700/500?random=3"
            title="Menší dárkový korábek"
            text="Oblíbená volba pro drobné obdarování, poděkování nebo jako maličkost pro radost."
          />
          <GalleryCard
            img="https://picsum.photos/700/500?random=4"
            title="Korábek se stuhou"
            text="Jemné zdobení dodává korábku slavnostní a přitom stále přirozený domácí vzhled."
          />
          <GalleryCard
            img="https://picsum.photos/700/500?random=5"
            title="Větší dekorační korábek"
            text="Působivý kousek, který krásně doplní sváteční stůl, komodu nebo vstupní prostor."
          />
          <GalleryCard
            img="https://picsum.photos/700/500?random=6"
            title="Korábek v jemných tónech"
            text="Hodí se do útulných domácností, kde vynikne přirozenost, jemnost a klidná barevnost."
          />
        </div>
      </div>
    </section>
  )
}
