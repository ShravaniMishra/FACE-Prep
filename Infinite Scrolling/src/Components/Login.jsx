import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    let form = e.target;
    let data = new FormData(form);
    data = Object.fromEntries(data);
    if (!data.username || !data.password) {
      return alert("please enter all the fields");
    }
    if (data.username == "foo" && data.password == "bar") {
      localStorage.setItem("isAuth", true);
      form.reset();
      navigate("/home");
    } else alert("Wrong username/password");
  };

  return (
    <>
      <div className="Login">
        <form onSubmit={Submit}>
          <label htmlFor="username">UserName :</label>
          <input
            type="text"
            name="username"
            placeholder="Please Enter UserName"
          />
          <br />
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Please Enter your Password"
          />
          <br />
          <br />
          <button
            className="btn btn-outline-success"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
