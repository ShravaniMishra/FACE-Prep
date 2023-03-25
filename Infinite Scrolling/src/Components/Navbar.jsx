import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <img
          src="https://i.ibb.co/Twmv2QQ/download-removebg-preview.png"
          alt="face"
        />
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </>
  );
};

export default Navbar;
