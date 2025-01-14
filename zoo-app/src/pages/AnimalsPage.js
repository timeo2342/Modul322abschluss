import React from "react";
import "./AnimalsPage.css";

class AnimalsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "Alle",
      animals: [
        {
          name: "Elefanten",
          category: "Säugetiere",
          description: "Sanfte Riesen, die Sie beeindrucken werden.",
          image: "Elefanten.jpg",
        },
        {
          name: "Giraffen",
          category: "Säugetiere",
          description: "Die Riesen der Savanne.",
          image: "Giraffen.webp",
        },
        {
          name: "Löwen",
          category: "Raubtiere",
          description: "Die Könige der Tiere.",
          image: "Löwen.jpg",
        },
        {
          name: "Pinguine",
          category: "Vögel",
          description: "Verspielte Schwimmer.",
          image: "Pinguine.avif",
        },
      ],
    };
  }

  handleFilterChange = (category) => {
    this.setState({ filter: category });
  };

  render() {
    const filteredAnimals = this.state.animals.filter(
      (animal) =>
        this.state.filter === "Alle" || animal.category === this.state.filter
    );

    return (
      <div className="animals-page">
        <h1>Unsere Tiere</h1>
        <div className="filter-buttons">
          <button onClick={() => this.handleFilterChange("Alle")}>Alle</button>
          <button onClick={() => this.handleFilterChange("Säugetiere")}>
            Säugetiere
          </button>
          <button onClick={() => this.handleFilterChange("Raubtiere")}>
            Raubtiere
          </button>
          <button onClick={() => this.handleFilterChange("Vögel")}>
            Vögel
          </button>
        </div>
        <div className="animals-list">
          {filteredAnimals.map((animal, index) => (
            <div className="animal-card" key={index}>
              <img src={animal.image} alt={animal.name} />
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
              <span className="category">{animal.category}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AnimalsPage;
