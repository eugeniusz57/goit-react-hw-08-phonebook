import { ContactForm } from 'components/ContactForm/ContactForm';
import { Sections } from 'components/Sections/Sections';

const Contacts = () => {
  return (
    <>
      <Sections title="Phonebook">
        <ContactForm />
      </Sections>
    </>
  );
};

export default Contacts;
