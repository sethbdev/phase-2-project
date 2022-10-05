import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="navItem" exact to="/countdown">
        Countdown
      </NavLink>
      <NavLink className="navItem" exact to="/costumes">
        Costumes
      </NavLink>
      <NavLink className="navItem" exact to="/stories">
        Spooky Stories
      </NavLink>
      <NavLink className="navItem" exact to="/newstory">
        Add A Story
      </NavLink>
    </div>
  );
};

export default Navbar;
