import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../reducer/auth/selectors';
/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(authSelectors.selectIsLoggedIn);
  const IsRefreshing = useSelector(authSelectors.selectIsRefreshing);
  // && !IsRefreshing
  const shouldRedirect = !isLogin && !IsRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
