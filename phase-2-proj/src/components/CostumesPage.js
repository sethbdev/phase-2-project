import React, { useState, useEffect } from "react";
import CostumesContainer from "./CostumesContainer";
import CostumeSearch from "./CostumeSearch";

const CostumesPage = () => {
  const [costumes, setCostumes] = useState([]);
  const [costumeSearch, setCostumeSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/costumes")
      .then((res) => res.json())
      .then((data) => setCostumes(data));
  }, []);

  const displayedCostumes = costumes.filter((costume) =>
    costume.title.toLowerCase().includes(costumeSearch.toLowerCase())
  );

  return (
    <div>
      <h1 className="pageTitle">Costumes</h1>
      <CostumeSearch setCostumeSearch={setCostumeSearch} />
      <CostumesContainer costumes={displayedCostumes} />
    </div>
  );
};

export default CostumesPage;
