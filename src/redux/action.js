export const addContact = (obj) => ({
  type: "ADD_CONTACT",
  payload: obj,
});

export const deleteContact = (id) => ({
  type: "DELETE_CONTACT",
  payload: "id",
});

export const changeFilter = (value) => ({
  type: "CHANGE_FILTER",
  payload: value,
});
