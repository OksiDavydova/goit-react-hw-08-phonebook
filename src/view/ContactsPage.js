import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Container from "../components/Container/Container";
// import HeroTitle from "../components/Title/Title";
// import SectionTitle from "../components/Title/SectionTitle/SectionTitle";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import { Modal } from "../components/Modal/Modal";

function ContactsPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Container>
        <div>
          {/* <HeroTitle title="Phonebook" /> */}
          <ContactForm />
        </div>
        <div>
          {/* <SectionTitle sectionTitle="Contacts" /> */}
          <Filter />
          <ContactList toggleModal={toggleModal} />
        </div>
        {showModal && <Modal toggleModal={toggleModal} />}
      </Container>
      <ToastContainer theme="dark" autoClose={3000} />
    </>
  );
}

export default ContactsPage;
