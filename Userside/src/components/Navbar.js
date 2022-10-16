import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand ">
          EVSP (Emergency Vehical Service Provider)
        </span>
        <form class="d-flex" role="search">
          <Link to="/">
            <button class="btn btn-outline-secondary mx-1" type="button">
              LOG OUT
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
