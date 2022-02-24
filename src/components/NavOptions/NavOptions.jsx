import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavOptions(props) {
  const navigate = useNavigate();
  return (
    <div
      className={`${props.active ? "selected" : ""} options shadow-sm`}
      onClick={() => navigate(props.to)}
    >
      <div className="optionContent">
        <i className={`${props.icon} optionIcon`}></i> {props.title}
      </div>
      <i className="bi bi-caret-right-fill optionArrow"></i>
    </div>
  );
}
