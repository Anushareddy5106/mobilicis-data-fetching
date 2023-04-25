import React from "react";
import Github from "../assets/github.png";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="sticky-top">
      <div className="nav-title">Mobilicis</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="nav-div " id="navbarNav">
        <ul>
          <li className="nav-item active">
            <a className="nav-link" href="#table1">
              Table 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#table2">
              Table 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#table3">
              Table 3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#table4">
              Table 4
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#table5">
              Table 5
            </a>
          </li>
        </ul>
      </div>
      <a href="https://github.com/Anushareddy5106/mobilicis-data-fetching">
        <div className="git-icon">
          <img src={Github} alt="" />
          Source Code
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
