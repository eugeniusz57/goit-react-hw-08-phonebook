import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export default function MenuAuth() {
  return (
    <Box>
      <Button
        component={NavLink}
        to="/register"
        sx={{
          color: 'secondary',
          '&:hover': {
            color: 'white',
            background: '#303f9f',
          },
        }}
      >
        Register
      </Button>
      <Button
        component={NavLink}
        to="/login"
        sx={{
          color: 'secondary',
          '&:hover': {
            color: 'white',
            background: '#303f9f',
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
}
