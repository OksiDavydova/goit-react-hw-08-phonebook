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
export const itemReducer = createReducer(contacts.items, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

export const filterReducer = createReducer(contacts.filter, {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

//!redux
// export const contactsReducer = (
//   state = initialsState.contacts,
//   { type, payload }
// ) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [...state, payload];

//     case actionTypes.DELETE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// export const filterReducer = (
//   state = initialsState.filter,
//   { type, payload }
// ) => {
//   switch (type) {
//     case actionTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
