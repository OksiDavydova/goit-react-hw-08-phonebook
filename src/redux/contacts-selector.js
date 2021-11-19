export const filterValue = (state) => state.contacts.filter;

//for ContactList
export const getVisibleItems = (data, filterString) => {
  let normFilter = filterString.toLowerCase();
  if (data) {
    return data.filter(({ name }) => name.toLowerCase().includes(normFilter));
  }
  return data;
};
