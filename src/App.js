import './App.css';
import React,{useContext,useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';

import Abuot from './Pages/Abuot';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Abuot" element={<Abuot />} />

        </Routes>
      </Router>
    
    
    </div>
  );
}

export default App;
