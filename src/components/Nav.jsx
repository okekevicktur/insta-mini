import React from "react";
import logo from "../logo.png";
const Nav = () => {
  return (
    <div className="navWrapper">
      <img src={logo} alt="instagram-text-logo" className="logo" />
      <input type="search" placeholder="Search" className="searchInput"></input>
      <div className="iconWrapper">
        <i className="fa-solid fa-house-chimney"></i>
        <i class="fa-regular fa-message"></i>
        <i class="fa-regular fa-compass"></i>
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>
  );
};

export default Nav;
