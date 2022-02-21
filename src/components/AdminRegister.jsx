import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { RegisterAdmin } from "../api";

export default function AdminRegister() {
  //redux

  const navigate = useNavigate();
  const admin = useRef();
  const password = useRef();
  const domain = useRef();

  const formsubmitted = async (e) => {
    e.preventDefault();
    const user = {
      admin: admin.current.value,
      domain: domain.current.value,
      password: password.current.value,
    };
    try {
      await RegisterAdmin(user, navigate);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="loginPage">
      <div className="">
        <form onSubmit={formsubmitted} className="loginBox shadow p-3 mb-5">
          <h3 className="Admin">Admin</h3>
          <input
            ref={admin}
            required
            type="text"
            className="loginInput"
            placeholder="Admin name"
          />
          <input
            ref={domain}
            required
            type="text"
            className="loginInput"
            placeholder="Domain"
          />
          <input
            ref={password}
            required
            type="password"
            className="loginInput"
            placeholder="password"
          />

          <button type="submit" className="loginButton">
            register
          </button>
        </form>
      </div>
    </div>
  );
}
