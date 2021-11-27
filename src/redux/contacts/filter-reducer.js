// import actionTypes from "./actions-type";
import { changeFilter } from "./filter-actions";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});
