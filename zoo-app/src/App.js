import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AttractionsPage from "./pages/AttractionsPage";
import AnimalsPage from "./pages/AnimalsPage";
import MapPage from "./pages/MapPage";
import ContactPage from "./pages/ContactPage";
import Navigation from "./components/Navigation";
import TicketsPage from "./pages/TicketsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/attractions" element={<AttractionsPage />} />
            <Route path="/animals" element={<AnimalsPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
          </Routes>
        </div>
        <footer className="footer">
          <p>&copy; 2024 Zoo Erlebnis. Alle Rechte vorbehalten.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
