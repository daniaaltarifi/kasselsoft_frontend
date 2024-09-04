import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
