import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("ADD/contact");
export const deleteContact = createAction("DELETE/contact");
export const changeFilter = createAction("FILTER_CHANGE/contact");

//pending
export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
//fulfilled
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
//rejected
export const fetchContactsError = createAction("contacts/fetchContactsError");
