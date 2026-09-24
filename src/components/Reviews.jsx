import React from 'react';
import { hotelInfo } from '../data/hotelInfo';
import { Star, ExternalLink, ThumbsUp, Zap, Building2, Coffee } from 'lucide-react';
import './Reviews.css';

export default function Reviews() {
  const verifiedThemes = [
    {
      title: "The Signature Layered KT Tea",
      icon: <Coffee size={24} className="text-terracotta" />,
      highlight: "Unbroken Quality Since 1952",
      description: "Consistent praise from motorists and regulars for the authentic two-layer visual contrast and rich, creamy flavor that defines Kalladka."
    },
    {
      title: "Fast Highway Service",
      icon: <Zap size={24} className="text-brass" />,
      highlight: "Designed for Travelers",
      description: "Travelers in a hurry frequently note the swift preparation and prompt service, allowing quick tea breaks without losing travel momentum."
    },
    {
      title: "Roadside Convenience & Car Window Stop",
      icon: <ThumbsUp size={24} className="text-leaf" />,
      highlight: "Effortless Access on NH 75",
      description: "Direct highway access, roadside parking, and attentive service for motorists stopping curbside without requiring extended parking."
    },
    {
      title: "Upgraded Modern Facilities",
      icon: <Building2 size={24} className="text-terracotta" />,
      highlight: "Rebuilt & Hygienic",
      description: "Appreciation for the rebuilt establishment, providing clean seating, enhanced family-friendly atmosphere, and updated amenities while preserving the original taste."
    }
  ];

  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Traveler Sentiment & Recognition</div>
          <h2 className="section-title">WHAT PEOPLE COME BACK FOR</h2>
          <p className="section-subtitle">
            Ground truth from decades of highway travel. Documenting the verified patterns travellers consistently highlight about their Kalladka stop.
          </p>
          <div className="two-tone-split-hr">
            <span className="kannada-label">ಜನರ ಮೆಚ್ಚುಗೆ • ಹೆದ್ದಾರಿ ಅನುಭವ</span>
          </div>
        </div>

        {/* Verified Review Themes Grid */}
        <div className="reviews-theme-grid">
          {verifiedThemes.map((item, idx) => (
            <div className="theme-card" key={idx}>
              <div className="theme-icon-box">{item.icon}</div>
              <div className="theme-badge">{item.highlight}</div>
              <h3 className="theme-title">{item.title}</h3>
              <p className="theme-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Verified Review Transparency Box */}
        <div className="reviews-transparency-card">
          <div className="transparency-content">
            <div className="transparency-tag">
              <Star size={14} className="fill-brass text-brass" />
              <span>Verified Public Community Feedback</span>
            </div>
            <h4 className="transparency-title">Read Genuine Traveler Reviews Directly</h4>
            <p className="transparency-text">
              We uphold strict content authenticity. Rather than publishing simulated testimonials or fabricated quotes, we invite visitors to inspect public reviews and ratings directly on Google Maps and regional travel forums.
            </p>
          </div>

          <div className="transparency-action">
            <a 
              href={hotelInfo.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-reviews-cta"
              id="view-reviews-cta"
            >
              <span>View Reviews on Google Maps</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
