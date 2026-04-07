import React from 'react'
import SiteHeader from './components/SiteHeader.jsx'
import HeroSection from './components/HeroSection.jsx'
import GallerySection from './components/GallerySection.jsx'
import PricingSection from './components/PricingSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import OrderSection from './components/OrderSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import './styles/global.css'

export default function App() {
  return (
    <div className="appRoot">
      <SiteHeader />
      <main>
        <HeroSection />
        <GallerySection />
        <PricingSection />
        <AboutSection />
        <OrderSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
