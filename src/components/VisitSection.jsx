import React, { useState } from 'react';
import { hotelInfo } from '../data/hotelInfo';
import { MapPin, Navigation, Phone, Clock, Car, Compass, Info, Check, Copy } from 'lucide-react';
import './VisitSection.css';

export default function VisitSection() {
  const [copied, setCopied] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(hotelInfo.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="section visit-section" id="visit">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Traveler Information & Route Stop</div>
          <h2 className="section-title">YOUR NEXT STOP: KALLADKA</h2>
          <p className="section-subtitle">
            Positioned directly along NH 75. Pull over, experience the signature glass, and return to the road refreshed.
          </p>
          <div className="two-tone-split-hr">
            <span className="kannada-label">ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ ೭೫ • ಕಲ್ಲಡ್ಕ • ದಕ್ಷಿಣ ಕನ್ನಡ</span>
          </div>
        </div>

        {/* Visit Master Grid */}
        <div className="visit-grid">
          {/* Left Column: Address, Hours & Actions */}
          <div className="visit-details-col">
            <div className="location-card">
              <div className="location-card-head">
                <div className="pin-icon-wrap">
                  <MapPin size={24} className="text-terracotta" />
                </div>
                <div>
                  <span className="location-badge">Official Highway Address</span>
                  <h3 className="location-title">{hotelInfo.name}</h3>
                </div>
              </div>

              <div className="address-display-box">
                <p className="address-text">{hotelInfo.location.fullAddress}</p>
                <button 
                  type="button" 
                  onClick={copyAddress}
                  className="copy-addr-btn"
                  aria-label="Copy address to clipboard"
                >
                  {copied ? <Check size={16} className="text-leaf" /> : <Copy size={16} />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Address'}</span>
                </button>
              </div>

              {/* Action Buttons: Get Directions, Call, WhatsApp */}
              <div className="visit-action-buttons">
                <a 
                  href={hotelInfo.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-visit-action"
                  id="visit-directions-btn"
                >
                  <Navigation size={18} />
                  <span>Get Directions</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowContactModal(true)}
                  className="btn btn-secondary btn-visit-action"
                  id="visit-contact-btn"
                >
                  <Phone size={18} />
                  <span>Call / Contact</span>
                </button>
              </div>

              {/* Highway Operating Profile */}
              <div className="highway-profile-list">
                <div className="profile-item">
                  <div className="profile-icon">
                    <Clock size={18} className="text-brass" />
                  </div>
                  <div className="profile-content">
                    <strong>Service Hours</strong>
                    <span>{hotelInfo.contact.openingHours}</span>
                  </div>
                </div>

                <div className="profile-item">
                  <div className="profile-icon">
                    <Car size={18} className="text-brass" />
                  </div>
                  <div className="profile-content">
                    <strong>Traveler Parking</strong>
                    <span>Dedicated roadside and adjacent vehicle parking for cars, bikes & buses</span>
                  </div>
                </div>

                <div className="profile-item">
                  <div className="profile-icon">
                    <Compass size={18} className="text-brass" />
                  </div>
                  <div className="profile-content">
                    <strong>Peak Travel Rush</strong>
                    <span>{hotelInfo.contact.peakStopTiming}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Interface */}
          <div className="visit-map-col">
            <div className="map-frame-card">
              {/* Google Maps Embed iframe */}
              <div className="map-iframe-wrapper">
                <iframe
                  title="Lakshmi Nivas KT Hotel Kalladka Location Map"
                  src="https://maps.google.com/maps?q=Lakshmi+Nivas+KT+Hotel+Kalladka+Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map-iframe"
                ></iframe>
              </div>

              {/* Map Footer Bar */}
              <div className="map-card-footer">
                <div className="map-footer-text">
                  <strong>Bengaluru–Mangaluru Highway (NH 75)</strong>
                  <span>Kalladka Town Junction, Bantwal Taluk</span>
                </div>
                <a 
                  href={hotelInfo.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-direct-link"
                >
                  <span>Open Full Navigation</span>
                  <Navigation size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Modal (strictly adhering to no-fake-numbers rule) */}
        {showContactModal && (
          <div 
            className="contact-modal-overlay" 
            onClick={() => setShowContactModal(false)}
            role="dialog"
            aria-modal="true"
          >
            <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-head">
                <h3 className="modal-title">Traveler Contact & Service Inquiries</h3>
                <button 
                  className="modal-close" 
                  onClick={() => setShowContactModal(false)}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="modal-body">
                <div className="notice-box">
                  <Info size={18} className="text-terracotta" />
                  <p>
                    Lakshmi Nivas KT Hotel operates as a high-flow roadside establishment where hospitality is provided directly in person upon vehicle arrival.
                  </p>
                </div>

                <div className="contact-details-list">
                  <div className="contact-line">
                    <span className="contact-label">Telephone Status:</span>
                    <span className="contact-val">{hotelInfo.contact.phoneDisplay}</span>
                  </div>
                  <div className="contact-line">
                    <span className="contact-label">WhatsApp:</span>
                    <span className="contact-val">{hotelInfo.contact.whatsappDisplay}</span>
                  </div>
                  <div className="contact-line">
                    <span className="contact-label">Physical Address:</span>
                    <span className="contact-val">{hotelInfo.location.fullAddress}</span>
                  </div>
                </div>

                <div className="modal-actions">
                  <a 
                    href={hotelInfo.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <Navigation size={16} />
                    <span>Navigate With Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
