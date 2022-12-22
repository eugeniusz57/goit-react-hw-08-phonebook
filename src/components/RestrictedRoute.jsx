import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../reducer/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(authSelectors.selectIsLoggedIn);

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
