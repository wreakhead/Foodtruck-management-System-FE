import { createSlice } from "@reduxjs/toolkit";

export const AdminSlice = createSlice({
  name: "Admin",
  initialState: {
    AdminInfo: {
      admin: "",
      token: "",
    },
    pending: false,
    error: false,
    errorMessage:""
  },
  reducers: {
    loginStart: (state) => {
      state.pending = true;
    },
    loginSucess: (state, action) => {
      state.pending = false;
      state.AdminInfo = action.payload;
    },
    loginError: (state,error) => {
      state.error = true;
      state.pending = false;
      state.errorMessage=error
    },
  },
});

export const { loginStart, loginSucess, loginError } = AdminSlice.actions;
export default AdminSlice.reducer;
