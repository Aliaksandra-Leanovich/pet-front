import { createSlice } from "@reduxjs/toolkit";
import { IUserStore } from "../types";

const initialState: IUserStore = {
  isAuthorized: localStorage.getItem("userEmail"),
  email: localStorage.getItem("userEmail"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.isAuthorized = localStorage.getItem("userEmail");
      state.email = action.payload;
    },

    unsetUser: (state) => {
      state.isAuthorized = localStorage.removeItem("userEmail");
      state.email = "";
    },
  },
});
export const { setUserEmail, unsetUser } = userSlice.actions;
export default userSlice.reducer;
