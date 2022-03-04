import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../api";
import "./PopUp.css";
export default function PopUp(props) {
  const options = [
    { id: 1, title: "logout" },
    { id: 2, title: "logout2" },
  ];
  const navigate = useNavigate();

  const functionality = async (option) => {
    if (option === "logout") {
      await logoutAdmin(navigate);
    }
  };

  const printOptions = () => {
    return options.map((option) => {
      return (
        <div
          key={option.id}
          className="options p-1"
          onClick={() => functionality(option.title)}
        >
          <i class="bi bi-box-arrow-right "></i>
          <div className="px-1">{option.title}</div>
        </div>
      );
    });
  };
  return (
    <div className="d-flex flex-column">
      {props.open ? printOptions() : <></>}
    </div>
  );
}
