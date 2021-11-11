import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { MdCall, MdOutlineDeleteOutline } from "react-icons/md";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/action";
import { Notification } from "../Notification/Notification";

function ContactList({ ccc, onDeleteContact }) {
  console.log(ccc);
  return (
    <>
      {ccc.length > 0 ? (
        <>
          <ul className={s.contacts_list}>
            {ccc.map(({ id, name, number }) => (
              <li key={id} className={s.list_item}>
                <p>{name}</p>
                <a href="tel:{number}" className={s.link_to_call}>
                  <MdCall />
                  {number}
                </a>
                <button
                  type="button"
                  className={s.btn_delete}
                  onClick={(id) => onDeleteContact(id)}
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

const mapStateToProps = ({ contacts, filter }) => {
  return {
    ccc: getContacts(contacts, filter),
    // ccc: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (id) => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// const getContacts = useMemo(() => {
//   let normFilter = filter.toLowerCase();
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normFilter)
//   );
// }, [filter, contacts]);

// const onDeleteContact = (id) => {
//   return setContacts((contacts) =>
//     contacts.filter((contact) => contact.id !== id)
//   );
// };
