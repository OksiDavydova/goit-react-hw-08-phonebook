import React from "react";
import { NavLink } from "react-router-dom";

const logo = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "black",
  padding: "15px",
  fontWeight: "600",
};

const logoOne = {
  color: "black",
  backgroundColor: "yellow",
};

const logoTwo = {
  color: "yellow",
  backgroundColor: "black",
  fontWeight: "300",
};

export default function Logo() {
  return (
    <NavLink to="/" style={logo}>
      <span style={logoOne}>DN</span>
      <span style={logoTwo}>Oksi</span>
    </NavLink>
  );
}
