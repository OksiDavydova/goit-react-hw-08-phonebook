import React from "react";
import s from "./ContactList.module.css";
import Notification from "../Notification/Notification";
import ContactItem from "./contactItem";
import { useSelector } from "react-redux";
import { filterValue, getVisibleItems } from "../../redux/contacts-selector";
import { useDeleteItemMutation, useGetItemsQuery } from "../../redux/itemsRTK";

export default function ContactList() {
  const { data: items, isFetching, isError } = useGetItemsQuery();
  const [deleteItem] = useDeleteItemMutation();
  console.log(items);
  const filter = useSelector(filterValue);
  const contactItems = getVisibleItems(items, filter);

  return (
    <>
      {isFetching && <p>get data from server...</p>}
      {isError && <p>Sorry!</p>}
      {contactItems ? (
        <>
          <ul className={s.contacts_list}>
            {contactItems.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                deleteItem={deleteItem}
              />
            ))}
          </ul>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}
