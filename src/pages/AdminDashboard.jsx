import React, { useEffect } from "react";
import { checkLoggedIn } from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DashLayout from "../layouts/DashLayout";


export default function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPath = "/dashboard";

  //fetch user data and check user logged in
  const check = async () => {
    await checkLoggedIn(dispatch, navigate, currentPath);
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <>
      <DashLayout />;
    </>
  );
}
