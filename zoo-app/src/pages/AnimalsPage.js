import React from "react";

class AnimalsPage extends React.Component {
  render() {
    const animals = [
      {
        name: "Elefanten",
        description:
          "Unsere sanften Riesen sind ein Highlight für Groß und Klein.",
      },
      {
        name: "Giraffen",
        description: "Besuchen Sie unsere neugierigen Giraffen in der Savanne.",
      },
      {
        name: "Löwen",
        description: "Die Könige der Savanne sind immer einen Besuch wert.",
      },
      {
        name: "Pinguine",
        description:
          "Beobachten Sie die verspielten Pinguine in ihrer Kältezone.",
      },
    ];

    return (
      <div>
        <h1>Unsere Tiere</h1>
        <div className="animal-list">
          {animals.map((animal, index) => (
            <div className="card" key={index}>
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AnimalsPage;
