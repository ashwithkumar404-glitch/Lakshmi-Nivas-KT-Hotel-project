import React, { useState } from 'react';
import { galleryItems } from '../data/galleryData';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (item) => setSelectedImage(item);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Documentary Photo Essay</div>
          <h2 className="section-title">VISUAL ARCHIVE</h2>
          <p className="section-subtitle">
            Glimpses of roadside hospitality, artisanal pouring technique, and the travel corridor that shaped Kalladka over seven decades.
          </p>
          <div className="two-tone-split-hr">
            <span className="kannada-label">ಚಿತ್ರ ಸಂಪುಟ • ಕಲ್ಲಡ್ಕ ಛಾಯಾಚಿತ್ರಗಳು</span>
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="asymmetric-gallery-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery-card card-aspect-${item.aspect} card-pos-${index}`}
              onClick={() => openLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
              aria-label={`View photo: ${item.title}`}
            >
              <div className="gallery-img-container">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="gallery-photo"
                  loading="lazy"
                />
                
                <div className="gallery-card-overlay">
                  <div className="overlay-top">
                    <span className="card-category-tag">{item.category}</span>
                    <span className="card-zoom-icon">
                      <ZoomIn size={16} />
                    </span>
                  </div>
                  <div className="overlay-bottom">
                    <h3 className="card-photo-title">{item.title}</h3>
                    <p className="card-photo-caption">{item.caption}</p>
                    <span className="card-photo-meta">{item.metadata}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="lightbox-overlay" 
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="lightbox-close-btn" 
                onClick={closeLightbox}
                aria-label="Close photo preview"
              >
                <X size={24} />
              </button>

              <div className="lightbox-image-wrap">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="lightbox-full-img"
                />
              </div>

              <div className="lightbox-caption-bar">
                <div className="lightbox-tag-row">
                  <span className="lightbox-category">{selectedImage.category}</span>
                  <span className="lightbox-meta">{selectedImage.metadata}</span>
                </div>
                <h3 className="lightbox-title">{selectedImage.title}</h3>
                <p className="lightbox-desc">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
