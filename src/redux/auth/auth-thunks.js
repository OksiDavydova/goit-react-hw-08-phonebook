import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const register = "/users/signup";
// const login = "/users/login";
// const logout = "/users/logout";
// const current = "/users/current";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (newUser) => {
    try {
      const { data } = await axios.post("/users/signup", newUser);
      token.set(data.token);
      console.log(data);
      return data; // action.payload
    } catch (err) {}
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", user);
      token.set(data.token);
      return data; // action.payload
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  }
);

export const currentThunk = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // console.log(token);
    if (!persistedToken) return thunkAPI.rejectWithValue();
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) return;
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (err) {
      console.log(err.message);
      rejectWithValue(err.message);
    }
  }
);
