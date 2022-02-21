import { createSlice } from "@reduxjs/toolkit";

export const AdminDataSlice = createSlice({
  name: "AdminData",
  initialState: {
    AdminDataInfo: {
      id: "",
      admin: "",
      domain: "",
    },
    pending: false,
    error: false,
  },
  reducers: {
    AdminDataFetchStart: (state) => {
      state.pending = true;
    },
    AdminDataFetchSucess: (state, action) => {
      state.pending = false;
      state.AdminDataInfo = action.payload;
    },
    AdminDataFetchError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export const {
  AdminDataFetchStart,
  AdminDataFetchSucess,
  AdminDataFetchError,
} = AdminDataSlice.actions;
export default AdminDataSlice.reducer;
