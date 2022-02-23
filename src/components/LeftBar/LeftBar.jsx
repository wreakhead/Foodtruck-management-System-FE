import React from "react";
import "./LeftBar.css";
export default function LeftBar() {
  return (
    <div className="leftBar p-3">
      <div className="container-fluid p-0">
        <div className="col">
          <div className="row h2 p-2 d-flex flex-column justify-content-center leftBarLogo">
            Food Truck
          </div>

          <div className="h6 optionsBlock">
            <div className="options">
              <div className="optionContent">
                <i className="bi bi-truck optionIcon"></i> Trucks
              </div>
              <i className="bi bi-caret-right-fill optionArrow"></i>
            </div>
          </div>
          <div className="h6 optionsBlock">
            <div className="options">
              <div className="optionContent">
                <i className="bi bi-truck optionIcon"></i> Trucks
              </div>
              <i className="bi bi-caret-right-fill optionArrow"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
