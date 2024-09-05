import './App.css';
import React,{useContext,useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/:lang" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
