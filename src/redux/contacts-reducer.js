import actionTypes from "./actions-type";
import { combineReducers } from "redux";

const initialsState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const contactsReducer = (state = initialsState.contacts, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];

    case actionTypes.DELETE:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = initialsState.filter, { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload;

    default:
      return state;
  }
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
