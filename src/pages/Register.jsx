import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'reducer/auth/operations';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container
      width="600px"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        minWidth="300px"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 6,
        }}
      >
        <TextField
          helperText="Please enter your name"
          margin="normal"
          fullWidth
          required
          label="Name"
          variant="outlined"
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          helperText="Please enter your Email: username@gmail.com"
          margin="normal"
          fullWidth
          required
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          inputProps={{
            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
          }}
        />
        <TextField
          helperText="Please enter your password"
          margin="normal"
          fullWidth
          required
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: '#303f9f',
            '&:hover': {
              background: '#3f51b5',
            },
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}
