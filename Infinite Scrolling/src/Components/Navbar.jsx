import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const isAuth = localStorage.getItem("isAuth");
  const navigate = useNavigate();
  return (
    <>
      <div className="Navbar">
        <img
          src="https://i.ibb.co/Twmv2QQ/download-removebg-preview.png"
          alt="face"
        />
        <NavLink to='/home'>Home</NavLink>
        <button
          className="btn btn-outline-danger"
          style={{marginBottom:"10px"}}
          onClick={() => {
            localStorage.setItem("isAuth", null);
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
