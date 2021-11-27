import React from "react";
import { changeFilter } from "../../redux/actions-contacts";
import { useSelector, useDispatch } from "react-redux";
import { filterValue } from "../../redux/contacts-selector";
import { FilterContainer, FilterInput } from "./Filter.styled";
import { useGetItemsQuery } from "../../redux/itemsRTK";

export default function Filter() {
  const filter = useSelector(filterValue);
  const { data: items } = useGetItemsQuery();
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
