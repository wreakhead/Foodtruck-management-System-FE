import React from "react";
import Avatar from "../Avatar/Avatar";
import NavBar from "../NavBar/NavBar";
import "./InfoTab.css";

export default function InfoTab() {
  return (
    <div className="infoTab shadow-sm d-flex align-items-center">
      <div className="container-fluid d-flex flex-row p-0">
        <div className="container-fluid d-flex p-0">
          <NavBar />
        </div>
        <div className="container-fluid d-flex justify-content-end mx-4">
          <Avatar />
        </div>
      </div>
    </div>
  );
}
