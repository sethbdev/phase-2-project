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
    <div>
      <h1 className="pageTitle">Costumes</h1>
      <div className="costume-container">
        {costumeCards}
      </div>
    </div>
  );
};

export default CostumesContainer;
