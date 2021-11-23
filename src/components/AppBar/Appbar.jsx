import React from "react";
import AuthNav from "./AuthNav/AuthNav";
import Navigation from "./Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import Logo from "./Navigation/Logo";
import s from "./AppBar.module.css";

function AppBar() {
  return (
    <>
      <header className={s.appBar}>
        <Logo />
        <Navigation />
        <AuthNav />
        <UserMenu />
      </header>
    </>
  );
}
export default AppBar;
