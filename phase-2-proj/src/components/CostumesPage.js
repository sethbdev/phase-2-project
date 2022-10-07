import React, { useState, useEffect } from "react";
import CostumesContainer from "./CostumesContainer";
import CostumeSearch from "./CostumeSearch";

const CostumesPage = () => {
  const [costumes, setCostumes] = useState([]);
  const [costumeSearch, setCostumeSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/costumes")
      .then((res) => res.json())
      .then((data) => setCostumes(data));
  }, []);

  const displayedCostumes = costumes.filter((costume) =>
    costume.title.toLowerCase().includes(costumeSearch.toLowerCase())
  );

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  let year = new Date().getFullYear();

  return (
    <div>
      <h1
        onClick={handleToggle}
        id="costume-header-toggle"
        className="pageTitle"
      >
        Top Costumes of {year}*
      </h1>
      <h3 className="sub-header">
        {toggle ? "*...according to the internet" : ""}
      </h3>
      <CostumeSearch setCostumeSearch={setCostumeSearch} />
      <CostumesContainer costumes={displayedCostumes} />
    </div>
  );
};

export default CostumesPage;
