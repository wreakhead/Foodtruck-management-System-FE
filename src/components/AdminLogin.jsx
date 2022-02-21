import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../api";
import "./AdminLogin.css";
import FoodTruck from "./FoodTruck";

export default function AdminLogin() {
  //redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admin = useRef();
  const password = useRef();

  const formsubmitted = async (e) => {
    e.preventDefault();
    const user = {
      admin: admin.current.value,
      password: password.current.value,
    };

    await loginAdmin(user, dispatch, navigate);
  };

  return (
    <div className="loginPage">
      <div className="">
        <form onSubmit={formsubmitted} className="loginBox shadow p-3 mb-5">
          <div className="Admin">
            <FoodTruck width="250" height="165"/>
          </div>
          <input
            ref={admin}
            required
            type="text"
            className="loginInput"
            placeholder="Admin name"
          />
          <input
            ref={password}
            required
            type="password"
            className="loginInput"
            placeholder="password"
          />
          <button type="submit" className="loginButton">
            login
          </button>
          <button
            className="registerButton"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
