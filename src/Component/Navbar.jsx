import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-light active"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/message">
                Message
              </Link>
            </li>
            <li className="nav-item">
              {localStorage.getItem("login")?
                <Link className="nav-link text-light" to="/login">
                  Login
                </Link>
               :""}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}