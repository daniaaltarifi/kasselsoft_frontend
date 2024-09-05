import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css";
import Abuot from './Pages/Abuot';
import Services from './Pages/Services';
import { useNavigate,useLocation } from 'react-router-dom';
// Component to redirect to default language
const RedirectToDefaultLanguage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/') {
      navigate('/en'); // Redirect to default language
    }
  }, [navigate, location.pathname]);

  return null;
};
// Component to handle direction based on language
const DirectionHandler = () => {
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'en'; // Get the language from the path, default to 'en'

  React.useEffect(() => {
    document.body.classList.remove('ltr', 'rtl'); // Remove previous direction classes
    document.body.classList.add(lang === 'ar' ? 'rtl' : 'ltr'); // Add new direction class
  }, [lang]);

  return null;
};

import About from './Pages/About';
function App() {
  
  return (
  
    <Router>
       <Navbar />
      <div className="App">
          <RedirectToDefaultLanguage />
          <DirectionHandler /> {/* Handle direction change */}

        <Routes>
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/services" element={<Services />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
