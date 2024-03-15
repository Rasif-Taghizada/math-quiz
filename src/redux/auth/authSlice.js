import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  uid: null,
  id: null,
};

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.uid = action.payload.uid;
      state.id = action.payload.id;
      // set user in local storage
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: action.payload.email,
          token: action.payload.token,
          uid: action.payload.uid,
          id: action.payload.id,
        })
      );
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.uid = null;
      state.id = null;
      // remove user from local storage
      localStorage.removeItem("user");
    },
  },
});

export const { saveUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
