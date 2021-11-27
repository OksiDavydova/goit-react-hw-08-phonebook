import { createSlice } from "@reduxjs/toolkit";
import {
  getItemsThunk,
  addNewItemThunk,
  deleteItemThunk,
} from "./contacts-thunk";

const initialState = {
  items: [],
  isLoadingContacts: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [getItemsThunk.pending](state, _) {
      state.isLoadingContacts = true;
    },
    [getItemsThunk.fulfilled](state, action) {
      state.items = [...action.payload];

      state.isLoadingContacts = false;
    },
    [getItemsThunk.rejected](state, _) {
      state.isLoadingContacts = false;
    },

    [addNewItemThunk.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
      state.isLoadingContacts = false;
    },
    [addNewItemThunk.rejected](state, _) {
      state.isLoadingContacts = false;
    },
    [deleteItemThunk.fulfilled](state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.isLoadingContacts = false;
    },
    [deleteItemThunk.rejected](state, _) {
      state.isLoadingContacts = false;
    },
  },
});

export default contactsSlice.reducer;
