import React from 'react';
import '../styles/LandingButtons.css';

function LandingButtons() {
  return (
    <div className="landing-buttons">
      <button className="landing-btn join-btn">Join an Event</button>
      <button className="landing-btn host-btn">Host an Event</button>
    </div>
  );
}

export default LandingButtons;
