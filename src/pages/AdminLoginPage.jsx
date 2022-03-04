import React, { useEffect } from "react";
import { checkLoggedIn } from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminLogin from "../components/AdminLogin/AdminLogin";

export default function AdminLoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //fetch user data and check user logged in
  const check = async () => {
    try {
      await checkLoggedIn(dispatch, navigate);
      // navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
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
