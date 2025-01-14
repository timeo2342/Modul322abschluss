import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Kontakt</h1>
      <div className="contact-card">
        <h2>Zoo App Support</h2>
        <p>
          <strong>Adresse:</strong> Zürichbergstrasse 221, 8044 Zürich
        </p>
        <p>
          <strong>Telefon:</strong> 044 254 25 00
        </p>
        <p>
          <strong>E-Mail:</strong> zoo-app@gmail.com
        </p>
        <p>
          <strong>Öffnungszeiten:</strong> Montag - Sonntag, 9:00 - 18:00 Uhr
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
