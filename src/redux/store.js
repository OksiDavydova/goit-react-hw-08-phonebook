import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
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

const contactsReducer = (state = initialsState, { type, payload }) => {
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };

    case "DELETE_CONTACT":
      const { contacts } = state;
      return contacts.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = initialsState.filter, { type, payload }) => {
  switch (type) {
    case "CHANGE_FILTER":
      return payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
