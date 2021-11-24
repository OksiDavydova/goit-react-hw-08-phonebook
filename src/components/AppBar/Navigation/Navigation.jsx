import React from "react";
import { NavLink } from "react-router-dom";
import { NavContainer, NavItem } from "../AppBar.styled";

const Navigation = () => (
  <NavContainer>
    <NavLink
      to="/"
      style={({ isActive }) => ({
        color: isActive ? "yellow" : "white",
      })}
      end
    >
      <NavItem> Home</NavItem>
    </NavLink>
    <NavLink
      to="contacts"
      style={({ isActive }) => ({
        color: isActive ? "yellow" : "white",
      })}
    >
      <NavItem> Contacts</NavItem>
    </NavLink>
  </NavContainer>
);

export default Navigation;
