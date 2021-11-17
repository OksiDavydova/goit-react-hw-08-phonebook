export const getContactItems = (state) => state.contacts.items;
export const filterValue = (state) => state.contacts.filter;

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
//for ContactList
export const getVisibleItems = (data, filterString) => {
  let normFilter = filterString.toLowerCase();
  if (data) {
    return data.filter(({ name }) => name.toLowerCase().includes(normFilter));
  }
  return data;
};

// //for ContactForm
// export const checkData = (newItem, data) => {
//   const { name, number } = newItem;
//    const normalizedName = name.toLowerCase();
//     if (
//       data.find((contact) => contact.name.toLowerCase() === normalizedName)
//     ) {
//       alert(`${name} is already in contacts list`);
//       return;
//     } else if (data.find((contact) => contact.number === number)) {
//       alert(`${number} is already in contacts list`);
//       return;
//     } else {
//       createItem(newItem);
//     }
// };
