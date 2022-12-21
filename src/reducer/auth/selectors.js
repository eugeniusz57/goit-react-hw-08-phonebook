const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUser = state => state.auth.user.email;

const selectIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
};
export default authSelectors;
