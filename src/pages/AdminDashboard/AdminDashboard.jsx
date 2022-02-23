import React, { useEffect } from "react";
import { checkLoggedIn, logoutAdmin } from "../../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LeftBar from "../../components/LeftBar/LeftBar";
import "./AdminDashboard.css";
import DashLayout from "../../layouts/DashLayout";

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

  return <DashLayout />;

  // <div className="dashLayout border border-danger">
  //   <LeftBar/>
  //   {/* <button onClick={logout}>logout</button> */}

  // </div>
}
