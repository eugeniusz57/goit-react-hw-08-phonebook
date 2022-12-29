import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../reducer/auth/selectors';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const Navigation = () => {
  const isLogin = useSelector(authSelectors.selectIsLoggedIn);
  const [value, setValue] = React.useState('contacts');

  return (
    <Box
      maxWidth="xs"
      sx={{
        color: 'secondary',
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          disableFocusListener
          disableTouchListener
          component={NavLink}
          to="/"
          label="Home"
          value="home"
          sx={{
            '&:focus': {
              color: 'secondary',
            },
            '&.Mui-active': {
              color: 'secondary',
            },
          }}
          icon={
            <HomeIcon
              sx={{
                color: 'secondary',
                '&:hover': {
                  color: 'secondary',
                },
              }}
            />
          }
        />

        {isLogin && (
          <BottomNavigationAction
            component={NavLink}
            to="/contacts"
            label="Contacts"
            value="contacts"
            sx={{
              '&:focus': {
                color: 'secondary',
              },
              '&.Mui-active': {
                color: 'secondary',
              },
            }}
            icon={
              <ContactPhoneIcon
                sx={{
                  color: 'secondary',
                }}
              />
            }
          />
        )}
      </BottomNavigation>
    </Box>
  );
};

export default Navigation;
