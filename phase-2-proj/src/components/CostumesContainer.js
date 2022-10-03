import React, { useState, useEffect } from "react";
import Costumes from "./Costumes";

const CostumesContainer = () => {
  const [costumes, setCostumes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/costumes")
      .then((res) => res.json())
      .then((data) => setCostumes(data));
  }, []);

  const costumeCards = costumes.map((costume) => {
    return <Costumes key={costume.id} costume={costume} />;
  });

  return (
    <div className="costume-container">
      <h1>Costumes</h1>
      {costumeCards}
    </div>
  );
};

export default CostumesContainer;
