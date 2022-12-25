import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import NotFound from '../pages/NotFound';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyled';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../reducer/auth/operations';
import authSelectors from 'reducer/auth/selectors';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const LogIn = lazy(() => import('../pages/LogIn'));
const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefresh ? (
        <p>Refreshing</p>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LogIn />}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Register />}
                  />
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster position="top-right" reverseOrder={false} />
          <GlobalStyle />
        </>
      )}
    </>
  );
};
