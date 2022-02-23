import axios from "axios";
import {
  AdminDataFetchError,
  AdminDataFetchStart,
  AdminDataFetchSucess,
} from "./redux/AdminDataSlice";
import { loginError, loginStart, loginSucess } from "./redux/AdminSlice";

export const adminURL = "http://localhost:7000";

export const loginAdmin = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${adminURL}/api/login`, user, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: "include",
    });

    navigate("/dashboard");
    dispatch(loginSucess(res.data));
  } catch (err) {
    //console.log(err.response.data.detail)
    dispatch(loginError(err.response.data.detail));
  }
};

export const RegisterAdmin = async (user, navigate) => {
  try {
    const res = await axios.post(`${adminURL}/api/register`, user);
    console.log(res);
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const checkLoggedIn = async (dispatch, navigate) => {
  dispatch(AdminDataFetchStart());
  try {
    await axios.get(`${adminURL}/api/admin`, {
      withCredentials: "include",
    });
    dispatch(AdminDataFetchSucess());
  } catch (err) {
    navigate("/");
    dispatch(AdminDataFetchError());
    console.log(err);
  }
};
export const logoutAdmin = async (navigate) => {
  try {
    await axios.get(`${adminURL}/api/logout`, {
      withCredentials: "include",
    });
    navigate("/");
    window.location.reload()
  } catch (err) {
    console.log(err);
  }
};
