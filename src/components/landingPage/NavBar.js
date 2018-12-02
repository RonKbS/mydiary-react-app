import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent">
    <NavLink className="navbar-brand" exact to="/dashboard">MyDiary</NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="btn btn-light lp-btn text-white" to="#">Profile</NavLink>
        </li>
        <span />
        <li className="nav-item active">
          <NavLink className="btn btn-light lp-btn text-white" to="#">Logout</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
