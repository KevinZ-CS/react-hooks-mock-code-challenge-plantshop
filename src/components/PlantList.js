import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantToDisplay }) {
  return (
    <ul className="cards">
      {plantToDisplay.map((plant) => <PlantCard key={plant.id} plant={plant} />)}
    </ul>
  );
}

export default PlantList;
