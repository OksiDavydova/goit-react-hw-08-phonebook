import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectItemsContacts } from "../../redux/contacts/contacts-selector";
import { addNewItemThunk } from "../../redux/contacts/contacts-thunk";
import { Wrapper, Input, Label, Button, LabelMessage } from "../../App.styled";

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItemsContacts);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onSubmit = (data) => {
    const { name, number } = data;
    const normalizedName = name.toLowerCase();
    const theFirstCondition = contacts.find(
      (contact) => contact.name.toLowerCase() === normalizedName
    );
    const theSecondCondition = contacts.find(
      (contact) => contact.number === number
    );

    if (theFirstCondition) {
      return toast.error(`${name} is already in contacts list`);
    } else if (theSecondCondition) {
      return toast.error(`${number} is already in contacts list`);
    } else {
      dispatch(addNewItemThunk(data));
    }
    resetInputField();
  };

  const resetInputField = () => {
    resetField("name");
    resetField("number");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Label htmlFor="nameInput">
          Name:
          {errors.name?.type === "required" && (
            <LabelMessage> is required*</LabelMessage>
          )}
          <Input
            type="text"
            id="nameInput"
            {...register("name", {
              required: true,
              maxLength: 80,
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              title:
                "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
            })}
          />
        </Label>

        <Label htmlFor="telInput">
          Number:
          {errors.number?.type === "required" && (
            <LabelMessage> is required *</LabelMessage>
          )}
          <Input
            type="tel"
            id="telInput"
            {...register("number", {
              required: true,
              maxLength: 12,
              pattern:
                "/+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}/i",
            })}
          />
        </Label>

        <br />
        <Button type="submit">Add contact</Button>
      </form>
    </Wrapper>
  );
}

export default ContactForm;
