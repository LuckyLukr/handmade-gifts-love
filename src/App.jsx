import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import GallerySection from './components/GallerySection'
import WhyUsSection from './components/WhyUsSection'
import PricingSection from './components/PricingSection'
import OrderSection from './components/OrderSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'

export default function App() {
  const [lightbox, setLightbox] = React.useState({ open: false, src: '', alt: '' })

  const openLightbox = (src, alt) => {
    setLightbox({ open: true, src, alt })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox({ open: false, src: '', alt: '' })
    document.body.style.overflow = ''
  }

  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && lightbox.open) closeLightbox()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightbox.open])

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GallerySection onOpenLightbox={openLightbox} />
        <WhyUsSection />
        <PricingSection />
        <OrderSection />
        <ContactSection />
      </main>
      <Footer />
      <Lightbox
        open={lightbox.open}
        src={lightbox.src}
        alt={lightbox.alt}
        onClose={closeLightbox}
      />
    </>
  )
}
