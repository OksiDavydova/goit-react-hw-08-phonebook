import React from "react";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { registerThunk } from "../redux/auth/auth-thunks";
import { useDispatch } from "react-redux";
import { Wrapper, Input, Label, Button, LabelMessage } from "../App.styled";

function RegisterPage() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log("register-data", data);
    dispatch(registerThunk(data));
    resetInputField();
  };

  const resetInputField = () => {
    resetField("name");
    resetField("password");
    resetField("email");
  };

  return (
    <>
      <Wrapper>
        <form onSubmit={handleSubmit(onRegisterSubmit)}>
          <Label htmlFor="nameInput">
            name:
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
              })}
            />
          </Label>

          <Label htmlFor="emailInput">
            email address:
            {errors.number?.type === "required" && (
              <LabelMessage> is required *</LabelMessage>
            )}
            <Input
              type="text"
              // className={s.input}
              id="emailInput"
              {...register("email", {
                required: true,
                pattern: "/^S+@S+$/i",
              })}
            />
          </Label>

          <Label htmlFor="password">
            password:
            {errors.number?.type === "required" && (
              <LabelMessage> is required *</LabelMessage>
            )}
            <Input
              type="password"
              // className={s.input}
              id="password"
              {...register("password", {
                required: true,
                pattern: "/^S+@S+$/i",
              })}
            />
          </Label>

          <br />
          <Button type="submit">
            {/* {isLoading ? "Adding..." : "Add contact"} */}
            Submit
          </Button>
        </form>
      </Wrapper>
    </>
  );
}

export default RegisterPage;
