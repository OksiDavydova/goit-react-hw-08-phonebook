import React from "react";
import AuthNav from "./AuthNav/AuthNav";
import Navigation from "./Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import Logo from "./Navigation/Logo";

import { Header } from "./AppBar.styled";
import { getIsAuth } from "../../redux/auth/auth-selector";
import { useSelector } from "react-redux";

function AppBar() {
  const isAuth = useSelector(getIsAuth);
  return (
    <>
      <Header>
        <Logo />
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
      </Header>
    </>
  );
}
export default AppBar;
