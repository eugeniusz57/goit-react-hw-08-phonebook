import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { authSelectors } from '../redux/auth';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const Navigation = () => {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
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
          component={NavLink}
          to="/"
          label="Home"
          value="home"
          sx={{
            '&:focus': {
              color: 'secondary',
            },
          }}
          icon={
            <HomeIcon
              sx={{
                color: 'secondary',
              }}
            />
          }
        />

        <BottomNavigationAction
          component={NavLink}
          to="/contacts"
          label="Contacts"
          value="contacts"
          sx={{
            '&:focus': {
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
      </BottomNavigation>
    </Box>
  );
};

export default Navigation;
