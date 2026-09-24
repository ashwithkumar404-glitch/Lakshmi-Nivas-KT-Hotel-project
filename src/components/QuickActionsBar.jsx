import React from 'react';
import { hotelInfo } from '../data/hotelInfo';
import { Navigation, MapPin } from 'lucide-react';
import './QuickActionsBar.css';

export default function QuickActionsBar() {
  return (
    <div className="mobile-quick-actions-bar" role="region" aria-label="Mobile quick travel actions">
      <a 
        href={hotelInfo.location.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="quick-bar-btn primary"
        id="mobile-sticky-directions"
      >
        <Navigation size={18} />
        <span>Directions</span>
      </a>

      <a 
        href="#visit"
        className="quick-bar-btn secondary"
        id="mobile-sticky-info"
      >
        <MapPin size={18} />
        <span>Kalladka Stop</span>
      </a>
    </div>
  );
}
