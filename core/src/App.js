// In your App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Assuming you have a Header component
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Router>
      <Header />
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
