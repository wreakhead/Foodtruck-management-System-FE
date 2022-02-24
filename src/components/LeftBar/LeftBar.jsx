import React from "react";
import NavOptions from "../NavOptions/NavOptions";
import "./LeftBar.css";
export default function LeftBar(props) {
  const optionsData = [
    { id: 1, title: "Dash", to: "/dashboard", icon: "bi bi-speedometer2" },
    { id: 2, title: "Trucks", to: "/trucks", icon: "bi bi-truck" },
    { id: 3, title: "Menu", to: "/menu", icon: "bi bi-egg-fried" },
  ];
  return (
    <div className="leftBar p-3">
      <div className="container-fluid p-0">
        <div className="col">
          <div className="row h2 p-2 d-flex flex-column justify-content-center leftBarLogo">
            Food Truck
          </div>

          <div className="h6 optionsBlock">
            {optionsData.map((option) => {
              return (
                <NavOptions
                  title={option.title}
                  to={option.to}
                  icon={option.icon}
                  active={props.activeOptionId === option.id ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
