import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <h1>404 !! 😭 Page Not Found</h1>
      <NavLink to="/home">Go Back</NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  margin: auto;
  text-align: center;
  background-color: #ecf5f5;
  h1 {
    padding-top: 10%;
    color: red;
    overflow-y: hidden;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 30px;
    font-weight: bold;
    position: relative;
  }
  a::after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    width: 100%;
    border: 2px solid red;
    transition: all 0.5s ease-in-out;
    transform: scale(0);
    transform-origin: left;
  }
  a:hover::after {
    transform: scale(1);
  }
`;

export default Error;
