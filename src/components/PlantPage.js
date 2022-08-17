import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, setPlantList] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((r) => r.json())
    .then((data) => setPlantList(data))
  }, [])

  function updateList(data) {
    const listCopy = [...plantList, data]
    setPlantList(listCopy)
  }


  const plantToDisplay = plantList.filter((plant) => 
     plant.name.toLowerCase().includes(search.toLowerCase())
  )



  return (
    <main>
      <NewPlantForm updateList={updateList} />
      <Search setSearch={setSearch} />
      <PlantList plantToDisplay={plantToDisplay} />
    </main>
  );
}

export default PlantPage;
