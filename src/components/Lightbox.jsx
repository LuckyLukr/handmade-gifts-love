import React from 'react'
import '../styles/Lightbox.css'

export default function Lightbox({ src, alt, onClose }) {
  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Zvětšený obrázek"
    >
      <button
        type="button"
        className="focus-ring lightbox-close"
        onClick={onClose}
        aria-label="Zavřít"
      >
        ✕
      </button>
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className="lightbox-img" />
        {alt && <p className="lightbox-caption">{alt}</p>}
      </div>
    </div>
  )
}
