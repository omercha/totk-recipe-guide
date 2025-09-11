// In your App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Assuming you have a Header component
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Recipes from './pages/Recipes';

function App() {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) { // 80 is roughly header height
        setHeaderVisible(false); // Scrolling down
      } else {
        setHeaderVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Router>
      <Header isVisible={isHeaderVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/recipes" element={<Recipes />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
