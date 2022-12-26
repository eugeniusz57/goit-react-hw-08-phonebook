import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';
import contactsSelectors from 'reducer/contacts/selectors';
import { setfilter } from 'reducer/filterSlice';

export const Filter = () => {
  const value = useSelector(contactsSelectors.selectStatusFilter);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        maxWidth: '260px',
        margin: 'auto',
        padding: '12px',
      }}
    >
      <TextField
        margin="none"
        label="Find contacts by name"
        variant="outlined"
        type="text"
        value={value}
        onChange={e => dispatch(setfilter(e.target.value))}
      />
    </Box>
  );
};
