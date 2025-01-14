import React, { useState } from "react";
import "./TicketsPage.css";

function TicketPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && tickets > 0) {
      setMessage(`Danke ${name}, Ihre ${tickets} Tickets wurden gebucht!`);
    } else {
      setMessage("Bitte alle Felder ausfüllen.");
    }
  };

  return (
    <div className="ticket-page">
      <h1>Ticketbuchung</h1>
      <form onSubmit={handleSubmit} className="ticket-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          E-Mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Anzahl der Tickets:
          <input
            type="number"
            value={tickets}
            onChange={(e) => setTickets(e.target.value)}
            min="1"
            required
          />
        </label>
        <button type="submit">Tickets buchen</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default TicketPage;
