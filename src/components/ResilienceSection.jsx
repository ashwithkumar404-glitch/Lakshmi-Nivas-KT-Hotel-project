import React from 'react';
import { resilienceStory } from '../data/historyData';
import { Hammer, ShieldCheck, HeartHandshake } from 'lucide-react';
import './ResilienceSection.css';

export default function ResilienceSection() {
  return (
    <section className="section section-dark resilience-section" id="resilience">
      <div className="container">
        {/* Section Eyebrow & Title */}
        <div className="section-header">
          <div className="section-eyebrow">Architectural Continuity & Resilience</div>
          <h2 className="section-title">
            THE BUILDING CHANGED. THE TEA DIDN'T.
          </h2>
          <p className="section-subtitle">
            {resilienceStory.tagline}
          </p>
          <div className="two-tone-split-hr">
            <span className="kannada-label">ಶಿವಮೊಗ್ಗ-ಮಂಗಳೂರು ಹೆದ್ದಾರಿ ವಿಸ್ತರಣೆ • ೬೦ ದಿನಗಳಲ್ಲಿ ಪುನರ್ನಿರ್ಮಾಣ</span>
          </div>
        </div>

        {/* Narrative & Visual Split */}
        <div className="resilience-grid">
          {/* Left Column: Visual Continuity Composition */}
          <div className="resilience-visual-col">
            <div className="resilience-frame">
              <img 
                src="/images/hotel-rebuilt.jpg" 
                alt="The rebuilt modern structure of Lakshmi Nivas KT Hotel welcoming evening highway travellers" 
                className="resilience-main-img"
                loading="lazy"
              />
              <div className="resilience-badge-pill">
                <ShieldCheck size={14} className="text-brass" />
                <span>Operational within ~60 Days</span>
              </div>
            </div>

            {/* Rubble & Foundation Artifact Card */}
            <div className="rubble-foundation-card">
              <div className="rubble-icon-wrap">
                <Hammer size={20} className="text-brass-light" />
              </div>
              <div className="rubble-text">
                <strong>Foundation of Rubble & Stone Dust:</strong>
                <p>
                  Rather than discarding demolished material, Mr. Shivaram Holla and Mrs. Mamatha Holla collected the rubble and stone dust of the 1952 building, mixing it directly into the concrete foundation of the new establishment.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Resilience Narrative */}
          <div className="resilience-story-col">
            <div className="torchbearer-badge">
              <HeartHandshake size={15} />
              <span>Third-Generation Custodians</span>
            </div>

            <h3 className="resilience-custodians">
              {resilienceStory.torchbearers}
            </h3>

            <div className="resilience-paragraphs">
              {resilienceStory.paragraphs.map((p, idx) => (
                <p key={idx} className="resilience-p">
                  {p}
                </p>
              ))}
            </div>

            {/* Blockquote */}
            <blockquote className="resilience-quote">
              <p>"{resilienceStory.quote}"</p>
              <cite>— {resilienceStory.torchbearers}, Custodians of Lakshmi Nivas KT Hotel</cite>
            </blockquote>

            {/* Quick Metrics Bar */}
            <div className="resilience-metrics">
              <div className="metric-box">
                <span className="metric-val">~60</span>
                <span className="metric-unit">Days Rebuild</span>
                <span className="metric-sub">Fastest turnaround on NH 75</span>
              </div>
              <div className="metric-sep"></div>
              <div className="metric-box">
                <span className="metric-val">100%</span>
                <span className="metric-unit">Material Memory</span>
                <span className="metric-sub">Stone dust blended into plinth</span>
              </div>
              <div className="metric-sep"></div>
              <div className="metric-box">
                <span className="metric-val">3rd</span>
                <span className="metric-unit">Generation</span>
                <span className="metric-sub">Continuous family stewardship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
