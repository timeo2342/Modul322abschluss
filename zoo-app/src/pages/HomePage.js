import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <header className="hero-section">
          <h1>Willkommen im Zoo Erlebnis</h1>
          <p>Ein Abenteuer für die ganze Familie!</p>
          <Link to="/tickets" className="book-tickets-button">
            Hier Ticket kaufen
          </Link>
        </header>
        <section className="features">
          <div className="feature">
            <img src="Sehenswürdigkeiten.jpg" alt="Attraktion" />
            <h3>Spannende Attraktionen</h3>
            <p>
              Entdecken Sie unsere spektakulären Tiergehege und interaktiven
              Shows.
            </p>
          </div>
          <div className="feature">
            <img src="tiere.jpg" alt="Tiere" />
            <h3>Vielfalt an Tieren</h3>
            <p>Erleben Sie die faszinierende Welt der Tiere hautnah.</p>
          </div>
          <div className="feature">
            <img src="Karte.png" alt="Zoo Karte" />
            <h3>Interaktive Karte</h3>
            <p>
              Planen Sie Ihren Besuch mit unserer benutzerfreundlichen
              Zoo-Karte.
            </p>
          </div>
        </section>

        <section className="testimonials">
          <h2>Was unsere Besucher sagen</h2>
          <div className="testimonial">
            <p>"Ein unvergessliches Erlebnis für die ganze Familie!"</p>
            <h4>- Familie Müller</h4>
          </div>
          <div className="testimonial">
            <p>
              "Die Tiere sind so gut gepflegt und die Shows sind fantastisch."
            </p>
            <h4>- Jonas K.</h4>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
