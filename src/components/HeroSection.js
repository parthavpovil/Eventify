import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/HeroSection.css';

const HeroSection = ({ setShowModal }) => {
  const { user } = useAuth();

  const handleHostEventClick = () => {
    if (!user) {
      setShowModal(true);
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="brand-text">Rally<span className="brand-highlight">-Up</span></span>
        </h1>
        <p className="hero-subtitle">Create or join amazing events in your community</p>
        
        <div className="hero-buttons">
          <button 
            className="hero-button host-button"
            onClick={handleHostEventClick}
          >
            <span className="button-icon">🎉</span>
            Host an Event
          </button>
          
          <button 
            className="hero-button join-button"
            onClick={() => {/* Add join event logic */}}
          >
            <span className="button-icon">👥</span>
            Join an Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 