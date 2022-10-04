import React from "react";

const Costumes = ({ costume }) => {
  const { id, title, image, price } = costume;

  return (
    <div className="costume-card">
      <h1>{title}</h1>
      <div className="costImage">
        <img className="costume-image" src={image} alt={title} />
      </div>
      <h3>${price}</h3>
    </div>
  );
};

export default Costumes;
