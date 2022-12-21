const selectLoading = state => state.tasks.loading;

const selectFilter = state => state.tasks.filter;

const selectAllTasks = state => state.tasks.items;
export default contactsSelectors = {
  selectLoading,
  selectFilter,
  selectAllTasks,
};
