const selectLoading = state => state.tasks.loading;

const selectFilter = state => state.tasks.filter;

const selectAllTasks = state => state.tasks.items;
const contactsSelectors = {
  selectLoading,
  selectFilter,
  selectAllTasks,
};
export default contactsSelectors;
