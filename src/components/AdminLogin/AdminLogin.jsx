import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../api";
import "./AdminLogin.css";
import Alert from "../Alert/Alert";
import FoodTruck from "../FoodTruck/FoodTruck";
import CustomButton from "../CustomButton/CustomButton";

export default function AdminLogin() {
  //redux
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.errorMessage);
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
            <FoodTruck width="250" height="165" />
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
          <CustomButton pending={pending} text="login" />
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
      {error ? <Alert message={error.payload} type="alert-danger" /> : <></>}
    </div>
  );
}
