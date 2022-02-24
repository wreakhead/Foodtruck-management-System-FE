import React, { useEffect } from "react";
import { checkLoggedIn } from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminLogin from "../components/AdminLogin/AdminLogin";

export default function AdminLoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const to = "/dashboard";

  //fetch user data and check user logged in
  const check = async () => {
    await checkLoggedIn(dispatch, navigate, to);
  };

  useEffect(() => {
    check();
  }, []);
  return (
    <div>
      <AdminLogin />
    </div>
  );
}
