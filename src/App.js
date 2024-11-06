import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal';
import { AuthProvider } from './context/AuthContext';
import './styles/index.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <div className="main-content">
            <div className="pattern-overlay"></div>
            <Navbar setShowModal={setShowModal} />
            <HeroSection setShowModal={setShowModal} />
            {showModal && (
              <SignUpModal 
                onClose={() => setShowModal(false)}
                message="Please sign in to host an event"
              />
            )}
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
