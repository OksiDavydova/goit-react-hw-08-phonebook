import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const getItemsThunk = createAsyncThunk(
  "contacts/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/contacts");
      if (response.status === 400) {
        throw new Error({ message: "tra ta ta" });
      }

      return response.data; // action.payload
    } catch (err) {
      const errText = err.response.statusText;
      return rejectWithValue(errText);
    }
  }
);

export const addNewItemThunk = createAsyncThunk(
  "contacts/add",
  async (newItem, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/contacts", newItem);
      return data; // action.payload
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteItemThunk = createAsyncThunk(
  "contacts/delete",
  async (deleteId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${deleteId}`);
      if (response.status === 200) {
        return deleteId; // action.payload
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
