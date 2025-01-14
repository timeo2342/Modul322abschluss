import React, { useState } from "react";
import zooAnimals from "../zooData";
import "./MapPage.css";

function MapPage() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleMarkerClick = (animalId) => {
    const animal = zooAnimals.find((a) => a.id === animalId);
    setSelectedAnimal(animal);
  };

  const closePopup = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="map-page-container">
      <h1>Zoo Map</h1>
      <div className="zoo-map-container">
        <img src="/Karte.png" alt="Zoo Map" className="zoo-map" />

        <div
          className="map-marker"
          style={{ top: "27.5%", left: "60%" }}
          onClick={() => handleMarkerClick(1)}
        >
          <span>Elefanten</span>
        </div>

        <div
          className="map-marker"
          style={{ top: "20%", left: "80%" }}
          onClick={() => handleMarkerClick(2)}
        >
          <span>Löwen</span>
        </div>

        <div
          className="map-marker"
          style={{ top: "70%", left: "40%" }}
          onClick={() => handleMarkerClick(3)}
        >
          <span>Pinguine</span>
        </div>

        <div
          className="map-marker"
          style={{ top: "27.5%", left: "80%" }}
          onClick={() => handleMarkerClick(4)}
        >
          <span>Giraffen</span>
        </div>

        {selectedAnimal && (
          <div className="animal-popup">
            <button className="close-button" onClick={closePopup}>
              X
            </button>
            <h2>{selectedAnimal.name}</h2>
            <img src={selectedAnimal.image} alt={selectedAnimal.name} />
            <p>{selectedAnimal.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MapPage;
