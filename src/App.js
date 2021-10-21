import "./App.css";
import { useState, useMemo } from "react";
import useLS from "./components/hooks/useLocalStorage";
import shortid from "shortid";
import { Container } from "./components/Container/Container";
import HeroTitle from "./components/Title/Title";
import SectionTitle from "./components/Title/SectionTitle/SectionTitle";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { Notification } from "./components/Notification/Notification";

const contactsDefault = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useLS("contacts", contactsDefault);
  const [filter, setFilter] = useState("");

  const addNewContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    const normalizedName = name.toLowerCase();
    if (
      contacts.find((contact) => contact.name.toLowerCase() === normalizedName)
    ) {
      alert(`${name} is already in contacts list`);
      return;
    } else if (contacts.find((contact) => contact.number === number)) {
      alert(`${number} is already in contacts list`);
      return;
    } else {
      setContacts([...contacts, newContact]);
    }
  };

  const onChangeFilter = ({ target }) => setFilter(target.value.trim());

  const getContacts = useMemo(() => {
    let normFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normFilter)
    );
  }, [filter, contacts]);

  const onDeleteContact = (id) => {
    return setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <Container>
      <HeroTitle title="Phonebook" />
      <ContactForm addNewContact={addNewContact} />
      <SectionTitle sectionTitle="Contacts" />
      <Filter value={filter} onChange={onChangeFilter} />
      {contacts.length > 0 ? (
        <ContactList
          contacts={getContacts}
          handleDeleteContact={(id) => onDeleteContact(id)}
        />
      ) : (
        <Notification />
      )}
    </Container>
  );
}

export default App;
