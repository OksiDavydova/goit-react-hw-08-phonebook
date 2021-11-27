import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";

import { Section } from "../App.styled";
import { useDispatch } from "react-redux";
import { getItemsThunk } from "../redux/contacts/contacts-thunk";

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Section>
        <Filter />
        <ContactList />
      </Section>

      <ToastContainer theme="dark" autoClose={3000} />
    </>
  );
}

export default ContactsPage;
