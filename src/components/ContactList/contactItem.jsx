import React from "react";
import PropTypes from "prop-types";
import {
  MdCall,
  MdOutlineDeleteOutline,
  MdModeEditOutline,
} from "react-icons/md";
import { useDeleteItemMutation } from "../../redux/itemsRTK";
import { ItemName, ListItem, LinkToCall, ItemButton } from "../../App.styled";
export default function ContactItem({ id, name, number, toggleModal }) {
  const [deleteItem, { isLoading: isDeleting }] = useDeleteItemMutation();

  return (
    <ListItem key={id}>
      <ItemName>{name}</ItemName>
      <LinkToCall href="tel:{number}">
        <MdCall />
        {number}
      </LinkToCall>

      <div>
        <ItemButton type="button" onClick={() => deleteItem(id)}>
          {isDeleting ? "..." : <MdOutlineDeleteOutline />}
        </ItemButton>
        <ItemButton type="button" onClick={() => toggleModal()}>
          <MdModeEditOutline />
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
