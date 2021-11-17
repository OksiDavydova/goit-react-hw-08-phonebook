// import actionTypes from "./actions-type";
import { addContact, deleteContact, changeFilter } from "./actions-contacts";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import defaultContacts from "./default-contacts";

const contacts = {
  items: [...defaultContacts],
  filter: "",
};

//?toolkit
const items = createReducer(contacts.items, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer(contacts.filter, {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
