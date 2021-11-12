// import actionTypes from "./actions-type";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("ADD/contact");
export const deleteContact = createAction("DELETE/contact");
export const changeFilter = createAction("FILTER_CHANGE/contact");

// export const addContact = (obj) => ({
//   type: actionTypes.ADD,
//   payload: obj,
// });

// export const deleteContact = (id) => ({
//   type: actionTypes.DELETE,
//   payload: id,
// });

// export const changeFilter = (value) => ({
//   type: actionTypes.FILTER,
//   payload: value,
// });
