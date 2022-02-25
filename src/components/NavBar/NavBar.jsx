import React from "react";

import LeftBar from "../LeftBar/LeftBar";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container-fluid d-flex justify-content-between">
        <button
          className="navbar-toggler toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="bi bi-list openMenuButton"></span>
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-body">
            <LeftBar closeButton={true} />
          </div>
        </div>
      </div>
    </nav>
  );
}
