import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import { Modal } from "../components/Modal/Modal";
import { Section } from "../App.styled";

function ContactsPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <ContactForm />
      <Section>
        <Filter />
        <ContactList toggleModal={toggleModal} />
      </Section>
      {showModal && <Modal toggleModal={toggleModal} />}

      <ToastContainer theme="dark" autoClose={3000} />
    </>
  );
}

export default ContactsPage;
