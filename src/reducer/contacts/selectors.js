const selectLoading = state => state.contacts.loading;

const selectFilter = state => state.contacts.filter;

const selectAllContacts = state => state.contacts.items;
const selectStatusFilter = state => state.filter;
const contactsSelectors = {
  selectLoading,
  selectFilter,
  selectAllContacts,
  selectStatusFilter,
};
export default contactsSelectors;
