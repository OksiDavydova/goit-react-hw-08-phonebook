import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth-selector";
import { useForm } from "react-hook-form";
import { loginThunk } from "../redux/auth/auth-thunks";
import { useDispatch } from "react-redux";
import { MdOutlineAppRegistration } from "react-icons/md";

import {
  Wrapper,
  Title,
  Button,
  Input,
  Label,
  LabelMessage,
  CreateAccountButton,
} from "../App.styled";

function LoginPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  let navigate = useNavigate();

  const onClickRegisterBtn = () => {
    navigate(`/register`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onLoginSubmit = (data) => {
    console.log(data);
    dispatch(loginThunk(data));

    resetInputField();
  };

  const resetInputField = () => {
    resetField("email");
    resetField("password");
  };

  return (
    <>
      {isAuth ? (
        <Wrapper>
          <Navigate to="/contacts" replace={true} />
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>Log in</Title>
          <form onSubmit={handleSubmit(onLoginSubmit)} autoComplete="off">
            <Label htmlFor="emailInput">
              email address:
              {errors.email?.type === "required" && (
                <LabelMessage> is required *</LabelMessage>
              )}
              <Input
                type="text"
                id="emailInput"
                {...register("email", {
                  required: true,
                  pattern: "/^S+@S+$/i",
                })}
              />
            </Label>

            <Label htmlFor="password">
              password:
              {errors.password?.type === "required" && (
                <LabelMessage> is required *</LabelMessage>
              )}
              <Input
                type="password"
                id="password"
                {...register("password", {
                  required: true,
                  pattern: "/^S+@S+$/i",
                })}
              />
            </Label>

            <br />
            <Button type="submit">Log in</Button>
          </form>
          <CreateAccountButton type="button" onClick={onClickRegisterBtn}>
            Create your Account <MdOutlineAppRegistration />
          </CreateAccountButton>
        </Wrapper>
      )}
    </>
  );
}

export default LoginPage;
