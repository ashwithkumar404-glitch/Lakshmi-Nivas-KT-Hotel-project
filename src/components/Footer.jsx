import React from 'react';
import { hotelInfo } from '../data/hotelInfo';
import { Navigation, MapPin, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Two-Tone Horizon Accent */}
        <div className="footer-top-accent">
          <div className="accent-tea-layer"></div>
          <div className="accent-milk-layer"></div>
        </div>

        <div className="footer-main-grid">
          {/* Col 1: Brand & Heritage */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="brand-crest">
                <span className="crest-symbol">KT</span>
              </div>
              <div className="brand-text">
                <span className="brand-title">LAKSHMI NIVAS</span>
                <span className="brand-sub">KT HOTEL • KALLADKA</span>
              </div>
            </div>

            <p className="footer-bio">
              A roadside ritual established in 1952 by Mr. Lakshmi Narayana Holla. Celebrated for its iconic two-layered KT tea and warm South Canara highway hospitality.
            </p>

            <div className="footer-kannada-tribute">
              ಶ್ರೀ ಲಕ್ಷ್ಮೀ ನಿವಾಸ ಕೆ.ಟಿ. ಹೋಟೆಲ್ • ಕಲ್ಲಡ್ಕ, ದಕ್ಷಿಣ ಕನ್ನಡ
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#story">The 1952 Story</a></li>
              <li><a href="#kt-tea">The KT Tea Glass</a></li>
              <li><a href="#science">The Science Behind</a></li>
              <li><a href="#food">The Food Stop (Goli Baje)</a></li>
              <li><a href="#ritual">The Roadside Ritual</a></li>
              <li><a href="#gallery">Documentary Gallery</a></li>
              <li><a href="#visit">Visit & Map</a></li>
            </ul>
          </div>

          {/* Col 3: Highway Location & Directions */}
          <div className="footer-info-col">
            <h4 className="footer-col-title">Location & Route</h4>
            <div className="footer-address">
              <MapPin size={16} className="text-terracotta" />
              <span>{hotelInfo.location.fullAddress}</span>
            </div>

            <div className="footer-route-note">
              <strong>Corridor:</strong> Bengaluru–Mangaluru Highway (NH 75)
            </div>

            <a 
              href={hotelInfo.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brass btn-footer-cta"
            >
              <Navigation size={15} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar & Task Attribution */}
        <div className="footer-bottom-bar">
          <div className="bottom-meta">
            <span>© {new Date().getFullYear()} Lakshmi Nivas KT Hotel, Kalladka. All rights reserved.</span>
            <span className="task-credit">
              {hotelInfo.meta.projectContext}
            </span>
          </div>

          <button 
            type="button" 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
