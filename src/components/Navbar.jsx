import React, { useState, useEffect } from 'react';
import { hotelInfo } from '../data/hotelInfo';
import { Compass, Menu, X, Navigation } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['story', 'kt-tea', 'science', 'food', 'ritual', 'gallery', 'visit'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo & Editorial Typography */}
          <a href="#" className="navbar-brand" onClick={closeMenu}>
            <div className="brand-crest">
              <span className="crest-symbol">KT</span>
            </div>
            <div className="brand-text">
              <span className="brand-title">LAKSHMI NIVAS</span>
              <span className="brand-sub">
                KT HOTEL <span className="brand-dot">•</span> <span className="brand-kannada">ಕಲ್ಲಡ್ಕ</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
            <ul className="nav-list">
              <li>
                <a 
                  href="#story" 
                  className={`nav-link ${activeSection === 'story' ? 'active' : ''}`}
                >
                  The Story
                </a>
              </li>
              <li>
                <a 
                  href="#kt-tea" 
                  className={`nav-link ${activeSection === 'kt-tea' ? 'active' : ''}`}
                >
                  KT Tea
                </a>
              </li>
              <li>
                <a 
                  href="#science" 
                  className={`nav-link ${activeSection === 'science' ? 'active' : ''}`}
                >
                  The Craft
                </a>
              </li>
              <li>
                <a 
                  href="#food" 
                  className={`nav-link ${activeSection === 'food' ? 'active' : ''}`}
                >
                  Food
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#visit" 
                  className={`nav-link ${activeSection === 'visit' ? 'active' : ''}`}
                >
                  Visit
                </a>
              </li>
            </ul>
          </nav>

          {/* Primary CTA */}
          <div className="navbar-actions desktop-only">
            <a 
              href={hotelInfo.location.mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-nav"
              id="nav-directions-btn"
            >
              <Navigation size={15} />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            type="button"
            className="mobile-toggle mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={closeMenu}
        aria-hidden={!mobileMenuOpen}
      />
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-modal="true"
        role="dialog"
      >
        <div className="mobile-drawer-head">
          <div className="mobile-brand">
            <div className="brand-crest small">
              <span>KT</span>
            </div>
            <div>
              <div className="drawer-hotel-name">Lakshmi Nivas</div>
              <div className="drawer-hotel-sub">Kalladka, Dakshina Kannada</div>
            </div>
          </div>
          <button 
            className="drawer-close-btn" 
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <ul className="mobile-nav-list">
            <li>
              <a href="#story" onClick={closeMenu} className="mobile-nav-item">
                <span className="item-num">01</span>
                <span className="item-label">The Story & 1952 Origin</span>
              </a>
            </li>
            <li>
              <a href="#kt-tea" onClick={closeMenu} className="mobile-nav-item">
                <span className="item-num">02</span>
                <span className="item-label">The Signature KT Glass</span>
              </a>
            </li>
            <li>
              <a href="#science" onClick={closeMenu} className="mobile-nav-item">
                <span className="item-num">03</span>
                <span className="item-label">The Science Behind the Glass</span>
              </a>
            </li>
            <li>
              <a href="#food" onClick={closeMenu} className="mobile-nav-item">
                <span className="item-num">04</span>
                <span className="item-label">The Food Stop (Goli Baje)</span>
              </a>
            </li>
            <li>
              <a href="#ritual" onClick={closeMenu} className="mobile-nav-item">
                <span className="item-num">05</span>
                <span className="item-label">The Roadside Ritual</span>
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={closeMenu} className="mobile-nav-item">
                <span className="item-num">06</span>
                <span className="item-label">Visual Story & Gallery</span>
              </a>
            </li>
            <li>
              <a href="#visit" onClick={closeMenu} className="mobile-nav-item">
                <span className="item-num">07</span>
                <span className="item-label">Location & Highway Stop</span>
              </a>
            </li>
          </ul>

          <div className="mobile-quick-card">
            <div className="quick-card-tag">Roadside Halt</div>
            <div className="quick-card-address">{hotelInfo.location.fullAddress}</div>
            <div className="mobile-action-buttons">
              <a 
                href={hotelInfo.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-drawer"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>
              <a 
                href="#visit"
                onClick={closeMenu}
                className="btn btn-secondary btn-drawer"
              >
                <Compass size={16} />
                <span>Travel Info</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
