import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink exact to="/countdown">Countdown</NavLink>
      <NavLink exact to="/costumes">Costumes</NavLink>
      <NavLink exact to="/stories">Spooky Stories</NavLink>
      <NavLink exact to="/newstory">Add A Story</NavLink>
    </div>
  );
};

export default Navbar;
