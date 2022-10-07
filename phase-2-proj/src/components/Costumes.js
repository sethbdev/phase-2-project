import React from "react";

const Costumes = ({ costume }) => {
  const { title, image, quote, price } = costume;

  return (
    <div className="costume-card flip-card" >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="costImage">
            <img className="costume-image" src={image} alt={title} />
          </div>
          <h2 className="title-front">{title}</h2>
        </div>
        <div className="flip-card-back">
          <h2>{title}</h2>
          <h4>${price}</h4>
          <p className="quote">{quote}</p>
        </div>
    </div>
    </div>);
};

export default Costumes;

