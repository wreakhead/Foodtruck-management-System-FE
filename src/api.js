import axios from "axios";
import {
  AdminDataFetchError,
  AdminDataFetchStart,
  AdminDataFetchSucess,
} from "./redux/AdminDataSlice";
import { loginError, loginStart, loginSucess } from "./redux/AdminSlice";


export const adminURL = "http://localhost:7000";
export const truckURL = "http://localhost:7003";

const APIs = {
  stateAPI: {
    method: "GET",
    url: "https://referential.p.rapidapi.com/v1/state",
    params: { fields: "iso_a2", iso_a2: "in", lang: "en" },
    headers: {
      "x-rapidapi-host": "",
      "x-rapidapi-key": "",
    },
  },
};

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
    const res = await axios.get(`${adminURL}/api/admin`, {
      withCredentials: "include",
    });
    dispatch(AdminDataFetchSucess(res.data));
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
    // window.location.reload()
  } catch (err) {
    console.log(err);
  }
};

export const getStates = async () => {
  try {
    const res = await axios(APIs.stateAPI);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addNewTruck = async (truckData) => {
  try {
    const res = await axios.post(`${truckURL}/api/registertruck`, truckData, {
      withCredentials: true,
    });
  } catch (err) {
    console.log(err);
  }
};
