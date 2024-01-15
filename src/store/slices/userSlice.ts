import { createSlice } from "@reduxjs/toolkit";
import { IUserStore } from "../types";

const initialState: IUserStore = {
  isAdmin: localStorage.getItem("role"),
  isAuthorized: localStorage.getItem("userEmail"),
  email: localStorage.getItem("userEmail"),
  userDetails: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.isAuthorized = localStorage.getItem("userEmail");
      state.isAdmin = localStorage.getItem("role");
      state.userDetails = action.payload.userDetails;
      state.email = action.payload.email;
    },

    unsetUser: (state) => {
      state.isAuthorized = localStorage.removeItem("userEmail");
      state.isAdmin = localStorage.removeItem("role");
      state.email = "";
      state.userDetails = null;
    },
  },
});
export const { setUserEmail, unsetUser } = userSlice.actions;
export default userSlice.reducer;
