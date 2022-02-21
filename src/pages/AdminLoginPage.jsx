import React from "react";
import {useSelector } from "react-redux";
import AdminLogin from "../components/AdminLogin";

export default function AdminLoginPage() {
  const error = useSelector((state) => state.user.errorMessage);
  return (
    <div>
      <AdminLogin />
    </div>
  );
}
