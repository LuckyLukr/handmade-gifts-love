import React from 'react'
import '../styles/lightbox.css'

export default function Lightbox({ open, src, alt, onClose }) {
  if (!open) return null

  return (
    <div
      className="lightbox-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Zvětšený obrázek"
    >
      <div className="lightbox-inner">
        <div className="lightbox-frame shadow-soft">
          <button
            type="button"
            className="focus-ring-rect lightbox-close shadow-soft"
            aria-label="Zavřít zvětšený obrázek"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="lightbox-close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="lightbox-img-wrap">
            <img src={src} alt={alt} className="lightbox-img" />
          </div>
        </div>
      </div>
    </div>
  )
}
