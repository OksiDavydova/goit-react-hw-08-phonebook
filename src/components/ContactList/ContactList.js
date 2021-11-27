import React from "react";
import Notification from "../Notification/Notification";
import ContactItem from "./contactItem";
import { useSelector } from "react-redux";
import { filterValue, getVisibleItems } from "../../redux/contacts-selector";
import { useGetItemsQuery } from "../../redux/itemsRTK";
import LoaderSpinner from "../Loader-spinner/Loader-spinner";
import { ContactsList } from "../../App.styled";

export default function ContactList({ toggleModal }) {
  const { data: items, isError, isLoading } = useGetItemsQuery();
  const filter = useSelector(filterValue);
  const contactItems = getVisibleItems(items, filter);

  return (
    <>
      {isLoading && <LoaderSpinner />}
      {isError && <p>...:(...</p>}
      {contactItems && contactItems.length === 0 && <Notification />}

      {contactItems && (
        <ContactsList>
          {contactItems.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              toggleModal={toggleModal}
            />
          ))}
        </ContactsList>
      )}
    </>
  );
}
