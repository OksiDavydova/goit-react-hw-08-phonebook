import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { registerThunk } from "../redux/auth/auth-thunks";
import { useDispatch, useSelector } from "react-redux";
import {
  Wrapper,
  Input,
  Label,
  Button,
  LabelMessage,
  Title,
} from "../App.styled";
import { getIsError, getIsAuth } from "../redux/auth/auth-selector";
import { Navigate } from "react-router";

function RegisterPage() {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  const isError = useSelector(getIsError);

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onRegisterSubmit = (data) => {
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
      {isAuth ? (
        <Navigate to="/" replace={true} />
      ) : (
        <Wrapper>
          <Title>Registration</Title>
          {isError && <LabelMessage>Error, please try again</LabelMessage>}
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
              {errors.password?.type === "minLength" && (
                <LabelMessage> min length 7 symbol *</LabelMessage>
              )}
              {errors.password?.type === "required" && (
                <LabelMessage> is required *</LabelMessage>
              )}
              <Input
                type="password"
                // className={s.input}
                id="password"
                {...register("password", {
                  required: true,
                  minLength: 7,
                  pattern: "/^S+@S+$/i",
                })}
              />
            </Label>

            <br />
            <Button type="submit">Submit</Button>
          </form>
          {isError && <LabelMessage>Warring, {isError}</LabelMessage>}
        </Wrapper>
      )}
    </>
  );
}

export default RegisterPage;
