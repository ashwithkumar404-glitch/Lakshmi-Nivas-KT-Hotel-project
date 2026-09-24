import React from 'react';
import { hotelInfo } from '../data/hotelInfo';
import { Navigation, Compass, MapPin, ArrowDown, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Background two-tone textural division inspired by KT tea layers */}
      <div className="hero-backdrop">
        <div className="hero-backdrop-top"></div>
        <div className="hero-backdrop-bottom"></div>
        <div className="hero-backdrop-glow"></div>
      </div>

      <div className="container hero-container">
        {/* Top Editorial Dispatch Metadata */}
        <div className="hero-meta-bar">
          <div className="meta-badge">
            <span className="live-pulse"></span>
            <span>NATIONAL HIGHWAY 75</span>
          </div>
          <div className="meta-divider">/</div>
          <div className="meta-location">
            <MapPin size={13} className="text-brass" />
            <span>KALLADKA, DAKSHINA KANNADA</span>
          </div>
          <div className="meta-divider">/</div>
          <div className="meta-date">
            <span>SINCE 1952</span>
          </div>
          <div className="meta-divider">/</div>
          <div className="meta-kannada">
            <span>ಲಕ್ಷ್ಮೀ ನಿವಾಸ</span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="hero-grid">
          {/* Left Column: Editorial Headline & Travel Narrative */}
          <div className="hero-content">
            <div className="hero-eyebrow-wrapper">
              <span className="hero-eyebrow">Roadside Institution & Heritage Halt</span>
            </div>

            <h1 className="hero-title">
              THE TEA THAT MADE <span className="highlight-text">KALLADKA</span> A STOP.
            </h1>

            <p className="hero-description">
              A roadside ritual built around a distinctive glass of layered KT tea and the food travellers return for. Pausing the journey between Mangaluru and Bengaluru for over seven decades.
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <a 
                href={hotelInfo.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-hero-primary"
                id="hero-directions-cta"
              >
                <Navigation size={18} />
                <span>Get Directions</span>
              </a>

              <a 
                href="#story" 
                className="btn btn-secondary btn-hero-secondary"
                id="hero-story-cta"
              >
                <Compass size={18} />
                <span>Discover The Story</span>
              </a>
            </div>

            {/* Editorial Quick Markers */}
            <div className="hero-markers">
              <div className="marker-item">
                <span className="marker-digit">01</span>
                <div className="marker-text">
                  <strong>Two Layers</strong>
                  <span>Decoction over creamy frothed milk</span>
                </div>
              </div>
              <div className="marker-separator"></div>
              <div className="marker-item">
                <span className="marker-digit">02</span>
                <div className="marker-text">
                  <strong>Traveler Stop</strong>
                  <span>Car-window & roadside hospitality</span>
                </div>
              </div>
              <div className="marker-separator"></div>
              <div className="marker-item">
                <span className="marker-digit">03</span>
                <div className="marker-text">
                  <strong>1952 Legacy</strong>
                  <span>Founded by Mr. L. N. Holla</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The KT Tea Glass Centerpiece */}
          <div className="hero-visual">
            <div className="hero-frame">
              {/* Authentic documentary photo */}
              <div className="hero-image-wrapper">
                <img 
                  src="/images/kt-tea-glass.jpg" 
                  alt="Authentic Kalladka KT Tea in a transparent glass tumbler resting on a wooden counter with brass spoon"
                  className="hero-main-image"
                  fetchPriority="high"
                />
                
                {/* Floating Two-Tone Tea Accent Pill */}
                <div className="floating-tea-badge">
                  <div className="badge-layer-decoction"></div>
                  <div className="badge-layer-milk"></div>
                  <div className="badge-content">
                    <span className="badge-title">KT TEA</span>
                    <span className="badge-sub">Kalladka's Signature</span>
                  </div>
                </div>

                {/* Roadside Stamp */}
                <div className="roadside-stamp">
                  <div className="stamp-inner">
                    <span className="stamp-state">KARNATAKA</span>
                    <span className="stamp-city">KALLADKA</span>
                    <span className="stamp-year">EST. 1952</span>
                  </div>
                </div>
              </div>

              {/* Photo Caption / Editorial Footnote */}
              <div className="hero-caption-card">
                <div className="caption-icon">
                  <Sparkles size={14} className="text-brass" />
                </div>
                <div className="caption-text">
                  <strong>The Biphasic Pour:</strong> Thick sweetened milk on the bottom, hand-drawn tea decoction floating undisturbed atop.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="hero-scroll-cue">
          <a href="#intro" className="scroll-link" aria-label="Scroll down to begin story">
            <span className="scroll-text">Explore The Kalladka Ritual</span>
            <ArrowDown size={14} className="scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
