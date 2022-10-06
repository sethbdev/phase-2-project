import React from "react";
import { Link } from "react-router-dom";

const Redirect = () => {
  return (
    <div>
      <h1 className="redirect-message">Boo! 404 not found!</h1>
      <button className="redirect-button">
        <Link className="redirect-link" to="/">
          Return to safety!
        </Link>
      </button>
    </div>
  );
};

export default Redirect;
