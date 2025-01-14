import React from "react";
import "./AttractionsPage.css";

class AttractionsPage extends React.Component {
  render() {
    return (
      <div className="attractions-page">
        <h1>Unsere Attraktionen</h1>
        <div className="attractions-list">
          <div className="attraction">
            <img src="aussichtsplatform.jpg" alt="Aussichtsplattform" />
            <h3>Aussichtsplattform</h3>
            <p>Genießen Sie den Panoramablick über den gesamten Zoo.</p>
          </div>
          <div className="attraction">
            <img src="Fütterungszeit.jpg" alt="Fütterungszeit" />
            <h3>Fütterungszeit</h3>
            <p>Erleben Sie die Fütterung unserer Löwen hautnah.</p>
          </div>
          <div className="attraction">
            <img src="Tiershow.jpg" alt="Tiershow" />
            <h3>Spannende Tiershows</h3>
            <p>
              Sehen Sie unsere Tiere in Aktion und lernen Sie dabei mehr über
              sie.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AttractionsPage;
