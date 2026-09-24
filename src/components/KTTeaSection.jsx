import React, { useState, useEffect } from 'react';
import { teaSteps } from '../data/teaProcess';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Droplet } from 'lucide-react';
import './KTTeaSection.css';

export default function KTTeaSection() {
  const [currentStepIndex, setCurrentStepIndex] = useState(4); // Default to final iconic view
  const [isPlaying, setIsPlaying] = useState(false);

  const step = teaSteps[currentStepIndex];

  // Auto-play stepper
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex((prev) => (prev + 1) % teaSteps.length);
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const goToStep = (index) => {
    setIsPlaying(false);
    setCurrentStepIndex(index);
  };

  const nextStep = () => {
    setIsPlaying(false);
    setCurrentStepIndex((prev) => (prev < teaSteps.length - 1 ? prev + 1 : 0));
  };

  const prevStep = () => {
    setIsPlaying(false);
    setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : teaSteps.length - 1));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const resetToStart = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  // Dynamic visual parameters for the glass representation
  const milkHeight = step.fillLevel.milk;
  const foamHeight = step.fillLevel.foam;
  const teaHeight = step.fillLevel.tea;

  return (
    <section className="section section-dark kt-tea-section" id="kt-tea">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Signature Roadside Experience</div>
          <h2 className="section-title">THE KT TEA</h2>
          <p className="section-subtitle">
            Two layers. One glass. A ritual perfected over generations.
          </p>
          <div className="two-tone-split-hr">
            <span className="kannada-label">ಕಲ್ಲಡ್ಕ ಕೆ.ಟಿ. ಚಹಾ</span>
          </div>
        </div>

        {/* Interactive Master Studio */}
        <div className="kt-interactive-studio">
          {/* Left Column: The Interactive Glass Vessel */}
          <div className="kt-vessel-stage">
            <div className="glass-pedestal">
              {/* Glass Tumbler Container */}
              <div className="glass-tumbler-outer" aria-label="Visual representation of KT tea glass">
                {/* Steam effect in later stages */}
                {teaHeight > 0 && (
                  <div className="steam-container">
                    <span className="steam-line s1"></span>
                    <span className="steam-line s2"></span>
                    <span className="steam-line s3"></span>
                  </div>
                )}

                {/* Back-of-the-spoon tool representation during stage 4 */}
                {currentStepIndex === 3 && (
                  <div className="brass-spoon-device">
                    <div className="spoon-stream"></div>
                    <div className="spoon-head"></div>
                    <div className="spoon-label">Back-of-Spoon Dispersion</div>
                  </div>
                )}

                {/* The Tumbler Glass Silhouette */}
                <div className="tumbler-glass">
                  {/* Glass Highlights */}
                  <div className="glass-reflection-left"></div>
                  <div className="glass-reflection-right"></div>

                  {/* Top Layer: Dark Tea Decoction */}
                  <div 
                    className="fluid-layer tea-layer"
                    style={{ 
                      height: `${teaHeight}%`,
                      opacity: teaHeight > 0 ? 1 : 0
                    }}
                  >
                    <div className="liquid-tea-gradient"></div>
                    {teaHeight > 0 && (
                      <span className="layer-caption">
                        Dark Tea Decoction
                      </span>
                    )}
                  </div>

                  {/* Interface Boundary / Horizon */}
                  {teaHeight > 0 && milkHeight > 0 && (
                    <div className="biphasic-boundary-line">
                      <span className="boundary-pulse-dot"></span>
                      <span className="boundary-annotation">Stable Settling Boundary</span>
                    </div>
                  )}

                  {/* Microfoam Head */}
                  <div 
                    className="fluid-layer foam-layer"
                    style={{ 
                      height: `${foamHeight}%`,
                      opacity: foamHeight > 0 ? 1 : 0
                    }}
                  >
                    <div className="foam-bubbles-pattern"></div>
                  </div>

                  {/* Bottom Layer: Creamy Sweetened Milk */}
                  <div 
                    className="fluid-layer milk-layer"
                    style={{ 
                      height: `${milkHeight}%`,
                      opacity: milkHeight > 0 ? 1 : 0
                    }}
                  >
                    <div className="liquid-milk-texture"></div>
                    {milkHeight > 0 && (
                      <span className="layer-caption milk-caption">
                        Thick Sweetened Milk
                      </span>
                    )}
                  </div>
                </div>

                {/* Heavy Glass Base */}
                <div className="glass-base-shadow"></div>
              </div>

              {/* Real Photograph Comparison Thumbnail */}
              <div className="authentic-photo-strip">
                <img 
                  src="/images/kt-tea-glass.jpg" 
                  alt="Authentic served glass of Kalladka KT tea" 
                  className="strip-thumbnail"
                />
                <div className="strip-text">
                  <strong>The Real Glass:</strong> Unbroken contrast served at Lakshmi Nivas since 1952.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Storytelling & Controls */}
          <div className="kt-controls-stage">
            {/* Step Navigation Tabs */}
            <div className="step-tabs-nav" role="tablist" aria-label="KT Tea preparation steps">
              {teaSteps.map((s, idx) => (
                <button
                  key={s.stepNumber}
                  type="button"
                  role="tab"
                  aria-selected={currentStepIndex === idx}
                  className={`step-tab-btn ${currentStepIndex === idx ? 'active' : ''}`}
                  onClick={() => goToStep(idx)}
                >
                  <span className="step-tab-num">0{s.stepNumber}</span>
                  <span className="step-tab-name">{s.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Current Step Card */}
            <div className="step-detail-card" key={step.stepNumber}>
              <div className="step-card-header">
                <div className="step-number-tag">
                  STAGE 0{step.stepNumber} OF 05
                </div>
                <div className="step-kannada-accent">
                  {step.kannadaTitle}
                </div>
              </div>

              <h3 className="step-card-title">{step.title}</h3>
              
              <div className="step-principle-badge">
                <Droplet size={14} className="text-brass" />
                <span>Physical Principle: {step.principle}</span>
              </div>

              <p className="step-card-description">
                {step.description}
              </p>

              <div className="step-craft-box">
                <div className="craft-box-label">The Roadside Method</div>
                <p className="craft-box-text">{step.craftDetail}</p>
              </div>

              {/* Scrubbing & Controls Bar */}
              <div className="step-action-bar">
                <div className="playback-controls">
                  <button 
                    type="button" 
                    onClick={prevStep} 
                    className="control-btn"
                    aria-label="Previous step"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button 
                    type="button" 
                    onClick={togglePlay} 
                    className="control-btn play-btn"
                    aria-label={isPlaying ? "Pause playback" : "Play step-by-step animation"}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
                  </button>

                  <button 
                    type="button" 
                    onClick={nextStep} 
                    className="control-btn"
                    aria-label="Next step"
                  >
                    <ChevronRight size={18} />
                  </button>

                  <button 
                    type="button" 
                    onClick={resetToStart} 
                    className="control-btn reset-btn"
                    aria-label="Reset to start"
                    title="Reset to step 1"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>

                <div className="step-slider-container">
                  <input 
                    type="range" 
                    min="0" 
                    max="4" 
                    value={currentStepIndex}
                    onChange={(e) => goToStep(Number(e.target.value))}
                    className="step-range-input"
                    aria-label="Scrub through KT tea stages"
                  />
                  <div className="slider-labels">
                    <span>Milk</span>
                    <span>Sugar</span>
                    <span>Froth</span>
                    <span>Pour</span>
                    <span>KT Glass</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
