import actionTypes from "./actions-type";

export const addContact = (obj) => ({
  type: actionTypes.ADD,
  payload: obj,
});

export const deleteContact = (id) => ({
  type: actionTypes.DELETE,
  payload: id,
});

export const changeFilter = (value) => ({
  type: actionTypes.FILTER,
  payload: value,
});
