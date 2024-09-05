import './App.css';
import React,{useContext,useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import "./App.css";

import About from './Pages/About';
function App() {
  return (
  
    <Router>
       <Navbar />
      <div className="App">
        <Routes>
          <Route path="/:lang" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
