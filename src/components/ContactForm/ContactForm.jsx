import { Box, TextField, Button } from '@mui/material';
export const ContactForm = () => {
  return (
    <Box
      component="form"
      // onSubmit={handleSubmit}
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
        // value={name}
        // onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <TextField
        margin="normal"
        fullWidth
        required
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        // value={number}
        // onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
        {/* {isLoading && <SpinnerAudio />} */}
        add
      </Button>
    </Box>
  );
};
