import React, { useEffect } from "react";
import { checkLoggedIn, logoutAdmin } from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //fetch user data and check user logged in
  const check = async () => {
    await checkLoggedIn(dispatch, navigate);
  };

  const logout = async () => {
    await logoutAdmin(navigate);
  };
  useEffect(() => {
    check();
  }, []);

  return (
    <div>
      AdminDashboard
      <button onClick={logout}>logout</button>
    </div>
  );
}
