import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { MdCall, MdOutlineDeleteOutline } from "react-icons/md";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/action";
import { Notification } from "../Notification/Notification";

function ContactList({ contacts, onDeleteContact }) {
  console.log(contacts);
  return (
    <>
      {contacts ? (
        <>
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
                  onClick={() => onDeleteContact(id)}
                >
                  Delete <MdOutlineDeleteOutline />
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Notification />
      )}
    </>
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
  onDeleteContact: PropTypes.func.isRequired,
};

const getContacts = (allContacts, filterValue) => {
  let normFilter = filterValue.toLowerCase();

  if (filterValue) {
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normFilter)
    );
  }
  return allContacts;
};

const mapStateToProps = (state) => ({
  contacts: getContacts(state.contacts, state.filter),
  // ccc: state.contacts.contacts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (id) => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
