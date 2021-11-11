import "./App.css";
import { connect } from "react-redux";
import * as actions from "./redux/action";

import Container from "./components/Container/Container";
import HeroTitle from "./components/Title/Title";
import SectionTitle from "./components/Title/SectionTitle/SectionTitle";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <Container>
      <HeroTitle title="Phonebook" />
      <ContactForm />
      <SectionTitle sectionTitle="Contacts" />
      <Filter />
      <ContactList />
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
    onChangeFilter: (value) => dispatch(actions.changeFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
