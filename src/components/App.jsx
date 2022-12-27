import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import NotFound from '../pages/NotFound';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyled';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'reducer/auth/operations';
import authSelectors from 'reducer/auth/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spiner from './Spiner/Spiner';
import { Container } from '@mui/material';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const LogIn = lazy(() => import('../pages/LogIn'));
const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(authSelectors.selectIsRefreshing);
  console.log('isRefresh', isRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      {isRefresh ? (
        <Spiner />
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
          <ToastContainer autoClose={2000} />
          <GlobalStyle />
        </>
      )}
    </Container>
  );
};
