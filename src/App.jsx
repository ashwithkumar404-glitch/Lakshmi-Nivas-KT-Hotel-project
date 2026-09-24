import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import KTTeaSection from './components/KTTeaSection';
import TeaScience from './components/TeaScience';
import LegacyTimeline from './components/LegacyTimeline';
import ResilienceSection from './components/ResilienceSection';
import FoodSection from './components/FoodSection';
import RoadsideExperience from './components/RoadsideExperience';
import RouteSection from './components/RouteSection';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import VisitSection from './components/VisitSection';
import Footer from './components/Footer';
import QuickActionsBar from './components/QuickActionsBar';

export default function App() {
  return (
    <div className="app-root">
      {/* Top Header & Sticky Navigation */}
      <Navbar />

      {/* Main Narrative Sections */}
      <main id="main-content">
        <Hero />
        <IntroSection />
        <KTTeaSection />
        <TeaScience />
        <LegacyTimeline />
        <ResilienceSection />
        <FoodSection />
        <RoadsideExperience />
        <RouteSection />
        <Gallery />
        <Reviews />
        <VisitSection />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <QuickActionsBar />
    </div>
  );
}
