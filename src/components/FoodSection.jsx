import React from 'react';
import { verifiedMenu, menuDisclosures } from '../data/menuData';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import './FoodSection.css';

export default function FoodSection() {
  return (
    <section className="section food-section" id="food">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Authentic South Canara Flavors</div>
          <h2 className="section-title">THE FOOD STOP</h2>
          <p className="section-subtitle">
            Hot off the kadai, straight onto fresh banana leaves. Strictly displaying verified regional staples loved by highway motorists.
          </p>
          <div className="two-tone-split-hr">
            <span className="kannada-label">ಗೋಳಿ ಬಜೆ • ಕೆ.ಟಿ. ಚಹಾ • ತಾಜಾ ಉಪಹಾರ</span>
          </div>
        </div>

        {/* Verified Menu Grid */}
        <div className="food-grid">
          {verifiedMenu.map((item) => (
            <div className="food-card" key={item.id}>
              <div className="food-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="food-img"
                  loading="lazy"
                />
                <div className="food-badge-strip">
                  <span className="food-category">{item.category}</span>
                  <span className="food-tag">{item.tag}</span>
                </div>
              </div>

              <div className="food-card-body">
                <div className="food-title-row">
                  <h3 className="food-name">{item.name}</h3>
                  <span className="food-kannada">{item.kannadaName}</span>
                </div>

                <p className="food-desc">{item.description}</p>

                <div className="food-serving-box">
                  <div className="serving-label">Serving Style:</div>
                  <div className="serving-value">{item.servingStyle}</div>
                </div>

                <div className="food-verified-tag">
                  <CheckCircle2 size={13} className="text-leaf" />
                  <span>Verified Signature Item</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Disclosure & Placeholder Notice Box */}
        <div className="menu-disclosure-card">
          <div className="disclosure-icon">
            <AlertCircle size={22} className="text-terracotta" />
          </div>
          <div className="disclosure-text">
            <h4 className="disclosure-heading">{menuDisclosures.noticeTitle}</h4>
            <p className="disclosure-p">{menuDisclosures.noticeText}</p>
            <p className="disclosure-status">{menuDisclosures.statusText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
