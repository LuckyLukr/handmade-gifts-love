import React from 'react'
import '../styles/tailwindLike.css'

export default function HeroSection() {
  return (
    <section id="uvod" className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full bg-beige px-4 py-2 text-sm font-bold text-brown">
            Poctivá ruční výroba z domova
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight text-brown sm:text-6xl">
            Korábky, které potěší svou jednoduchostí, krásou a příběhem
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6b4c5c] sm:text-xl">
            Vyrábím korábky ručně, pomalu a s radostí. Každý kus vzniká v domácím prostředí, s důrazem na pečlivé zpracování,
            přírodní vzhled a milý detail. Jsou vhodné jako drobný dárek, dekorace i osobní radost.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#objednat"
              className="focus-ring rounded-full bg-cocoa px-8 py-4 text-center text-lg font-extrabold text-white shadow-soft transition-all duration-200 hover:bg-brown"
            >
              Chci si objednat korábek
            </a>
            <a
              href="#galerie"
              className="focus-ring rounded-full border-2 border-sand bg-white px-8 py-4 text-center text-lg font-bold text-brown transition-all duration-200 hover:bg-beige"
            >
              Podívat se do galerie
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="text-2xl font-extrabold text-cocoa">100 %</div>
              <p className="mt-1 text-sm text-[#7a5b69]">ruční práce bez strojové výroby</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="text-2xl font-extrabold text-cocoa">Přírodní</div>
              <p className="mt-1 text-sm text-[#7a5b69]">materiály a jemné barevné ladění</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="text-2xl font-extrabold text-cocoa">Na přání</div>
              <p className="mt-1 text-sm text-[#7a5b69]">možnost domluvit velikost i zdobení</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-beige opacity-70 blur-2xl"></div>
          <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-full bg-sand opacity-60 blur-2xl"></div>
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft">
            <img
              src="https://picsum.photos/800/900?random=11"
              alt="Ručně vyráběné korábky naaranžované na světlém stole"
              className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[560px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
