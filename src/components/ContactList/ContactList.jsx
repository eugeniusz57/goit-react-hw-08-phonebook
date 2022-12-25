import { Box } from '@mui/material';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  return (
    <>
      <Box
        component="ul"
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '260px',
          margin: 'auto',
          marginBottom: '20px',
          padding: '16px',
          border: '1px solid #2a2a2a',
          borderRadius: '4px',
        }}
      >
        {/* {filtred &&
          filtred.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))} */}
      </Box>
    </>
  );
};
