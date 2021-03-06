import React from "react";
import Notification from "../Notification/Notification";
import ContactItem from "./contactItem";
import { useSelector } from "react-redux";
import {
  selectVisibleContacts,
  selectIsLoadingItems,
} from "../../redux/contacts/contacts-selector";
import LoaderSmall from "../Loader-spinner/LoaderSmall";
import { ContactsList } from "../../App.styled";

export default function ContactList() {
  const isLoadingItems = useSelector(selectIsLoadingItems);
  const contactItems = useSelector(selectVisibleContacts);

  const showList = !isLoadingItems && contactItems;

  return (
    <>
      {contactItems && contactItems.length === 0 && <Notification />}
      {isLoadingItems && <LoaderSmall />}
      {showList && (
        <ContactsList>
          {contactItems.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ContactsList>
      )}
    </>
  );
}
