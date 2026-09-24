import React from 'react';
import { hotelInfo } from '../data/hotelInfo';
import { Navigation, ShieldAlert, Mountain, Coffee } from 'lucide-react';
import './RouteSection.css';

export default function RouteSection() {
  return (
    <section className="section route-section" id="route">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">The Highway Corridor</div>
          <h2 className="section-title">MADE FOR THE ROAD</h2>
          <p className="section-subtitle">
            Connecting the Arabian Sea coast of Mangaluru to the plateau of Bengaluru. An essential pause at the threshold of the Western Ghats.
          </p>
          <div className="two-tone-split-hr">
            <span className="kannada-label">ಮಂಗಳೂರು – ಬೆಂಗಳೂರು ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ • ಕಲ್ಲಡ್ಕ ನಿಲುಗಡೆ</span>
          </div>
        </div>

        {/* Stylized Visual Route Graphic (Clearly not a GPS live map) */}
        <div className="stylized-route-card">
          <div className="route-card-top-bar">
            <span className="route-schema-tag">Stylized Schematic Route Diagram</span>
            <span className="route-disclaimer">
              <ShieldAlert size={12} />
              Visual illustration only — not for active turn-by-turn navigation
            </span>
          </div>

          <div className="route-diagram-stage">
            {/* Origin: Mangaluru / Coastal Plain */}
            <div className="route-waypoint">
              <div className="waypoint-marker coastal">
                <span className="waypoint-pulse"></span>
              </div>
              <div className="waypoint-info">
                <span className="waypoint-tag">Coastal Hub</span>
                <h4 className="waypoint-name">Mangaluru</h4>
                <span className="waypoint-sub">Arabian Sea Coast</span>
              </div>
            </div>

            {/* Connecting Road Line 1 */}
            <div className="route-line-segment">
              <span className="road-badge-pill">NH 75</span>
              <div className="road-dashes"></div>
            </div>

            {/* The Halt: Kalladka - Lakshmi Nivas KT Hotel */}
            <div className="route-waypoint highlight-waypoint">
              <div className="waypoint-marker hotel-halt">
                <Coffee size={20} className="text-milk" />
              </div>
              <div className="waypoint-info">
                <span className="waypoint-tag highlight-tag">The Highway Halt</span>
                <h4 className="waypoint-name highlight-name">Kalladka</h4>
                <div className="waypoint-brand-callout">
                  <strong>Lakshmi Nivas KT Hotel</strong>
                  <span>Layered KT Tea & Goli Baje</span>
                </div>
              </div>
            </div>

            {/* Connecting Road Line 2 */}
            <div className="route-line-segment">
              <div className="ghats-indicator">
                <Mountain size={14} className="text-leaf" />
                <span>Western Ghats Foothills</span>
              </div>
              <div className="road-dashes"></div>
            </div>

            {/* Destination: Bengaluru / Interior */}
            <div className="route-waypoint">
              <div className="waypoint-marker plateau">
                <span className="waypoint-pulse"></span>
              </div>
              <div className="waypoint-info">
                <span className="waypoint-tag">Deccan Plateau</span>
                <h4 className="waypoint-name">Bengaluru</h4>
                <span className="waypoint-sub">Interior Karnataka</span>
              </div>
            </div>
          </div>

          {/* Bottom Route Narrative Bar */}
          <div className="route-narrative-bar">
            <div className="route-narrative-text">
              <strong>The Roadside Equation:</strong> Road → Kalladka → Lakshmi Nivas KT Hotel → KT Tea → Journey Continues.
            </div>
            <a 
              href={hotelInfo.location.mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm-route"
            >
              <Navigation size={15} />
              <span>Open Verified Google Maps Location</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
