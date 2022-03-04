import React from "react";
import { useSelector } from "react-redux";
import NavOptions from "../NavOptions/NavOptions";
import "./LeftBar.css";
export default function LeftBar(props) {
  const domain = useSelector((state) => state.userData.AdminDataInfo.domain);
  const optionsData = [
    { id: 1, title: "Dash", to: "/dashboard", icon: "bi bi-speedometer2" },
    { id: 2, title: "Trucks", to: "/trucks", icon: "bi bi-truck" },
    { id: 3, title: "Menu", to: "/menu", icon: "bi bi-egg-fried" },
  ];
  return (
    <div className="leftBar p-3">
      <div className="container-fluid p-0">
        <div className="col">
          <div className="row h2 p-2 d-flex flex-row align-item-center justify-content-between leftBarLogo">
            {domain}
            {props.closeButton ? (
              <button
                type="button"
                className="btn-close text-reset closeButton align-self-center"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            ) : (
              <></>
            )}
          </div>

          <div className="h6 optionsBlock">
            {optionsData.map((option) => {
              return (
                <NavOptions
                  key={option.id}
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
