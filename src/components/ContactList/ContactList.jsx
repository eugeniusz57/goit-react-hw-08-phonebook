import { Box } from '@mui/material';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import contactsSelectors from '../../reducer/contacts/selectors';

export const ContactList = () => {
  const items = useSelector(contactsSelectors.selectAllContacts);
  const filter = useSelector(contactsSelectors.selectStatusFilter);

  const findContact = () => {
    const toLowerFilter = filter.toLowerCase().trim();
    if (!toLowerFilter) {
      return items;
    }

    return items.filter(item =>
      item.name.toLowerCase().includes(toLowerFilter)
    );
  };
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
        {findContact().length === 0 ? (
          <p>Yoy don't have any contact</p>
        ) : (
          findContact().map(item => <ContactListItem key={item.id} {...item} />)
        )}
      </Box>
    </>
  );
};
