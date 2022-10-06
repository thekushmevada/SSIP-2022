import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="container-login">
      <div className="child">
        <h1 className="loginHeading">Login Info</h1>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="name" className="form__label">
            Email
          </label>
        </div>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="password"
            name="password"
            id="password"
            required
          />
          <label htmlFor="name" className="form__label">
            Password
          </label>
        </div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <button type="button" className="btnsub">
            <span className="submitbtn">SUBMIT</span>
          </button>
        </Link>
        <p className="notice">
          No account then &nbsp;
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0TtpQNQE7Jr9xacJ60MCOVW6iLIFUZqE4tpZ8ZWaZf1c54w/viewform?usp=sf_link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
