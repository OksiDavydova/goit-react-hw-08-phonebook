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

// export const registerThunk = createAsyncThunk(
//   "users/register",
//   async (user, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         "https://connections-api.herokuapp.com/users/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(user),
//         }
//       );
//       const data = await response.json();
//       console.log("response", data); // { token: "", user: {name: "", email: ""}}
//       return data; // action.payload
//     } catch (err) {
//       rejectWithValue({ error: err.message });
//     }
//   }
// );

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", newUser);
      console.log("responce", data);
      // if (response.status === 400) {
      //   return new Error("Error: Bad Request");
      // }
      // if (response.status === 200) {
      token.set(data.token);

      return data; // action.payload
      // }
    } catch (err) {
      rejectWithValue({ error: err.massage });
      console.log("registerThunk", err);
    }
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

// export const registerThunk = createAsyncThunk(
//   "auth/register",
//   async (newUser, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("/users/signup", newUser);
//       console.log("responce", response);
//       if (response.status === 400) {
//         return new Error("Error: Bad Request");
//       }
//       if (response.status === 200) {
//         token.set(response.data.token);
//         console.log("registerThunk", response);
//         return response.data; // action.payload
//       }
//     } catch (err) {
//       rejectWithValue(err.response.data);
//       console.log("registerThunk", err);
//     }
//   }
// );
