import React from "react";
import s from "./ContactList.module.css";
import { MdCall, MdOutlineDeleteOutline } from "react-icons/md";
import { deleteContact } from "../../redux/actions-contacts";
import { Notification } from "../Notification/Notification";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts-selector";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 ? (
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
                  onClick={() => dispatch(deleteContact(id))}
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

// const mapStateToProps = (state) => ({
//   contacts: getContacts(state.contacts, state.filter),
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleteContact: (id) => dispatch(deleteContact(id)),
//   };
// };

//  connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
