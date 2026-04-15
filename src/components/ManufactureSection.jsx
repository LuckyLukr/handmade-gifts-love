import React from 'react'
import '../styles/manufacture.css'

export default function ManufactureSection() {
  return (
    <section id="vyroba" className="ornament-divider manufacture-section manufacture-section--cream">
      <div className="container manufacture-inner">
        <div className="manufacture-grid">
          <div>
            <p className="manufacture-badge">Výroba a materiály</p>
            <h2 className="font-serif manufacture-title">Jak korbáčky vznikají</h2>
            <p className="manufacture-para">
              Každá várka vzniká v malém množství a s důrazem na pečlivé zpracování. Maruška dbá na to, aby byly korbáčky
              jemné, pružné a chuťově vyvážené. Domácí postup dává výrobku osobitost, kterou v běžné výrobě často nenajdete.
            </p>
            <p className="manufacture-para">
              Používají se kvalitní suroviny, především kravský sýr, poctivý základ a cit pro správné dochucení.
              Díky tomu jsou korbáčky vhodné nejen k běžnému mlsání, ale i jako milý jedlý dárek pro rodinu a přátele.
            </p>
          </div>

          <div className="manufacture-cards">
            <div className="manufacture-card shadow-soft">
              <h3 className="manufacture-card-title">Použité suroviny</h3>
              <ul className="manufacture-list">
                <li>• kvalitní kravský sýr</li>
                <li>• pečlivě vybrané koření pro ochucené varianty</li>
                <li>• poctivý domácí přístup bez zbytečných složitostí</li>
              </ul>
            </div>
            <div className="manufacture-card shadow-soft">
              <h3 className="manufacture-card-title">Využití</h3>
              <ul className="manufacture-list">
                <li>• na slavnostní stůl i běžné posezení</li>
                <li>• jako chutné občerstvení pro návštěvu</li>
                <li>• jako jedlý dárek, který potěší a nezapadne</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
