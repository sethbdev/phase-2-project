import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/countdown">Countdown</NavLink>
      <NavLink exact to="/costumes">Costumes</NavLink>
      <NavLink exact to="/spookystories">Spooky Stories</NavLink>
      <NavLink exact to="/spookystories/new">Add A Story</NavLink>
    </div>
  );
};

export default Navbar;
