import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Sections } from 'components/Sections/Sections';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'reducer/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Sections title="Phonebook">
        <ContactForm />
        <Filter />
        <ContactList />
      </Sections>
    </>
  );
};

export default Contacts;
