import React from "react";
import defaultAvatar from "./abstract.png";
import { logoutThunk } from "../../redux/auth/auth-thunks";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selector";
import {
  AuthContainer,
  ImgAvatar,
  AuthWelcome,
  UserName,
  LogOutButton,
} from "../AppBar/AppBar.styled";
import { ReactComponent as LogoutIcon } from "./logoutIcon.svg";

function UserMenu() {
  const avatar = defaultAvatar;
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <AuthContainer>
      <ImgAvatar src={avatar} alt="avatar" />
      <AuthWelcome>
        Welcome <UserName>{name}</UserName>
      </AuthWelcome>
      <LogOutButton type="button" onClick={onLogout}>
        <LogoutIcon />
      </LogOutButton>
    </AuthContainer>
  );
}

export default UserMenu;
