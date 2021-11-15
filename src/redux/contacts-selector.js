export const getContactItems = (state) => state.items;
export const filterValue = (state) => state.filter;

export const getVisibleContacts = (state) => {
  const allContacts = getContactItems(state);
  const filteredValue = filterValue(state);

  let normFilter = filteredValue.toLowerCase();

  if (filterValue) {
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normFilter)
    );
  }
  return allContacts;
};
