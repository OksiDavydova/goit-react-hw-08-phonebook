import React from "react";
import { NavLink } from "react-router-dom";
import { MyLogo } from "../AppBar.styled";
import logo from "./logo.png";

export default function Logo() {
  const myLogo = logo;
  return (
    <NavLink to="/">
      <MyLogo src={myLogo} />
    </NavLink>
  );
}
