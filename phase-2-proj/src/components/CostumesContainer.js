import React from "react";
import Costumes from "./Costumes";

const CostumesContainer = ({ costumes }) => {


  const costumeCards = costumes.map((costume) => {
    return <Costumes key={costume.id} costume={costume} />;
  });

  return (
    <div className="costume-container">
      {costumeCards}
    </div>
  );
};

export default CostumesContainer;
