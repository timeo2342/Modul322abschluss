import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/attractions">Attraktionen</Link>
          </li>
          <li>
            <Link to="/animals">Tiere</Link>
          </li>
          <li>
            <Link to="/map">Zoo-Karte</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
