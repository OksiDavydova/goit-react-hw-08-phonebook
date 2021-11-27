import React from "react";
import { changeFilter } from "../../redux/contacts/filter-actions";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilterValue,
  selectItemsContacts,
} from "../../redux/contacts/contacts-selector";
import { FilterContainer, FilterInput } from "./Filter.styled";

export default function Filter() {
  const filter = useSelector(selectFilterValue);
  const items = useSelector(selectItemsContacts);
  const dispatch = useDispatch();

  return (
    <>
      {items && items.length > 2 && (
        <FilterContainer>
          <label>
            Find contacts by name:
            <FilterInput
              type="text"
              value={filter}
              onChange={({ target }) =>
                dispatch(changeFilter(target.value.trim()))
              }
            />
          </label>
        </FilterContainer>
      )}
    </>
  );
}
