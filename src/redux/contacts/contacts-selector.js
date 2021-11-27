import { createSelector } from "@reduxjs/toolkit";

export const selectFilterValue = (state) => state.filter.filter;
export const selectItemsContacts = (state) => state.contactsSlice.items;
export const selectIsLoadingItems = (state) =>
  state.contactsSlice.isLoadingContacts;

export const selectVisibleContacts = createSelector(
  [selectItemsContacts, selectFilterValue],
  (selectItems, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return selectItems.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
