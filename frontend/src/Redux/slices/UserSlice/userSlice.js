import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  error: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { decodedToken, token } = action.payload;
      state.isLoggedIn = true;
      state.user = decodedToken;
      state.token = token;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;

const selectUser = (state) => state.user.user;
