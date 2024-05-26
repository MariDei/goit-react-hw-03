import Contacts from '/contacts.json';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) || Contacts;
  });

  const [filter, setFilter] = useState('');

  const currentContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = newContact => {
    setContacts(prevContact => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = ContactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(Contact => Contact.id !== ContactId);
    });
  };

  useEffect(() => {
    const saveContacts = JSON.parse(localStorage.getItem('contacts'));
    if (saveContacts) {
      setContacts(saveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={currentContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
