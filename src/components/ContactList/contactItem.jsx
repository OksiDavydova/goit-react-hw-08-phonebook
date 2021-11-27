import React from "react";
import PropTypes from "prop-types";
import { MdCall, MdOutlineDeleteOutline } from "react-icons/md";
import { ItemName, ListItem, LinkToCall, ItemButton } from "../../App.styled";
import { deleteItemThunk } from "../../redux/contacts/contacts-thunk";
import { useDispatch } from "react-redux";
export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteItemThunk(id));
  };

  return (
    <ListItem key={id}>
      <ItemName>{name}</ItemName>
      <LinkToCall href="tel:{number}">
        <MdCall />
        {number}
      </LinkToCall>

      <div>
        <ItemButton type="button" onClick={() => deleteItem(id)}>
          <MdOutlineDeleteOutline />
        </ItemButton>
      </div>
    </ListItem>
  );
}

ContactItem.propType = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
