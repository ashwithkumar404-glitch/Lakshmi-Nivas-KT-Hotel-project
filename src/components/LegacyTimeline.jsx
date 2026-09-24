import React from 'react';
import { historyTimeline } from '../data/historyData';
import './LegacyTimeline.css';

export default function LegacyTimeline() {
  return (
    <section className="section legacy-section" id="story">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Seven Decades of Heritage</div>
          <h2 className="section-title">
            FROM A ROADSIDE TEA STALL TO A KALLADKA RITUAL
          </h2>
          <p className="section-subtitle">
            How a humble 1952 shelter beneath wooden beams and an observant journey to Madras gave birth to South Canara's most iconic layered tea.
          </p>
          <div className="two-tone-split-hr">
            <span className="kannada-label">ಸ್ಥಾಪನೆ: ೧೯೫೨ • ಸಂಸ್ಥಾಪಕರು: ಲಕ್ಷ್ಮೀ ನಾರಾಯಣ ಹೊಳ್ಳ</span>
          </div>
        </div>

        {/* Archival Banner & Founder Tribute */}
        <div className="founder-tribute-card">
          <div className="founder-image-col">
            <img 
              src="/images/heritage-1952.jpg" 
              alt="Archival representation of the 1952 roadside stall under wooden beams in South Canara" 
              className="founder-archival-img"
              loading="lazy"
            />
            <div className="archival-stamp">
              <span>EST. 1952 • KALLADKA</span>
            </div>
          </div>
          <div className="founder-text-col">
            <div className="tribute-badge">The Founder's Vision</div>
            <h3 className="founder-name">Mr. Lakshmi Narayana Holla</h3>
            <p className="founder-bio">
              In 1952, long before modern concrete highways connected coastal Dakshina Kannada to Bengaluru, Mr. Lakshmi Narayana Holla constructed a modest wooden tea stall in Kalladka. Travellers endured long, arduous bus and lorry journeys on dust-swept roads, seeking shelter, clean hospitality, and a revitalizing hot brew.
            </p>
            <p className="founder-bio">
              His relentless pursuit of culinary perfection led him on a pivotal journey to Madras (now Chennai). Fascinated by metropolitan tea and coffee craft, he returned to Kalladka inspired to create something truly distinctive—engineering the density separation that became Kalladka KT Tea.
            </p>
            <div className="founder-quote-line">
              "A traveler stopping by the roadside should leave with an unforgettable taste and renewed spirit for the journey ahead."
            </div>
          </div>
        </div>

        {/* The Chronological Pathway (1952 → Experimentation → Recognition → Generations → Today) */}
        <div className="timeline-horizontal-path">
          <div className="timeline-track-line"></div>
          
          <div className="timeline-milestones-grid">
            {historyTimeline.map((item, idx) => (
              <div className="milestone-card" key={item.year}>
                <div className="milestone-node">
                  <div className="node-dot">
                    <span className="node-number">0{idx + 1}</span>
                  </div>
                  <span className="node-year-badge">{item.year}</span>
                </div>

                <div className="milestone-content">
                  <div className="milestone-period">{item.period}</div>
                  <h4 className="milestone-title">{item.title}</h4>
                  <div className="milestone-subtitle">{item.subtitle}</div>
                  <p className="milestone-desc">{item.description}</p>
                  
                  <div className="milestone-highlight">
                    <span className="highlight-bullet">•</span>
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
