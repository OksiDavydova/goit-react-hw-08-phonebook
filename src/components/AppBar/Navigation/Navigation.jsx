import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink
      to="/"
      style={({ isActive }) => ({
        color: isActive ? "yellow" : "white",
      })}
      end
    >
      <span className={s.navItem}> Home</span>
    </NavLink>
    <NavLink
      to="contacts"
      style={({ isActive }) => ({
        color: isActive ? "yellow" : "white",
      })}
    >
      <span className={s.navItem}> Contacts</span>
    </NavLink>
  </nav>
);

export default Navigation;
