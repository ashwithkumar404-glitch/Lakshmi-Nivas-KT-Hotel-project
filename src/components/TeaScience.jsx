import React from 'react';
import { FlaskConical, Droplets, Wind, Utensils, Layers } from 'lucide-react';
import './TeaScience.css';

export default function TeaScience() {
  const steps = [
    {
      num: "01",
      title: "Thick Full-Fat Milk",
      icon: <Droplets size={22} className="text-terracotta" />,
      detail: "The method depends primarily on whole, creamy milk heated patiently. Its natural dairy solids and butterfat create a foundational liquid with high viscosity, essential for supporting the layers above."
    },
    {
      num: "02",
      title: "Sugar Density Calibration",
      icon: <Layers size={22} className="text-brass" />,
      detail: "Granular sugar is blended thoroughly into the milk base first. Dissolving sugar elevates the specific gravity of the dairy layer, creating a denser liquid cushion at the bottom of the glass."
    },
    {
      num: "03",
      title: "Vigorous Vessel Frothing",
      icon: <Wind size={22} className="text-leaf" />,
      detail: "The sweetened milk is vigorously aerated and frothed across two vessels from high pouring arcs. This traps micro-bubbles, generating a resilient, dense upper microfoam mantle."
    },
    {
      num: "04",
      title: "The Back-of-the-Spoon Decoction",
      icon: <Utensils size={22} className="text-brass" />,
      detail: "A concentrated, steaming black tea decoction is introduced slowly over the convex curve of an inverted spoon. The spoon deflects the downward kinetic plunge, spreading the dark tea horizontally."
    },
    {
      num: "05",
      title: "The Final Horizon Boundary",
      icon: <FlaskConical size={22} className="text-terracotta" />,
      detail: "The fluid dynamics between the denser, frothed milk base and the lighter, deflected tea decoction produce the signature, razor-sharp visual horizon that remains stable as it reaches the table."
    }
  ];

  return (
    <section className="section tea-science-section" id="science">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Artisanal Physics</div>
          <h2 className="section-title">THE SCIENCE BEHIND THE GLASS</h2>
          <p className="section-subtitle">
            Not laboratory chemistry, but generations of roadside folk physics. How dairy viscosity, sugar density, and deflected flow hold two worlds in one glass.
          </p>
        </div>

        <div className="science-grid">
          {/* Left: Educational Numbered Process Timeline */}
          <div className="science-timeline">
            {steps.map((item, idx) => (
              <div className="science-step-card" key={item.num}>
                <div className="step-num-col">
                  <div className="step-circle">{item.num}</div>
                  {idx < steps.length - 1 && <div className="step-connector-line"></div>}
                </div>
                <div className="step-body-col">
                  <div className="step-heading-row">
                    <div className="step-icon-wrap">{item.icon}</div>
                    <h3 className="step-h3">{item.title}</h3>
                  </div>
                  <p className="step-p">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Documentary Spotlight Card */}
          <div className="science-spotlight">
            <div className="spotlight-card">
              <div className="spotlight-image-wrap">
                <img 
                  src="/images/tea-spoon-pour.jpg" 
                  alt="Traditional technique of pouring tea decoction over the back of a brass spoon" 
                  className="spotlight-img"
                  loading="lazy"
                />
                <div className="spotlight-tag">
                  <span>The Deflection Technique</span>
                </div>
              </div>

              <div className="spotlight-content">
                <h4 className="spotlight-title">The Spoon That Prevents Mixing</h4>
                <p className="spotlight-body">
                  If hot tea decoction were poured straight into the glass, the vertical kinetic energy would rupture the microfoam and blend immediately with the milk. 
                </p>
                <p className="spotlight-body">
                  By inverting a spoon and letting the stream roll gently across its curved back, the tea master neutralizes gravity's plunge, allowing the tea to glide horizontally onto the milk foam cushion.
                </p>
                
                <div className="craft-note-box">
                  <span className="craft-note-title">Craft Principle</span>
                  <p className="craft-note-text">
                    "Every glass of KT tea is hand-poured in real-time. No pumps. No automated dispensers. Only the spoon, the eye, and seven decades of tactile memory."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
