import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { MdCall, MdOutlineDeleteOutline } from "react-icons/md";

export function ContactList({ contacts, handleDeleteContact }) {
  return (
    <ul className={s.contacts_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.list_item}>
          <p>{name}</p>
          <a href="tel:{number}" className={s.link_to_call}>
            <MdCall />
            {number}
          </a>
          <button
            type="button"
            className={s.btn_delete}
            onClick={() => handleDeleteContact(id)}
          >
            Delete <MdOutlineDeleteOutline />
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};
