import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import {
  MdCall,
  MdOutlineDeleteOutline,
  MdModeEditOutline,
} from "react-icons/md";
import { useDeleteItemMutation } from "../../redux/itemsRTK";

export default function ContactItem({ id, name, number, toggleModal }) {
  const [deleteItem, { isLoading: isDeleting }] = useDeleteItemMutation();

  return (
    <li key={id} className={s.list_item}>
      <p>{name}</p>
      <a href="tel:{number}" className={s.link_to_call}>
        <MdCall />
        {number}
      </a>
      <div>
        <button
          type="button"
          onClick={() => deleteItem(id)}
          className={s.btnItem}
        >
          {isDeleting ? "..." : <MdOutlineDeleteOutline />}
        </button>
        <button
          type="button"
          onClick={() => toggleModal()}
          className={s.btnItem}
        >
          <MdModeEditOutline />
        </button>
      </div>
    </li>
  );
}

ContactItem.propType = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
