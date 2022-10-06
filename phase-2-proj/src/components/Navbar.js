import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  //const [isActive, setIsActive] = useState(true);
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <NavLink className="navItem navbtn" exact to="/countdown">Countdown</NavLink>
        <NavLink className="navItem navbtn" exact to="/costumes">Costumes</NavLink>
        <NavLink className="navItem navbtn" exact to="/stories">Spooky Stories</NavLink>
        <NavLink className="navItem navbtn" exact to="/newstory">Add A Story</NavLink>
      </div>  
    </div>
  );
};

export default Navbar;
