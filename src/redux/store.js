import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "./contacts-reducer";
import { itemsApi } from "./itemsRTK";

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    itemsApi.middleware,
  ],
});

setupListeners(store.dispatch);
