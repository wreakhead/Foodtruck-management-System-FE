import React from "react";
import {logoutAdmin } from "../../api";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();
  const logout = async () => {
    await logoutAdmin(navigate);
  };
  return <button onClick={logout}>logout</button>;
}
