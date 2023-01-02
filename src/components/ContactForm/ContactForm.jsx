import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'reducer/contacts/operations';
import contactsSelectors from 'reducer/contacts/selectors';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(contactsSelectors.selectAllContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      items.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      return toast.info(`${name} or phone:${number} is alredy in contact`, {
        autoClose: 3000,
      });
    }

    dispatch(addContact({ name, number }));
    toast.success(`Contact ${name} created!`);
    setName('');
    setNumber('');
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{
        maxWidth: '260px',
        margin: 'auto',
        padding: '16px',
        border: '1px solid #2a2a2a',
        borderRadius: '4px',
        '&:hover': {
          boxShadow: '-1px 15px 30px -12px black',
        },
      }}
    >
      <TextField
        margin="none"
        fullWidth
        required
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        }}
        helperText="Jacob Mercer"
      />
      <TextField
        margin="normal"
        fullWidth
        required
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        inputProps={{
          pattern: '[+][0-9]{3}-[0-9]{3}-[0-9]{4}',
        }}
        helperText="+123-456-7890"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: 80,
          color: 'white',
          background: '#3f51b5',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#303f9f',
          },
        }}
      >
        add
      </Button>
    </Box>
  );
};
