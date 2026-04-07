import React from 'react'
import '../styles/tailwindLike.css'

export default function OrderSection() {
  const [form, setForm] = React.useState({
    jmeno: '',
    email: '',
    telefon: '',
    zprava: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const name = form.jmeno || 'Zákazník'
    const email = form.email || 'bez e-mailu'
    const phone = form.telefon || 'bez telefonu'
    const message = form.zprava || 'Dobrý den, mám zájem o korábek.'
    const subject = encodeURIComponent('Nezávazná poptávka z webu')
    const body = encodeURIComponent(
      'Dobrý den,\n\n' +
        'jmenuji se ' +
        name +
        '.\n' +
        'E-mail: ' +
        email +
        '\n' +
        'Telefon: ' +
        phone +
        '\n\n' +
        'Zpráva:\n' +
        message +
        '\n\n' +
        'Děkuji.',
    )
    window.location.href = 'mailto:objednavky@korabky-od-anicky.cz?subject=' + subject + '&body=' + body
  }

  return (
    <section id="objednat" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-brown p-8 text-white shadow-soft sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#fbe4ef]">Objednávka</p>
            <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">Máte vybraný korábek?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#fff0f7]">
              Napište mi e-mail nebo zavolejte. Stačí připojit představu o velikosti, stylu nebo barvě a domluvíme se jednoduše a osobně.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:objednavky@korabky-od-anicky.cz?subject=Objednávka%20korábku"
                className="focus-ring rounded-full bg-white px-8 py-4 text-center text-lg font-extrabold text-brown transition-all duration-200 hover:bg-beige"
              >
                Napsat e-mail
              </a>
              <a
                href="tel:+420777123456"
                className="focus-ring rounded-full border-2 border-[#f7d9e7] px-8 py-4 text-center text-lg font-extrabold text-white transition-all duration-200 hover:bg-[#6d2f4f]"
              >
                Zavolat
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="text-xl font-bold">E-mail</h3>
                <p className="mt-2 text-[#fff0f7]">objednavky@korabky-od-anicky.cz</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="text-xl font-bold">Telefon</h3>
                <p className="mt-2 text-[#fff0f7]">+420 777 123 456</p>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] bg-white p-8 shadow-soft sm:p-10" aria-labelledby="kontaktni-formular">
            <h2 id="kontaktni-formular" className="font-serif text-3xl font-bold text-brown">
              Nezávazná poptávka
            </h2>
            <p className="mt-3 text-[#6b4c5c]">Můžete mi také poslat krátkou zprávu. Ozvu se co nejdříve zpět.</p>

            <form className="mt-8 space-y-5" onSubmit={onSubmit}>
              <div>
                <label htmlFor="jmeno" className="mb-2 block text-sm font-bold text-brown">
                  Jméno
                </label>
                <input
                  id="jmeno"
                  name="jmeno"
                  type="text"
                  placeholder="Například Jana Nováková"
                  value={form.jmeno}
                  onChange={onChange}
                  className="focus-ring-rect w-full rounded-2xl border border-[#f2cadc] bg-cream px-4 py-3 text-brown placeholder:text-[#b18498]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-brown">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vas@email.cz"
                  value={form.email}
                  onChange={onChange}
                  className="focus-ring-rect w-full rounded-2xl border border-[#f2cadc] bg-cream px-4 py-3 text-brown placeholder:text-[#b18498]"
                />
              </div>

              <div>
                <label htmlFor="telefon" className="mb-2 block text-sm font-bold text-brown">
                  Telefon
                </label>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  placeholder="+420 123 456 789"
                  value={form.telefon}
                  onChange={onChange}
                  className="focus-ring-rect w-full rounded-2xl border border-[#f2cadc] bg-cream px-4 py-3 text-brown placeholder:text-[#b18498]"
                />
              </div>

              <div>
                <label htmlFor="zprava" className="mb-2 block text-sm font-bold text-brown">
                  Co byste si přáli?
                </label>
                <textarea
                  id="zprava"
                  name="zprava"
                  rows="5"
                  placeholder="Mám zájem o střední korábek v jemných růžovo-bílých tónech jako dárek..."
                  value={form.zprava}
                  onChange={onChange}
                  className="focus-ring-rect w-full rounded-2xl border border-[#f2cadc] bg-cream px-4 py-3 text-brown placeholder:text-[#b18498]"
                />
              </div>

              <button
                type="submit"
                className="focus-ring w-full rounded-full bg-cocoa px-6 py-4 text-lg font-extrabold text-white transition-all duration-200 hover:bg-brown"
              >
                Odeslat poptávku
              </button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  )
}
