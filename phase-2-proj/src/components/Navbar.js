import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <NavLink to="/">
          <button className="navbar-button">Countdown</button>
        </NavLink>
        <NavLink exact to="/costumes">
          <button className="navbar-button">Costumes</button>
        </NavLink>
        <NavLink exact to="/stories">
          <button className="navbar-button">Spooky Stories</button>
        </NavLink>
        <NavLink exact to="/newstory">
          <button className="navbar-button">Add A Story</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
