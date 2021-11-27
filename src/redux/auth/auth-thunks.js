import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      if (response.status === 400) {
        throw new Error({ message: "tra ta ta" });
      }
      token.set(response.data.token);
      return response.data; // action.payload
    } catch (err) {
      const errText = err.response.statusText;
      return rejectWithValue(errText);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/login", user);
      token.set(response.data.token);
      return response.data; // action.payload
    } catch (err) {
      const errText = err.response.statusText;
      return rejectWithValue(errText);
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
      return thunkAPI.rejectWithValue(err);
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
      rejectWithValue(err.message);
    }
  }
);

//=============contacts===================

export const contactsGetThunk = createAsyncThunk(
  "contacts/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/contacts");
      if (response.status === 400) {
        throw new Error({ message: "tra ta ta" });
      }
      // token.set(response.data.token);
      return response.data; // action.payload
    } catch (err) {
      const errText = err.response.statusText;
      return rejectWithValue(errText);
    }
  }
);

// export const loginThunk = createAsyncThunk(
//   "auth/login",
//   async (user, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("/users/login", user);
//       token.set(response.data.token);
//       return response.data; // action.payload
//     } catch (err) {
//       const errText = err.response.statusText;
//       return rejectWithValue(errText);
//     }
//   }
// );

// export const currentThunk = createAsyncThunk(
//   "auth/current",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     // console.log(token);
//     if (!persistedToken) return thunkAPI.rejectWithValue();
//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get("/users/current");
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

// export const logoutThunk = createAsyncThunk(
//   "auth/logout",
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     const token = state.auth.token;
//     if (!token) return;
//     try {
//       await axios.post("/users/logout");
//       token.unset();
//     } catch (err) {
//       rejectWithValue(err.message);
//     }
//   }
// );
