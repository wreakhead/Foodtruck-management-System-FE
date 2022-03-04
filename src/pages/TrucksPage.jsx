import React, { useEffect } from "react";
import TruckPageLayout from "../layouts/TruckPageLayout";
import { checkLoggedIn } from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function TrucksPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //fetch user data and check user logged in
  const check = async () => {
    await checkLoggedIn(dispatch, navigate);
  };

  useEffect(() => {
    check();
  }, []);

  return <TruckPageLayout />;
}
