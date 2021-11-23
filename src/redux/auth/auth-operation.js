import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  loginThunk,
  currentThunk,
  logoutThunk,
} from "./auth-thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: "", email: "" },
    token: "",
    error: null,
    isLoading: false,
    isAuth: false,
    myProp: "Hello",
  },
  reducers: {
    renameProp: (state, action) => {
      return {
        ...state,
        myProp: action.payload,
      };
    },
  },
  extraReducers: {
    [registerThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [registerThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };
    },
    [registerThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [loginThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [loginThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };
    },
    [loginThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [currentThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [currentThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuth: true,
      };
    },
    [currentThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
      };
    },
    [logoutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [logoutThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: { name: "", email: "" },
        token: "",
        isAuth: false,
      };
    },
    [logoutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});
export const { renameProp } = authSlice.actions;

export default authSlice.reducer;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const UserApi = createApi({
//   reducerPath: "UserApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://connections-api.herokuapp.com",
//   }),
//   tagTypes: ["UserApi"],

//   endpoints: (builder) => ({
//     getAuthUserCurrent: builder.query({
//       query: () => `/users/current`,
//       providesTags: ["UserApi"],
//     }), // getAuthUserCurrent -получить информацию о текущем пользователе
//     createNewUser: builder.mutation({
//       query: (newUser) => ({
//         url: `/users/signup`,
//         method: "POST",
//         body: {
//           name: newUser.name,
//           number: newUser.number,
//           email: newUser.email,
//         },
//       }),
//       invalidatesTags: ["UserApi"],
//     }), //createNewUser - создать нового пользователя
//     loginUser: builder.mutation({
//       query: (loginUser) => ({
//         url: `/users/login`, // - залогинить пользователя
//         method: "POST",
//         body: {
//           name: loginUser.name,
//           email: loginUser.email,
//         },
//       }),
//       invalidatesTags: ["UserApi"],
//     }),
//     logoutUser: builder.mutation({
//       query: (logoutUser) => ({
//         url: `/users/logout`,
//         method: "POST",
//         body: {
//           name: logoutUser.name,
//           email: logoutUser.email,
//         },
//       }),
//       invalidatesTags: ["UserApi"],
//     }),
//   }),
// });

// export const {
//   useGetAuthUserCurrentQuery,
//   useCreateNewUserMutation,
//   useLoginUserMutation,
//   useLogoutUserMutation,
// } = UserApi;
