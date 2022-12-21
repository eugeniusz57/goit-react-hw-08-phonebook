import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import NotFound from '../pages/NotFound';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyled';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const LogIn = lazy(() => import('../pages/LogIn'));
const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
    </>
  );
};
