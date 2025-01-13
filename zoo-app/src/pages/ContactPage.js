import React from "react";

class ContactPage extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    alert("Vielen Dank für Ihre Nachricht! Wir melden uns bei Ihnen.");
  };

  render() {
    return (
      <div>
        <h1>Kontakt</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Nachricht:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Senden</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
