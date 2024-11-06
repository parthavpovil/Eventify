import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = ({ setShowModal }) => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleAuthClick = () => {
    if (!user) {
      setShowModal(true);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-container">
          <h1 className="logo">
            Rally<span className="logo-highlight">-Up</span>
          </h1>
          <div className="logo-dot"></div>
        </div>
      </div>

      <div className="nav-right">
        {user ? (
          <div className="user-menu-container">
            <button 
              className="user-button"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              {user.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt="Profile" 
                  className="user-avatar"
                />
              ) : (
                <div className="user-avatar-placeholder">
                  {user.displayName?.charAt(0) || user.email?.charAt(0)}
                </div>
              )}
              <span className="user-name">{user.displayName || user.email}</span>
              <i className="fas fa-chevron-down"></i>
            </button>

            {showUserMenu && (
              <div className="user-menu">
                <div className="menu-header">
                  <p className="user-email">{user.email}</p>
                </div>
                <div className="menu-items">
                  <button onClick={() => navigate('/profile')}>
                    <i className="fas fa-user"></i>
                    Profile
                  </button>
                  <button onClick={() => navigate('/my-events')}>
                    <i className="fas fa-calendar"></i>
                    My Events
                  </button>
                  <button onClick={handleSignOut} className="sign-out-button">
                    <i className="fas fa-sign-out-alt"></i>
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button 
            className="auth-button"
            onClick={handleAuthClick}
          >
            <span className="button-content">
              <i className="fas fa-user"></i>
              Sign In/Sign Up
            </span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
