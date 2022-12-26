import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Sections } from 'components/Sections/Sections';

const Contacts = () => {
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
