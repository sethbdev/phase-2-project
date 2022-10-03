import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink
      to="/countdown"
      >Countdown</NavLink>
      <NavLink
      to="/costumes"
      >Costumes</NavLink>
      <NavLink
      to="/spookystories"
      >Spooky Stories</NavLink>
    </div>
    
  )
}

export default Navbar;