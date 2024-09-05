import './App.css';
import React,{useContext,useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import "./App.css";
import Abuot from './Pages/Abuot';
function App() {
  return (
  
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
