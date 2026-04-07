import React from 'react'
import '../styles/tailwindLike.css'

function MaterialCard({ title, text }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-soft">
      <h3 className="text-xl font-bold text-brown">{title}</h3>
      <p className="mt-2 text-[#6b4c5c]">{text}</p>
    </div>
  )
}

function ImageCard({ img, alt, title, text, className }) {
  return (
    <div className={`overflow-hidden rounded-3xl bg-white shadow-soft ${className || ''}`}>
      <img src={img} alt={alt} className="h-72 w-full object-cover" loading="lazy" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-brown">{title}</h3>
        <p className="mt-2 text-[#6b4c5c]">{text}</p>
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="o-vyrobe" className="bg-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold text-brown sm:text-5xl">O výrobě a použitých materiálech</h2>
            <p className="mt-5 text-lg leading-8 text-[#6b4c5c]">
              Každý korábek vzniká ručně doma, v klidném tempu a s velkou péčí. Mám ráda jednoduché věci, které působí přirozeně,
              hezky stárnou a dělají domov útulnějším.
            </p>
            <div className="mt-8 grid gap-4">
              <MaterialCard
                title="Přírodní materiály"
                text="Používám materiály, které působí teple, jemně a poctivě. Důležitý je pro mě vzhled, ale i pocit z každého hotového kusu."
              />
              <MaterialCard
                title="Ruční zpracování"
                text="Každý detail připravuji sama. Díky tomu je každý korábek originál a nese v sobě kousek osobní práce i radosti."
              />
              <MaterialCard
                title="Domácí a srdečný styl"
                text="Nepotrpím si na okázalost. Mám ráda měkké tóny, čistý vzhled a výrobky, které se hodí do běžného domova i na chalupu."
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <ImageCard img="https://picsum.photos/600/700?random=7" alt="Detail ruční výroby korábku" title="Pečlivá práce" text="Na každém kusu je vidět čas i pozornost, kterou mu věnuji." />
            <ImageCard img="https://picsum.photos/600/700?random=8" alt="Přírodní materiály připravené na výrobu" title="Jemné materiály" text="Vybírám takové materiály, které působí přirozeně a ladí spolu." />
            <ImageCard
              className="sm:col-span-2"
              img="https://picsum.photos/1200/600?random=9"
              alt="Hotové korábky připravené jako dárky"
              title="Na ozdobu i jako dárek"
              text="Korábky se hodí do domácnosti, jako malý milý dárek nebo jako osobní pozornost pro někoho blízkého."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
