import React from 'react';
import { hotelInfo } from '../data/hotelInfo';
import { MapPin, Navigation, Compass, Coffee } from 'lucide-react';
import './IntroSection.css';

export default function IntroSection() {
  return (
    <section className="section intro-section" id="intro">
      <div className="container">
        {/* Editorial Top Accent */}
        <div className="intro-badge-row">
          <span className="tea-badge">
            <Compass size={13} className="text-brass" />
            <span>Kalladka Travel Corridor • Dakshina Kannada</span>
          </span>
        </div>

        {/* Asymmetric Editorial Storytelling Layout */}
        <div className="intro-editorial-layout">
          {/* Main Visual Feature */}
          <div className="intro-visual-col">
            <div className="intro-image-container">
              <img 
                src="/images/highway-stop.jpg" 
                alt="Travellers halting their vehicles at the roadside tea stop in Dakshina Kannada along the highway"
                className="intro-feature-image"
                loading="lazy"
              />
              <div className="intro-image-overlay">
                <div className="intro-overlay-tag">
                  <span className="road-code">NH 75</span>
                  <span className="road-name">Bengaluru – Mangaluru Route</span>
                </div>
              </div>
            </div>

            <div className="intro-sidebar-dispatch">
              <div className="dispatch-header">
                <MapPin size={16} className="text-terracotta" />
                <span className="dispatch-title">Geographic Marker</span>
              </div>
              <p className="dispatch-body">
                Situated at Kalladka junction in Bantwal Taluk, where coastal humidity begins to meet the rising forested slopes of the Western Ghats.
              </p>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="intro-story-col">
            <div className="section-eyebrow">Roadside Identity</div>
            <h2 className="intro-main-heading">
              Some places become part of the journey.
            </h2>

            <div className="two-tone-split-hr">
              <div className="brand-crest small">
                <span className="crest-symbol">KT</span>
              </div>
            </div>

            <div className="intro-narrative-prose">
              <p className="lead-paragraph">
                For travellers navigating the highway across Dakshina Kannada, Lakshmi Nivas KT Hotel is not merely an address along the asphalt—it is an established roadside ritual.
              </p>
              
              <p>
                Long before four-lane flyovers reshaped the horizon, travellers knew to slow their engines as they approached Kalladka. The reason was singular: a small, unassuming roadside establishment founded in 1952 where tea was never treated as an afterthought.
              </p>

              <p>
                Here, tea arrived in clear glass tumblers, distinctly split into two balanced horizons—a velvety base of sweetened, frothed full-cream milk beneath a crown of aromatic, concentrated black tea decoction. Combined with fresh, hot regional snacks like crisp Goli Baje, the stop became an indispensable milestone between the Arabian Sea coast and the interior plateau.
              </p>
            </div>

            {/* Grounded Travel Facts Box */}
            <div className="intro-truth-card">
              <div className="truth-row">
                <div className="truth-item">
                  <span className="truth-label">The Establishment</span>
                  <span className="truth-val">Lakshmi Nivas KT Hotel</span>
                </div>
                <div className="truth-divider"></div>
                <div className="truth-item">
                  <span className="truth-label">Location</span>
                  <span className="truth-val">Kalladka, Karnataka 574222</span>
                </div>
                <div className="truth-divider"></div>
                <div className="truth-item">
                  <span className="truth-label">The Distinctive Pull</span>
                  <span className="truth-val">Layered KT Tea & Goli Baje</span>
                </div>
              </div>
            </div>

            <div className="intro-cta-row">
              <a href="#kt-tea" className="btn btn-primary">
                <Coffee size={17} />
                <span>See The Signature Glass</span>
              </a>
              <a 
                href={hotelInfo.location.mapsUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <Navigation size={17} />
                <span>Locate on Map</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
