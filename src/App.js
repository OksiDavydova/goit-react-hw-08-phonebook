import "./App.css";
import React, { Component } from "react";
import shortid from "shortid";
import { Container } from "./components/Container/Container";
import HeroTitle from "./components/Title/Title";
import SectionTitle from "./components/Title/SectionTitle/SectionTitle";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { Notification } from "./components/Notification/Notification";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = (addContact) => {
    const { name, number } = addContact;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    if (
      contacts.find(
        (contactItem) => contactItem.name.toLowerCase() === normalizedName
      )
    ) {
      alert(`${name} is already in contacts list`);
      return;
    } else if (contacts.find((contactItem) => contactItem.number === number)) {
      alert(`${number} is already in contacts list`);
      return;
    } else {
      this.setState(({ contacts }) => {
        return {
          contacts: [...contacts, contact],
        };
      });
    }
  };

  onChangeFilter = ({ target }) => {
    const filterTrim = target.value.trim();
    this.setState({ filter: filterTrim });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    // by name
    return contacts.filter((contactItem) =>
      contactItem.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getContacts();
    return (
      <Container>
        <HeroTitle title="Phonebook" />
        <ContactForm addNewContact={this.addNewContact} />
        <SectionTitle sectionTitle="Contacts" />
        <Filter value={filter} onChange={this.onChangeFilter} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={visibleContacts}
            handleDeleteContact={this.onDeleteContact}
          />
        ) : (
          <Notification />
        )}
      </Container>
    );
  }
}

export default App;
