import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { MdCall, MdOutlineDeleteOutline } from "react-icons/md";

export default function ContactItem({ id, name, number, deleteItem }) {
  return (
    <li key={id} className={s.list_item}>
      <p>{name}</p>
      <a href="tel:{number}" className={s.link_to_call}>
        <MdCall />
        {number}
      </a>
      <button
        type="button"
        className={s.btn_delete}
        onClick={() => deleteItem(id)}
      >
        <MdOutlineDeleteOutline />
      </button>
    </li>
  );
}

ContactItem.propType = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteItem: PropTypes.func,
};
