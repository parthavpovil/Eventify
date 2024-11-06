import React from 'react';
import Navbar from './components/Navbar';
import LandingButtons from './components/LandingButtons';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingButtons />
      {/* You can add more components like Footer here */}
    </div>
  );
}

export default App;
