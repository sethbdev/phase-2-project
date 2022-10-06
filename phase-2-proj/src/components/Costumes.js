import React from "react";

const Costumes = ({ costume }) => {
  const { title, image, price } = costume;

  return (
    <div className="costume-card flip-card" >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="costImage">
            <img className="costume-image" src={image} alt={title} />
          </div>
        </div>
        <div className="flip-card-back">
          <h2>{title}</h2>
          <h4>${price}</h4>
        </div>
    </div>
    </div>);
};

export default Costumes;

{/*
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
*/}
{/* return (
    <div className="costume-card flip-card">
      <h2>{title}</h2>
      <div className="costImage">
        <img className="costume-image" src={image} alt={title} />
      </div>
      <h4>${price}</h4>
    </div>
  );
};*/}