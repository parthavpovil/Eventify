import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Eventify</div>
      
      <div className="navbar-right">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;