import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.js";
import AttractionsPage from "./pages/AttractionsPage.js";
import AnimalsPage from "./pages/AnimalsPage.js";
import MapPage from "./pages/MapPage.js";
import ContactPage from "./pages/ContactPage.js";
import Navigation from "./components/Navigation.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/attractions" element={<AttractionsPage />} />
            <Route path="/animals" element={<AnimalsPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
