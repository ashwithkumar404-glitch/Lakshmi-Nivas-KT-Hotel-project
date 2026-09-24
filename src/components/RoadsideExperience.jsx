import React from 'react';
import { Car, Clock, ArrowRight } from 'lucide-react';
import './RoadsideExperience.css';

export default function RoadsideExperience() {
  const steps = [
    {
      num: "01",
      action: "ARRIVE",
      tag: "Roadside Pull-In",
      desc: "Slow down along the Bengaluru–Mangaluru Highway at Kalladka junction. Dedicated roadside parking welcomes cars, motorbikes, and travel buses."
    },
    {
      num: "02",
      action: "PARK",
      tag: "Dine-In or In-Car",
      desc: "Choose whether to step into the bustling verandah or signal for roadside car-window service if you are pressed for time."
    },
    {
      num: "03",
      action: "ORDER",
      tag: "The Classic Request",
      desc: "Order hot KT Tea and a plate of golden Goli Baje. No convoluted menus or waiting—service is streamlined for highway flow."
    },
    {
      num: "04",
      action: "KT IS PREPARED",
      tag: "Live Hand-Pour",
      desc: "Watch the rapid frothing between vessels and the precise back-of-the-spoon pour that creates the two-layer horizon."
    },
    {
      num: "05",
      action: "TEA ARRIVES",
      tag: "The First Sip",
      desc: "Served piping hot in traditional glass tumblers. Take in the dramatic color boundary before sipping the hot, invigorating brew."
    },
    {
      num: "06",
      action: "CONTINUE",
      tag: "Back on the Highway",
      desc: "Refreshed and alert, pull back onto NH 75 to continue through the Western Ghats or toward the Arabian Sea coast."
    }
  ];

  return (
    <section className="section roadside-section" id="ritual">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">The Highway Flow</div>
          <h2 className="section-title">THE ROADSIDE RITUAL</h2>
          <p className="section-subtitle">
            Engineered around the rhythm of travel. Whether you have fifteen minutes or an unhurried hour, the stop is seamless.
          </p>
          <div className="two-tone-split-hr">
            <span className="kannada-label">ಪ್ರಯಾಣಿಕರ ನಿಲುಗಡೆ • ರಸ್ತೆಬದಿಯ ಸತ್ಕಾರ</span>
          </div>
        </div>

        {/* Feature Callout Banner: Car-Window Concept */}
        <div className="car-window-banner">
          <div className="banner-icon-col">
            <Car size={32} className="text-brass-light" />
          </div>
          <div className="banner-text-col">
            <span className="banner-tag">Highway Hospitality</span>
            <h3 className="banner-title">For travellers in a hurry, the stop can be quick.</h3>
            <p className="banner-desc">
              Long before modern drive-throughs existed, Lakshmi Nivas KT Hotel accommodated travelers on tight schedules. Drivers pulling up to the roadside curb can order KT tea and warm snacks delivered straight to their car windows, keeping the journey moving without missing the experience.
            </p>
          </div>
          <div className="banner-badge-col">
            <div className="quick-badge">
              <Clock size={16} />
              <span>Fast Highway Turnaround</span>
            </div>
          </div>
        </div>

        {/* The 6-Step Journey Flow */}
        <div className="journey-flow-grid">
          {steps.map((item, idx) => (
            <div className="journey-step-box" key={item.num}>
              <div className="journey-step-header">
                <span className="journey-num">{item.num}</span>
                <span className="journey-action">{item.action}</span>
              </div>

              <span className="journey-tag">{item.tag}</span>
              <p className="journey-desc">{item.desc}</p>

              {idx < steps.length - 1 && (
                <div className="journey-arrow">
                  <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
