import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/countdown">Countdown</NavLink>
      <NavLink to="/costumes">Costumes</NavLink>
      <NavLink to="/stories">Spooky Stories</NavLink>
      <NavLink to="/newstory">Add A Story</NavLink>
    </div>
  );
};

export default Navbar;
