import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  loginThunk,
  currentThunk,
  logoutThunk,
} from "./auth-thunks";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registerThunk.pending](state, _) {
      state.isLoading = true;
    },
    [registerThunk.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    [registerThunk.rejected](state, action) {
      state.isAuth = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [loginThunk.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
      state.error = "";
    },
    [loginThunk.rejected](state, action) {
      state.isAuth = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [logoutThunk.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isAuth = false;
    },
    [currentThunk.pending](state, _) {
      state.isLoading = true;
    },
    [currentThunk.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
    },
    [currentThunk.pending](state, _) {
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
