import React from "react";

const Costumes = ({ costume }) => {
  const { id, title, image, price } = costume;

  return (
    <div className="costume-card">
      <h2>{title}</h2>
      <div className="costImage">
        <img className="costume-image" src={image} alt={title} />
      </div>
      <h4>${price}</h4>
    </div>
  );
};

export default Costumes;
