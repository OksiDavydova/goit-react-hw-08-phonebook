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
};

// user: { name: "", email: "" },
// token: "",
// error: null,
// isLoading: false,
// isAuth: false,
// myProp: "Hello",

const authSlice = createSlice({
  name: "auth",
  initialState,
  // reducers: {
  //   renameProp: (state, action) => {
  //     return {
  //       ...state,
  //       myProp: action.payload,
  //     };
  //   },
  // },
  extraReducers: {
    [registerThunk.fulfilled](state, action) {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };
    },
    [loginThunk.fulfilled](state, action) {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };
    },
    [logoutThunk.fulfilled](state, action) {
      return {
        ...state,
        user: { name: null, email: null },
        token: null,
        isAuth: false,
      };
    },
    [currentThunk.fulfilled](state, action) {
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    },
    // [registerThunk.pending](state, action) {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // },
    // [registerThunk.fulfilled](state, action) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     user: action.payload.user,
    //     token: action.payload.token,
    //     isAuth: true,
    //   };
    // },
    // [registerThunk.rejected](state, action) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload,
    //   };
    // },
    // [loginThunk.pending](state, action) {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // },
    // [loginThunk.fulfilled](state, action) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     user: {
    //       name: action.payload.user.name,
    //       email: action.payload.user.email,
    //     },
    //     token: action.payload.token,
    //     isAuth: true,
    //   };
    // },
    // [loginThunk.rejected](state, action) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload,
    //     isAuth: false,
    //   };
    // },
    // [currentThunk.pending](state, action) {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // },
    // [currentThunk.fulfilled](state, action) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     user: action.payload,
    //     isAuth: true,
    //   };
    // },
    // [currentThunk.rejected](state, action) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload,
    //     isAuth: false,
    //   };
    // },
    // [logoutThunk.pending](state, action) {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // },
    // [logoutThunk.fulfilled](state, action) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     user: { name: "", email: "" },
    //     token: "",
    //     isAuth: false,
    //   };
    // },
    // [logoutThunk.rejected](state, action) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload,
    //   };
    // },
  },
});
// export const { renameProp } = authSlice.actions;

export default authSlice.reducer;
