import { configureStore } from "@reduxjs/toolkit";
import AdminReducer from "./AdminSlice";
import AdminDataReducer from "./AdminDataSlice";

export default configureStore({
  reducer: {
    user: AdminReducer,
    userData: AdminDataReducer,
  },
});
