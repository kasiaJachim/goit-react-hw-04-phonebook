import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm.jsx/ContactForm';
import ContactList from 'components/ContactList.jsx/ContactList';
import FilterContact from 'components/FilterContact.jsx/FilterContact';
// import contacts from 'contacts.json';
import css from './addContacts.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const AddContacts = () => {
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [parsedContacts, setPasedCOntacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = contacts ? JSON.parse(contacts) : [];
    return parsedContacts;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(parsedContacts));
  }, [parsedContacts]);

  const filterContacts = filter => {
    setFilter(filter);
  };

  const addContact = newContact => {
    const { name } = newContact;
    const lowerCaseName = name.toLowerCase();
    const isNameUnique = !parsedContacts.some(
      existingContact => existingContact.name.toLowerCase() === lowerCaseName
    );
    if (isNameUnique) {
      const id = nanoid();
      setPasedCOntacts([...parsedContacts, { ...newContact, id }]);
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  const deleteContact = id => {
    setPasedCOntacts(parsedContacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = parsedContacts
    ? parsedContacts.filter(
        contact =>
          contact.name &&
          contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <div>
      <div className={css.formContainer}>
        <h1 className={css.phoneBook}>PhoneBook</h1>
        <ContactForm onAddContact={addContact} />
      </div>
      <div className={css.contactContainer}>
        <h2 className={css.contacts}>Contacts</h2>
        <FilterContact filter={filter} onFilter={filterContacts} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  );
};

export default AddContacts;
