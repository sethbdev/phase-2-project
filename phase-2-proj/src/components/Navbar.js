import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <NavLink className="navButton" to="/countdown">Countdown</NavLink>
      <NavLink className="navButton" exact to="/costumes">Costumes</NavLink>
      <NavLink className="navButton" exact to="/spookystories">Spooky Stories</NavLink>
      <NavLink className="navButton" exact to="/spookystories/new">Add A Story</NavLink>
    </div>
  );
};

export default Navbar;
